import NavarTwo from "./home/navtwo"
import Seach_ from "./shop/busqueda"
import Image from "next/image"
import Casa1 from "./images/casa2.jpg"
import Casa2 from "./images/casa1.jpeg"

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
                <div className="flex flex-col bg-yellow-200 m-5 w-1/4">
                    <p>Opciones</p>
                    <p>Renta</p>
                    <p>Ventas</p>
                    <p>PROMOCION</p>
                </div>

                <div className="flex bg-yellow-100 m-5 w-4/6">
                    <div className="grid-cols-5">

                        <div className="flex flex-col bg-white m-1 w-1/3">
                            <div className="flex h-full">
                                <Image src={Casa2} alt="#" className="flex w-full" />
                            </div>
                            <div className="m-3">
                                <p>Ubicacion</p>
                                <p>Name de Usuario</p>
                                <p>Precio: $500</p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white m-1 w-1/3">
                            <div className="flex h-full">
                                <Image src={Casa2} alt="#" className="flex w-full" />
                            </div>
                            <div className="m-3">
                                <p>Ubicacion</p>
                                <p>Name de Usuario</p>
                                <p>Precio: $500</p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white m-1 w-1/3">
                            <div className="flex h-full">
                                <Image src={Casa1} alt="#" className="flex w-full" />
                            </div>
                            <div className="m-3">
                                <p>Ubicacion</p>
                                <p>Name de Usuario</p>
                                <p>Precio: $500</p>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white m-1 w-1/3">
                            <div className="flex h-full">
                                <Image src={Casa1} alt="#" className="flex w-full" />
                            </div>
                            <div className="m-3">
                                <p>Ubicacion</p>
                                <p>Name de Usuario</p>
                                <p>Precio: $500</p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white m-1 w-1/3">
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
                </div>
            </div>
        </div>
    )
}