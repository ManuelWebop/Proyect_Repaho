'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FiHome, FiLogOut } from "react-icons/fi";
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image';

export default function User() {
    const CLOUD_NAME = 'do0puev9t'
    const UPLOAD_PRESET = 'my_shop_proyect_web'

    const [showDropdownm, setShowDropdown] = useState(false)
    const { data: session } = useSession()
    const [image, setImage] = useState('')


    const handleImageChange = (e) => {
        const selectedImage = e.target.files?.[0]
        if (selectedImage) {
            setImage(selectedImage)
        }
    }

    const handleImageUpload = async (e) => {

        e.preventDefault()

        try {

            const imageUrl = await uploadImage(image)

            const res = await fetch(`http://localhost:3000/api/user/${session?.user?._id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${session?.user?.accessToken}`
                    },
                    method: 'PUT',
                    body: JSON.stringify({ image: imageUrl })
                })

            if (res.ok) {
                toast.success("Imagen de perfil actualizada correctamente")
            } else {
                console.error("Imagen de perfil actualizada correctamente")
            }
        } catch (error) {
            console.error('Error al subir la imagen de perfil', error)
        }
    }

    const uploadImage = async () => {
        if (!image) return

        const formData = new FormData()

        formData.append("file", image)
        formData.append("upload_preset", UPLOAD_PRESET)

        try {
            const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
                method: "POST",
                body: formData
            })

            const data = await res.json()

            const ImageUrl = data['secure_url']

            return ImageUrl
        } catch (error) {
            console.log(error)
        }
    }

    const handleShowDropdown = () => setShowDropdown(prev => true)
    const handleHideDropdown = () => setShowDropdown(prev => false)


    return (
        <div className="hidden md:block">
            <div className="w-full flex items-center md:ml-6">
                {

                    session?.user
                        ? (
                            <>

                                <Menu as="div" className="relative ml-1">
                                    <div>
                                        <Menu.Button onClick={handleShowDropdown} className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open user menu</span>
                                            {console.log(session?.user?.image)}
                                            <Image className="h-9 w-10 rounded-full" src={`${session?.user?.image}?${Date.now()}` ?? '/images/avatar.png'} alt="" width={200} height={200} />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >

                                        <Menu.Items className="absolute right-0 z-10 mt-3 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                                            <div className="m-5 flex">


                                                <label htmlFor="image">
                                                    <Image className="h-9 w-9 rounded-full hover:bg-black/80 hover:duration-200" src={`${session?.user?.image}?${Date.now()}` ?? '/images/avatar.png'} width={200} height={200} alt="perfil" />
                                                </label>
                                                <input onChange={handleImageChange} type="file" id="image" className=' invisible w-0' />

                                                <div className="flex flex-col ml-2">
                                                    <p className='text-lg'>{session?.user?.username}</p>
                                                    <p className=' text-sm text-gray-700'>{session?.user?.email}</p>
                                                </div>
                                            </div>
                                            <Link onClick={handleHideDropdown} href='/create-public' className='flex hover:bg-green-800 duration-200 px-1 py-2 text-sm items-center justify-center text-black w-full text-center hover:text-white'>
                                                <FiHome className='mr-2' />Create</Link>
                                            <button onClick={() => { signOut(); handleHideDropdown() }} className='flex bg-gray-200 hover:bg-red-800 duration-200 items-center justify-center py-2 text-sm text-black w-full rounded-b-lg hover:text-white'>
                                                <FiLogOut className='mr-2' />Sign out</button>
                                            <button onClick={handleImageUpload} className='flex bg-gray-200 hover:bg-red-800 duration-200 items-center justify-center py-2 text-sm text-black w-full rounded-b-lg hover:text-white'>
                                                <FiLogOut className='mr-2' />Update</button>

                                        </Menu.Items>

                                    </Transition>
                                </Menu>
                            </>
                        )
                        : (
                            <>
                                <Link className={
                                    ' text-gray-100 hover:bg-emerald-800 duration-300 rounded-md flex px-4 py-2 m-1 text-sm font-medium'} href='../register'>register</Link>

                                <button className={
                                    ' text-gray-100 hover:bg-emerald-800 duration-300 rounded-md flex px-4 py-2 m-1 text-sm font-medium'} onClick={() => { signIn() }} >login In</button>
                            </>
                        )
                }


            </div>
            <ToastContainer />
        </div>
    )
}