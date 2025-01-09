import { motion } from "framer-motion";
import Image from "next/image";


const cars = [
  {
    name: "New Avanza",
    image: "/images/1.webp",
    price: "Rp.400.000/day",
  },
  {
    name: "Innova Reborn",
    image: "/images/2.webp",
    price: "Rp.550.000/day",
  },
  {
    name: "All New Livina",
    image: "/images/3.webp",
    price: "Rp.400.000/day",
  },
  {
    name: "New Veloz",
    image: "/images/4.webp",
    price: "Rp.400.000/day",
  },
  {
      name: "Honda Brio",
      image: "/images/5.webp",
      price: "Rp.400.000/day",
    },
    {
      name: "Fortuner GR Sport 2.8 VRZ",
      image: "/images/6.webp",
      price: "Rp.1.500.000/day",
    },
    {
      name: "Hilux DC 4x4",
      image: "/images/7.webp",
      price: "Rp.1.500.000/day",
    },
    {
      name: "Hiace Commuter",
      image: "/images/8.webp",
      price: "Rp.1.500.000/day",
    },
    {
      name: "Alphard Transformer",
      image: "/images/9.webp",
      price: "Rp.4.500.000/day",
    },
   
];

export default function CatalogSection() {
  

  return (
    <section className="relative bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Rental Cars</h2>
          <p className="mt-4 text-lg">
            Explore our collection of vehicles available for rent at affordable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
           
            >
              <Image
              width={400}
              height={500}
                src={car.image}
                alt={car.name}
                className="w-full h-54 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {car.price}
                </p>
                <a
                  href="#"
                  className="block text-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-transform transform hover:scale-105"
                >
                  Rent Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl opacity-30"
        
        />
        <motion.div
          className="absolute  w-96 h-96 bg-red-400 rounded-full filter blur-3xl opacity-30"
       
        />
      </div>
    </section>
  );
}
