import Image from "next/image"


export default function Product() {
    return (
        <div className="flex sm:flex-row flex-col justify-center gap-[50px] mt-[50px]">
              <div className="hidden sm:block relative">
                {/* Image container with relative positioning */}
                <Image src="/product-section.png" width={500} height={500} alt="" />
                
                {/* Button positioned at the top right corner */}
                <button 
                    className="absolute top-[29px] right-[34px] bg-white text-black px-4 py-2 rounded "
                >
                    View Detail
                </button>
            </div>
            <div className="sm:max-w-[350px]">
                <span className="text-[40px] font-bold ml-[25px] flex justify-center sm:justify-start">What We Do?</span>
               <div className="flex flex-col gap-[20px] mt-[20px] p-[20px] sm:p-0">
               <div className="flex gap-2 ">
                <div className="relative top-1">
                <Image src="/android.png" width={80} height={80} alt="" />

                </div>
                    <div>
                    <span className="font-bold">Mobile Application</span>
                    <p>Building mobile applications is never easy.
                        P2P lending app ? Logistic App ? E-Commerce App ?
                        We have done them all. Done them all well.
                        Done them all fast. </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="relative top-1">
                    <Image src="/website.png" width={100} height={100} alt="" />

                    </div>
                    <div>
                    <span className="font-bold">Web Application</span>
                    <p>We can build any web applications you need.
                        A personal blog ? Company Profile ? E-commerce ?
                        or any specific functionalities ? We got you covered!
                        We have a strong team of web developers that can
                        follow your stack and needs.</p>
                    </div>
                  
                </div>
                <div className="flex gap-2">
                    <div className="relative top-1">
                    <Image src="/user-experience.png" width={80} height={80} alt="" />

                    </div>
                  <div>
                  <span className="font-bold">UI/UX Design</span>
                    <p>All things are designed. A few things are designed well.
                        We try to elevate your ideas with great UI/UX design,
                        suited to your taste, addressing the right pain points.</p>
                  </div>
                </div>
               </div>

            </div>
            <div className="sm:hidden relative">
                {/* Image container with relative positioning */}
                <Image src="/product-section.png" width={500} height={500} alt="" />
                
                {/* Button positioned at the top right corner */}
                <button 
                    className="absolute top-[29px] right-[34px] bg-white text-black px-4 py-2 rounded "
                >
                    View Detail
                </button>
            </div>
        </div>
    )
}