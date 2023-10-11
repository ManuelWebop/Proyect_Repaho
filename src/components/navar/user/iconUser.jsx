import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

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

const NavarIconMovil = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <Disclosure as="nav" className="w-full max-sm:w-auto max-sm:fixed max-sm:z-10 ">
            {({ open }) => (
                <>
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
                </>
            )}
        </Disclosure>
    )
}

export default NavarIconMovil