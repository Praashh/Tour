import React from "react"
import {Card, CardContent, CardHeader} from "@/../../components/ui/card"
import { Avatar, AvatarFallback} from "@/../../components/ui/avatar"
import { Separator } from "@/../../components/ui/separator"
import Image from "next/image";

interface UserProfileProps{
    imageURL : string;
    name:string;
    email:string;
    role:string;
    bio:string
}
export default function UserProfile({imageURL, name, email, role, bio}:UserProfileProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-gray-200 dark:border-gray-700">
          <Image src={imageURL? imageURL : ""} alt="@shadcn" height={100} width={100}/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <div className="text-xl">Name: <span className="font-semibold">{name}</span></div>
          <div className="text-sm">Email: <span className="text-gray-500 dark:text-gray-400">{email}</span></div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
     { role &&   <div className="grid gap-1">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Role</div>
          <div className="text-base font-medium">{role}</div>
        </div>}
        <Separator />
        {bio && <div className="grid gap-1">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Bio</div>
          <div className="text-base">
          {bio}
          </div>
        </div>}
      </CardContent>
    </Card>
  )
}