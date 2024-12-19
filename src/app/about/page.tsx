import Image from "next/image"
import Navbar from "../components/navbar"
import Card from "../components/cards"
import Footer from "../components/footer"


export default function About() {
    return (
        <div className="bg-white  w-screen">
            <div className="flex justify-center p-[20px] sm:p-[100px] gap-[200px]">
                <div className="hidden sm:flex flex-col justify-center font-medium">
                    <span>About Us.</span>
                    <span>Culture.</span>
                    <span>Our Teams.</span>
                </div>
                <div className="flex flex-col max-w-[600px] gap-4">
                    <span className="font-bold sm:text-[50px] text-[30px]">ABOUT US.</span>
                    <div className="flex flex-col gap-4">
                        <p>Founded in 2010, WebWorx started as a small team of passionate developers and designers with a vision to revolutionize the technology landscape. With a commitment to innovation and client satisfaction, we began creating tailored solutions for businesses of all sizes.</p>
                        <p>Over the years, our dedication to excellence and adaptability to emerging trends allowed us to grow into a leading technology partner, serving clients across industries worldwide. From developing robust mobile and web applications to crafting intuitive UI/UX designs, WebWorx has consistently delivered solutions that empower businesses to achieve their goals efficiently. With over a decade of experience, we continue to push boundaries and redefine possibilities in the digital realm.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/about-us-banner.jpg')] w-screen sm:h-[500px] h-[300px] bg-cover bg-no-repeat mt-[50px] sm:mt-0">

            </div>
            <div className="flex flex-col sm:p-[100px] p-[20px] gap-20 mt-[50px] sm:mt-0">
                <div className="flex flex-col gap-4">
                    <div className=" text-center sm:text-left">
                        <span className="font-bold text-[30px]">The Culture and Values We Mantain at Work</span>
                    </div>
                    <div className="max-w-[650px] text-center sm:text-left hidden sm:none">
                        <p >We are a team with a variety of skills, each member contributes their expertise, and works profesionally among members and clients.</p>
                    </div>
                </div>
                <div className="sm:flex sm:flex-col sm:gap-[100px] grid grid-cols-2 gap-[78px] ">
                    <div className="sm:flex sm:gap-[100px] sm:justify-center text-center ">
                        <div className="flex flex-col items-center gap-4 ">
                            <Image src="/lightbulb.png" alt="" height={100} width={100} />
                            <span className="font-bold">Innovation-Driven</span>
                            <p className="hidden sm:block">
                                implementing cutting-edge technologies to provide groundbreaking solutions.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4 ">
                            <Image src="/value.png" alt="" height={100} width={100} />
                            <span className="font-bold">Customer-Centric</span>
                            <p className="hidden sm:block">
                                Continuously exploring and implementing cutting-edge technologies to provide groundbreaking solutions.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-4 ">
                            <Image src="/united.png" alt="" height={100} width={100} />
                            <span className="font-bold">Collaboration and Teamwork</span>
                            <p className="text-center hidden sm:block">
                                Encouraging cross-functional collaboration and open communication to achieve collective success.
                            </p>
                        </div>
                    </div>
                    <div className="sm:flex sm:gap-[200px] sm:justify-center text-center">
                        <div className="flex flex-col items-center gap-4">
                            <Image src="/plant-a-tree.png" alt="" height={100} width={100} />
                            <span className="font-bold">Adaptability and Growth</span>
                            <p className="text-center hidden sm:block">
                                Staying agile and responsive to emerging trends and challenges in the tech industry.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <Image src="/excellent.png" alt="" height={100} width={100} />
                            <span className="font-bold">Excellence and Quality</span>
                            <p className="hidden sm:block">
                                Committing to delivering top-tier solutions that empower clients to achieve their goals efficiently.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex sm:flex-row flex-col items-center justify-between sm:px-[100px] p-[20px] gap-4 sm:gap-0">
                    <div className="sm:max-w-[600px] text-center">
                    <span className="font-semibold sm:text-[50px] text-[40px]">Meet the talented team who make all this happen</span>

                    </div>
                    <div className="sm:max-w-[250px] text-center">
                        <p>Our philosophy is simple, hire great people and give them the resources and support to do their best work.</p>
                    </div>
                </div>
            <div className="flex sm:flex-row flex-col justify-center items-center sm:items-stretch sm:gap-[80px] gap-20 sm:mt-[100px] mt-[50px] mb-[100px] ">
            <Card image="/teams-1.png" name="Jordyn Septimus" title="Software Engineer" desc="5 years of experience building scalable web applications and crafting seamless user interfaces."/>
            <Card image="/teams-2.png" name="Leo Arcand"  title="Software Engineer" desc="Full-stack developer with 6 years of experience in creating robust software solutions."/>
            <Card image="/teams-3.png" name="Marylin Levin"  title="Software Engineer" desc="4 years of experience, building intelligent systems and automating complex processes."/>

            </div>
            </div>
        </div>
    )
}