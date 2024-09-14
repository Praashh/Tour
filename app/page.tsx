"use client"
import HomePage from "@/components/landing/Home"
import { useSession } from "next-auth/react";
export default function Home() {
   const {data} = useSession();
   console.log(data);
   
   return (
     <div>
        <HomePage/>
     </div>
  );
}
