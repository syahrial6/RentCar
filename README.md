# Artha Royal Group — Platform Sewa Mobil & Transportasi Eksekutif Pontianak

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3/4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-green?style=flat-square&logo=node.js)](https://nodejs.org/)

## 📋 Deskripsi Proyek

**Artha Royal Group** adalah platform digital resmi penyedia layanan sewa mobil terpercaya dan transportasi eksekutif di Kota Pontianak, Kalimantan Barat. Kami menyediakan solusi mobilitas premium untuk kebutuhan harian, mingguan, bulanan, perjalanan bisnis, acara keluarga, hingga layanan antar-jemput bandara (*airport transfer*) dengan armada terlengkap dan prima.

---

## 🚀 Fitur Utama & Layanan

### 1. Katalog Armada Eksekutif & Prima
* Pilihan unit kendaraan terlengkap dan terawat (Avanza Facelift, Brio RS, Innova Reborn, Innova Zenix Hybrid, Fortuner GR Sport, Hilux 4x4, Hiace Commuter, hingga Alphard Transformer).
* Kondisi unit selalu bersih, wangi, serta rutin diservis untuk kenyamanan maksimal.

### 2. Pilihan Layanan Fleksibel
* Layanan sewa lepas kunci (*self-drive*) maupun paket dengan pengemudi (*driver*) profesional yang berpengalaman, ramah, dan mengutamakan ketepatan waktu.
* Pemesanan cepat dan mudah secara langsung terintegrasi dengan WhatsApp multi-admin.

### 3. Desain Modern, Elegan, & Responsif
* Tampilan antarmuka (*UI/UX*) bernuansa elegan, didukung animasi transisi halus menggunakan Framer Motion.
* Sepenuhnya responsif (*mobile-friendly*) untuk berbagai ukuran layar perangkat.

### 4. Optimasi SEO Teknis & Google Standards
* **Next.js Metadata API:** Pengaturan *title*, *description*, *canonical URL*, serta Open Graph & Twitter Cards untuk pratinjau media sosial.
* **Schema Markup (JSON-LD):** Implementasi data terstruktur tipe `AutoRental` & `LocalBusiness` di dalam tag `<head>` untuk memperkuat visibilitas *rich snippets* di Google Search.
* **Crawlability & Indexing:** Konfigurasi `robots.txt` dan `sitemap.xml` (`sitemap-0.xml`) yang terstruktur.
* **Keyword-Rich Alt Tags:** Atribut alt gambar yang optimal dan deskriptif pada seluruh foto armada maupun galeri.

---

## 📁 Struktur Direktori Utama

```text
src/
├── app/                  → Routing & layout berbasis Next.js App Router
│   ├── layout.tsx        → Root layout, metadata global, OpenGraph, & JSON-LD Schema
│   ├── page.tsx          → Halaman utama (Landing Page)
│   ├── globals.css       → Konfigurasi styling global & Tailwind CSS
│   └── not-found.js      → Halaman kustom 404
├── components/           → Komponen modular (Hero, About, Katalog, Navbar, Footer, dll.)
└── lib/                  → Utilitas pendukung proyek

public/
├── images/               → Aset visual kendaraan (webp/png)
├── document/             → Dokumen pendukung & galeri
├── robots.txt            → Pengaturan crawler mesin pencari
└── sitemap.xml           → Peta situs utama web
```

---

## ⚙️ Panduan Memulai (Getting Started)

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek secara lokal di perangkat Anda:

1. **Buka direktori proyek:**
   ```bash
   cd RentCar
   ```

2. **Install dependensi yang diperlukan:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (Development Server):**
   ```bash
   npm run dev
   ```

4. **Akses aplikasi melalui browser:**
   Buka [http://localhost:3000](http://localhost:3000) untuk melihat web secara *real-time*.

---

## 📈 Panduan Pemeliharaan & Standar SEO

Untuk menjaga performa mesin pencari (*SEO*) tetap optimal dan memperkuat citra profesional brand **Artha Royal Group**, ikuti pedoman berikut:
* **Konsistensi Alt Text Gambar Katalog:** Setiap penambahan unit armada baru di dalam file `src/components/katalog.js` wajib menyertakan atribut `alt` yang kaya kata kunci (contoh: `alt="Sewa mobil Innova Zenix di Pontianak - Artha Royal Group"`).
* **Monitoring Google Search Console:** Daftarkan dan pantau performa sitemap secara berkala melalui Google Search Console untuk memastikan seluruh halaman terindeks dengan baik.
* **Strict Branding Rule:** **DILARANG KERAS** menggunakan kata *"murah"* pada seluruh materi teks, judul, metadata, maupun atribut gambar. Selalu gunakan istilah premium yang membangun kredibilitas seperti **"terpercaya"**, **"eksklusif"**, **"terbaik"**, atau **"layanan unggulan"**.

---

## 👨‍💻 Hak Cipta & Pengembang

Dikembangkan dengan dedikasi tinggi untuk kebutuhan transportasi dan mobilitas eksekutif.

**Artha Royal Group — Pontianak, Kalimantan Barat**
