import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Sewa Mobil Pontianak",
  description:
    "Butuh Mobil di Pontianak? CV Artha Royal Group Adalah Penyewaan Mobil Resmi Di Pontianak Terpercaya & Terlengkap",
  robots: "index, follow",
  verification: {
    google: "qCRe_lfvgC1b9F50m9ICzP4d-kElThyrzFoFetwqAvU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NPKX95FW');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body>
          <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NPKX95FW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
