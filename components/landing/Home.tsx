"use client"
import Link from "next/link"
import React from "react"
import {Button} from "@/../../components/ui/button"
import {Card, CardContent} from "@/../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage} from "@/../../components/ui/avatar"
import {Input} from "@/../../components/ui/input"
import Image from "next/image"
import homeImage from "@/public/home.png"
import LoginButton from "@/components/ui/LoginButton"
import Feedback from "./feedback"
export default function HomePage() {
  return (
<>
<Feedback/>
</>
  )
}