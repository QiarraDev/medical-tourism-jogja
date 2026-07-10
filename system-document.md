
---

# FILE 2: system-document.md

```markdown
# System Documentation - Medical Tourism Jogja
## MVP Version 1.0

---

## 1. Overview

### 1.1 Purpose of Document
Dokumen ini berisi panduan lengkap penggunaan dan operasional platform **Medical Tourism Jogja**. Dokumen ini ditujukan untuk:
- **Client/Pemilik Proyek**: Memahami fitur dan alur sistem
- **Tim Developer**: Panduan implementasi teknis
- **Tim Operasional**: Panduan administrasi dan manajemen konten

### 1.2 Product Vision
Menjadikan Yogyakarta sebagai destinasi *medical tourism* terdepan di Asia Tenggara dengan menghubungkan pasien internasional dengan layanan kesehatan, akomodasi, transportasi, dan wisata berkualitas dalam satu platform terintegrasi.

### 1.3 Target Pengguna
| Role | Deskripsi |
|------|-----------|
| **Pasien** | Wisatawan medis yang mencari perawatan di Jogja |
| **Pendamping** | Keluarga/teman yang mendampingi pasien |
| **Administrator** | Pengelola platform dari sisi internal |
| **Mitra RS/Hotel** | Pihak penyedia layanan (akan dikembangkan di fase berikutnya) |

---

## 2. Fitur Fungsional (Detail MVP)

### 2.1 Modul Registrasi & Autentikasi

#### 2.1.1 Alur Registrasi
1.  User membuka aplikasi/web
2.  Klik tombol "Daftar"
3.  Mengisi formulir:
    - Nama Lengkap
    - Email
    - Nomor Telepon
    - Password
    - Peran (Pasien / Pendamping)
4.  Sistem mengirimkan OTP ke WhatsApp/Email
5.  User verifikasi OTP
6.  Akun aktif

#### 2.1.2 Alur Login
1.  Input Email/Phone + Password
2.  Sistem verifikasi kredensial
3.  JWT Token diberikan
4.  User diarahkan ke Dashboard

---

### 2.2 Modul Assessment Pasien

#### 2.2.1 Tujuan
Mengumpulkan data awal untuk memberikan rekomendasi terbaik kepada pasien.

#### 2.2.2 Form Assessment
| Field | Tipe | Deskripsi | Contoh |
|-------|------|-----------|--------|
| Nama Pasien | Text | Nama lengkap | Ahmad Fauzi |
| Tanggal Lahir | Date | - | 15/05/1980 |
| Jenis Kelamin | Select | L/P | L |
| Golongan Darah | Select | A/B/AB/O | A |
| Keluhan Utama | Text | Deskripsi keluhan | Sakit dada dan sesak nafas |
| Riwayat Penyakit | Textarea | Penyakit yang pernah diderita | Hipertensi, Diabetes |
| Alergi | Text | Alergi yang diketahui | Amoksisilin |
| Tingkat Keparahan | Select | Ringan/Sedang/Berat | Berat |
| Lokasi Preferensi | Text | Area yang diinginkan | Sekip, Yogyakarta |
| Budget Minimal | Number | - | 5.000.000 |
| Budget Maksimal | Number | - | 25.000.000 |
| Jumlah Pendamping | Number | - | 2 |
| Kontak Darurat | Text | - | 081234567890 |

#### 2.2.3 Output Assessment
Setelah submit, sistem menampilkan:
- ✅ **3 Rekomendasi Rumah Sakit** (dengan skor kecocokan)
- ✅ **3 Rekomendasi Dokter Spesialis** (berdasarkan keluhan)
- ✅ **3 Rekomendasi Dokter Terapi** (jika diperlukan)
- ✅ **3 Rekomendasi Hotel** (terdekat dengan RS pilihan)
- ✅ Estimasi biaya total

---

### 2.3 Modul Direktori

#### 2.3.1 Direktori Rumah Sakit

**Fitur:**
- Daftar semua RS
- Filter berdasarkan:
  - Lokasi (kecamatan)
  - Kelas RS (A/B/C/D)
  - Spesialisasi unggulan
  - Fasilitas (IGD, Ambulans, dll)
- Detail RS:
  - Nama, alamat, telepon
  - Jam operasional
  - Daftar layanan & spesialisasi
  - Daftar dokter yang praktik
  - Peta lokasi (Google Maps)
  - Rating & review

#### 2.3.2 Direktori Dokter Spesialis

**Data Dokter:**

| Kolom | Sumber Data |
|-------|-------------|
| Nama Lengkap | Data dari RS/Konsil Kedokteran |
| Gelar/Sebutan | dr., drg., Sp.JP, dll |
| Spesialisasi | Jantung, Kulit, Orthopaedi, dll |
| Sub-spesialisasi | Intervensi Kardiologi, dll |
| Nomor STR | Surat Tanda Registrasi |
| Tempat Praktik | Nama RS/Klinik |
| Alamat Praktik | Alamat lengkap |
| Nomor Telepon | Kontak praktik |
| Jadwal Praktik | Hari & jam |
| Biaya Konsultasi | Nominal |
| Pengalaman | Tahun praktik |
| Rating | Dari pasien sebelumnya |

**Fitur Pencarian:**
- Cari dokter berdasarkan:
  - Nama
  - Spesialisasi
  - Nama RS
  - Lokasi terdekat

#### 2.3.3 Direktori Dokter Terapi

**Jenis Terapi yang Tersedia:**
1.  **Fisioterapi** - Rehabilitasi fisik pasca operasi
2.  **Okupasi Terapi** - Kembali ke aktivitas sehari-hari
3.  **Terapi Wicara** - Gangguan komunikasi/bicara
4.  **Akupunktur Medis** - Nyeri kronis & neuromuskular
5.  **Rehabilitasi Medik** - Pemulihan fungsi tubuh

**Data Terapis:**
- Nama Lengkap
- Bidang Keahlian
- Tempat Praktik
- Alamat
- Telepon
- Sertifikasi

#### 2.3.4 Direktori Hotel

**Fitur:**
- Daftar hotel mitra
- Filter:
  - Bintang hotel
  - Jarak dari RS terdekat
  - Fasilitas aksesibilitas (kursi roda)
  - Rentang harga
- Detail hotel:
  - Nama, alamat, telepon
  - Harga per malam
  - Fasilitas
  - Peta lokasi
  - Jarak ke RS terdekat

---

### 2.4 Modul Booking

#### 2.4.1 Alur Booking RS/Dokter
1.  User pilih RS/dokter dari rekomendasi
2.  Pilih tanggal & jam praktik
3.  Isi data tambahan (keluhan detail)
4.  Sistem cek ketersediaan
5.  Konfirmasi booking
6.  Selesai → masuk ke keranjang

#### 2.4.2 Alur Booking Hotel
1.  User pilih hotel dari rekomendasi
2.  Pilih tipe kamar & jumlah
3.  Pilih tanggal check-in & check-out
4.  Sistem cek ketersediaan
5.  Konfirmasi booking
6.  Selesai → masuk ke keranjang

#### 2.4.3 Alur Booking Rental
1.  User pilih jenis kendaraan
2.  Pilih tanggal & durasi sewa
3.  Pilih lokasi penjemputan
4.  Sistem cek ketersediaan
5.  Konfirmasi booking
6.  Selesai → masuk ke keranjang

#### 2.4.4 Alur Booking Wisata
1.  User pilih paket wisata
2.  Pilih tanggal & jumlah peserta
3.  Sistem cek ketersediaan
4.  Konfirmasi booking
5.  Selesai → masuk ke keranjang

---

### 2.5 Modul Pembayaran

**Metode Pembayaran (MVP):**
1.  Transfer Bank (BCA, Mandiri, BRI)
2.  Kartu Kredit (Visa/Mastercard)
3.  E-Wallet (OVO, GoPay, Dana)

**Alur Pembayaran:**
1.  User cek keranjang booking
2.  Pilih metode pembayaran
3.  Sistem generate invoice
4.  User melakukan pembayaran
5.  Sistem verifikasi pembayaran (manual/otomatis)
6.  Jika sukses → E-Ticket dikirim
7.  Booking status menjadi "Confirmed"

---

### 2.6 Modul Notifikasi

**Jenis Notifikasi:**
| Tipe | Metode | Trigger |
|------|--------|---------|
| OTP Verifikasi | WhatsApp / Email | Registrasi |
| Konfirmasi Booking | WhatsApp / Email | Booking sukses |
| Pengingat Jadwal | WhatsApp | H-1 jadwal |
| Pembayaran Sukses | WhatsApp / Email | Payment confirmed |
| Status Update | In-App | Perubahan status booking |
| Promo & Penawaran | Email / In-App | Periodic |

---

### 2.7 Modul Admin Dashboard

**Fitur Admin:**
- **User Management**: Lihat, tambah, suspend user
- **Content Management**: CRUD data:
  - Rumah Sakit
  - Dokter Spesialis
  - Dokter Terapi
  - Hotel
  - Rental Mobil
  - Paket Wisata
- **Booking Management**: Monitor semua booking
- **Payment Management**: Verifikasi pembayaran manual
- **Reports & Analytics**:
  - Jumlah booking / hari
  - Revenue / bulan
  - Popular destination
  - User acquisition

---

## 3. UI/UX Wireframe (MVP)

### 3.1 Homepage / Landing Page
┌──────────────────────────────────────┐
│ [Logo] Medical Tourism Jogja │
│ Home | RS | Dokter | Hotel | Wisata │
│ │
│ ┌────────────────────────────────┐ │
│ │ Cari Kebutuhan Medis Anda │ │
│ │ [ 🔍 Cari RS / Dokter / Hotel]│ │
│ └────────────────────────────────┘ │
│ │
│ [HOSPITAL] [DOCTOR] [HOTEL] [CAR] │
│ RS Terdekat Dokter Hotel Rental │
│ │
│ ┌─────── Rekomendasi ───────┐ │
│ │ RS A ★★★★☆ 2.5 km │ │
│ │ RS B ★★★★★ 1.2 km │ │
│ │ RS C ★★★☆☆ 4.0 km │ │
│ └────────────────────────────┘ │
│ │
│ [Mulai Assessment] │
│ │
│ © 2026 Medical Tourism Jogja │
└──────────────────────────────────────┘


### 3.2 Assessment Form (Mobile)
┌──────────────────────────────────────┐
│ ← Kembali Assessment Pasien │
│ │
│ 1. Data Pasien │
│ Nama: [_____] │
│ TTL : [__//] │
│ Keluhan: [_____] │
│ │
│ 2. Preferensi │
│ Lokasi: [V] Sekip │
│ Budget: [Rp 10.000.000] │
│ Pendamping: [_] orang │
│ │
│ [Lanjutkan] │
│ │
└──────────────────────────────────────┘

text

### 3.3 Hasil Assessment
┌──────────────────────────────────────┐
│ ✅ Rekomendasi Terbaik Untuk Anda │
│ │
│ 🏥 Rumah Sakit Pilihan │
│ ┌────────────────────────────┐ │
│ │ RSUP Dr. Sardjito │ │
│ │ ★★★★★ 4.8 (2.3 km) │ │
│ │ Spesialis: Jantung, Saraf │ │
│ │ Ketersediaan: ✓ │ │
│ │ [Pilih] │ │
│ └────────────────────────────┘ │
│ │
│ 🏨 Hotel Rekomendasi │
│ ┌────────────────────────────┐ │
│ │ Hyatt Regency │ │
│ │ ★★★★★ 4.9 (1.5 km) │ │
│ │ Fasilitas: Akses Kursi Roda│ │
│ │ [Pilih] │ │
│ └────────────────────────────┘ │
│ │
│ 👨‍⚕️ Dokter Spesialis │
│ ┌────────────────────────────┐ │
│ │ dr. Agus Sudarso, Sp.PD │ │
│ │ 18 tahun pengalaman │ │
│ │ Kontak: 0877-XXXX-XXXX │ │
│ │ [Hubungi] [Booking] │ │
│ └────────────────────────────┘ │
│ │
│ [Lihat Semua Rekomendasi] │
│ [Booking Sekarang] │
└──────────────────────────────────────┘

text

---

## 4. Technical Documentation

### 4.1 Environment Setup

#### Prerequisites
- Node.js v18+
- PostgreSQL v14+
- Redis v6+
- Git

#### Backend Setup
```bash
# Clone repository
git clone https://github.com/medical-tourism-jogja/backend.git
cd backend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# Run database migration
npm run migrate

# Seed initial data
npm run seed

# Start development server
npm run dev
Frontend Setup
bash
# Clone repository
git clone https://github.com/medical-tourism-jogja/frontend.git
cd frontend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Start development server
npm start
4.2 Environment Variables (.env)
env
# Server
PORT=5000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=medical_tourism_db

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d

# Third Party APIs
GOOGLE_MAPS_API_KEY=your_google_maps_key
MIDTRANS_SERVER_KEY=your_midtrans_key
WHATSAPP_API_KEY=your_whatsapp_key

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Cloud Storage
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_KEY=your_aws_secret_key
AWS_BUCKET_NAME=medical-tourism-images
4.3 Database Migration Commands
bash
# Create new migration
npm run migration:create -- --name create_doctors_table

# Run migrations
npm run migration:up

# Rollback last migration
npm run migration:down

# Seed database
npm run seed:run
4.4 Testing
bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run e2e tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
5. Operational Guide
5.1 Content Management (Admin)
Menambahkan Dokter Baru
Login sebagai Admin

Buka menu Content > Dokter

Klik Tambah Dokter

Isi formulir:

Nama Lengkap

Gelar

Spesialisasi

Tempat Praktik (pilih dari daftar RS)

Alamat Praktik

Nomor Telepon

Jadwal Praktik

Biaya Konsultasi

Upload foto (opsional)

Klik Simpan

Data akan muncul di direktori publik

Menambahkan RS Baru
Login sebagai Admin

Buka menu Content > Rumah Sakit

Klik Tambah RS

Isi formulir:

Nama RS

Alamat

Telepon

Kelas RS

Spesialisasi Unggulan (multi-select)

Koordinat (drag pin di map)

Fasilitas

Jam Operasional

Klik Simpan

5.2 Monitoring Booking
Admin dapat melihat semua booking di menu Booking > All Bookings:

Status: Pending, Confirmed, Completed, Cancelled

Filter berdasarkan tanggal, tipe booking, status

Export ke Excel (CSV)

Detail booking (peserta, RS, hotel, dll)

5.3 Verifikasi Pembayaran
Untuk pembayaran transfer manual:

User upload bukti transfer

Admin buka menu Payment > Pending

Klik bukti transfer

Verifikasi kecocokan nominal & rekening

Klik Konfirmasi Pembayaran

Sistem mengirim notifikasi ke user

5.4 Customer Support
Saluran Support:

WhatsApp: +62 812-3456-7890

Email: support@medicaltourismjogja.com

Live Chat: Tersedia di aplikasi

Jadwal Support:

Senin - Jumat: 08.00 - 20.00 WIB

Sabtu: 08.00 - 15.00 WIB

Minggu: Tutup (emergency via WhatsApp)

