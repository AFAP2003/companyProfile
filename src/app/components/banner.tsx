import Image from "next/image"


export  function Banner(){
    return(
        <div className="bg-[#F8F8F8] sm:h-[600px] h-[520px]  w-screen  relative sm:static p-[20px] sm:p-0">
            <div className="flex justify-center items-center sm:pt-[50px] sm:gap-[100px] ">
                <div className=" sm:max-w-[350px] z-10">
                    <div className=" max-w-[200px] sm:max-w-none"> 
                    <span className="font-bold sm:text-[70px] text-[40px]">We Code We deliver</span>

                    </div>
                    <div>
                    <p className="sm:text-[16px] text-[20px]">WebWorx speacializes in developing high-performing mobile and web application</p>

                    </div>
                </div>
                <div className="absolute left-[70px] top-[250px]  sm:static z-0 sm:w-[600px] w-[300px]">
                    <img src="/company-profile-banner-update.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export function BannerAbout(){
    return(
        <div className="bg-[#F8F8F8] h-[600px] w-screen ">
            <div className="flex justify-center items-center pt-[50px] gap-[100px]">
                <div className=" max-w-[350px]"><span className="font-bold text-[70px]">We Code We deliver</span>
                <p>WebWorx speacializes in developing high-performing mobile and web application</p>
                </div>
                <div>
                    <Image src="/company-profile-banner-update.png" alt="" width={600} height={600}/>
                </div>
            </div>
        </div>
    )
}

export function BannerServices(){
    return(
       <div className="flex  justify-center ">
         <div className="bg-[#F8F8F8] sm:h-[600px] h-auto w-[95%] rounded-[20px] p-[20px] sm:p-0">
        <div className="flex sm:flex-row flex-col justify-center items-center sm:pt-[50px] gap-[0px]">
            <div className=" max-w-[500px]"><span className="font-semibold sm:text-[70px] text-[30px]">Empowering Business Large and Small</span>
            </div>
            <div className="mr-[70px] sm:mr-0">
                <Image src="/service-page-banner.png" alt="" width={730} height={700}/>
            </div>
        </div>
    </div>
       </div>
    )
}