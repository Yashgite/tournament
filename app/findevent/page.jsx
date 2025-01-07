"use client"

import React from 'react'
import Cards from '../Cards'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Footer from '../Footer'

const FindEvent = () => {

    const router = useRouter();
    return (
        <div>
            <div className="flex items-center justify-center w-full">

                <nav className="flex items-center justify-center flex-wrap mx-20 my-10 w-full">
                    <Link href={"/"} className='mr-8 font-bold text-2xl'>Tournament-Hub</Link>
                    <input className="border-none w-1/2 p-2 mr-5" placeholder="Search the Event" />
                    <div className="flex gap-5">
                        <Button>Search</Button>
                        <Button onClick={()=> router.push("/login")}>Login</Button>
                        <Button>Register</Button>
                    </div>
                </nav>

            </div>
            <div className='flex flex-wrap mx-20 mt-20'>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
            <div>
                <Footer/>
            </div>
        </div>


    )
}

export default FindEvent