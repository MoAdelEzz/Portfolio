'use client'

import { FunctionComponent } from "react";
import {  Brain, Code, CodeXml, Contact, Info, Menu, TableProperties } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Link from "next/link";
import ThemeToggler from "./theme-toggler";

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => {
    const hideOnSmall = "hidden lg:block"
    const pages = [
        { title: 'About', path: '/', icon: <Info  className={hideOnSmall}/>},
        { title: 'Skills', path: '/skills', icon: <Code  className={hideOnSmall}/> },
        { title: 'Experience', path: '/experience', icon: <Brain  className={hideOnSmall}/> },
        { title: 'Projects', path: '/project', icon: <TableProperties className={hideOnSmall}/>}
    ]

    return (  
        <nav suppressHydrationWarning className="
        sticky top-0
        w-full h-14 text-xs 
        flex justify-between flex-wrap items-center
        px-2 lg:px-[12.5%] bg-background z-[100]
        dark:border-b-[0.25px] border-foreground/20">
            <Link href={pages[0].path}>
                <Button 
                className="h-full flex items-center gap-2 text-foreground text-xl hover:bg-transparent hover:text-foreground/50 bg-transparent">
                    <CodeXml /> 
                    <h1 className="tracking-wider">MoA</h1>
                </Button>
            </Link>


            {/* Large View */}
            <div className="hidden h-full lg:block">
                <ul className="flex gap-2 h-full text-white ">
                    {pages.map((page, index) => (
                        <li key={index}>
                            <Link className="" href={page.path}>
                                <Button className="flex gap-2
                                text-foreground hover:bg-background/50 hover:text-foreground/50 text-md bg-transparent h-full">
                                    {page.icon}
                                    {page.title}
                                </Button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/*  Mobile View */}
            <div className="block lg:hidden">
                <Drawer>
                    <DrawerTrigger asChild>
                    <Button className="bg-background hover:bg-background/50"> <Menu className="text-foreground" /> </Button>
                    </DrawerTrigger>
                    <DrawerContent className="bg-backgrond border-none" draggable={false}>   
                        <ul className="flex flex-col gap-2 w-full text-foreground bg-background ">
                            {pages.map((page, index) => (
                                <li key={index}>
                                    <Link href={page.path}>
                                        <Button className="flex gap-2 py-8
                                        text-white text-md bg-transparent w-full">
                                            {page.icon}
                                            {page.title}
                                        </Button>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </DrawerContent>
                </Drawer>
            </div>

            <ThemeToggler></ThemeToggler>
        </nav>
    );
}
 
export default Navbar;