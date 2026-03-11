# Sadita Indonesia Landing Page

Landing page untuk produk perawatan sapi dari Sadita Indonesia, dibuat dengan HTML, Tailwind CSS, dan JavaScript murni.

## 🚀 Fitur

- **Responsive Design** - Tampilan optimal di semua perangkat
- **Modern UI/UX** - Design yang bersih dan profesional
- **Smooth Animations** - Animasi yang halus dan menarik
- **SEO Optimized** - Struktur HTML yang SEO-friendly
- **Fast Loading** - Optimasi performa untuk loading cepat
- **WhatsApp Integration** - Integrasi langsung dengan WhatsApp Business

## 📁 Struktur File

```
├── index.html          # File HTML utama
├── favicon.svg         # Favicon kustom Sadita Indonesia
├── css/
│   └── styles.css      # Custom CSS styles
├── js/
│   └── main.js         # JavaScript functionality
├── src/
│   └── assets/         # Gambar dan aset
│       ├── hero-cow.jpg
│       ├── product-aphthoclyn.jpg
│       └── product-gizcow.jpg
├── public/
│   └── robots.txt      # SEO robots file
├── sitemap.xml         # Sitemap untuk SEO
└── README.md           # Dokumentasi
```

## 🛠 Teknologi yang Digunakan

- **HTML5** - Struktur semantik
- **Tailwind CSS** - Framework CSS utility-first (via CDN)
- **Vanilla JavaScript** - Interaktivitas tanpa framework
- **Lucide Icons** - Icon library (via CDN)
- **Google Fonts** - Typography (Plus Jakarta Sans)

## 🚀 Cara Menjalankan

1. **Download atau clone** file-file proyek
2. **Buka index.html** di browser web
3. **Atau gunakan live server** untuk development

### Menggunakan Live Server

```bash
# Jika menggunakan VS Code dengan Live Server extension
# Klik kanan pada index.html > Open with Live Server

# Atau menggunakan Python
python -m http.server 8000

# Atau menggunakan Node.js
npx serve .
```

## 📱 Fitur Responsif

- **Desktop** - Layout multi-kolom dengan animasi penuh
- **Tablet** - Layout yang disesuaikan untuk layar medium  
- **Mobile** - Layout single-column dengan mobile menu

## 🎨 Komponen Utama

### Hero Section
- Background image dengan overlay
- Headline dan subheadline
- CTA buttons
- Trust indicators

### About Section
- Informasi perusahaan
- Feature cards dengan icons
- Trust badges

### Problem Section
- Masalah yang dihadapi peternak
- Grid layout dengan icons

### Product Section
- **APHTHOCLYN** (Perawatan Luar)
- **GIZCOW** (Dukungan Nutrisi)
- Manfaat dan cara pakai

### Why Both Section
- Kombinasi produk
- Visual representation

### Target Section
- Target audience
- User personas

### CTA Section
- Final call-to-action
- WhatsApp integration

### Footer
- Company information
- Contact details

## 📞 Integrasi WhatsApp

Landing page terintegrasi dengan WhatsApp Business:
- Nomor: +62 853-4032-9914
- Pesan otomatis untuk konsultasi produk

## 🎯 SEO Features

- Meta tags yang optimal
- Semantic HTML structure
- Alt text untuk gambar
- Sitemap.xml
- Robots.txt
- Structured data ready

## 🔧 Kustomisasi

### Mengubah Warna Brand
Edit variabel CSS di `css/styles.css`:

```css
:root {
    --sadita-red: 0 45% 25%;
    --sadita-gold: 38 90% 55%;
    --sadita-brown: 30 35% 45%;
}
```

### Mengubah Konten
Edit langsung di `index.html` untuk:
- Teks dan copy
- Gambar dan aset  
- Link dan CTA

### Menambah Animasi
Gunakan class CSS yang tersedia:
- `.fade-in` - Fade in dari bawah
- `.scale-in` - Scale in effect
- `.visible` - Trigger animasi

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Deployment

### Hosting Sederhana
1. Upload semua file ke web hosting
2. Pastikan index.html di root directory
3. Akses melalui domain

### GitHub Pages
1. Push ke GitHub repository
2. Enable GitHub Pages di Settings
3. Pilih branch main sebagai source

### Netlify/Vercel
1. Connect repository
2. Deploy otomatis
3. Custom domain (opsional)

## 📈 Performance

- Menggunakan CDN untuk Tailwind CSS dan icons
- Lazy loading untuk gambar
- Optimized animations
- Minimal JavaScript

## 🤝 Kontribusi

Untuk improvement atau bug fixes:
1. Fork repository
2. Buat feature branch
3. Commit changes
4. Submit pull request

## 📄 Lisensi

© 2024 PT. Sadita Indonesia. All rights reserved.

---

**Dibuat dengan ❤️ untuk peternak Indonesia**