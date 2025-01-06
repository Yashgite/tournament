"use client";

import React,{useEffect} from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation' 

const Page = () => {
    const session = useSession();
    console.log(session);

    const router = useRouter();

    useEffect(()=>{
        if(session.status === "authenticated"){
            router.push("/home");
        }
    },[session.status])
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-black text-center">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" id="username" name="username" className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200">Login</button>
                </form>
                <div className="flex items-center justify-center mt-4">
                    <span className="text-sm text-gray-600">or</span>
                </div>
                <button 
                    className="w-full px-4 py-2 font-bold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200" 
                    onClick={()=> signIn("google")}>
                        Login with Google
                </button>
            </div>
        </div>
    )
}

export default Page