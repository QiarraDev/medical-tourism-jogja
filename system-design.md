# System Design Document - Medical Tourism Jogja
## MVP Version 1.0

---

## 1. Executive Summary

### 1.1 Latar Belakang
Yogyakarta memiliki potensi besar sebagai destinasi *medical tourism* dengan didukung oleh:
- Rumah sakit kelas nasional (RSUP Sardjito, JIH, dll)
- Dokter spesialis berkualitas
- Destinasi wisata kelas dunia
- Biaya hidup dan perawatan yang kompetitif

Platform **Medical Tourism Jogja** hadir sebagai solusi *one-stop platform* yang menghubungkan pasien internasional/lokal dengan ekosistem kesehatan dan pariwisata Jogja.

### 1.2 Tujuan MVP
Membangun sistem minimal yang dapat:
1. Menampilkan direktori **Rumah Sakit**, **Dokter Spesialis**, dan **Dokter Terapi** di Jogja
2. Memberikan rekomendasi **Hotel/Penginapan** terdekat
3. Menyediakan layanan **Rental Mobil** untuk penjemputan
4. Menawarkan **Paket Wisata** pasca perawatan

---

## 2. Arsitektur Sistem

### 2.1 Diagram Arsitektur

```mermaid
graph TB
    subgraph "Frontend Layer"
        A[Mobile App<br/>React Native] 
        B[Web App<br/>React JS]
    end

    subgraph "API Gateway Layer"
        C[API Gateway<br/>Node.js/Express]
    end

    subgraph "Microservices Layer"
        D1[Auth Service]
        D2[Assessment Service]
        D3[Directory Service]
        D4[Booking Service]
        D5[Payment Service]
        D6[Tourism Service]
    end

    subgraph "Third Party Integration"
        E1[Google Maps API]
        E2[Payment Gateway]
        E3[WhatsApp API]
        E4[SMTP Email]
    end

    subgraph "Database Layer"
        F1[(User DB)]
        F2[(Medical DB)]
        F3[(Directory DB)]
        F4[(Transaction DB)]
    end

    A --> C
    B --> C
    C --> D1
    C --> D2
    C --> D3
    C --> D4
    C --> D5
    C --> D6
    
    D3 --> E1
    D5 --> E2
    D1 --> E3
    D2 --> E4
    
    D1 --> F1
    D2 --> F2
    D3 --> F3
    D4 --> F4
    D5 --> F4

    2.2 Tech Stack
Layer	Teknologi	Keterangan
Frontend Mobile	React Native	Cross-platform iOS & Android
Frontend Web	React JS + Tailwind CSS	Dashboard admin & user web
Backend	Node.js + Express.js	RESTful API
Database	PostgreSQL	Data relasional utama
Cache	Redis	Caching data direktori
Cloud	AWS / Google Cloud	Hosting & scaling
Maps	Google Maps API / Leaflet	Pemetaan lokasi
Payment	Midtrans / Xendit	Pembayaran online
Notification	Firebase FCM + WhatsApp API	Notifikasi real-time
3. Modul Fungsional (MVP Scope)
3.1 Daftar Modul MVP
No	Modul	Fitur Utama	Prioritas
1	Assessment Pasien	Formulir data pasien & pendamping	⭐ High
2	Direktori Rumah Sakit	Daftar RS + peta lokasi	⭐ High
3	Direktori Dokter Spesialis	Nama, spesialisasi, alamat, no telepon	⭐ High
4	Direktori Dokter Terapi	Nama, terapi, alamat, no telepon	⭐ High
5	Direktori Hotel	Rekomendasi hotel terdekat	Medium
6	Rental Mobil	Booking kendaraan	Medium
7	Paket Wisata	Rekomendasi wisata pasca-sembuh	Low

4. Desain Database (MVP)
4.1 Entity Relationship Diagram
erDiagram
    USERS ||--o{ PATIENTS : has
    USERS ||--o{ COMPANIONS : has
    USERS ||--o{ BOOKINGS : makes
    
    PATIENTS ||--o{ ASSESSMENTS : has
    ASSESSMENTS ||--o{ RS_RECOMMENDATIONS : generates
    ASSESSMENTS ||--o{ HOTEL_RECOMMENDATIONS : generates
    
    DOCTORS }o--|| HOSPITALS : works_at
    DOCTORS ||--o{ THERAPIES : provides
    HOSPITALS ||--o{ ROOMS : has
    
    BOOKINGS ||--|| RENTAL_CARS : includes
    BOOKINGS ||--|| TOUR_PACKAGES : includes
    BOOKINGS ||--o{ PAYMENTS : has

    USERS {
        int id PK
        string full_name
        string email UNIQUE
        string phone UNIQUE
        string password_hash
        string role "patient|companion|admin"
        timestamp created_at
        timestamp updated_at
    }

    PATIENTS {
        int id PK
        int user_id FK
        date date_of_birth
        string gender
        string blood_type
        text medical_history
        text allergies
        string emergency_contact
        string emergency_phone
    }

    COMPANIONS {
        int id PK
        int user_id FK
        int patient_id FK
        string relationship
        string stay_duration
    }

    ASSESSMENTS {
        int id PK
        int patient_id FK
        string chief_complaint
        text symptoms
        string severity "mild|moderate|severe"
        string preferred_location
        decimal budget_min
        decimal budget_max
        timestamp assessment_date
        string status "pending|processing|completed"
    }

    HOSPITALS {
        int id PK
        string name
        string address
        string phone
        string email
        string website
        string hospital_class "A|B|C|D"
        text specialties "json array"
        decimal latitude
        decimal longitude
        float rating
        int review_count
        string working_hours
        boolean has_emergency
        boolean has_ambulance
        text facilities "json array"
        text images "json array"
    }

    DOCTORS {
        int id PK
        int hospital_id FK
        string full_name
        string title "dr|drg|dr,Sp|etc"
        string specialty
        string sub_specialty
        string practice_address
        string phone
        string email
        string schedule "json"
        string registration_number "STR"
        int years_experience
        float consultation_fee
        text education "json array"
        text certifications "json array"
        float rating
        boolean is_available
    }

    THERAPIES {
        int id PK
        int doctor_id FK
        int hospital_id FK
        string therapy_name
        string therapy_type "fisioterapi|okupasi|wicara|akupunktur|rehab"
        text description
        decimal price_per_session
        int duration_minutes
        text facilities "json array"
    }

    HOTELS {
        int id PK
        string name
        string address
        string phone
        string email
        decimal latitude
        decimal longitude
        int star_rating
        text amenities "json array"
        text room_types "json array"
        decimal price_per_night_min
        decimal price_per_night_max
        float distance_to_hospital "km"
        boolean has_disability_access
    }

    RENTAL_CARS {
        int id PK
        string name "Toyota Avanza|Hiace|etc"
        string type "MPV|SUV|Minibus|Wheelchair Access"
        int passenger_capacity
        decimal price_per_day
        decimal price_per_hour
        text facilities "json array"
        boolean is_available
        string driver_name
        string driver_phone
    }

    TOUR_PACKAGES {
        int id PK
        string package_name
        text description
        string duration "half_day|full_day|2_days"
        text destinations "json array"
        decimal price_per_person
        text inclusions "json array"
        text exclusions "json array"
        boolean is_active
    }

    BOOKINGS {
        int id PK
        int user_id FK
        int patient_id FK
        string booking_type "hospital|hotel|rental|tour"
        int reference_id "FK to respective table"
        date booking_date
        date service_date
        string status "pending|confirmed|cancelled|completed"
        decimal total_amount
        text notes
    }

    PAYMENTS {
        int id PK
        int booking_id FK
        decimal amount
        string payment_method "credit_card|bank_transfer|e_wallet"
        string payment_status "pending|paid|failed|refunded"
        string transaction_id
        timestamp payment_date
    }

    RS_RECOMMENDATIONS {
        int id PK
        int assessment_id FK
        int hospital_id FK
        float match_score
        string reason
        boolean is_selected
    }

    HOTEL_RECOMMENDATIONS {
        int id PK
        int assessment_id FK
        int hotel_id FK
        float match_score
        string reason
        boolean is_selected
    }
4.2 Contoh Data Dokter (Seed Data untuk MVP)
Berikut contoh data dokter spesialis dan terapi di Yogyakarta:

A. Dokter Spesialis
Nama Dokter	Spesialisasi	Rumah Sakit	Alamat Praktik	No Telepon
dr. Eva Rusiene, M.K.M	Spesialis Kulit & Kelamin	RSUP Dr. Sardjito	Jl. Kesehatan No.1, Sekip, Sleman	(0274) 555555
dr. Agus Sudarso, Sp.PD	Spesialis Penyakit Dalam	RS JIH	Jl. Godean Km 4, Sleman	(0274) 551555
dr. Rina Handayani, Sp.JP	Spesialis Jantung	RS Panti Rapih	Jl. Cik Di Tiro No.30, Yogyakarta	(0274) 562111
dr. Bambang Setiawan, Sp.OT	Spesialis Orthopaedi	RSUD Kota Yogyakarta	Jl. Wirosaban No.1, Yogyakarta	(0274) 515353
dr. Sri Mulyani, Sp.M	Spesialis Mata	RS Mata DR YAP	Jl. Cik Di Tiro No.8, Yogyakarta	(0274) 550456
dr. Hendra Wijaya, Sp.B	Spesialis Bedah	RS Bethesda	Jl. Jend. Sudirman No.70, Yogyakarta	(0274) 586666
dr. Novi Herawati, Sp.OG	Spesialis Kandungan	RS Condong Catur	Jl. Condongcatur No.18, Sleman	(0274) 485555
B. Dokter Terapi
Nama Dokter	Bidang Terapi	Tempat Praktik	Alamat	No Telepon
dr. Anita Purnama	Fisioterapi	RSUP Dr. Sardjito	Jl. Kesehatan No.1, Sekip	(0274) 555555 ext 123
dr. Budi Santoso	Akupunktur Medis	Klinik Akupunktur Yogyakarta	Jl. Affandi No.15, Sleman	(0274) 556678
dr. Wulan Sari	Rehabilitasi Medik	RS Panti Rapih	Jl. Cik Di Tiro No.30	(0274) 562111 ext 456
dr. Teguh Prayoga	Terapi Wicara	Klinik Tumbuh Kembang	Jl. Gejayan No.45, Yogyakarta	(0274) 589876
dr. Dian Pertiwi	Okupasi Terapi	RS JIH	Jl. Godean Km 4, Sleman	(0274) 551555 ext 789
5. API Endpoint Design (MVP)
5.1 Authentication Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Registrasi user
POST	/api/auth/login	Login user
POST	/api/auth/refresh	Refresh token
POST	/api/auth/logout	Logout
5.2 Patient Assessment Endpoints
Method	Endpoint	Description
POST	/api/assessment	Buat assessment baru
GET	/api/assessment/{id}	Detail assessment
PUT	/api/assessment/{id}	Update assessment
GET	/api/assessment/{id}/recommendations	Dapatkan rekomendasi RS & hotel
5.3 Directory Endpoints
Method	Endpoint	Description
GET	/api/hospitals	Daftar semua RS (dengan filter)
GET	/api/hospitals/{id}	Detail RS
GET	/api/hospitals/nearby	RS terdekat (berdasarkan lokasi)
GET	/api/doctors	Daftar semua dokter (filter spesialisasi)
GET	/api/doctors/{id}	Detail dokter
GET	/api/doctors/specialty/{specialty}	Dokter berdasarkan spesialisasi
GET	/api/therapies	Daftar semua terapi
GET	/api/therapies/{id}	Detail terapi
GET	/api/hotels	Daftar hotel (dengan filter)
GET	/api/hotels/nearby	Hotel terdekat dari RS
5.4 Booking Endpoints
Method	Endpoint	Description
POST	/api/bookings	Buat booking baru
GET	/api/bookings/{id}	Detail booking
GET	/api/bookings/user	Booking user saat ini
PUT	/api/bookings/{id}/status	Update status booking
DELETE	/api/bookings/{id}	Cancel booking
5.5 Rental Car Endpoints
Method	Endpoint	Description
GET	/api/rentals	Daftar mobil rental
GET	/api/rentals/{id}	Detail mobil rental
POST	/api/rentals/book	Booking mobil
5.6 Tourism Endpoints
Method	Endpoint	Description
GET	/api/tours	Daftar paket wisata
GET	/api/tours/{id}	Detail paket wisata
POST	/api/tours/book	Booking paket wisata

6. User Journey Flow (MVP)
flowchart TD
    A[Mulai] --> B[User Registrasi/Login]
    B --> C[Isi Form Assessment]
    C --> D[Sistem Proses Assessment]
    D --> E{Tampilkan Rekomendasi}
    
    E --> F[Rekomendasi RS & Dokter Spesialis]
    E --> G[Rekomendasi Hotel Terdekat]
    E --> H[Rekomendasi Dokter Terapi]
    
    F --> I[User Pilih RS & Dokter]
    G --> J[User Pilih Hotel]
    H --> K[User Pilih Terapi]
    
    I --> L[Booking RS/Dokter]
    J --> M[Booking Hotel]
    K --> N[Booking Terapi]
    
    L --> O[Pilih Rental Mobil?]
    M --> O
    N --> O
    
    O -->|Ya| P[Booking Rental Mobil]
    O -->|Tidak| Q[Konfirmasi Semua Booking]
    
    P --> Q
    Q --> R[Pembayaran]
    R --> S[E-Ticket & Notifikasi]
    S --> T[Perjalanan Medis]
    
    T --> U[Selesai Perawatan]
    U --> V{Sudah Sembuh?}
    V -->|Ya| W[Booking Paket Wisata]
    V -->|Tidak| X[Perpanjang Perawatan]
    
    W --> Y[Wisata di Jogja]
    Y --> Z[Feedback & Selesai]
    X --> L

12. Risks & Mitigation
Risk	Dampak	Mitigasi
Data Dokter tidak lengkap	Rendahnya kepercayaan user	Kerjasama dengan Dinas Kesehatan & IDI Jogja
Integrasi Payment gagal	Booking terhambat	Multiple payment gateway backup
Server down	Layanan terputus	Auto-scaling & monitoring
Persaingan dengan platform lain	User acquisition lambat	Unique value proposition (integrasi wisata)
Regulasi kesehatan	Compliance issue	Konsultasi dengan Dinkes sejak awal
13. Appendices
A. Daftar Rumah Sakit di Yogyakarta (MVP)
No	Nama RS	Kelas	Alamat	Telepon
1	RSUP Dr. Sardjito	A	Jl. Kesehatan No.1, Sekip, Sleman	(0274) 555555
2	RS Panti Rapih	B	Jl. Cik Di Tiro No.30, Yogyakarta	(0274) 562111
3	RS Bethesda	B	Jl. Jend. Sudirman No.70, Yogyakarta	(0274) 586666
4	RS JIH	B	Jl. Godean Km 4, Sleman	(0274) 551555
5	RSUD Kota Yogyakarta	B	Jl. Wirosaban No.1, Yogyakarta	(0274) 515353
6	RS Condong Catur	B	Jl. Condongcatur No.18, Sleman	(0274) 485555
7	RS Mata DR YAP	C	Jl. Cik Di Tiro No.8, Yogyakarta	(0274) 550456
8	RSKIA Sadewa	C	Jl. Wolter Monginsidi No.33, Yogyakarta	(0274) 514561
B. Daftar Hotel Rekomendasi (MVP)
No	Nama Hotel	Bintang	Alamat	Jarak ke RS Terdekat
1	The Phoenix Hotel	5	Jl. Jend. Sudirman No.9, Yogyakarta	1.2 km ke RS Bethesda
2	Hyatt Regency Yogyakarta	5	Jl. Palagan Tentara Pelajar, Sleman	3 km ke RSUP Sardjito
3	Hotel Tentrem	5	Jl. AM Sangaji No.72, Yogyakarta	2 km ke RS Panti Rapih
4	Grand Rohan Jogja	4	Jl. Magelang Km 2, Sleman	1.5 km ke RS JIH
5	Harper Yogyakarta	4	Jl. Adisucipto No.55, Sleman	4 km ke RSUP Sardjito
6	POP Hotel	3	Jl. Hayam Wuruk No.5, Yogyakarta	1 km ke RSUD Kota
C. Daftar Rental Mobil (MVP)
No	Nama Kendaraan	Kapasitas	Tipe	Harga/Hari	Aksesibilitas
1	Toyota Avanza	7	MPV	Rp 350.000	-
2	Toyota Innova	7	SUV	Rp 500.000	-
3	Hyundai H-1	11	Minibus	Rp 750.000	-
4	Wheelchair Access Van	6	Modified	Rp 900.000	Kursi Roda & Ramp
5	Toyota Alphard	8	Luxury	Rp 1.500.000	-
D. Paket Wisata (MVP)
No	Paket	Durasi	Destinasi	Harga/Orang
1	Jogja Heritage	Half Day	Malioboro, Keraton, Taman Sari	Rp 250.000
2	Candi Borobudur	Full Day	Borobudur + Mendut + Pawon	Rp 450.000
3	Pantai Selatan	Full Day	Parangtritis, Depok, Indrayanti	Rp 400.000
4	Jogja Culinary	Half Day	Gudeg, Angkringan, Bakpia Pathok	Rp 200.000
5	Borobudur Sunrise	Half Day	Sunrise + Museum Karmawibangga	Rp 350.000