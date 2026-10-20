import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html
      lang="id"
      suppressHydrationWarning
      className={poppins.variable}
      data-scroll-behavior="smooth"
    >
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
              gtag('config', 'AW-16724511690');
              gtag('config', 'AW-17104611193');
            `,
          }}
        />
        <Script
          id="gtag-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') { window.location = url; }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-17104611193/7eu0CPiqwZsbEPnOjtw_',
                  'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </head>

      <body className="antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
