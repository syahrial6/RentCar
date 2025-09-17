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
    
<Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17104611193" />
<Script
  id="gtag-init"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17104611193');
    `,
  }}
/>

<Script
  id="gtag-report-conversion"
  dangerouslySetInnerHTML={{
    __html: `
      function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
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
