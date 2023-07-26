'use client'
import Navar from '../components/home/nav'
import Info from '../components/home/info'
import Footer from '../components/home/footer'
import Image from 'next/image'


import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Info_p2 from '@/components/home/info_p2'
import Info_p3 from '@/components/home/info_p3'
import Perfil from '@/components/home/perfil'



export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 4000 })
    }, [])

    return (

        <div>

            <header className="m-auto bg-no-repeat header h-screen p-5 flex flex-col bg-center">
           <Navar/>

                <Image className="fixed -z-10 -m-5 max-sm:h-screen w-full h-full max-sm:bg-center" src={`/images/casa_home.jpg`} width={5000} height={5000} alt='ola' />

                <div className="flex flex-row justify-center items-center mt-32 h-2/3 max-sm:w-full max-sm:h-auto max-sm:mt-44 ">

                    <div className="flex flex-col rounded-xl backdrop-blur-sm bg-white/30 select-none w-3/5 text-center max-sm:w-full">
                        <div className="flex flex-col m-10 max-sm:h-auto">

                            <p className="text-9xl max-sm:text-7xl m-auto mb-20 max-sm:mb-0 font-bold text-slate-50 drop-shadow-2xl border-2 border-transparent border-b-gray-700/40">Repaho</p>
                        </div>

                        <div className="flex flex-row max-sm:flex-col m-28 max-sm:m-2 mt-0 justify-center max-sm:mb-5">
                            <p className="flex mt-2 mr-5 text-gray-900 font-medium max-sm:m-5">Aqui puedes buscar tu proximo hogar</p>
                            <button className="flex w-32 h-10 max-sm:w-full justify-center items-center rounded-lg bg-slate-950 text-white hover:bg-slate-900 duration-300 max-sm:items-center">Shop</button>
                        </div>
                    </div>
                </div>

            </header>


            {/* Parte donde se muestran opciones */}
            <div className="bg-white">

                <Info />
            </div>


            {/* Parte 2 de info */}
            <div id="info">
                <Info_p2 />
            </div>

            {/* Parte 3 de info */}
            <div className="bg-white">
                <Info_p3 />
            </div>

            <div className="flex:row bg-zinc-950 p-10">
                <Perfil />
            </div>

            <div id="footer" className='bg-white'>

                <Footer />
            </div>

        </div>
    )
}