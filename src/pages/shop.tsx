import Seach_ from "./shop/busqueda"
import Footer from "./home/footer"
import Navar from "./home/nav"

const products = [
    {
        id: 1,
        name: 'Bartolomes de las casas 1',
        href: '#',
        imageSrc: './images/casa2.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        user: 'Manuel',
    },
    {
        id: 2,
        name: 'Ubicacion',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        user: 'Erick',
    }
]
export default function Shop() {
    return (
        <div className="bg-local md:block">
            <div className="bg-stone-800">
                <div className="flex p-5">
                    <Navar />
                </div>
                <div className="flex justify-center w-full max-sm:pt-10">
                    <Seach_ />
                </div>
            </div>

            <div className="flex flex-row bg-slate-100/30">
                <div className=" flex-col border border-slate-700/30 rounded-lg bg-teal-700/20 m-5 p-8 h-1/6 w-1/4  shadow-lg hidden md:block">
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

                <div className="flex flex-col bg-teal-700/20 border border-slate-700/30 m-5 w-5/6 rounded-lg shadow-lg max-sm:w-full">
                    {/*Futura configuracion para las publicaciones */}

                    <div className="grid grid-cols-5 drop-shadow-lg max-sm:grid-cols-2">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="flex flex-col bg-white m-1">
                                    <div className="flex h-full">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt} className="w-full" />
                                    </div>
                                    <div className="m-3">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                        <p className="mt-1 text-sm text-gray-500">{product.user}</p>
                                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}