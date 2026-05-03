import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Artha Royal Group | Sewa Mobil Pontianak Terpercaya",
  description:
    "Layanan sewa mobil premium di Pontianak. Artha Royal Group menyediakan armada terlengkap dan resmi untuk kebutuhan bisnis dan keluarga Anda.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
  verification: {
    google: "qCRe_lfvgC1b9F50m9ICzP4d-kElThyrzFoFetwqAvU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning className={poppins.variable}>
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