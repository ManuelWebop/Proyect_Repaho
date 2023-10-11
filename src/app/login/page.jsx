'use client'
import Navar from "../../components/navar/page"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import IconUser from '../../../public/svg/user.svg'
import Image from "next/image"
import IconInfo from '../../../public/svg/info.svg'
import IconEmail from '../../../public/svg/email.svg'
import IconKey from '../../../public/svg/key.svg'
import { signIn } from "next-auth/react"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password === '' || email === '') {
            toast.error("Fill all fields!")
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long")
            return
        }

        try {
            const res = await signIn('credentials', { email, password, redirect: false })

            if (res?.error == null) {
                router.push("/")
            } else {
                toast.error("Error occured while logging")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div>
            <header className="m-auto bg-no-repeat h-screen p-5 flex flex-col bg-center" id="header">
                <Navar />
                <Image className="fixed -z-10 -m-5 max-sm:h-screen w-full h-full max-sm:bg-center backdrop-blur-sm " src={`/images/casa_home.jpg`} width={5000} height={5000} alt='ola' />
                <div className="grid flex-auto justify-center">

                    <div className="flex flex-col bg-white rounded-lg m-auto p-10">
                        <div className=" px-80 py-3"></div>

                        <p className="mb-14 font-medium text-5xl">Login user...</p>
                        <form onSubmit={handleSubmit}>

                            <label className="flex text-gray-700 font-light mb-2"><Image src={IconInfo} alt="#" className="w-5 h-5 m-1" />Email</label>
                            <div className="flex hover:drop-shadow-xl duration-300">

                                <Image src={IconEmail} alt="#" className="flex rounded-l-lg bg-white border border-gray-300 p-3 pr-1 w-10 h-11 border-r-transparent" />
                                <input
                                    className="mb-5 h-11 w-full rounded-r-lg border border-l-transparent border-gray-300 bg-white text-gray-900 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                    type="text"
                                    placeholder="Email..."
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <label className="flex text-gray-700 font-light mb-2"><Image src={IconInfo} alt="#" className="w-5 h-5 m-1" />Password</label>
                            <div className="flex hover:drop-shadow-xl duration-300">
                                <Image src={IconKey} alt="#" className="flex rounded-l-lg bg-white border border-gray-300 p-3 pr-1 w-10 h-11 border-r-transparent" />
                                <input className="mb-5 h-11 w-full rounded-r-lg border border-l-transparent border-gray-300 bg-white text-gray-900 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button className=" bg-slate-900 text-white rounded-md w-full mt-10 p-5 font-bold hover:bg-yellow-400 hover:text-black duration-300">Iniciar</button>

                        </form>
                    </div>
                    <ToastContainer/>
                </div>
            </header>

        </div>
    )
}
