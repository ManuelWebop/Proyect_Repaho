import Image from 'next/image'

import LogoIcon1 from '../svg/icons8-facebook.svg'
import LogoIcon2 from '../svg/icons8-instagram.svg'
import LogoIcon3 from '../svg/icons8-git.svg'
import LogoIcon4 from '../svg/icons8-github.svg'

export default function Footer(){
    return(
        <footer className=" bg-violet-800/20 p-10">
                <div className="flex justify-center border-b-black border border-x-transparent border-t-transparent">
                    <button className="p-1 m-4 transition ease-in-out delay-100 bg-pink-700/50 border border-black rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
                    <Image src={LogoIcon1} alt="#" className="w-10" />
                    </button>
                    <button className="p-1 m-4 transition ease-in-out delay-100 bg-pink-700/50 border border-black rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300">
                        <Image src={LogoIcon2} alt="#" className="w-10" />
                    </button>
                    <button className="p-1 m-4 transition ease-in-out delay-100 bg-pink-700/50 border border-black rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300">
                    <Image src={LogoIcon3} alt="#" className="w-10" />
                    </button>
                    <button className="p-1 m-4 transition ease-in-out delay-100 bg-pink-700/50 border border-black rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
                    <Image src={LogoIcon4} alt="#" className="w-10" />
                    </button>

                </div>

                <p className="text-center text-xl mt-3 text-slate-900">Sigenos en nuestras redes sociales</p>
            </footer>
    )
}