
import { NextResponse, NextRequest } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
    region: process.env.NEXT_PUBLIC_AWS_S3_REGION || "",
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_ID || "",
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_SECRET || "",
    }
});

async function uploadFileToS3(file: Buffer, fileName: any, contentType: any) {
    const fileBuffer = file;
    console.log(fileName);

    const params = {
        Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
        Key: `${fileName}`,
        Body: fileBuffer,
        ContentType: contentType
    };

    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    return fileName;
}

export async function POST(NextRequest: any) {
    try {
        const formData = await NextRequest.formData();
        const file = formData.get("file");

        if (!file) {
            return NextResponse.json({ error: "File is required." }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const fileName = file.name;
        const contentType = file.type; 

        await uploadFileToS3(buffer, fileName, contentType);

        const imageUrl = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/${fileName}`;

        return NextResponse.json({ success: true, fileName, imageUrl });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
