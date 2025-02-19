import { ThemeProvider } from "@/components/theme-provider";
import Script from 'next/script'; // Import komponen Script
import "./globals.css";

export const metadata = {
  title: "Sewa Mobil Pontianak",
  description: "Butuh Mobil di Pontianak? CV Artha Royal Group Adalah Penyewaan Mobil Resmi Di Pontianak Terpercaya & Terlengkap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head> {/* Tempatkan skrip di dalam <head> */}
        <Script
          strategy="afterInteractive" // Penting untuk performa
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
      </head>
      <meta name="google-site-verification" content="qCRe_lfvgC1b9F50m9ICzP4d-kElThyrzFoFetwqAvU" />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}