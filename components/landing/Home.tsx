"use client"
import React from "react"
import Feedback from "./feedback"
import { Navbar } from "./Navbar"
import { useSession } from "next-auth/react"
export default function HomePage() {
  const {data}  = useSession();
  return (
    <>
      <Navbar />
      {
        data?.user ? <Feedback /> : <div className="h-screen w-full flex justify-center items-center"><span className="text-2xl font-medium">Login First</span></div>
      }
      
    </>
  )
}