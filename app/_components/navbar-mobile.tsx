"use client";

import { Fragment, Dispatch, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "./main-layout";

export default function NavbarMobile({
  navbarOpen,
  setNavbarOpen,
  navLinks,
}: {
  navbarOpen: boolean;
  setNavbarOpen: Dispatch<SetStateAction<boolean>>;
  navLinks: Array<NavLink>;
}) {
  return (
    <>
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
                  <h2 className="text-lg font-medium text-gray-900">
                    Navigation
                  </h2>
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
                  <ul
                    role="list"
                    className="px-2 py-3 font-medium text-gray-900"
                  >
                    {navLinks.map((navLink) => (
                      <li key={navLink.name}>
                        <a href={navLink.href} className="block px-2 py-3">
                          {navLink.name}
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
    </>
  );
}
