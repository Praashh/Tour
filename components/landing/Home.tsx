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
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-white px-4 lg:px-6 h-16 flex items-center justify-between shadow-sm dark:bg-gray-950 dark:text-gray-50">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <TicketIcon className="h-6 w-6" />
          <span className="font-semibold text-lg">Tour</span>
        </Link>
        <nav className="hidden lg:flex gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Customers
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <LoginButton/>
        
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Build a digital sales assistant that scales your sales
                </h1>
                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                  Tour is a YC-backed startup that helps businesses automate their sales process with a conversational
                  AI assistant. Increase your sales team s productivity and close more deals with Tour.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                <Button>Get Started</Button>
                  <Button variant="secondary">Learn More</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src={homeImage}
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful features to scale your sales
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Tour s conversational AI assistant helps your sales team automate lead qualification, schedule
                  meetings, and close more deals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Lead Qualification</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tour s AI assistant can automatically qualify leads and schedule meetings with the right prospects.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Automated Outreach</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Personalize your outreach at scale with Tour s automated email and SMS campaigns.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Intelligent Insights</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get real-time insights on your sales pipeline and performance with Tour s analytics dashboard.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Seamless Integration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tour integrates with your existing CRM, calendar, and communication tools to streamline your sales
                  workflow.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Personalized Assistance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tour s AI assistant can adapt to your unique sales process and provide personalized recommendations.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Scalable Performance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  As your business grows, Tour s platform can scale to handle increasing sales volume and complexity.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Customer Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What our customers say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from businesses who have used Tour to streamline their sales process and drive more revenue.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl mt-10 items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <Card>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <Image src="https://github.com/shadcn.png" alt={""} />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc.</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Tour has been a game-changer for our sales team. The n conversational AI assistant has helped us
                    qualify leads n faster and close more deals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <Image src="https://github.com/shadcn.png" alt={""} />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc.</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Tour has been a game-changer for our sales team. The  conversational AI assistant has helped us
                    qualify leads n faster and close more deals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <Image src="https://github.com/shadcn.png" alt={""} />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc.</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Tour has been a game-changer for our sales team. The n conversational AI assistant has helped us
                    qualify leads n faster and close more deals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Get Started
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Start scaling your sales today
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Sign up for a free trial of Tour and see how our conversational AI assistant can transform your sales
                  process.
                </p>
              </div>
              <form className="mx-auto w-full max-w-md space-y-2">
                <div className="flex space-x-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button type="submit">Get Started</Button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link href="#" className="underline underline-offset-2" prefetch={false}>
                    Terms of Service
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800 dark:text-gray-50">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About
            </Link>
            <Link href="#" prefetch={false}>
              Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Product</h3>
            <Link href="#" prefetch={false}>
              Features
            </Link>
            <Link href="#" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" prefetch={false}>
              Integrations
            </Link>
            <Link href="#" prefetch={false}>
              API
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" prefetch={false}>
              Help Center
            </Link>
            <Link href="#" prefetch={false}>
              Community
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
            <Link href="#" prefetch={false}>
              Security
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
            <Link href="#" prefetch={false}>
              Press
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TicketIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}