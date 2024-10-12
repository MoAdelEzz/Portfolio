'use client'

import { Separator } from "@/components/ui/separator";
import { FunctionComponent, useState } from "react";
import Image from 'next/image'
import { CircleDot } from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";

interface ExperienceProps {
    
}

type Experience = {
    title: string;
    type: "Part Time" | "Full Time" | "Internship" | "Competition"
    company: string;
    logo: string;
    startYear: string;
    endYear: string;
    description: string;
}
 
const Experience: FunctionComponent<ExperienceProps> = () => {

    const generateExperienceCard = (exp: Experience, idx: number) => (
        <div id={"exp-card-" + idx} className="flex-1 flex border-2 bg-background border-border rounded-xl"
        onMouseMove={(event) => {
            const element = document.getElementById("exp-card-" + idx);
            if (!element?.style) return;

            const rect = element.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;

            const rotationY = (((x - 50) / 50) * 15 + 360) % 360
            const rotationX = (((y - 50) / 50) * -15 + 360) % 360 
            

            element.style.background = `radial-gradient(50% 75% at ${x}% ${y}%,rgba(255,0,0,0.20) 0%,rgba(0,0,0,0.00) 100%)`
            element.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`
        }}

        onMouseLeave={(event) => {
            const element = document.getElementById("exp-card-" + idx);
            if (!element?.style) return;
            element.style.background = "none";
            element.style.transform = `rotateY(0deg)`
        }}
        
        >
            <div className="w-1/4 h-full flex justify-center"> 
                <div className="w-20 h-20 flex items-center justify-center">
                    <Image src={exp.logo} alt="logo" width={50} height={50} className="max-w-[50px] max-h-[50px]"/>
                </div>
            </div>

            <div className="w-full pt-6 flex flex-col gap-1"> 
                <h2 className="font-semibold">{exp.title}</h2>
                <h3 className="font-semibold text-muted-foreground">{exp.company} - {exp.type}</h3>
                <p className="text-sm text-muted-foreground/80 break-words">{exp.description}</p>
                <time>{exp.startYear} - {exp.endYear}</time>
            </div>
        </div>
    )

    const experinces : Experience[] = [
        {
            title: "Software Engineer",
            company: "Turuq",
            type: "Part Time",
            logo: "/images/exp/turuq.webp",
            startYear: "2024",
            endYear: "Present",
            description: "Currently working as a part time software Engineer at turuq operation building company system from scratch."
        },

        {
            title: "Infrastructure Engineer",
            company: "National Bank Of Egypt",
            type: "Internship",
            logo: "/images/exp/nbe.jpeg",
            startYear: "07/2024",
            endYear: "08/2024",
            description: "Joined the summer internship at the official building of the bank and learnt alot of practical concepts for banking software infrastructure and security"
        },

        {
            title: "Cyper Security Course",
            description: "a cyber security course made for us as an internship in our faculty in which we studied different cypersecurity categories such as web security, cpp vulnerabilities, malwares and etc",
            company: "CUFE",
            type: "Internship",
            logo: "/images/exp/cufe.png",
            startYear: "08/2023",
            endYear: "09/2023"
        },

        {
            title: "Egyptian Collegiate Programming Contest",
            description: "took part in the egyptian qualification competition solving 7 out of 10 problems for the day and coming 4th on our faculty and 16th for the day's teams",
            company: "ECPC",
            type: "Competition",
            logo: "/images/exp/ecpc.jpg",
            startYear: "07/2023",
            endYear: "08/2023"
        }
    ]

    return (  
        <main className="w-full h-full overflow-y-scroll px-2 lg:px-[12.5%] mt-4 bg-background ">
            <h1 className="text-6xl tracking-widest font-bold text-center mb-8">
                Experience
            </h1>

            <Carousel className="h-[480px] mb-8" opts={{
                slidesToScroll: 1,
                loop: true,
            }}
            plugins={[
                Autoplay({delay: 4000})
            ]}
            
            >
                <CarouselContent id="carousel" className="h-[480px] gap-4 overflow-visible items-center" >
                    {
                        Array.from({length: 7}).map((_: any, idx: number) => {
                            return (
                                <CarouselItem key={"slide-"+idx} 
                                id={"slide-" + idx}
                                style={{backgroundImage: `url('/images/certificates/cert-${idx + 1}.jpg')`}}
                                className={`basis-full h-[480px] bg-[length:100%_100%] bg-no-repeat 
                                rounded-xl transition-all hover:z-50`}>

                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


            <div className="w-full h-full relative flex flex-col justify-stary items-center gap-20">
                <Separator orientation="vertical" className="absolute h-full"/>
                
                {experinces.map((exp : Experience, idx: number) => (
                    <div 
                    key={"exp-" + idx}
                    className="flex flex-row bg-background w-full h-48 gap-12 relative z-20">
                        {idx % 2 === 0 && <div className="flex-1 h-full hidden lg:block"></div>}

                        { generateExperienceCard(exp, idx) }

                        {idx % 2 !== 0 && <div className="flex-1 h-full hidden lg:block"></div>}


                        <CircleDot className="absolute left-[49%] top-[49%] hidden lg:block"></CircleDot>
                    </div>

                ))}
            </div>
        </main>
    );
}
 
export default Experience;