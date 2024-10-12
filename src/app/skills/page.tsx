'use client'
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image" 
import { FunctionComponent, useState } from "react";

interface SkillsProps {
    
}

type TechCard = {
    title: string;
    image: string;
}
 
const Skills: FunctionComponent<SkillsProps> = () => {

    const [searchValue, setSearchValue] = useState<string>("");

    const makeSectionTitle = (title: string) => (
        <div className="h-[1px] flex justify-center w-full bg-muted-foreground/25 mb-8 relative">
            <h3 className="absolute -top-3 px-4 text-lg w-fit text-muted-foreground bg-background">{title}</h3>
        </div>
    )

    const makeTechnologyCard = (techCard : TechCard) => {
        return searchValue === "" || techCard.title.toLowerCase().startsWith(searchValue.toLowerCase()) ?(
            <div className="col-span-12 lg:col-span-4">
                <div className="relative rounded-xl overflow-hidden
                flex justify-between items-center pl-4 group
                w-full h-24 bg-background border-border border-2">
                    <div className="flex flex-col justify-center text-foreground text-lg tracking-widest capitalize">{techCard.title}</div>

                    <div id="mixer" className="bg-gradient-to-r from-background to-[60%] to-trasparent mix-blend-normal 
                    group-hover:hidden
                    absolute w-full h-full left-[65%] top-0"/>
                    <Image 
                        src={techCard.image}
                        alt={techCard.title}
                        width={150}
                        color="text-foreground"
                        height={150}
                        className="h-[90%] w-[35%]"
                    />
                </div>
            </div>
        ) : null
    }


    return (  
        <main className="w-full h-full overflow-y-scroll px-2 lg:px-[12.5%] mt-4 bg-background flex flex-col justify-stary items-center gap-2">
            <h1 className="text-6xl tracking-widest font-bold">
                Skills
            </h1>

            <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search..."  className="mb-4 h-8 py-6 px-2"/> 

            <section className="w-full">
                {makeSectionTitle("Programming Languages")}

                <div className="grid grid-cols-12 gap-2 gap-y-4">
                    {makeTechnologyCard({ title: "javascript", image: "/images/technologies/JS.png" })}
                
                    {makeTechnologyCard({ title: "typescript", image: "/images/technologies/TS.png" })}
                
                    {makeTechnologyCard({ title: "CPP", image: "/images/technologies/CPP.png" })}
                
                    {makeTechnologyCard({ title: "C", image: "/images/technologies/C.png" })}
                
                    {makeTechnologyCard({ title: "C#", image: "/images/technologies/c-sharp.png" })}
                
                    {makeTechnologyCard({ title: "Java", image: "/images/technologies/Java.png" })}
                </div>
            </section>

            <Separator className="h-0 my-3"/> 

            <section className="w-full">
                {makeSectionTitle("Front-End")}

                <div className="grid grid-cols-12 gap-2 gap-y-4">
                    {makeTechnologyCard({ title: "Reactjs", image: "/images/technologies/react.png" })}
                
                    {makeTechnologyCard({ title: "Nextjs", image: "/images/technologies/next.webp" })}
                
                    {makeTechnologyCard({ title: "ChadUI", image: "/images/technologies/chadcn.png" })}
                
                    {makeTechnologyCard({ title: "Bootstrap", image: "/images/technologies/bootstrap.png" })}
                </div>
            </section>

            <Separator className="h-0 my-3"/> 

            <section className="w-full">
                {makeSectionTitle("Back-End")}

                <div className="grid grid-cols-12 gap-2 gap-y-4">
                    {makeTechnologyCard({ title: "Nodejs", image: "/images/technologies/nodejs.png" })}
                
                    {makeTechnologyCard({ title: "PHP", image: "/images/technologies/php.png" })}
            
                    {makeTechnologyCard({ title: "MongoDB", image: "/images/technologies/mongo.svg" })}
                
                    {makeTechnologyCard({ title: "MySQL", image: "/images/technologies/mysql.png" })}
                
                    {makeTechnologyCard({ title: "Express", image: "/images/technologies/express.png" })}
                </div>
            </section>

            <Separator className="h-0 my-3"/> 

            <section className="w-full">
                {makeSectionTitle("Other Development Tools")}

                <div className="grid grid-cols-12 gap-2 gap-y-4">
                    {makeTechnologyCard({ title: "Flutter", image: "/images/technologies/flutter-2.png" })}
                
                    {makeTechnologyCard({ title: "Unity Engine", image: "/images/technologies/unity.png" })}
                
                    {makeTechnologyCard({ title: "Flask", image: "/images/technologies/flask.png" })}
                </div>
            </section>

            <Separator className="h-0 my-3"/> 

            <section className="w-full">
                {makeSectionTitle("Machine Learning")}

                <div className="grid grid-cols-12 gap-2 gap-y-4">
                    {makeTechnologyCard({ title: "Numpy", image: "/images/technologies/numpy.png" })}
                
                    {makeTechnologyCard({ title: "Pandas", image: "/images/technologies/pandas.png" })}
            
                    {makeTechnologyCard({ title: "scikit", image: "/images/technologies/scikit.png" })}
                
                    {makeTechnologyCard({ title: "opencv", image: "/images/technologies/opencv.png" })}
                
                    {makeTechnologyCard({ title: "Keras", image: "/images/technologies/keras.jpeg" })}
                </div>
            </section>

            <Separator className="h-0 my-3"/> 

            <section className="w-full">
                {makeSectionTitle("Harware Design")}

                <div className="grid grid-cols-12 gap-2 gap-y-4">
                    {makeTechnologyCard({ title: "VHDL", image: "/images/technologies/vhdl.png" })}
                    
                    {makeTechnologyCard({ title: "Verilog", image: "/images/technologies/verilog.png" })}
                    
                    {makeTechnologyCard({ title: "FPGA", image: "/images/technologies/fpga.png" })}

                    {makeTechnologyCard({ title: "Intel Quartus", image: "/images/technologies/quartus.png" })}
                </div>
            </section>
        </main>
    );
}
 
export default Skills;