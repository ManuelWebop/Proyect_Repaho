import Image from 'next/image'
import Perfil1 from '../images/perfil1.jpeg'
import Perfil2 from '../images/perfil2.jpg'
import Perfil3 from '../images/perfil3.jpeg'

export default function Perfil(){
    return(
        <div className="flex max-sm:flex-col justify-center">
                    <div className="ml-10 max-sm:ml-0">

                        <p className="m-10 text-white font-bold text-4xl">Organizadores de este Negocio</p>
                    </div>

                    <div className="w-80 max-sm:w-auto flex:col m-5">
                        <Image src={Perfil2} alt="#" className="h-60 w-80" />
                        <p className="text-white font-bold text-2xl">Blanco Hernandez</p>
                        <p className="text-slate-400">Gobernante super potente es solamente el mejor de todos</p>
                    </div>
                    <div className="w-80 max-sm:w-auto flex:col m-5">
                        <Image src={Perfil1} alt="#" className="h-60 w-80" />
                        <p className="text-white font-bold text-2xl">Phil Pillin</p>
                        <p className="text-slate-400">Gobernante super potente es solamente el mejor de todos</p>
                    </div>
                    <div className="w-80 max-sm:w-auto flex:col m-5">
                        <Image src={Perfil3} alt="#" className="h-60 w-80" />
                        <p className="font-bold text-2xl text-white">Ramon Lopez</p>
                        <p className="text-slate-400">Gobernante super potente es solamente el mejor de todos</p>
                    </div>
                </div>
    )
}