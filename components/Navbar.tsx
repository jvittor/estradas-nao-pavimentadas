import React from 'react'
import {Container } from './Container'

const Navbar = () => {
    return (
        <header>
        <nav className="bg-white border-gray-200 dark:bg-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://iili.io/JpR6Eve.md.png" className="h-8" alt="Flowbite Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-white">
                            <li>
                                <a href="#" className="block py-2 px-3 text-black rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-orange" aria-current="page">Início</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange md:p-0 dark:text-black md:dark:hover:text-orange dark:hover:bg-orange dark:hover:text-white md:dark:hover:bg-transparent">Sobre o projeto</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-#C86236 md:p-0 dark:text-black md:dark:hover:text-orange dark:hover:bg-orange dark:hover:text-white md:dark:hover:bg-transparent">Nossos Serviços</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-orange dark:hover:bg-orange dark:hover:text-white md:dark:hover:bg-transparent">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
        </header>
    )
}

export default Navbar
