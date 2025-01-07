"use client"

import React from 'react'
import Cards from '../Cards'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Footer from '../Footer'
import { ModeToggle } from '@/components/ui/ModeToggle'
import { signOut, useSession } from 'next-auth/react'

const FindEvent = () => {

    const session = useSession();

    const router = useRouter();
    return (
        <div>
            <div className="flex items-center justify-center w-full">

                <nav className="flex items-center justify-center flex-wrap mx-20 my-10 w-full">
                    <Link href={"/"} className='mr-8 font-bold text-2xl'>Tournament-Hub</Link>
                    <input className=" border-none rounded-xl w-1/2 p-2 mr-5" placeholder="Search the Event" />
                    <div className="flex gap-5">
                        <Button>Search</Button>
                        {
                            session.status === "authenticated" ?
                                (<Button onClick={() => signOut("google")}>Logout</Button>) :
                                (<div>
                                    <Button className="mr-5" onClick={() => router.push("/login")}>Login</Button>
                                    <Button>Register</Button>
                                </div>)
                        }
                        <ModeToggle />
                    </div>
                </nav>

            </div>
            <div className='flex flex-wrap mx-20 mt-15'>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
            <div>
                <Footer />
            </div>
        </div>


    )
}

export default FindEvent