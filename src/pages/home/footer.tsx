import Image from 'next/image'

import LogoIcon1 from '../svg/icons8-facebook.svg'
import LogoIcon2 from '../svg/icons8-instagram.svg'
import LogoIcon3 from '../svg/icons8-git.svg'
import LogoIcon4 from '../svg/icons8-github.svg'

export default function Footer() {
    return (
        <footer className="flex flex-col bg-slate-400/30 border border-t-black">
            <div className="flex flex-col justify-center border-b-black border border-x-transparent border-t-transparent m-5 pb-5">
                <p className="text-center m-3">Redes sociales donde pueden comunicarse</p>
                <div className="flex flex-row justify-center">

                    <button className="p-1 m-2 transition ease-in-out delay-100 bg-slate-400 border border-black rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
                        <Image src={LogoIcon1} alt="#" className="w-10" />
                    </button>
                    <button className="p-1 m-2 transition ease-in-out delay-100 bg-slate-400 border border-black rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300">
                        <Image src={LogoIcon2} alt="#" className="w-10" />
                    </button>
                    <button className="p-1 m-2 transition ease-in-out delay-100 bg-slate-400 border border-black rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-orange-600 duration-300">
                        <Image src={LogoIcon3} alt="#" className="w-10" />
                    </button>
                    <button className="p-1 m-2 transition ease-in-out delay-100 bg-slate-400 border border-black rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
                        <Image src={LogoIcon4} alt="#" className="w-10" />
                    </button>

                </div>
            </div>


        </footer>
    )
}