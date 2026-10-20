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
  title: "Artha Royal Group | Sewa Mobil Pontianak Terpercaya",
  description:
    "Layanan sewa mobil premium di Pontianak. Artha Royal Group menyediakan armada terlengkap dan resmi untuk kebutuhan bisnis dan keluarga Anda.",
  robots: "index, follow",
  alternates: {
    canonical: "https://rentalmobilpnk.com",
  },
  openGraph: {
    title: "Artha Royal Group | Sewa Mobil Pontianak Terpercaya",
    description:
      "Layanan sewa mobil premium di Pontianak. Artha Royal Group menyediakan armada terlengkap dan resmi untuk kebutuhan bisnis dan keluarga Anda.",
    url: "https://rentalmobilpnk.com",
    siteName: "Artha Royal Group",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://rentalmobilpnk.com/images/logo.png",
        width: 512,
        height: 512,
        alt: "Artha Royal Group - Sewa Mobil Pontianak Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artha Royal Group | Sewa Mobil Pontianak Terpercaya",
    description:
      "Layanan sewa mobil premium di Pontianak. Artha Royal Group menyediakan armada terlengkap dan resmi.",
    images: ["https://rentalmobilpnk.com/images/logo.png"],
  },
  verification: {
    google: "qCRe_lfvgC1b9F50m9ICzP4d-kElThyrzFoFetwqAvU",
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
        {/* Schema Markup - AutoRental */}
        <Script
          id="schema-autorental"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoRental",
              "@id": "https://rentalmobilpnk.com/#organization",
              "name": "Artha Royal Group",
              "alternateName": "Sewa Mobil Pontianak Artha Royal",
              "description": "Layanan sewa mobil Pontianak terpercaya dan eksklusif harian, mingguan, serta bulanan.",
              "url": "https://rentalmobilpnk.com/",
              "telephone": "+6281349988354",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pontianak",
                "addressRegion": "Kalimantan Barat",
                "addressCountry": "ID"
              },
              "areaServed": {
                "@type": "City",
                "name": "Pontianak"
              },
              "priceRange": "$$$"
            }
          `}
        </Script>
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