import { ThemeProvider } from "@/components/theme-provider";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import "./globals.css";

// Config SEO
const SEO = {
  title: "Sewa Mobil Pontianak - CV Artha Royal Group",
  description:
    "Butuh Mobil di Pontianak? CV Artha Royal Group adalah Penyewaan Mobil Resmi di Pontianak Terpercaya & Terlengkap.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rentalmobilpnk.com/",
    siteName: "Rental Mobil Pontianak",
    images: [
      {
        url: "https://rentalmobilpnk.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sewa Mobil Pontianak",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
};

export const metadata = {
  title: "Sewa Mobil Pontianak",
  description:
    "Butuh Mobil di Pontianak? CV Artha Royal Group adalah Penyewaan Mobil Resmi di Pontianak Terpercaya & Terlengkap",
  robots: "index, follow",
  verification: {
    google: "qCRe_lfvgC1b9F50m9ICzP4d-kElThyrzFoFetwqAvU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head />
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16724511690"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16724511690');
          `}
        </Script>

        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
