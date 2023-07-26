

import Publication from "@/components/shop/publication"
import Footer from "../../components/home/footer"
import Navar from "../../components/home/nav"


export async function fetchPublics() {
    const res = await fetch('http://localhost:3000/api/publicaction', { cache: 'no-store' })

    return res.json()
}

export default async function Shop() {
    const publics = await fetchPublics()

    return (
        <div className="bg-local md:block">
            <div className="bg-stone-800">
                <div className="flex p-5">
                    <Navar />
                </div>
                <div className="flex justify-center w-full max-sm:pt-10">

                </div>
            </div>

            <div className="flex flex-row bg-slate-100/30">
                <div className=" flex-col border border-slate-700/30 rounded-lg bg-teal-700/20 m-5 p-8 h-1/6 w-[14%]  shadow-lg hidden md:block">
                    <div className="flex">
                        <p className="text-4xl ml-1 font-semibold">Opciones</p>
                    </div>
                    <div className="flex flex-col mt-5">
                        <div className="flex flex-row m-0.5">
                            <input type="checkbox" name="Renta" id="#" /><p className="ml-2 font-semibold">Renta</p>
                        </div>
                        <div className="flex flex-row m-0.5">
                            <input type="checkbox" name="Renta" id="#" /><p className="ml-2 font-semibold">Venta</p>
                        </div>
                        <div className="flex flex-row m-0.5">
                            <input type="checkbox" name="Renta" id="#" /><p className="ml-2 font-semibold">Promocion</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-teal-100/10 border border-slate-700/30 m-5 p-3 w-5/6 rounded-lg shadow-lg max-sm:w-full min-h-fit">
                    {/*Futura configuracion para las publicaciones */}
                    {publics?.lenght > 0 && <h2>WebDevMania</h2>}
                    <div className=" mx-auto grid grid-cols-5 drop-shadow-lg max-sm:grid-cols-2 ">
                        {publics?.length > 0
                            ? publics.map((publicData) => (

                                <Publication key={publicData._id} publicData={publicData} />

                            ))
                            : (
                                <h3>No blogs are currently in the</h3>
                            )
                        }

                    </div>
                    {/* Mostrar los botones para componente*/}
                    <div className="flex flex-row justify-center m-5 font-bold text-white">
                        <button className=" bg-slate-900 m-3 w-10 h-10 rounded-full hover:bg-cyan-900 duration-300">
                        </button>
                        <button className="bg-slate-900 m-3 w-10 rounded-full hover:bg-cyan-900 duration-300 hover:text-yellow-300">1</button>
                        <button className="bg-slate-900 m-3 w-10 rounded-full hover:bg-cyan-900 duration-300 hover:text-yellow-300">2</button>
                        <button className="bg-slate-900 m-3 w-10 rounded-full hover:bg-cyan-900 duration-300 hover:text-yellow-300">3</button>
                        <button className="bg-slate-900 m-3 w-10 rounded-full hover:bg-cyan-900 duration-300">
                            <svg className="h-8 w-10 fill-white hover:text-yellow-300 duration-150 justify-center items-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
            <div className=" mt-[6.9rem]">

                <Footer />
            </div>
        </div>
    )
}