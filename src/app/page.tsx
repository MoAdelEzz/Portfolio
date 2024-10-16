'use client'

import Image from "next/image";

export default function Home() {



  return (
    
    <main className="w-full h-full px-6 lg:px-[12.5%] mt-28 lg:-mt-14 bg-background flex flex-col lg:flex-row justify-center items-center gap-2">

      <div className="text-foreground flex-1 order-2 lg:order-1">
        <h1 className="text-4xl lg:text-6xl text-center font-extrabold mb-4">Mohammed Adel</h1>

        <p className="break-words text-muted-foreground">
          I am a software engineer & senior computer engineering student at Cairo University, 
          with a strong focus on full-stack web development. building user-friendly frontend and scalable backends, 
          along with a solid understanding of core programming concepts and best practices in web security and other low level and hardware design concepts and applications.
          Eager to contribute to impactful projects and continuously expand my knowledge in the field.
        </p>
      </div>


      <div className="flex-1 order-1 lg:order-2">
          <Image 
          src={"/images/me.jpg"}
          width={3000}
          height={3000}
          className="rounded-full shadow-lg"
          alt="Profile Pic"
          />
      </div>


    </main>
  );
}
