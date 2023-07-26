'use client'
import Back from '@/components/register/back'
import Form from '@/components/register/form'
import Image from "next/image"
import IconUser from '../../../public/svg/user.svg'
import IconInfo from '../../../public/svg/info.svg'
import IconEmail from '../../../public/svg/email.svg'
import IconMex from '../../../public/svg/mx.svg'
import IconKey from '../../../public/svg/key.svg'

import {signIn} from 'next-auth/react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import React, { useState } from 'react'


export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (username === '' || email === '' || password === '') {
            toast.error("Fill all fields")
            return
        }
        if (password.length < 10) {
            toast.error("Password must be at least 10 characters")
            return
        }

        try {
            const res = await fetch('http://localhost:3000/api/register', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ username, email, password })
            })
            console.log(await res.json())
            if (res.ok) {
                toast.success("Successfully registered the user")
                setTimeout(() => {
                    signIn()
                }, 1500)
                return
            } else {
                toast.error("Errror ocurred while registering")
                return
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (

        <div className="bg-cover object-cover flex max-sm:flex-col h-screen">
            <Image className="fixed -z-10 max-sm:h-screen w-full h-full max-sm:bg-center" src={`/images/casa_home.jpg`} width={1000} height={1000} alt='#' />
            <Back />
            <div className="w-1/2 max-sm:w-full max-sm:h-1/2 bg-yellow-500/20">
                <div className="flex bg-gray-300 rounded-xl m-[2.47rem] max-sm:m-5">
                    <form onSubmit={handleSubmit} className="flex flex-col p-10 w-full max-sm:w-1/2">

                        <label className="flex qtext-gray-700 font-light text-sm mb-2"><Image src={IconInfo} alt="#" className="w-5 h-5 m-1" />User Name</label>
                        <div className="flex hover:drop-shadow-xl duration-300">
                            <Image src={IconUser} alt="#" className="flex rounded-l-lg bg-white border border-gray-300 p-3 pr-1 w-10 h-11 border-r-transparent " />
                            <input
                                className="mb-5 h-11 w-full rounded-r-lg border border-l-transparent border-gray-300 bg-white text-gray-900 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                type="text"
                                placeholder="Username..."
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>


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
                        {/* Proximamente
                            <label className="flex text-gray-700 font-light mb-2"><Image src={IconInfo} alt="#" className="w-5 h-5 m-1" />Date</label>
                            <div className="flex hover:drop-shadow-xl duration-300">
                                
                                <input className="mb-5 h-11 w-full rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                    type="month"
                                    placeholder="Day / Month / Year" />
                            </div>

                            <label className="flex text-gray-700 font-light mb-2"><Image src={IconInfo} alt="#" className="w-5 h-5 m-1" />Phone</label>
                            <div className="flex hover:drop-shadow-xl duration-300">
                                <Image src={IconMex} alt="#" className="flex rounded-l-lg bg-white border border-gray-300 p-3 pr-1 w-10 h-11 border-r-transparent" />
                                <input className="mb-5 h-11 w-full rounded-r-lg border border-l-transparent border-gray-300 bg-white text-gray-900 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                    type="text"
                                    placeholder="Phone" />
                            </div>

                        */}
                        <label className="flex text-gray-700 font-light mb-2"><Image src={IconInfo} alt="#" className="w-5 h-5 m-1" />Password</label>
                        <div className="flex hover:drop-shadow-xl duration-300">
                            <Image src={IconKey} alt="#" className="flex rounded-l-lg bg-white border border-gray-300 p-3 pr-1 w-10 h-11 border-r-transparent" />
                            <input className="mb-5 h-11 w-full rounded-r-lg border border-l-transparent border-gray-300 bg-white text-gray-900 focus:outline-none focus:bg-slate-200 px-4 py-2 duration-500"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <button className=" bg-slate-900 text-white rounded-md m-5 h-10 font-bold hover:bg-yellow-400 hover:text-black duration-300">Crear</button>
                    </form>
                </div>
            </div>

            <ToastContainer/>
        </div>
    )
}