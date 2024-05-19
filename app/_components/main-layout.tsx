"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import NavbarMobile from "./navbar-mobile";

// If I envision the links changing, I can just pass these as props instead
export interface NavLink {
  name: string;
  href: string;
}
const navLinks: Array<NavLink> = [
  { name: "Home", href: "/" },
  { name: "Create", href: "/create/" },
  { name: "Solve", href: "/solve/" },
  { name: "Versus", href: "#" },
];

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    // <div className="px-1 bg-white">
<div className="px-1 bg-white"> 
      <div>
        <NavbarMobile
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
          navLinks={navLinks}
        />

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Title bar */}
          <div className="flex items-baseline justify-between border-b-2 border-gray-200 pb-6 pt-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Captchapractice, but prettier: through nextJS
            </h1>

            {/* Navbar; mobile */}
            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-4 p-2 bg-cream-700 text-gray-900 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setNavbarOpen(true)}
              >
                <ChevronDownIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10 pb-24 pt-12">
            {/* Navbar when in lg*/}
            <div className="hidden lg:block">
              <ul
                role="list"
                className="space-y-4 pb-2 text-sm font-medium text-gray-900"
              >
                {navLinks.map((navLink) => (
                  <li
                    key={navLink.name}
                    className="border-b border-gray-200 py-3"
                  >
                    <a href={navLink.href}>{navLink.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 ">
              <div className="mx-auto max-w-7xl py-6 px-2 md:px-4 bg-cream-200 rounded-lg border ">
                {/* Your content */}
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
