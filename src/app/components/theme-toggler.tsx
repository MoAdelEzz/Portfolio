'use client'

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { FunctionComponent } from "react";


interface ThemeTogglerProps {
    
}
 
const ThemeToggler: FunctionComponent<ThemeTogglerProps> = () => {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (  
        <Button onClick={() => toggleTheme()} suppressHydrationWarning className="bg-transparent text-foreground hover:bg-transparent hover:text-foreground">
            {(theme ?? "dark") === 'dark'? (
                <Sun className="text-foreground"/>
            ) : (
                <Moon className="text-foreground"/>
            )}
        </Button>
    );
}
 
export default ThemeToggler;