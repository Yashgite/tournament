"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";


const page = () => {
  const AnimatedButton = motion(Button);
  const router = useRouter();
  return (
    <div
    className="mx-auto my-20 items-center justify-center flex"
    
    >
      <AnimatedButton 
      whileTap={{scale:0.8}}
      whileHover={{scale:1.2}}
      initial={{scale:1}}
      className="p-5 text-2xl" onClick={()=> router.push("/blog") }>Blog</AnimatedButton>
    </div>
  )
}

export default page
// import Cards from "./Cards";
// import { ModeToggle } from "@/components/ui/ModeToggle";
// import { useTheme } from "next-themes";
// import Footer from "./Footer";
// 


// export default function Home() {
//   const AnimatedButton = motion(Button);
//   const {theme} = useTheme();
//   const router = useRouter();
//   return (
//     <div className="min-h-screen flex flex-col">
//   {/* Header Section */}
//   <header className={`w-full h-[45vh] flex flex-col justify-center items-center relative transition-all duration-300 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-300 text-black"}`}>
//     <motion.h1 
//      initial={{ opacity: 0, y: 50, scale:1.2 }}
//      animate={{ opacity: 1, y: 0 }}
//      transition={{ duration: 1.5 }}
//     className={`text-4xl font-bold mb-10 ${theme === "dark" ? "text-white ": "text-black "}`}>Tournament-Hub</motion.h1>

//     <div className="flex gap-6">
     
//       <AnimatedButton 
//       initial={{ x: -200, opacity: 0 }} // Start off-screen to the left
//       animate={{ x: 0, opacity: 1 }} // Animate to normal position
//       transition={{ duration: 1, ease: 'easeOut', delay:0.8 }}
//       variant="default">Create an Event</AnimatedButton>
      
      
      
//       <AnimatedButton 
//       initial={{ x: 200, opacity: 0 }} // Start off-screen to the right
//       animate={{ x: 0, opacity: 1 }} // Animate to normal position
//       transition={{ duration: 1, ease: 'easeOut', delay:0.8 }}
//       variant="default" onClick = {()=> router.push("/findevent")}>Find Event</AnimatedButton>
      
      
      
//     </div>

//     <div className="absolute top-4 right-4 md:top-4 md:right-4 flex flex-col items-center gap-4 w-full md:w-auto">
//     <ModeToggle/>
//     </div>

//     {/* Login and Register Buttons */}
//     {/* <div className="absolute top-4 right-4 md:top-4 md:right-4 flex flex-col items-center gap-4 w-full md:w-auto">
//       <Button
//         onClick={() => router.push("login")}
//         variant="default"
//       >
//         Login
//       </Button>
//       <Button
//         variant="default"
//         onClick={() => router.push("register")}
//       >
//         Register
//       </Button>
//     </div> */}
//   </header>

//       {/* Cards */}
//       <div className="p-6 mx-8">
//   {/* Featured Event */}
//   <section className="mb-8">
//     <h2 className="text-2xl font-bold mb-4 text-center">Featured Event</h2>
//     <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       <Cards/>
//       <Cards />
//       <Cards />
//       <Cards />
//     </main>
//   </section>

//   {/* Upcoming Event */}
//   <section className="mb-8">
//     <h2 className="text-2xl font-bold mb-4 text-center">Upcoming Event</h2>
//     <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       <Cards />
//       <Cards />
//       <Cards />
//       <Cards />
//     </main>
//   </section>

//   {/* Completed Event */}
//   <section className="mb-8">
//     <h2 className="text-2xl font-bold mb-4 text-center">Completed Event</h2>
//     <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       <Cards />
//       <Cards />
//       <Cards />
//       <Cards />
//     </main>
//   </section>
// </div>

//       <div>
//         <Footer/>
//       </div>
//     </div>
//   );
// }
