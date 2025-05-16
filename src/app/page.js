import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Car,
  Shield,
  CreditCard,
  Users,
} from "lucide-react";

const cars = [
  {
    name: "New Avanza",
    image: "/images/1.webp",
    transmission: "Automatic",
    seat: "7 Seats",
    price: "Rp.400.000/day",
  },
  {
    name: "Innova Reborn",
    image: "/images/2.webp",
    transmission: "Automatic",
     seat: "7 Seats",
    price: "Rp.500.000/day",
  },
  {
    name: "All New Livina",
    image: "/images/3.webp",
    transmission: "Automatic",
     seat: "7 Seats",
    price: "Rp.400.000/day",
  },

  {
    name: "Fortuner GR Sport 2.8 VRZ",
    image: "/images/6.webp",
    transmission: "Automatic",
     seat: "7 Seats",
    price: "Rp.1.500.000/day",
  },
  {
    name: "Hilux DC 4x4",
    image: "/images/7.webp",
    transmission: "Automatic",
     seat: "5 Seats",
    price: "Rp.1.500.000/day",
  },
  {
    name: "Hiace Commuter",
    image: "/images/8.webp",
    transmission: "Manual",
     seat: "14 Seats",
    price: "Rp.1.500.000/day",
  },
  {
    name: "Alphard Transformer",
    image: "/images/9.webp",
    transmission: "Automatic",
     seat: "7 Seats",
    price: "Rp.4.500.000/day",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-8 w-8 rounded-full"
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="#cars"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Our Cars
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href={`https://wa.me/6281349988354?text=Halo%20CV%20Artha%20Royal%20Group,%20Saya%20Ingin%20Menyewa%20Mobil%20Dari%20Website`}
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
            >
              Book Now
            </Link>
            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle Menu</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative h-[600px]">
            <Image
              src="/images/hero.webp"
              alt="Luxury car on road"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-start justify-center px-4 md:px-6">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-5xl md:text-7xl">
                Rental Mobil Pontianak Artha Royal Group
              </h1>
              <p className="text-lg text-white/90 md:text-2xl">
                Rental mobil di Kota Pontianak untuk perjalanan dalam kota, luar
                kota, dan ke luar negeri. Rental mobil 24 jam online di
                Pontianak bisa lepas kunci. harian, mingguan atau bulanan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#cars"
                  className="inline-flex h-10 items-center bg-orange-400 justify-center rounded-md px-8 text-sm font-medium text-white transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1"
                >
                  Pesan Sekarang
                </Link>
                <Link
                  href="#cars"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1"
                >
                  Lihat Mobil
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <Image
                  src="/images/10.webp?height=400&width=600"
                  alt="About our car rental service"
                  width={600}
                  height={400}
                  className="mx-auto rounded-lg object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    About Me
                  </h2>
                  <div className="mt-2 h-1 w-20 bg-black"></div>
                </div>
                <p className="text-gray-600 md:text-lg text-justify">
                  CV Artha Royal Group adalah penyedia jasa rental mobil di
                  Pontianak. Dengan pengalaman bertahun-tahun, kami berkomitmen
                  untuk memberikan pelayanan terbaik kepada setiap pelanggan.
                  Kami menawarkan beragam pilihan mobil berkualitas, mulai dari
                  mobil keluarga hingga mobil mewah, dengan harga yang
                  kompetitif. Tim kami yang profesional siap membantu Anda
                  memilih mobil yang sesuai dengan kebutuhan dan anggaran.
                  Nikmati perjalanan Anda dengan nyaman dan aman bersama CV
                  Artha Royal Group. Dengan pengalaman bertahun-tahun, kami
                  telah menjadi pilihan utama bagi wisatawan maupun pelaku
                  bisnis. Kami menawarkan berbagai pilihan mobil berkualitas
                  dengan harga yang bersaing. Selain itu, kami juga menyediakan
                  layanan antar-jemput dan supir yang profesional. Kunjungi kami
                  di pusat kota Pontianak dan nikmati perjalanan yang nyaman dan
                  menyenangkan.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                 
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-black" />
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-black" />
                    <span className="text-sm font-medium">No Hidden Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-black" />
                    <span className="text-sm font-medium">
                      Experienced Team
                    </span>
                  </div>
                </div>
                <div>
                  <Link
                    href="#"
                    className="inline-flex items-center text-black font-medium hover:underline"
                  >
                    Learn more about us
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Cars Section */}
        <section id="cars" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Car Collection
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-lg">
                  Explore our diverse fleet of well-maintained vehicles for any
                  occasion or budget.
                </p>
              </div>
            </div>
           
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Car Card 1 */}
              {cars.map((car, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.name}
                      width={300}
                      height={200}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{car.name}</h3>
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <Users className="mr-1 h-4 w-4" />
                      <span>{car.seat}</span>
                      <span className="mx-2">•</span>
                      <span>{car.transmission}</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold">{car.price}</span>
                        <span className="text-sm text-gray-600">/day</span>
                      </div>
                      <Link
                        href={`https://wa.me/6281349988354?text=Halo%20CV%20Artha%20Royal%20Group,%20Saya%20Ingin%20Menyewa%20Mobil%20*${car.name}*%20Dari%20Website`}
                        className="inline-flex items-center justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-1"
                      >
                        
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
            <div className="flex justify-center">
              
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Siap untuk Perjalanan Anda?
                </h2>
                <p className="text-white/80 md:text-lg">
                  Pesan mobil impian Anda hari ini dan nikmati pengalaman
                  berkendara yang tak terlupakan. Kami siap membantu Anda
                  menemukan kendaraan yang sempurna untuk perjalanan Anda.
                  Dengan layanan pelanggan yang ramah dan profesional, kami
                  akan memastikan Anda mendapatkan pengalaman terbaik.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`https://wa.me/6281349988354?text=Halo%20CV%20Artha%20Royal%20Group,%20Saya%20Ingin%20Menyewa%20Mobil%20Dari%20Website`}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1"
                  >
                    Book Now
                  </Link>
                 
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Car className="h-6 w-6" />
                <span>Artha Royal Group</span>
              </div>
              <p className="text-sm text-gray-600">
                Premium car rental service with a wide range of vehicles for any
                occasion or budget.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-black">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-black">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-black">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#cars" className="hover:underline">
                    Our Cars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Our Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:underline">
                    Car Rental
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Airport Transfers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Corporate Rentals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Long-term Rentals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Chauffeur Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 shrink-0" />
                  <span>Jalan Harapan Jaya, Kota Baru, Pontianak</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>+6281349988354</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  <span>argroup.ptk@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>Mon-Fri: 8am-8pm, Sat-Sun: 9am-5pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Rental Mobil Pontianak. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
