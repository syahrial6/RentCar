import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

// 1. Metadata tanpa viewport
export const metadata = {
  title: "Rental Mobil Pontianak | Artha Royal Group — Mulai Rp 300rb/Hari",
  description:
    "Sewa mobil Pontianak terpercaya. Tersedia Avanza, Innova, Fortuner, Alphard, Hiace — dengan/tanpa driver. Artha Royal Group melayani 24 jam di Pontianak & Kalimantan Barat.",
  keywords:
    "rental mobil pontianak, sewa mobil pontianak, rental mobil pontianak murah, sewa avanza pontianak, rental innova pontianak, rental fortuner pontianak, rental hiace pontianak",
  robots: "index, follow",
  verification: {
    google: "qCRe_lfvgC1b9F50m9ICzP4d-kElThyrzFoFetwqAvU",
  },
  alternates: {
    canonical: "https://www.rentalmobilpnk.com",
  },
  openGraph: {
    title: "Rental Mobil Pontianak — Artha Royal Group",
    description:
      "Sewa mobil premium di Pontianak mulai Rp 300.000/hari. Avanza, Innova, Fortuner, Alphard, Hiace. Driver profesional, layanan 24 jam.",
    url: "https://www.rentalmobilpnk.com",
    siteName: "Artha Royal Group",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://www.rentalmobilpnk.com/images/about.webp",
        width: 1200,
        height: 630,
        alt: "Rental Mobil Pontianak — Artha Royal Group",
      },
    ],
  },
};


// 2. Export viewport secara terpisah (Solusi untuk Warning)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning className={poppins.variable} data-scroll-behavior="smooth">
      <head>
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=AW-17104611193" 
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17104611193');
            `,
          }}
        />
      </head>

      <body className="antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}