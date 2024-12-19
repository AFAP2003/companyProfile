import Image from "next/image"
import Ratings from "./ratings"
import TestimonialCarousel from "./carousel"


export default function Testimonials(){
    return(
        <div className="flex flex-col items-center gap-6 sm:p-[100px] p-[20px]">
            <div><Ratings/></div>
            <div><span className="font-medium text-[20px]">We're listed on</span></div>
            <div className="flex sm:gap-5 flex-wrap sm:flex-nowrap justify-center sm:justify-start">
                <Image src="https://mekari.com/wp-content/uploads/2023/06/logo-inv-gartner.svg" width={110} height={40} alt=""/>
                <Image src="https://mekari.com/wp-content/uploads/2023/06/logo-inv-capterra.svg" width={148} height={40} alt=""/>
                <Image src="https://mekari.com/wp-content/uploads/2023/06/logo-inv-get-app.svg" width={148} height={40} alt=""/>
                <Image src="https://mekari.com/wp-content/uploads/2023/06/logo-inv-software-advice.svg" width={148} height={40} alt=""/>
                <Image src="https://mekari.com/wp-content/uploads/2023/06/logo-inv-g2.svg" width={60} height={40} alt=""/>
                <Image src="https://mekari.com/wp-content/uploads/2023/06/logo-inv-crozdesk.svg" width={148} height={40} alt=""/>

            </div>
            <div>
            <TestimonialCarousel/>
            </div>
        </div>
    )
}

