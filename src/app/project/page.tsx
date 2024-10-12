'use client'
import { Separator } from "@radix-ui/react-separator";
import { FunctionComponent } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faEye } from '@fortawesome/free-solid-svg-icons';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

interface ProjectsProps {
    
}

type ProjectItem = {
    title: string,
    tags: string[]|undefined,
    description: string,
    github: string | undefined,
    technologies: string[] | undefined,
    link: string | undefined,
}
 
const Projects: FunctionComponent<ProjectsProps> = () => {

    const makeProjectCard = (project: ProjectItem) => {
        return <div 
        key={"project"+project.title}
        className="w-full lg:w-[45%] max-h-64 flex py-4 pl-2 border-2 bg-background border-border rounded-xl">
            <div className="w-1/4 px-4 h-full"> 
                <div className="w-full h-full flex flex-col gap-2 items-center justify-start">
                    {project.technologies?.map((tech: string, idx: number) => {
                        return <Avatar>
                            <AvatarImage src={"/images/technologies/" + tech} alt={tech} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    })}
                </div>
            </div>


            <div className="w-full flex flex-col gap-2 relative"> 
                <h1 className="text-xl font-extrabold">{project.title}</h1>
                <h2 className="flex flex-wrap gap-2">{project.tags?.map((tag: string, idx: number) => {
                    return <span 
                    key={"project-"+project.title+"tag-"+idx}
                    className="rounded-3xl capitalize text-xs text-muted-foreground w-fit text-center border-2 border-border px-4 py-1">{tag}</span>
                })}</h2>

                <p className="text-xs text-muted-foreground">
                    {project.description}
                </p>


                <span id="filler" className="h-full"></span>

                <span className="w-full text-end space-x-6 absolute top-0 right-8">
                    { project.github &&
                        <a href={project.github} target="_blank">
                            <FontAwesomeIcon className="w-4 h-4 text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-all" icon={faGithub}/>
                        </a>
                    }

                    {   project.link &&
                        <a href={project.link} target="_blank">
                            <FontAwesomeIcon className="w-4 h-4 text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-all" icon={faArrowUpRightFromSquare}/>
                        </a>
                    }
                </span>
            </div>
        </div>
    }

    const projectsList : ProjectItem[] = [
        { 
            title: "Wassup Chat",
            tags: ["web", "realtime", "chat", "o-Auth", "js"],
            description: "I developed a real-time chatting application akin to WhatsApp, incorporating features such as" +
                        " messaging, media management via Firebase Storage services, and user authentication using Twilio for" +
                        " phone verification and Google OAuth. I also managed user sessions for authentication.",
            github: "https://github.com/MoAdelEzz/whatsapp-clone",
            technologies: ["next.webp", "nodejs.png", "mongo.svg"],
            link: "https://wassup-moadelezzs-projects.vercel.app"
        },

        { 
            title: "Gigachat",
            tags: ["android", "cross platform", "social media", "agile", "flutter"],
            description: "I developed a real-time chatting application akin to WhatsApp, incorporating features such as" +
                        " messaging, media management via Firebase Storage services, and user authentication using Twilio for" +
                        " phone verification and Google OAuth. I also managed user sessions for authentication.",
            github: "https://github.com/MoAdelEzz/X-Clone",
            technologies: ["flutter-2.png"],
            link: "https://drive.google.com/drive/folders/1DY1-h46VmsN8AZkziuOnrf2_ndrzl79P?usp=sharing"
        },

        { 
            title: "Laptopia",
            tags: ["web", "ecommerce", "angular", "php", "admin panel", "e-shop"],
            description: "An e-commerce application with features including a shopping cart, order review, user authentication, admin dashboard, product reviews, reports, and a wishlist. the application was deployed using Heruko",
            github: "https://github.com/MoAdelEzz/Laptopia",
            technologies: ["angular.png", "php.png", "mysql.png"],
            link: "https://www.linkedin.com/posts/mohammed-adel-mohammed-ezz-eldin-115609245_%D8%A7%D9%84%D8%AD%D9%85%D8%AF-%D9%84%D9%84%D9%87-%D9%88-%D9%81%D9%8A-%D8%B4%D9%87%D8%B1-%D8%B9%D9%85%D9%84-%D8%AC%D9%85%D8%A8-%D8%A8%D8%B1%D9%88%D8%AC%D9%83%D8%AA-%D8%A7%D9%84%D8%A7%D8%B3%D9%85%D8%A8%D9%84%D9%8A-activity-7024826675569778688--gh8?utm_source=share&utm_medium=member_desktop"
        },

        { 
            title: "Doodle",
            tags: ["web", "search engine", "crawling", "query engine", "indexing", "web simulation"],
            description: "We built a search engine using Java Spring Boot, featuring web crawling via DFS, indexing with an inverted index, and a query engine that ranks results using a custom ranking algorithm.",
            github: "https://github.com/MoAdelEzz/Doodle-Search-Engine",
            technologies: ["react.png", "Java.png", "mongo.svg"],
            link: "https://www.linkedin.com/posts/mohammed-adel-mohammed-ezz-eldin-115609245_im-thrilled-to-share-that-we-me-and-my-activity-7076886519717707776-u96f?utm_source=share&utm_medium=member_desktop"
        },

        { 
            title: "Unpredictable Game",
            tags: ["game", "game dev", "2d", "indie games", "c#"],
            description: "Lead the wanderer home, where the end is just the beginning of stories etched in the footsteps of the journey. unpredictable is a game of the same idea as trap adventure where the player should face some unlogical or unexpected traps and obstacles to reach a destination for 10 different levels",
            github: undefined,
            technologies: ["c-sharp.png", "unity.png"],
            link: "https://www.facebook.com/profile.php?id=61554777404207"
        },

        { 
            title: "OS Scheduler Simulator",
            tags: ["os", "kernel", "linux", "schedule algorithm", "memory management", "IPC"],
            description: "The project aimed to showcase the functionality and effectiveness of these scheduling and memory management algorithms in a simulated operating system environment. By simulating process execution and memory allocation, it provided insights into the performance and efficiency of different algorithms in handling varying workloads and memory requirements.",
            github: "https://github.com/MoAdelEzz/Operating-System-Project",
            technologies: ["linux.png", "C.png"],
            link: undefined
        },

        { 
            title: "x32 Harvard Processor",
            tags: ["vhdl", "hardware", "logic design", "assembly", "quartus"],
            description: "in this project i had created a full operating processor a set of 32 instructions all implemented using hardware only no software solutions were included, i also made an assembler for the processor to write any program you would like.",
            github: "https://github.com/MoAdelEzz/Five-Stage-Pipelined-Processor",
            technologies: ["vhdl.png"],
            link: undefined
        },

        { 
            title: "Opengl Game Engine",
            tags: ["cpp", "game dev", "opengl", "shaders", "gpu", "opengl", "3d", "game design"],
            description: "in this project, we managed to make a 3d game engine that provides different kind of features such as physics, lighting, models chaching and more. we used this game engine to develop a game that is aclone of rocket league",
            github: "https://github.com/MoAdelEzz/Potato-League",
            technologies: ["cpp.png", "opengl.png"],
            link: "https://drive.google.com/file/d/1evlm-RldDfix9a3eADACGUq1K2fUbfeW/view"
        },

        { 
            title: "Sharingan",
            tags: ["java", "computer vision", "embedded systems", "line follower", "opencv", "image processing"],
            description: "in this project i successfully made an image processing unit that was responsible for detecting lines of a track for a line follower robot, the goal was to detect the location of curves so that we communicate with the embedded system to slowdown the car via bluetooth inside a kotlin application",
            github: "https://github.com/MoAdelEzz/Sharingan",
            technologies: ["java.png", "opencv.png"],
            link: undefined
        }
    ]


    return (  
        <main className="w-full h-full overflow-y-scroll px-2 lg:px-[12.5%] mt-4 bg-background flex flex-col justify-stary items-center gap-2">
            <h1 className="text-6xl tracking-widest font-bold">
                Projects
            </h1>


            <Separator className="h-0 my-4"/>

            <div className="w-full flex justify-between gap-y-8 flex-wrap">
                {projectsList.map((project) =>{
                    return makeProjectCard(project)
                })}
                
            </div>


        </main>
    );
}
 
export default Projects;