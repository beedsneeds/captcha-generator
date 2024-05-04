'use client'


import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const subCategories = [
    { name: 'Home', href: '#' },
    { name: 'Create', href: '#' },
    { name: 'Solve', href: '#' },
    { name: '1v1', href: '#' },
]


export default function Example() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <div className="bg-white">
            <div>
                {/* Navbar popup, derived from headlessui's Transition code */}
                <Transition.Root show={navbarOpen} as={Fragment}>
                    <Dialog className="relative z-40 lg:hidden" onClose={setNavbarOpen}>

                        {/* Makes everything except for the navbar opaque */}
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

                        {/* Navbar */}
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
                                        <h2 className="text-lg font-medium text-gray-900">Navigation</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setNavbarOpen(false)}
                                        >
                                            <XMarkIcon className="h-6 w-6" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <div className="mt-4 border-t border-gray-200">
                                        <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                            {subCategories.map((category) => (
                                                <li key={category.name}>
                                                    <a href={category.href} className="block px-2 py-3">
                                                        {category.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>

                                        
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* Title bar */}
                    <div className="flex items-baseline justify-between border-b-2 border-gray-200 pb-6 pt-12">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Pooty is stank</h1>

                        <div className="flex items-center">
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 bg-gray-200 text-gray-900 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setNavbarOpen(true)}
                            >
                                <ChevronDownIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 pb-24 pt-12">

                        {/* Nav bar when in lg*/}
                        <div className="hidden lg:block"> 
                            <ul role="list" className="space-y-4 pb-2 text-sm font-medium text-gray-900">
                                {subCategories.map((category) => (
                                    <li key={category.name} className="border-b border-gray-200 py-3">
                                        <a href={category.href}>{category.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:col-span-3">
                            {/* Your content */}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
