import { CardTeam } from "../components/cards"


export default function Teams() {
    return (
        <div className="sm:p-[50px] p-[20px]">
            <div className="flex flex-col items-center">
                <div>
                    <span className="font-semibold text-[20px]">Our Team</span>
                </div>
                <div className=" sm:text-left text-center">
                    <span className="font-semibold sm:text-[50px] text-[30px]"> Meet The WebWorx Team</span>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-4 flex flex-col gap-4 sm:gap-y-10 mt-[50px]">
                <div>
                <CardTeam image="/teams-1.png" name="Jordyn Septimus" position="Software Engineer" desc="5 years of experience building scalable web applications and crafting seamless user interfaces." />
                </div>
                <div>
                <CardTeam image="/teams-2.png" name="Leo Arcand" position="Software Engineer" desc="Full-stack developer with 6 years of experience in creating robust software solutions." />

                </div>
                <div>
                <CardTeam image="/teams-3.png" name="Marilyn Levin" position="Software Engineer" desc="4 years of experience, building intelligent systems and automating complex processes.

" />

                </div>
                <div>
                <CardTeam image="/teams-4.png" name="Lindsey Dokidis" position="Software Engineer" desc="6 years of experience specializing in mobile development, delivering high-performance applications.

" />

                </div>
                <div>
                <CardTeam image="/teams-5.png" name="Hanna Dias" position="Software Engineer" desc="5 years of expertise, building efficient pipelines for large-scale data processing and analytics.

" />

                </div>
                <div>
                <CardTeam image="/teams-6.png" name="Ryan Gouse" position="Software Engineer" desc="6 years of experience in DevOps, automating workflows, and ensuring seamless CI/CD pipelines.

" />

                </div>
                <div>
                <CardTeam image="/teams-7-update.png" name="Martin Donnin" position="Software Engineer" desc="5 years of experience in cybersecurity, implementing secure architectures

" />

                </div>
                <div>
                <CardTeam image="/teams-8.png" name="Jocelyn Schleifer" position="Software Engineer" desc="4 years of experience in machine learning, developing predictive models and AI-driven applications.

" />

                </div>
            </div>
        </div>
    )
}