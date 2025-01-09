
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";


export const metadata = {
  title: "Sewa Mobil Pontianak",
  description: "Penyewaan Mobil Resmi Di Pontianak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={``}
      >
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
        
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
