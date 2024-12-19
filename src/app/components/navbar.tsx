"use client"
import Image from "next/image";
import Link from "next/link"; // Use Next.js Link for navigation

export default function Navbar() {
    return (
        <div className="flex sm:flex-row flex-col items-center sm:justify-between px-4 sm:h-[50px] sm:p-0 p-4 bg-white sm:sticky sm:top-0 z-20">
            {/* Logo aligned to the left */}
            <div className="flex-shrink"> 
                <Image 
                    src="/portfolio logo.png" 
                    layout="intrinsic" 
                    width={233} 
                    height={50} 
                    objectFit="cover" 
                    alt="Logo"
                />
            </div>
            
            {/* Links centered in the navbar */}
            <div className="flex flex-col sm:flex-row justify-center sm:flex-grow items-center  gap-4 sm:gap-20 sm:pr-[250px] w-full mt-2 sm:mt-2">
                <Link href="/" className="text-black">Home</Link>
                <Link href="/about" className="text-black">About Us</Link>
                <Link href="/products" className="text-black">Products</Link>
                <Link href="/teams" className="text-black">Teams</Link>
            </div>
        </div>
    )
}
