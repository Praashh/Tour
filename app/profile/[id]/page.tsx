import React from 'react';
import prisma from '../../../server/prisma'; 
import UserProfile from '../../../components/ui/user-profile';

const ProfilePage = async ({ params }) => {
    const { id } = params;

    const user = await prisma.user.findUnique({
        where: { id: id },
    });

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div className='min-h-screen w-full flex justify-center items-center'>
       <UserProfile name={user.name!} email={user.email} bio={user.Bio!} imageURL={user.Avatar!} role={user.role!}/>
       </div>
    );
};

export async function generateStaticParams() {
    const users = await prisma.user.findMany();
    return users.map(user => ({ id: user.id }));
}

export default ProfilePage;
