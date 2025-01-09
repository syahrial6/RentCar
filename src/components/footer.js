import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">About Us</h4>
          <p>
            We provide top-notch car rental services for all your travel
            needs. Affordable, reliable, and always at your service.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p>Email: argroup.ptk@gmail.com</p>
          <p>Phone: +6281349988354</p>
          <p>Address: Jalan Harapan Jaya Kota Baru, Pontianak, Kalimantan Barat</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2025 RentalCars. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
