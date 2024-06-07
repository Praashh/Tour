"use client"
import React, { use } from 'react'
import {Button} from "@/../../components/ui/button"
import Link from 'next/link'
import { useSession } from 'next-auth/react'
const LoginButton = () => {
    const session = useSession();
    console.log(session.data?.user);
    const user = session.data?.user;
  return (
    <>
    {!user ? <Link href={"/api/auth/signin"}><Button>Get Started</Button></Link>: <Link href={`/profile/${user.id!}`}><Button >Profile</Button></Link>}
    </>
  )
}

export default LoginButton
