'use client'
import Image from 'next/image'
import Logo from 'public/images/perfil1.jpeg'
import React from 'react'
import NavarIconMovil from './user/iconUser'
import User from "@/components/navar/user/User"
import { BsSearch } from "react-icons/bs"
import { useRouter } from 'next/navigation'


const navigation = [
    { name: 'Home', href: '..', current: true },
    { name: 'Shop', href: '../shop', current: false },
    { name: 'About', href: './test/test', current: false },
    { name: 'Contact', href: '../#footer', current: false },
]


export default function Navar({ searchQuery }) {
    const router = useRouter()

    function handleSearch(evt) {
        evt.preventDefault()
        const form = evt.target
        router.push(`shop/?q=${form.q.value}`)
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <NavarIconMovil />
            <div className="mx-auto px-4 p-5 w-4/6 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="#">
                                <Image
                                    className="h-8 w-8"
                                    src={Logo}
                                    alt="Repaho"
                                />
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(

                                            'bg-[#353d53] text-white hover:bg-[#253342] duration-300 rounded-md flex px-4 py-2 text-sm font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full pl-14 ">
                        <div className=" bg-white rounded-xl hover:shadow-md hover:shadow-white/30 duration-200 p-1 w-full">
                            <form onSubmit={handleSearch} className="flex">
                                <input
                                    placeholder='Search'
                                    name="q"
                                    type="text"
                                    className="flex p-2 text-slate-700/90 rounded-l-lg focus:outline-none w-full"
                                />
                                <button className="flex p-3 bg-white rounded-full hover:bg-blue-900/90 fill-slate-950 hover:fill-white duration-200" type="submit">
                                    <BsSearch />
                                </button>
                            </form>
                        </div>
                    </div>
                    <User />

                </div>
            </div>






        </>
    )
}
