'use client'
import Image from 'next/image'
import Logo from 'public/images/perfil1.jpeg'
import Avatar from '../../../public/images/avatar.png'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Seach_ from '../shop/busqueda'
import Link from 'next/link'
import React, { Fragment, useState, useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FiHome, FiLogOut } from "react-icons/fi";

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const userNavigation = [
  { name: 'Your Profile', href: './publics/perfil' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const users = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    '../../..public/images/avatar.png',
}

const navigation = [
  { name: 'Home', href: '..', current: true },
  { name: 'Shop', href: '../shop', current: false },
  { name: 'About', href: './test/test', current: false },
  { name: 'Contact', href: '../#footer', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Navar = () => {

  const CLOUD_NAME = 'do0puev9t'
  const UPLOAD_PRESET = 'my_shop_proyect_web'

  const [showDropdownm, setShowDropdown] = useState(false)
  const [userDetails, setUserDetails] = useState("")

  const { data: session, revalidate } = useSession()
  const [image, setImage] = useState('')

  const handleImageChange = (e) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      setImage(selectedImage);
    }

  }

  const handleImageUpload = async () => {
    if (!image) return;

    try {
      const imageUrl = await uploadImage(image);

      // Actualizar la imagen de perfil del usuario (enviar a la API)
      const res = await fetch(`http://localhost:3000/api/user/${session?.user?._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.user?.accessToken}`
        },
        body: JSON.stringify({ image: imageUrl }) // Envía la URL de la imagen a la API
      });

      if (res.ok) {
        toast.success("Imagen de perfil actualizada correctamente")
        return
      } else {
        console.error("Imagen de perfil actualizada correctamente")
        toast.error('Error al actualizar la imagen de perfil')
        return
      }
    } catch (error) {
      console.error('Error al subir la imagen de perfil', error)
      toast.error('Error al subir la imagen de perfil', error)
      return
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

  const imageUrlWithCacheBust = `${session?.user?.image}?${Date.now()}`;

  return (
    <>
      <Disclosure as="nav" className="w-full max-sm:w-[90%] max-sm:fixed max-sm:z-10 ">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <Image
                        className="h-8 w-8"
                        src={Logo}
                        alt="Repaho"
                      />
                    </a>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-900 text-gray-100 hover:bg-gray-700 hover:text-white duration-300',
                            'rounded-md flex px-4 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <Seach_ />

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
                                  <Image className="h-9 w-9 rounded-full" src={imageUrlWithCacheBust ?? '/images/avatar.png'} alt="" width={200} height={200} />
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
                                      <Image className="h-9 w-9 rounded-full hover:bg-black/80 hover:duration-200" src={imageUrlWithCacheBust ?? '/images/avatar.png'} width={200} height={200} alt="perfil" />
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
                </div>

                {/* Mobile menu button */}
                <div className="-mr-2 md:hidden ">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/*Panel de usuario en celular*/}
            <Disclosure.Panel className="md:hidden flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              {/* Navar */}
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>


              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={users.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">{users.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{users.email}</div>
                  </div>

                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <ToastContainer />
    </>
  )
}

export default Navar