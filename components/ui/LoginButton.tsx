"use client"
import React, { use } from 'react'
import {Button} from "@/../../components/ui/button"
import Link from 'next/link'
import { useSession } from 'next-auth/react'


const LoginButton = () => {
    const {data } = useSession();
    console.log(data);
    // console.log("id", session.data?.user?.id);
    
    const user = data?.user;
  return (
    <>
    {!user ? <Link href={"/api/auth/signin"}><Button>Get Started</Button></Link>: <Link href={`/profile/${user.id}`}><Button >Profile</Button></Link>}
    </>
  )
}

export default LoginButton
