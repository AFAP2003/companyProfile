import Image from "next/image";

export default function About() {
    return (
        <div>
            <div className="flex flex-col sm:p-[100px] p-[20px] sm:ml-[100px] mt-[20px] sm:mt-0 gap-[50px] sm:relative">
                {/* Added "relative" to the parent container for absolute positioning */}
                <div className="hidden sm:block absolute bottom-[423px] left-[1000px] z-10 transform translate-x-[-50px] translate-y-[50px]">
                    {/* Added "absolute", "z-10", and "transform" to make the image overlap */}
                    <Image src="/company-profile-about2.png" width={300} height={300} alt="" />
                </div>
                <div className="sm:max-w-[200px]">
                    <span className="font-bold sm:text-[50px] text-[30px]">About - Company.</span>
                </div>

                <div className="flex sm:flex-row flex-col sm:gap-[100px] gap-14">
                    <div>
                        <Image src="/company-profile-about.png" width={300} height={300} alt="" />
                    </div>
                    <div className="flex flex-col sm:gap-[50px] gap-6">
                        <div>
                            <button className="border bg-black text-white font-bold rounded-full py-2 px-4">
                                About the Company
                            </button>
                        </div>

                        <p className="max-w-[600px]">
                            WebWorx is a cutting-edge technology company that provides innovative solutions for businesses of
                            all sizes. Founded in 2010, we are dedicated to helping our clients achieve their goals through our
                            customized and effective technology solutions. With over a decade of experience, we have built a
                            reputation for delivering high-quality services to our clients.
                        </p>
                        <div className="flex sm:flex-row flex-col items-center sm:items-stretch sm:gap-[100px] gap-10">
                            <div className="flex flex-col items-center sm:items-stretch">
                                <span className="font-bold text-[40px]">2022</span>
                                <span>Founded</span>
                            </div>
                            <div className="flex flex-col items-center sm:items-stretch">
                                <span className="font-bold text-[40px]">96</span>
                                <span>Clients</span>
                            </div>
                            <div className="flex flex-col items-center sm:items-stretch">
                                <span className="font-bold text-[40px]">140</span>
                                <span>Projects done</span>
                            </div>
                            <div className="flex flex-col items-center sm:items-stretch">
                                <span className="font-bold text-[40px]">61</span>
                                <span>5-Stars Review</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
