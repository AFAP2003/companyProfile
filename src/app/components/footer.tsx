"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  // State to handle collapsible sections
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <div className="sm:p-[50px] p-[20px] w-full h-auto">
        {/* Footer Container */}
        <div className="flex flex-col sm:flex-row justify-around">
          {/* Location Section */}
          <div className="border-b sm:border-none mb-4 sm:mb-0">
            <div
              className="flex justify-between sm:block"
              onClick={() => toggleSection("location")}
            >
              <span className="font-bold">Location</span>
              <span className="sm:hidden">{openSection === "location" ? "-" : "+"}</span>
            </div>
            <div
              className={`mt-4 sm:mt-4  max-w-[300px] ${
                openSection === "location" || window.innerWidth >= 640
                  ? "block"
                  : "hidden"
              }`}
            >
              <span>
                Pacific Century Place Tower Level 45 SCBD Lot 10, Jl. Jenderal
                Sudirman No.53, RT.5/RW.3
              </span>
            </div>
          </div>

          {/* Explore Section */}
          <div className="border-b sm:border-none mb-4 sm:mb-0">
            <div
              className="flex justify-between sm:block"
              onClick={() => toggleSection("explore")}
            >
              <span className="font-bold">Explore</span>
              <span className="sm:hidden">{openSection === "explore" ? "-" : "+"}</span>
            </div>
            <div
              className={`mt-4 sm:mt-4 ${
                openSection === "explore" || window.innerWidth >= 640
                  ? "block"
                  : "hidden"
              }`}
            >
              <div className="flex flex-col gap-4">
                <Link href="">Home</Link>
                <Link href="">About Us</Link>
                <Link href="">Products</Link>
                <Link href="">Teams</Link>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="border-b sm:border-none mb-4 sm:mb-0">
            <div
              className="flex justify-between sm:block"
              onClick={() => toggleSection("contact")}
            >
              <span className="font-bold">Contact Us</span>
              <span className="sm:hidden">{openSection === "contact" ? "-" : "+"}</span>
            </div>
            <div
              className={`mt-4 sm:mt-4 ${
                openSection === "contact" || window.innerWidth >= 640
                  ? "block"
                  : "hidden"
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <Image src="/facebook.png" width={20} height={20} alt="" />
                  <span>WebWorx</span>
                </div>
                <div className="flex gap-4">
                  <Image src="/instagram.png" width={20} height={20} alt="" />
                  <span>WebWorx</span>
                </div>
                <div className="flex gap-4">
                  <Image src="/email.png" width={20} height={20} alt="" />
                  <span>WebWorx@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[50px]"></div>
      </div>

      {/* Bottom Section */}
      <div className="border-t shadow-[0_-1px_3px_rgba(0,0,0,0.1)] flex justify-center sm:justify-start sm:px-[100px] py-[20px] h-[50px] bg-white">
        <span className="font-bold text-[20px]">WebWorx LTD.</span>
      </div>
    </>
  );
}
