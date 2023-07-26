import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '..', current: 'true' },
  { name: 'Shop', href: '../shop' },
  { name: 'About Us', href: '../test' },
  { name: 'Contact', href: '../#footer' },
]

const Logiin = [
  { name: 'Login', href: '../login' }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function NavarTwo() {
  return (
    <>

      <Disclosure as="nav" className="p-2">
        {({ open }) => (
          <>
            <div className="hidden md:block">

              <div className="ml-10 flex items-baseline">
                <div className="hidden md:block">

                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="m-5 text-sm font-semibold leading-6 hover:text-stone-800 duration-500 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ))}

                </div>
                <div className="flex absolute right-0 w-24 origin-top-right focus:outline-none">
                  {Logiin.map((item) => (
                    <a key={item.name} href={item.href} className=" hover:text-stone-800 duration-500 m-5 ">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

            </div>



            <div className="hidden md:hidden">
              {/* Mobile menu button */}

              <div className="flex h-16 items-center justify-between">
                <div className="-mr-2 flex md:hidden">
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
                <Disclosure.Panel className=" md:hidden bg-black rounded-lg">
                  <div className="block space-y-1 grid-auto grid-cols-1 bg-black rounded-lg">
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
                  <div className="border-t border-gray-700 flex-row">
                    <div className="block space-y-1 grid-auto bg-black rounded-lg h-8">
                      {Logiin.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="rounded-md px-3 items-start text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            </div>

          </>
        )}
      </Disclosure>

    </>
  )
}