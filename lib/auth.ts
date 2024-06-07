import prisma from "../server/prisma";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import  {uploadFileToS3}  from "../app/api/s3Upload/route"; // adjust the path accordingly
import axios from "axios"

let avatarUrl:string;
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "xyz.tour@gmail.com", required: true },
                name: { label: "Username", type: "text", placeholder: "Username", required: true },
                Bio: { label: "Bio", type: "text", placeholder: "I like coding", required: true },
                Avatar: { label: "Avatar", type: "file", required: true },
                role: { label: "Role", type: "text", placeholder: "employee", required: true },
                password: { label: "Password", type: "password", required: true },

            },
            async authorize(credentials: any) {
                const hashedPassword = await bcrypt.hash(credentials.password, 10);
                const existingUser = await prisma.user.findFirst({
                    where: {
                        email: credentials.email
                    }
                });

                console.log("hashing done..")

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password!);
                    if (passwordValidation) {
                        return {
                            id: existingUser.id,
                            name: existingUser.name,
                            email: existingUser.email,
                            Bio: existingUser.Bio,
                            Aavatar: existingUser.Avatar,
                            role: existingUser.role
                        }
                    }
                    return null;
                }
                console.log("dot dot dotS");
                
                //  upload avatar to cloudfront and use that url
                const file = credentials.Avatar;
                const formData = new FormData();
                formData.append('file', file);
                console.log(file);
                
                try {
                    const response = await axios.post(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/s3Upload`, formData);
                    console.log(response);
                    
                    avatarUrl = response.data.imageUrl;
                    
                } catch (error) {
                    console.error('Error uploading file:', error);
                }
                console.log(avatarUrl);
                
                try {
                    const user = await prisma.user.create({
                        data: {
                            email: credentials.email,
                            password: hashedPassword,
                            Avatar: avatarUrl,
                            Bio: credentials.Bio,
                            name: credentials.name,
                            role: credentials.role,
                        }
                    });

                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        Avatar: user.Avatar,
                        Bio: user.Bio,
                        role: user.role,
                    }
                } catch (e) {
                    console.error(e);
                }

                return null;
            },
        }),

        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID || "",
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET || "",
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET || "secret",
    callbacks: {
        async signIn({ account, profile }: any) {
            if (account.provider === "google") {
                if (profile.email_verified ) {

                    const existingUser = await prisma.user.findUnique({
                        where: { email: profile.email },
                    });

                    if (!existingUser) {

                        await prisma.user.create({
                            data: {
                                name: profile.name.replace(" ", "").toLowerCase(),
                                email: profile.email,
                                Avatar: profile.picture,
                            },
                        });
                    }

                    return true;
                } else {
                    return false;
                }
            }
            return true;
        },
        async session({ session, token, user }: any) {

            const userFromDb = await prisma.user.findUnique({
                where: { email: session.user.email },
            });

            if (userFromDb) {
                session.user.id = userFromDb.id;
                session.user.name = userFromDb.name;
                session.user.image = userFromDb.Avatar;
            }

            return session;
        },
    }
}
