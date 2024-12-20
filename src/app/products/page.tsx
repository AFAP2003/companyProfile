import Image from "next/image"
import { BannerServices } from "../components/banner"
import { Carousel,CarouselTwo,CarouselThree } from "../components/carousel"
import { TypePricingcardoneSkeleton } from "@/contentful/types/pricingcardone.types";
import { TypePricingcardtwoSkeleton } from "@/contentful/types/pricingcardtwo.types";
import { TypePricingcardthreeSkeleton } from "@/contentful/types/pricingcardthree.types";

import contentfulClient from "@/contentful/contentfulClient";

const getPricingCardOneContentful = async ()=>{
    try{
      const data = await contentfulClient.getEntries<TypePricingcardoneSkeleton>({
        content_type: 'pricingcardone', // Specify the content type ID for "portfolio"
        order: ['sys.createdAt'], // Oldest first

      });
      console.log(data.items)
      return data
    } catch(err){
      console.log(err)
    }
  }

  const getPricingCardTwoContentful = async ()=>{
    try{
      const data = await contentfulClient.getEntries<TypePricingcardtwoSkeleton>({
        content_type: 'pricingcardtwo', // Specify the content type ID for "portfolio"
        order: ['sys.createdAt'], // Oldest first

      });
      console.log(data.items)
      return data
    } catch(err){
      console.log(err)
    }
  }

  const getPricingCardThreeContentful = async ()=>{
    try{
      const data = await contentfulClient.getEntries<TypePricingcardthreeSkeleton>({
        content_type: 'pricingcardthree', // Specify the content type ID for "portfolio"
        order: ['sys.createdAt'], // Oldest first

      });
      console.log(data.items)
      return data
    } catch(err){
      console.log(err)
    }
  }

  
export default async function products() {
    const pricingCardOne = await getPricingCardOneContentful()
    const pricingCardTwo = await getPricingCardTwoContentful()
    const pricingCardThree = await getPricingCardThreeContentful()
    return (
        <div>
            <BannerServices />
            <div>
                <span className="flex justify-center font-semibold sm:text-[50px] text-[30px] py-[20px]">Our Services</span>
            </div>
            <div className="">
                <div className=" bg-gradient-to-l from-transparent via-gray-200/50 to-gray-200">
                    <span className="sm:p-10 p-5 font-semibold sm:text-[40px] text-[30px] flex justify-end" >Web Developments</span>
                </div>
                <div className="sm:p-[100px] p-[20px] flex sm:flex-row flex-col justify-around sm:gap-[100px] gap-4">
                    <div>
                        <Image src="/web-development-service.png" alt="" width={500} height={500} />
                    </div>
                    <div className="max-w-[600px] flex flex-col gap-4">
                        <span className="font-semibold text-[30px] text-center sm:text-left">Create stunning, responsive websites that drive engagement and conversions.</span>
                        <p>Our web development service delivers cutting-edge, responsive websites that not only look great but also perform exceptionally. We focus on creating user-friendly interfaces, optimizing for search engines, and ensuring your site is fast and secure. Whether you need a simple brochure site or a complex e-commerce platform, our team has the expertise to bring your vision to life.</p>
                        <div className="flex gap-2 justify-center sm:justify-start">
                            <Image src="/checkcircle.png" width={25} height={0} alt="" />
                            <span className="font-semibold ">Key Features</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="font-semibold">Custom design
                                </span>
                                <p>Tailored designs that reflect your brand identity and meet your specific needs.

                                </p>
                            </div>
                            <div>
                                <span className="font-semibold">E-commerce solutions</span>
                                <p>Robust online stores with secure payment gateways and inventory management.

                                </p>
                            </div>
                            <div>
                                <span className="font-semibold">CMS integration
                                </span>
                                <p>User-friendly content management systems for easy updates and maintenance.

                                </p>
                            </div>
                            <div>
                                <span className="font-semibold">SEO optimization
                                </span>
                                <p>Built-in search engine optimization to improve your site&apos;s visibility and ranking.

                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
         
            <div className="flex flex-col gap-[50px] p-[20px] sm:p-0">
                
                    <div className="flex justify-center ">
                        <span className="font-semibold sm:text-[50px] text-[30px]">The Benefits</span>
                    </div>
                 <div className="sm:flex sm:flex-row grid grid-cols-2 sm:gap-[100px] gap-4 justify-center ">
                 <div className="flex flex-col items-center border p-[20px] rounded-[10px] gap-4">
                        <Image src="/clock.png" alt="" height={10} width={70}/>
                        <div className="max-w-[175px] text-center">
                        <span className="font-semibold">Faster development time</span>

                        </div>
                        </div>
                    <div className="flex flex-col items-center border p-[20px] rounded-[10px] gap-4">
                        <Image src="/diagram.png" alt="" height={30} width={70}/>
                        <div className="max-w-[175px] text-center">
                        <span className="font-semibold">Higher conversion rates</span>

                        </div>
                        </div>

                        <div className="flex flex-col items-center border p-[20px] rounded-[10px] gap-4">
                        <Image src="/holding-wrench.png" alt="" height={30} width={70}/>
                        <div className="max-w-[175px] text-center">
                        <span className="font-semibold">Ongoing support and maintenance</span>

                        </div>
                        </div>
                    <div className="flex flex-col items-center border p-[20px] rounded-[10px] gap-4">
                        <Image src="/server.png" alt="" height={30} width={70}/>
                        <div className="max-w-[175px] text-center">
                        <span className="font-semibold">Integration with the latest web technologies</span>

                        </div>
                        </div>
                 </div>
                
               

            </div>
            <div className="flex justify-center items-center sm:min-h-screen p-[10px]">

   <div className="flex flex-col sm:gap-[100px] gap-4 pt-4 sm:pt-0 bg-[#F8F8F8] w-[95%] rounded-[20px] h-full items-center sm:mt-[200px] mt-[50px]">
    <div>
        <span className="flex justify-center font-semibold sm:text-[50px] text-[30px]">Pricings</span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:mb-[100px] mb-[50px]">
    {
        pricingCardOne && pricingCardOne.items?.map((card,idx)=>
            <div className="" key={idx}>
        {/* Card 1 */}
        <div className="max-w-[300px] bg-white rounded-lg shadow-md hover:shadow-lg border hover:scale-105 transform transition-all duration-300 p-6">
          <div className="text-sm font-medium text-blue-500 mb-2">{card.fields.type}</div>
          <div className="text-3xl font-bold text-gray-800 mb-4">{card.fields.price}<span className="text-base font-normal"></span></div>
          <p className="text-sm text-gray-500 mb-6">{card.fields.description}</p>
          <button className="bg-blue-500 text-white font-semibold rounded-md px-4 py-2 w-full hover:bg-blue-600">Select {card.fields.type}</button>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">&#10003;</span>
              <span className="text-gray-600 text-sm">{card.fields.featureone}</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">&#10003;</span>
              <span className="text-gray-600 text-sm">{card.fields.featuretwo}</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">&#10003;</span>
              <span className="text-gray-600 text-sm">{card.fields.featurethree}</span>
            </li>
          </ul>
        </div>

       
      </div>
        )
    
   
}
</div>
    </div> 
    </div>
    <div className="mt-[50px]">
                <div className=" bg-gradient-to-r from-transparent via-gray-200/50 to-gray-200">
                    <span className="sm:p-10 p-5 font-semibold sm:text-[40px] text-[30px] flex " >Mobile Developments</span>
                </div>
                <div className="sm:p-[100px] p-[20px] flex sm:flex-row flex-col justify-around sm:gap-[100px]">
                <div className="sm:hidden">
                        <Image src="/web-development-service.png" alt="" width={500} height={500} />
                    </div>
                <div className="max-w-[600px] flex flex-col gap-4">
                        <span className="font-semibold text-[30px] sm:text-left text-center">Build innovative, user-friendly mobile apps for iOS and Android platforms.</span>
                        <p>Our mobile app development service creates powerful, intuitive applications that engage users and drive business growth. We specialize in both native and cross-platform development, ensuring your app performs flawlessly on all devices. From concept to launch, we handle every aspect of the development process, including UI/UX design, coding, testing, and deployment to app stores.
</p>
                        <div className="flex gap-2 justify-center sm:justify-start">
                            <Image src="/checkcircle.png" width={25} height={0} alt="" />
                            <span className="font-semibold ">Key Features</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="font-semibold">Native Development
                                </span>
                                <p>Leverage the full potential of iOS and Android platforms with custom-built native apps that deliver seamless performance, optimized speed, and enhanced user experiences.

                                </p>
                            </div>
                            <div>
                                <span className="font-semibold">Cross-platform solutions
                                </span>
                                <p>Streamline development with cross-platform solutions, allowing a single codebase to run efficiently on both iOS and Android, saving time and costs without compromising quality.

                                </p>
                            </div>
                            <div>
                                <span className="font-semibold">UI/UX Design
                                </span>
                                <p>Engage your users with cutting-edge UI/UX design tailored to deliver intuitive navigation, stunning visuals, and unparalleled user satisfaction.

                                </p>
                            </div>
                            <div>
                                <span className="font-semibold">App Store optimization
                                </span>
                                <p>Boost your app&apos;s visibility and downloads with proven App Store Optimization strategies, ensuring your app stands out in crowded marketplaces.

                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <Image src="/web-development-service.png" alt="" width={500} height={500} />
                    </div>
                  
                </div>
            </div>
         
            <div className="flex flex-col gap-[50px] p-[20px] sm:p-0">
                
                    <div className="flex justify-center ">
                        <span className="font-semibold sm:text-[50px] text-[30px]">The Benefits</span>
                    </div>
                 <div className="sm:flex sm:flex-row grid grid-cols-2 gap-4  sm:gap-[100px] justify-center ">
                 <div className="flex flex-col items-center border p-[20px] rounded-[10px] gap-4">
                        <Image src="/mobiles-phones.png" alt="" height={10} width={70}/>
                        <div className="max-w-[175px] text-center">
                        <span className="font-semibold">IOS and Android platforms</span>

                        </div>
                        </div>
                    <div className="flex flex-col items-center border p-[20px] rounded-[10px] gap-4">
                        <Image src="/digital-art.png" alt="" height={30} width={70}/>
                        <div className="max-w-[175px] text-center">
                        <span className="font-semibold">Cutting-edge UI/UX design for higher user engagement</span>

                        </div>
                        </div>

                        <div className="flex flex-col items-center border p-[20px] rounded-[10px] gap-4">
                        <Image src="/bug.png" alt="" height={30} width={70}/>
                        <div className="max-w-[175px] text-center">
                        <span className="font-semibold">Rigorous testing processes for bug-free apps                        </span>

                        </div>
                        </div>
                    <div className="flex flex-col items-center border p-[20px] rounded-[10px] gap-4">
                        <Image src="/change.png" alt="" height={30} width={70}/>
                        <div className="max-w-[175px] text-center">
                        <span className="font-semibold">Post-launch support and continuous improvements                        </span>

                        </div>
                        </div>
                 </div>
                
               

            </div>
            <div className="flex justify-center items-center sm:min-h-screen p-[10px] ">

   <div className="flex flex-col sm:gap-[100px] gap-4 pt-4 sm:pt-0 bg-[#F8F8F8] w-[95%] rounded-[20px] h-full items-center sm:mt-[200px] mt-[50px]">
    <div>
        <span className="flex justify-center font-semibold sm:text-[50px] text-[30px]">Pricings</span>
    </div>
   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:mb-[100px] mb-[50px]">
   {
        pricingCardTwo && pricingCardTwo.items?.map((card,idx)=>
            <div className="" key={idx}>
        {/* Card 1 */}
        <div className="max-w-[300px] bg-white rounded-lg shadow-md hover:shadow-lg border hover:scale-105 transform transition-all duration-300 p-6">
          <div className="text-sm font-medium text-blue-500 mb-2">{card.fields.type}</div>
          <div className="text-3xl font-bold text-gray-800 mb-4">{card.fields.price}<span className="text-base font-normal"></span></div>
          <p className="text-sm text-gray-500 mb-6">{card.fields.description}</p>
          <button className="bg-blue-500 text-white font-semibold rounded-md px-4 py-2 w-full hover:bg-blue-600">Select {card.fields.type}</button>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">&#10003;</span>
              <span className="text-gray-600 text-sm">{card.fields.featureone}</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">&#10003;</span>
              <span className="text-gray-600 text-sm">{card.fields.featuretwo}</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">&#10003;</span>
              <span className="text-gray-600 text-sm">{card.fields.featurethree}</span>
            </li>
          </ul>
        </div>

       
      </div>
        )
    
   
}
      </div>
    </div> 
    </div>

    <div className="mt-[50px]">
                <div className=" bg-gradient-to-l from-transparent via-gray-200/50 to-gray-200">
                    <span className="sm:p-10 p-5 font-semibold sm:text-[40px] text-[30px] flex justify-end " >Data Analytics</span>
                </div>
                <div className="sm:p-[100px] p-[20px] flex sm:flex-row flex-col justify-around sm:gap-[100px]">
                <div>
                        <Image src="/web-development-service.png" alt="" width={500} height={500} />
                    </div>
                  
                <div className="max-w-[600px] flex flex-col gap-4">
                        <span className="font-semibold text-[30px] sm:text-left text-center">Unlock the power of your data with our advanced analytics solutions.
</span>
                        <p>Our data analytics service empowers your business to make data-driven decisions with confidence. We employ cutting-edge techniques in big data processing, machine learning, and business intelligence to extract meaningful insights from your data. Our custom dashboards and reports provide clear, actionable information that drives strategic planning and operational improvements.


</p>
                        <div className="flex gap-2 sm:justify-start justify-center">
                            <Image src="/checkcircle.png" width={25} height={0} alt="" />
                            <span className="font-semibold">Key Features</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="font-semibold">Big data processing

                                </span>
                                <p>
                                Harness the power of large-scale data with advanced processing techniques, enabling your business to handle and analyze massive datasets efficiently and accurately.

                                </p>
                            </div>
                            <div>
                                <span className="font-semibold">Machine learning

                                </span>
                                <p>Transform raw data into actionable insights with machine learning models that predict trends, optimize operations, and drive smarter decision-making.

                                </p>
                            </div>
                            <div>
                                <span className="font-semibold">Business intelligence

                                </span>
                                <p>Empower your organization with business intelligence tools that uncover hidden patterns, enhance reporting, and enable data-driven strategies.

                                </p>
                            </div>
                            <div>
                                <span className="font-semibold">Custom dashboards

                                </span>
                                <p>Visualize your data effectively with tailor-made dashboards that provide real-time insights and actionable metrics, customized to your business needs.

                                </p>
                            </div>

                        </div>
                    </div>
                   
                </div>
            </div>
         
            <div className="flex flex-col gap-[50px] sm:p-0 p-[20px]">
                
                    <div className="flex justify-center ">
                        <span className="font-semibold sm:text-[50px] text-[30px]">The Benefits</span>
                    </div>
                 <div className="sm:flex sm:flex-row flex-col grid grid-cols-2 sm:gap-[100px] gap-4 justify-center ">
                 <div className="flex flex-col items-center border p-[20px] rounded-[10px] gap-4">
                        <Image src="/marketing.png" alt="" height={10} width={70}/>
                        <div className="max-w-[175px] text-center">
                        <span className="font-semibold">Advanced AI and machine learning capabilities
                        </span>

                        </div>
                        </div>
                    <div className="flex flex-col items-center border p-[20px] rounded-[10px] gap-4">
                        <Image src="/data-flow.png" alt="" height={30} width={70}/>
                        <div className="max-w-[175px] text-center">
                        <span className="font-semibold">Real-time data processing for immediate insights
                        </span>

                        </div>
                        </div>

                        <div className="flex flex-col items-center border p-[20px] rounded-[10px] gap-4">
                        <Image src="/desktop-computer-screen-with-rising-graph.png" alt="" height={30} width={70}/>
                        <div className="max-w-[175px] text-center">
                        <span className="font-semibold">Custom-built dashboards for easy data visualization
                        </span>

                        </div>
                        </div>
                    <div className="flex flex-col items-center border p-[20px] rounded-[10px] gap-4">
                        <Image src="/forecast.png" alt="" height={30} width={70}/>
                        <div className="max-w-[175px] text-center">
                        <span className="font-semibold">Predictive analytics for future-focused decision making
                        </span>

                        </div>
                        </div>
                 </div>
                
               

            </div>
            <div className="flex justify-center items-center sm:min-h-screen p-[10px]">

   <div className="flex flex-col sm:gap-[100px] gap-4 pt-4 sm:pt-0 bg-[#F8F8F8] w-[95%] rounded-[20px] h-full items-center sm:mt-[200px] mt-[50px]">
    <div>
        <span className="flex justify-center font-semibold sm:text-[50px] text-[30px]">Pricings</span>
    </div>
   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:mb-[100px] mb-[50px]">
   {
        pricingCardThree && pricingCardThree.items?.map((card,idx)=>
            <div className="" key={idx}>
        {/* Card 1 */}
        <div className="max-w-[300px] bg-white rounded-lg shadow-md hover:shadow-lg border hover:scale-105 transform transition-all duration-300 p-6">
          <div className="text-sm font-medium text-blue-500 mb-2">{card.fields.type}</div>
          <div className="text-3xl font-bold text-gray-800 mb-4">{card.fields.price}<span className="text-base font-normal"></span></div>
          <p className="text-sm text-gray-500 mb-6">{card.fields.description}</p>
          <button className="bg-blue-500 text-white font-semibold rounded-md px-4 py-2 w-full hover:bg-blue-600">Select {card.fields.type}</button>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">&#10003;</span>
              <span className="text-gray-600 text-sm">{card.fields.featureone}</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">&#10003;</span>
              <span className="text-gray-600 text-sm">{card.fields.featuretwo}</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">&#10003;</span>
              <span className="text-gray-600 text-sm">{card.fields.featurethree}</span>
            </li>
          </ul>
        </div>

       
      </div>
        )
    
   
}
      </div>
    </div> 
    </div>
       <div className="flex flex-col items-center justify-center mt-[100px]">
        <div>
            <span className="font-semibold sm:text-[50px] text-[30px]">What Our Clients Say?</span>
        </div>
       <div className=" flex sm:flex-row flex-col sm:mt-[100px] mt-[50px] sm:gap-10 gap-4 sm:px-[35px] p-[20px] sm:p-0 sm:pb-[300px]">
        
           
            <Carousel />
            <CarouselTwo />

            <CarouselThree />

       
        
     
        </div>
       </div>
        </div>
    )
}