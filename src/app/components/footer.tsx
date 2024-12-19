"use client"
import { useEffect, useState } from 'react';

export default function Footer() {
  const [isClient, setIsClient] = useState(false); // State to track if on client side

  useEffect(() => {
    setIsClient(true); // Set to true once mounted on the client side
  }, []);

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
              className={`mt-4 sm:mt-4 max-w-[300px] ${
                openSection === "location" || (isClient && window.innerWidth >= 640)
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

          {/* Repeat similarly for other sections */}
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-t shadow-[0_-1px_3px_rgba(0,0,0,0.1)] flex justify-center sm:justify-start sm:px-[100px] py-[20px] h-[50px] bg-white">
        <span className="font-bold text-[20px]">WebWorx LTD.</span>
      </div>
    </>
  );
}
