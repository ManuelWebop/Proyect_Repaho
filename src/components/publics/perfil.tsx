import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon, Squares2X2Icon } from '@heroicons/react/20/solid'



const products = {
    producto: [


        {
            id: 1,
            name: 'Bartolomes de Arco',
            href: '#',
            image: 'casa1.jpeg',
            imageAlt: "casa1",
            price: '$35',
            user: 'Edit',

        },
        {
            id: 2,
            name: 'Ubicacion',
            href: '#',
            image: 'casa2.jpg',
            imageAlt: "casa",
            price: '$35',
            user: 'Edit',

        },
        {
            id: 3,
            name: 'Ubicacion',
            href: '#',
            image: 'casa3.jpg',
            imageAlt: "casa",
            price: '$35',
            user: 'Edit',

        },
        {
            id: 4,
            name: 'Ubicacion',
            href: '#',
            image: 'casa4.jpg',
            imageAlt: "casa",
            price: '$35',
            user: 'Edit',

        },
        {
            id: 5,
            name: 'Ubicacion',
            href: '#',
            image: 'casa5.png',
            imageAlt: "casa",
            price: '$35',
            user: 'Edit',

        }
    ]
}

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    commit: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
}


const subCategories = [
    { name: 'Config', href: '#' },
    { name: 'Edit Public', href: '#' }
]



export default function Example() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <div className=" bg-slate-200">
            <div className=" shadow-slate-600 shadow-lg bg-white mx-10 max-sm:mx-0 h-screen">
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">Config</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form className="mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                            {subCategories.map((category) => (
                                                <li key={category.name}>
                                                    <a href={category.href} className="block px-2 py-3">
                                                        {category.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>


                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className='border-b border-gray-200'>

                        <div className="flex items-baseline justify-between  pb-6 pt-24">
                            <div className="flex flex-row">
                                <img className="h-20 w-20 rounded-full" src={user.imageUrl} alt="" />
                                <div className="flex-col ml-5 max-sm:ml-2">

                                    <h1 className="text-4xl font-bold text-gray-900">{user.name}</h1>
                                    <h1 className="text-1xl ml-1.5 font-bold text-gray-500">{user.email}</h1>
                                </div>

                            </div>


                            <div className="flex items-center">


                                <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                    <span className="sr-only">View grid</span>
                                    <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                                </button>
                                <button
                                    type="button"
                                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                    onClick={() => setMobileFiltersOpen(true)}
                                >
                                    <span className="sr-only">Filters</span>
                                    <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <div className="flex-row max-w-6xl mx-5 pb-5 shadow-inner shadow-black/50 m-5">
                            <h1 className="text-lg ml-1.5 pt-3 px-5 font-sans text-gray-700">{user.commit}</h1>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <a href={category.href}>{category.name}</a>
                                        </li>
                                    ))}
                                </ul>


                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">{/* Your content */}
                                <div className="grid grid-cols-5 drop-shadow-lg max-sm:grid-cols-2">
                                    {products.producto.map((producto, index) => (
                                        <div key={producto.id} className="group relative ">
                                            <div className="flex flex-col bg-white m-1 hover:shadow-2xl hover:shadow-black/20 duration-300">
                                                <div className="flex h-full">
                                                    <Image key={index}
                                                        src={`/images/${producto.image}`}
                                                        alt={producto.imageAlt} className="w-full h-52"
                                                        width={200} height={0} />
                                                </div>
                                                <div className="m-3">
                                                    <a href={producto.href}>
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        {producto.name}
                                                    </a>
                                                    <p className="mt-1 text-sm text-gray-500">{producto.user}</p>
                                                    <p className="text-sm font-medium text-gray-900">{producto.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
