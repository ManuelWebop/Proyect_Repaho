import Image from 'next/image'

export default function Perfil(){
    return(
        <div className="flex max-sm:flex-col justify-center flex:row bg-zinc-950 p-10">
                    <div className="ml-10 max-sm:ml-0">

                        <p className="m-10 text-white font-bold text-4xl">Organizadores de este Negocio</p>
                    </div>

                    <div className="w-80 max-sm:w-auto flex:col m-5">
                        <Image src={'/images/perfil2.jpg'} width={200} height={200} alt="#" className="h-60 w-80" />
                        <p className="text-white font-bold text-2xl">Blanco Hernandez</p>
                        <p className="text-slate-400">Gobernante super potente es solamente el mejor de todos</p>
                    </div>
                    <div className="w-80 max-sm:w-auto flex:col m-5">
                        <Image src={'/images/perfil1.jpeg'} width={200} height={200} alt="#" className="h-60 w-80" />
                        <p className="text-white font-bold text-2xl">Phil Pillin</p>
                        <p className="text-slate-400">Gobernante super potente es solamente el mejor de todos</p>
                    </div>
                    <div className="w-80 max-sm:w-auto flex:col m-5">
                        <Image src={'/images/perfil3.jpeg'} alt="#"width={200} height={200} className="h-60 w-80" />
                        <p className="font-bold text-2xl text-white">Ramon Lopez</p>
                        <p className="text-slate-400">Gobernante super potente es solamente el mejor de todos</p>
                    </div>
                </div>
    )
}