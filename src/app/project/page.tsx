'use client'
import { Separator } from "@radix-ui/react-separator";
import { FunctionComponent } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faEye } from '@fortawesome/free-solid-svg-icons';


interface ProjectsProps {
    
}


type ProjectItem = {
    title: string,
    tags: string[]|undefined,
    description: string,
    demo: string | undefined,
    github: string | undefined,
    image: string | undefined,
    technologies: string[] | undefined,
    link: string | undefined,
}
 
const Projects: FunctionComponent<ProjectsProps> = () => {

    const makeProjectCard = (project: ProjectItem) => {
        return <div className="w-full lg:w-[45%] max-h-64  flex py-4 border-2 bg-background border-border rounded-xl">
            <div className="w-1/4 px-4 h-full"> 
                <div className="w-full h-full flex flex-col gap-2 items-center justify-start">
                    {project.technologies?.map((tech: string) => {
                        return <Image src={"/images/technologies/" + tech} width={50} height={50} 
                        className={`w-[90%] h-[90%] object-scale-down`} alt={"tech"} />
                    })}
                </div>
            </div>


            <div className="w-full flex flex-col gap-2"> 
                    <h1 className="text-xl font-extrabold">{project.title}</h1>
                    <h2 className="flex flex-wrap gap-2">{project.tags?.map((tag: string, idx: number) => {
                        return <span className="rounded-3xl capitalize text-xs text-muted-foreground w-fit text-center border-2 border-border px-4 py-1">{tag}</span>
                    })}</h2>

                    <p className="text-xs text-muted-foreground">
                        {project.description}
                    </p>


                    <span id="filler" className="h-full"></span>

                    <span className="w-full text-end px-8 space-x-6">
                        { project.github &&
                            <a href={project.github} target="_blank">
                                <FontAwesomeIcon className="w-4 h-4 text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-all" icon={faGithub}/>
                            </a>
                        }

                        { project.demo &&
                            <a href={project.demo} target="_blank">
                                <FontAwesomeIcon className="w-4 h-4 text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-all" icon={faEye}/>
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
            tags: ["web", "realtime", "chat", "oAuth"],
            description: "I developed a real-time chatting application akin to WhatsApp, incorporating features such as" +
                        " messaging, media management via Firebase Storage services, and user authentication using Twilio for" +
                        " phone verification and Google OAuth. I also managed user sessions for authentication.",
            demo: undefined,
            github: "https://github.com/MoAdelEzz/whatsapp-clone",
            image: "/images/projects/wassup.png",
            technologies: ["next.webp", "nodejs.png", "mongo.svg"],
            link: "https://wassup-moadelezzs-projects.vercel.app"
        },

        { 
            title: "Gigachat",
            tags: ["cross platform", "social media", "agile", "flutter", "mobile"],
            description: "I developed a real-time chatting application akin to WhatsApp, incorporating features such as" +
                        " messaging, media management via Firebase Storage services, and user authentication using Twilio for" +
                        " phone verification and Google OAuth. I also managed user sessions for authentication.",
            demo: undefined,
            github: "https://github.com/MoAdelEzz/whatsapp-clone",
            image: "/images/projects/gigachat.png",
            technologies: ["flutter-2.png"],
            link: "https://wassup-moadelezzs-projects.vercel.app"
        },

        { 
            title: "Laptopia",
            tags: ["ecommerce", "angular", "php", "admin panel", "e-shop"],
            description: "An e-commerce application with features including a shopping cart, order review, user authentication, admin dashboard, product reviews, reports, and a wishlist. the application was deployed using Heruko",
            demo: undefined,
            github: "https://github.com/MoAdelEzz/whatsapp-clone",
            image: "/images/projects/laptopia.png",
            technologies: ["angular.png", "php.png", "mysql.png"],
            link: "https://wassup-moadelezzs-projects.vercel.app"
        },

        { 
            title: "Doodle",
            tags: ["web", "realtime", "chat", "oAuth"],
            description: "We built a search engine using Java Spring Boot, featuring web crawling via DFS, indexing with an inverted index, and a query engine that ranks results using a custom ranking algorithm.",
            demo: undefined,
            github: "https://github.com/MoAdelEzz/whatsapp-clone",
            image: "/images/projects/laptopia.png",
            technologies: ["react.png", "java.png", "mongo.svg"],
            link: "https://wassup-moadelezzs-projects.vercel.app"
        },

        { 
            title: "Unpredictable Game",
            tags: ["game dev", "2d", "indie games", "c#"],
            description: "Lead the wanderer home, where the end is just the beginning of stories etched in the footsteps of the journey. unpredictable is a game of the same idea as trap adventure where the player should face some unlogical or unexpected traps and obstacles to reach a destination for 10 different levels",
            demo: undefined,
            github: "https://github.com/MoAdelEzz/whatsapp-clone",
            image: "/images/projects/laptopia.png",
            technologies: ["C-sharp.png", "unity.png"],
            link: "https://wassup-moadelezzs-projects.vercel.app"
        },

        { 
            title: "Process Scheduler Simulator",
            tags: ["os", "kernel", "linux", "schedule algorithm", "memory management", "IPC"],
            description: "The project aimed to showcase the functionality and effectiveness of these scheduling and memory management algorithms in a simulated operating system environment. By simulating process execution and memory allocation, it provided insights into the performance and efficiency of different algorithms in handling varying workloads and memory requirements.",
            demo: undefined,
            github: "https://github.com/MoAdelEzz/whatsapp-clone",
            image: "/images/projects/laptopia.png",
            technologies: ["linux.png", "C.png"],
            link: "https://wassup-moadelezzs-projects.vercel.app"
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