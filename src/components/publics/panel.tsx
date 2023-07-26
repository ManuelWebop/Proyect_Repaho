import Image from "next/image"
import Navar from "../home/nav"

const producto = {

    id: 1,
    name: 'Bartolome de Arco',
    href: '#',
    imageSrc: 'casa2.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    user: 'Manuel',
    perfil: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.el cual incluye versiones de Lorem Ipsum.el cual incluye versiones de Lorem Ipsum.el cual incluye versiones de Lorem Ipsum.'

}

const commit = [
    {
        id: 1,
        user: 'Alverto_uwu',
        commit: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum',
        perfil: 'https://blogs.ucontinental.edu.pe/wp-content/uploads/2016/07/disfruta.jpg',
    },
    {
        id: 2,
        user: 'tia paola',
        commit: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
        perfil: 'https://img.freepik.com/foto-gratis/abogada-retrato-traje-formal-portapapeles_23-2148915797.jpg?w=2000'
    }
    
]

export default function Panel() {

    return (
        <main className="mx-auto">
            <div className="bg-white">
                <div className="bg-black">

                    <Navar />
                </div>
                <div className="flex flex-row">

                    <div className="flex-col w-3/4">

                        <div className="flex flex-row ">
                            <Image src={`/images/${producto.imageSrc}`} alt="#" width={2000} height={20} className="h-[32rem] w-full rounded-b-lg" />
                        </div>
                        <div className="flex flex-col m-5">
                            <h1 className=" text-4xl">{producto.name}</h1>
                            <h2 className=" text-3xl font-thin text-black">{producto.price}</h2>
                            <div className="flex flex-row">
                                <img className="h-10 w-10 rounded-full mt-5" src={producto.perfil} alt="" />
                                <h3 className=" text-xl p-5">{producto.user}</h3>
                            </div>
                            <div className="mt-3 bg-slate-100 shadow-inner rounded-lg h-auto">
                                <h4 className="m-5 p-1">{producto.description}</h4>
                            </div>
                        </div>
                    </div>
                    <div className=" m-2 flex flex-col w-3/12 shadow-sm rounded-2xl shadow-black h-[55rem] overflow-y-scroll ">
                        <div className="m-1">
                            <p className="m-5 text-2xl font-serif">Comentarios:</p>
                        </div>
                        <div className="m-3 flex flex-col">
                            {commit.map((commit) => (
                                <div className=" bg-slate-100 m-1 rounded-xl">
                                    <div className="flex">
                                        <img src={commit.perfil} alt="#" className="h-10 w-10 rounded-full mt-5 ml-5" />
                                        <h3 className="m-4">{commit.user}</h3>
                                    </div>
                                    <div className="flex">
                                        <p className="m-5 line-clamp-3">{commit.commit}</p>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </main>
    )
}