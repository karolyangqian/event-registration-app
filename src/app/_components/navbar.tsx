'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

interface NavbarProps {
    username: string;
    imageUrl: string | StaticImageData;
}

export default function Navbar({
    username, 
    imageUrl
} : NavbarProps ) {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])

    const router = useRouter();
    const path = usePathname();
    const noNavbarPaths = [
        '/auth/signin',
        '/auth/signup'
    ];
  return (
    <>
      {!noNavbarPaths.includes(path) && 
        <nav className="flex h-16 bg-indigo-600">
          <button onClick={() => router.push("/")} className="flex items-center ml-14 text-white text-lg">
            Events
          </button>
          <div className="flex w-full justify-end items-center">
            <button onClick={() => router.push("profile")} className="flex">
              <div className="text-white text-lg mr-6">
                {username}
              </div>
              <Image 
                className="mr-6"
                src={imageUrl} 
                alt="user-icon" 
                width={30} 
                height={30}/>
            </button>
          </div>
        </nav>
      }
    </>
  )
}