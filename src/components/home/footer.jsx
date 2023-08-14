
import { AiFillGithub, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai' 
import {SiGmail} from 'react-icons/si'


import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="flex flex-col bg-yellow-200 border border-t-black">
                <div className="flex flex-col justify-center border-b-black border border-x-transparent border-t-transparent m-5 pb-5">
                    <p className="text-center m-3">Redes sociales donde pueden comunicarse</p>
                    <div className="flex flex-row justify-center">

                        <button className="p-1 m-2 transition ease-in-out delay-100 bg-yellow-400 border border-black rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
                            <SiGmail alt="#" className="w-10" />
                        </button>
                        <button className="p-1 m-2 transition ease-in-out delay-100 bg-yellow-400 border border-black rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300">
                            <AiFillInstagram alt="#" className="w-10" />
                        </button>
                        <button className="p-1 m-2 transition ease-in-out delay-100 bg-yellow-400 border border-black rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300">
                            <AiOutlineWhatsApp alt="#" className="w-10" />
                        </button>
                        <button className="p-1 m-2 transition ease-in-out delay-100 bg-yellow-400 border border-black rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
                            <AiFillGithub alt="#" className="w-10" />
                        </button>

                    </div>
                </div>


            </footer>
        </div>
    )
}