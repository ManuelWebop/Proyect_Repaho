import NavarTwo from "./home/navtwo"
import Seach_ from "./shop/busqueda"
import Image from "next/image"
import Casa1 from "./images/casa2.jpg"
import Casa2 from "./images/casa1.jpeg"

import Footer from "./home/footer"


export default function Shop() {
    return (
        <div className="bg-local">
            <nav className="text-center flex flex-row bg-stone-800">
                <Seach_ />
                <div className="mt-7 w-[40%] text-white">
                    <NavarTwo />
                </div>
            </nav>

            <div className="flex flex-row bg-slate-100/30">
                <div className="flex flex-col border border-slate-700/30 rounded-lg bg-teal-700/20 m-5 p-8 h-1/6 w-1/4">
                    <div className="flex">
                        <p className="text-4xl ml-1 font-thin">Opciones</p>
                    </div>
                    <div className="flex flex-col mt-5">
                        <div className="flex flex-row m-0.5">
                            <input type="checkbox" name="Renta" id="#" /><p className="ml-2 font-thin">Renta</p>
                        </div>
                        <div className="flex flex-row m-0.5">
                            <input type="checkbox" name="Renta" id="#" /><p className="ml-2 font-thin">Venta</p>
                        </div>
                        <div className="flex flex-row m-0.5">
                            <input type="checkbox" name="Renta" id="#" /><p className="ml-2 font-thin">Promocion</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-teal-700/20 border border-slate-700/30 m-5 w-5/6 rounded-lg">
                    <div className="grid grid-cols-5">

                        <div className="flex flex-col bg-white m-1">
                            <div className="flex h-full">
                                <Image src={Casa2} alt="#" className="flex w-full" />
                            </div>
                            <div className="m-3">
                                <p>Ubicacion</p>
                                <p>Name de Usuario</p>
                                <p>Precio: $500</p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white m-1">
                            <div className="flex h-full">
                                <Image src={Casa2} alt="#" className="flex w-full" />
                            </div>
                            <div className="m-3">
                                <p>Ubicacion</p>
                                <p>Name de Usuario</p>
                                <p>Precio: $500</p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white m-1">
                            <div className="flex h-full">
                                <Image src={Casa1} alt="#" className="flex w-full" />
                            </div>
                            <div className="m-3">
                                <p>Ubicacion</p>
                                <p>Name de Usuario</p>
                                <p>Precio: $500</p>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white m-1">
                            <div className="flex h-full">
                                <Image src={Casa1} alt="#" className="flex w-full" />
                            </div>
                            <div className="m-3">
                                <p>Ubicacion</p>
                                <p>Name de Usuario</p>
                                <p>Precio: $500</p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white m-1">
                            <div className="flex h-full">
                                <Image src={Casa1} alt="#" className="flex w-full" />
                            </div>
                            <div className="m-3">
                                <p>Ubicacion</p>
                                <p>Name de Usuario</p>
                                <p>Precio: $500</p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white m-1">
                            <div className="flex h-full">
                                <Image src={Casa1} alt="#" className="flex w-full" />
                            </div>
                            <div className="m-3">
                                <p>Ubicacion</p>
                                <p>Name de Usuario</p>
                                <p>Precio: $500</p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white m-1">
                            <div className="flex h-full">
                                <Image src={Casa1} alt="#" className="flex w-full" />
                            </div>
                            <div className="m-3">
                                <p>Ubicacion</p>
                                <p>Name de Usuario</p>
                                <p>Precio: $500</p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white m-1">
                            <div className="flex h-full">
                                <Image src={Casa1} alt="#" className="flex w-full" />
                            </div>
                            <div className="m-3">
                                <p>Ubicacion</p>
                                <p>Name de Usuario</p>
                                <p>Precio: $500</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center m-5 font-bold text-white">
                        <button className=" bg-slate-900 m-3 w-10 h-10 rounded-full hover:bg-cyan-900 duration-300">
                        <svg className="fill-white hover:fill-yellow-300 duration-150 justify-center items-center" version="1.1" viewBox="-15 -15 62 62"  xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M0.291,16.749l14.944,14.944  c0.202,0.202,0.467,0.301,0.731,0.299c0.008,0,0.014,0.004,0.022,0.004h15c0.552,0,1-0.448,1-1c0-0.008-0.004-0.014-0.004-0.022  c0.002-0.264-0.097-0.529-0.299-0.731L17.438,15.997L31.715,1.721c0.401-0.401,0.401-1.051,0-1.452  c-0.238-0.238-0.561-0.317-0.87-0.273l-14.711,0c-0.309-0.044-0.632,0.035-0.87,0.273L0.292,15.24  c-0.208,0.208-0.303,0.482-0.295,0.755C-0.011,16.267,0.083,16.541,0.291,16.749z M16.44,1.996h12.096L15.292,15.24  c-0.208,0.208-0.303,0.482-0.295,0.755c-0.008,0.272,0.087,0.546,0.295,0.754l13.247,13.247H16.437L2.438,15.997L16.44,1.996z" /><g/><g/><g/><g/><g/><g/></svg>
                        </button>
                        <button className="bg-slate-900 m-3 w-10 rounded-full hover:bg-cyan-900 duration-300 hover:text-yellow-300">1</button>
                        <button className="bg-slate-900 m-3 w-10 rounded-full hover:bg-cyan-900 duration-300 hover:text-yellow-300">2</button>
                        <button className="bg-slate-900 m-3 w-10 rounded-full hover:bg-cyan-900 duration-300 hover:text-yellow-300">3</button>
                        <button className="bg-slate-900 m-3 w-10 rounded-full hover:bg-cyan-900 duration-300">
                            <svg className="fill-white hover:fill-yellow-300 duration-150 justify-center items-center"  version="1.1" viewBox="-15 -15 62 62" xmlns="http://www.w3.org/2000/svg" ><path clip-rule="evenodd" d="M31.7,15.219L16.756,0.275  c-0.202-0.202-0.467-0.301-0.731-0.299c-0.008,0-0.014-0.004-0.022-0.004h-15c-0.552,0-1,0.448-1,1c0,0.008,0.004,0.014,0.004,0.022  C0.006,1.258,0.105,1.523,0.306,1.725l14.246,14.246L0.276,30.247c-0.401,0.401-0.401,1.051,0,1.452  c0.238,0.238,0.561,0.317,0.87,0.273h14.711c0.309,0.044,0.632-0.035,0.87-0.273l14.972-14.972c0.208-0.208,0.303-0.482,0.295-0.755  C32.002,15.701,31.907,15.427,31.7,15.219z M15.551,29.972H3.455l13.244-13.244c0.208-0.208,0.303-0.482,0.295-0.755  c0.008-0.272-0.087-0.546-0.295-0.754L3.453,1.972h12.101l13.999,13.999L15.551,29.972z" /><g /><g /><g /><g /><g /><g /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}