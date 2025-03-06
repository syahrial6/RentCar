"use client";

import { DefaultSeo } from "next-seo";

export default function SeoDefault() {
  return (
    <DefaultSeo
      title="Sewa Mobil Pontianak - CV Artha Royal Group"
      description="Butuh Mobil di Pontianak? CV Artha Royal Group adalah Penyewaan Mobil Resmi di Pontianak Terpercaya & Terlengkap."
      openGraph={{
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
      }}
      twitter={{
        cardType: "summary_large_image",
      }}
    />
  );
}
