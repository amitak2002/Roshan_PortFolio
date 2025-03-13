import React from 'react'
import { Link } from 'react-router-dom'


function Header() {

    const router = ['home', 'about', 'contact', 'education']

    return (
        <nav className='w-full bg-gray-800 p-8 flex flex-col md:flex-row items-center md:justify-between'>
            {/* Logo Section */}
            <h1 className='text-gray-300 text-2xl font-bold mb-4 md:mb-0 mx-12 hover:rotate-180 transition-all duration-700'>
                Roshan_PortFolio_
            </h1>


            {/* Navigation Links */}
            <ul className='flex flex-col md:flex-row gap-4 md:gap-10 items-center mx-12'>
                {router.map((item) => (
                    <li
                        key={item}
                        className='text-gray-200 hover:text-red-500 hover:scale-105 transition-transform duration-300'
                    >
                        <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase ()}`}>
                            {item.toUpperCase()}
                        </Link>

                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Header
