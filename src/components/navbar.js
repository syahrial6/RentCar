import Image from 'next/image';
import React, {useState} from 'react'


  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk mengontrol open/close menu mobile

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle state ketika tombol hamburger diklik
  };
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu} // Menambahkan logika toggle ketika tombol diklik
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="w-full grid grid-cols-3  sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 text-white text-2xl font-semibold lg:block hidden">
              <Image
              src={"/images/logo.png"}
              width={50}
              height={50}
              alt='logo'
              className='object-cover bg-white rounded-xl'
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-300"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-300"
                >
                  About
                </a>
                <a
                  href="#catalog"
                  className="text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-300"
                >
                  Catalog
                </a>
                <a
                  href="#"
                  className="text-white px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden ${isOpen ? "block" : "hidden"}`} // Menampilkan menu jika isOpen true
      >
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a
            href="#"
            className="text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#catalog"
            className="text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-300"
          >
            Catalog
          </a>
          <a
            href="#"
            className="text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:text-gray-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
