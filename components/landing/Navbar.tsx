"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, MessageSquare, Bell, Menu, X, LogIn, User } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const LoginButton = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {!user ? (
        <Link href="/api/auth/signin" passHref>
          <motion.button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            whileHover={{ backgroundColor: "#4338CA" }}
            transition={{ duration: 0.2 }}
          >
            <LogIn size={20} className="mr-2" />
            Get Started
          </motion.button>
        </Link>
      ) : (
        <Link href={`/profile/${user.id}`} passHref>
          <motion.button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            whileHover={{ backgroundColor: "#E0E7FF" }}
            transition={{ duration: 0.2 }}
          >
            <User size={20} className="mr-2" />
            Profile
          </motion.button>
        </Link>
      )}
    </motion.div>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: <Home size={20} />, label: 'Home' },
    { icon: <Users size={20} />, label: 'About' },
    { icon: <MessageSquare size={20} />, label: 'Testimonials' },
    { icon: <Bell size={20} />, label: 'Notifications' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxpaNPAfBQO7NZxWYhSGsFQVpnLGsN7xlkg&s' className='rounded-full h-10 w-10' />
              <span className="ml-2 text-xl font-bold text-gray-800">TestiFlow</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                whileHover={{ scale: 1.05, color: "#4F46E5" }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span className="ml-1">{item.label}</span>
              </motion.a>
            ))}
            <LoginButton />
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                  whileHover={{ scale: 1.05, x: 10, color: "#4F46E5" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="inline-flex items-center">
                    {item.icon}
                    <span className="ml-1">{item.label}</span>
                  </span>
                </motion.a>
              ))}
              <div className="mt-4 px-3">
                <LoginButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};