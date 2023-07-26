'use client'
import Image from 'next/image'
import Logo from 'public/images/perfil1.jpeg'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Seach_ from '../shop/busqueda'
import React, { Fragment, useState } from 'react'
import {signIn, signOut, useSession} from 'next-auth/react'
import Link from 'next/link'



const userNavigation = [
  { name: 'Your Profile', href: './publics/perfil' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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


export default function Navar() {
  const [showDropdownm, setShowDropdown] = useState(false)
  const {data: session} = useSession()
  
  const handleShowDropdown = () => setShowDropdown(prev => true)
  
  const handleHideDropdown = () => setShowDropdown(prev => false)
  

  const LoggeIn = false

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
                    <div className="ml-10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 flex items-baseline space-x-4">
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
                      ?(
                        <>
                        
                    <Menu as="div" className="relative ml-1">
                      <div>
                        <Menu.Button onClick={handleShowDropdown} className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-9 w-9 rounded-full" src={user.imageUrl} alt="" />
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Link onClick={handleHideDropdown} href='/create-public' className='bg-gray-100 block px-1 py-2 text-sm text-gray-700 w-full rounded-sm text-center border-2 border-transparent border-b-gray-700/40'>Create</Link>
                          <button onClick={() => {signOut(); handleHideDropdown()}} className='bg-gray-100 block px-1 py-2 text-sm text-gray-700 w-full rounded-sm border-2 border-transparent border-b-gray-700/40'>Sign out</button>
                        
                        </Menu.Items>
                      </Transition>
                    </Menu>
                        </>
                      )
                      :(
                        <>
                         <Link className={
                              ' text-gray-100 hover:bg-emerald-800 duration-300 rounded-md flex px-4 py-2 m-1 text-sm font-medium'} href='../register'>register</Link>
                              
                         <button className={
                              ' text-gray-100 hover:bg-emerald-800 duration-300 rounded-md flex px-4 py-2 m-1 text-sm font-medium'}onClick={() => {signIn()}} >login In</button>
                        </>
                      )
                    }
                    

                  </div>
                </div>

                <div className="-mr-2 md:hidden ">
                  {/* Mobile menu button */}
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
            {/*Aqui es donde se agrega los valores*/}
            <Disclosure.Panel className="md:hidden flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">{user.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
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

    </>
  )
}

