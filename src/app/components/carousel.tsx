"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import contentfulClient from "@/contentful/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { TypeTestimonialSkeleton, IContentfulAsset } from "@/contentful/types/portfolio.types";

// Function to fetch data from Contentful
const getTestimonialsContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeTestimonialSkeleton>({
      content_type: "testimonial", // Contentful content type ID
    });

    // Map data to match the expected format
    const formattedTestimonials = data.items.map((blogs) => ({
      quote: blogs.fields.text as Document, // Rich Text field
      name: blogs.fields.name || "",
      position: blogs.fields.title || "",
      logo: (blogs.fields.image as IContentfulAsset)?.fields.file.url || "",
    }));

    return formattedTestimonials;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState<
    { quote: Document; name: string; position: string; logo: string }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch testimonials on component mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestimonialsContentful();
      setTestimonials(data);
    };
    fetchData();
  }, []);

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        testimonials.length > 0 ? (prevIndex + 1) % testimonials.length : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (testimonials.length === 0) return <p>Loading testimonials...</p>; // Loading state

  return (
    <>
      <div className="flex flex-col justify-between bg-gray-100 p-8 rounded-lg min-h-[272px]">
        <div className="max-w-xl">
          {/* Render Rich Text field */}
          <div className="text-lg text-gray-600 italic">
            {documentToReactComponents(testimonials[currentIndex]?.quote)}
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-base font-bold">
              {testimonials[currentIndex]?.name}
            </h3>
            <p className="text-sm text-gray-500">
              {testimonials[currentIndex]?.position}
            </p>
          </div>
          <div>
            <Image
              src={testimonials[currentIndex]?.logo}
              width={148}
              height={56}
              alt="Logo"
            />
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-9 h-2 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </>
  );
}


type CarouselProps = {
  text: React.ReactNode;  // Change from string to ReactNode
  name: string;
  position: string;
  logo: string;
};
export function Carousel({text,name,position,logo}:CarouselProps){
    return(
        <div className="flex flex-col  justify-between  bg-gray-100 p-8 rounded-lg min-h-[272px]">
      <div className="max-w-xl ">
        <p className="text-lg text-gray-600 italic">{text}</p>
        
      </div>
      <div className="mt-4 flex justify-between ">
         <div className="">
         <h3 className="text-base font-bold">{name}</h3>
         <p className="text-sm text-gray-500">{position}</p>
         </div>
         <div>
            <Image src={logo} width={148} height={56} alt=""/>
         </div>
        </div>
      {/* Navigation Dots */}
    
    </div>
    )
}