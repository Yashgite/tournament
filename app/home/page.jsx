"use client"
import React, { useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Home = () => {
    const session = useSession();   
    console.log(session);

    const router = useRouter(); 
    useEffect(()=>{
        if(session.status !== "authenticated"){
            router.push("/");
        }
    },[session.status])
    
  return (
    <div>
        Wellcome to the Home Page
        <div>
            <button 
            className="w-max px-4 py-2 font-bold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200" 
            onClick={()=> signOut("google")}>
            LogOut
            </button>
        </div>
    </div>
  )
}

export default Home