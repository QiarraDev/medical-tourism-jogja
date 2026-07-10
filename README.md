# Medical Tourism Jogja - MVP Frontend (React)

Platform one-stop untuk medical tourism di Yogyakarta dengan integrasi rumah sakit, dokter spesialis, hotel, rental mobil, dan paket wisata.

## 📋 Sinkronisasi Dokumen

Proyek ini telah disinkronisasi dengan dua dokumen utama:

1. **system-design.md** - Desain sistem, arsitektur, API endpoints, dan database schema
2. **system-document.md** - Dokumentasi operasional, user journey, dan wireframe UI/UX

## 🚀 Fitur MVP

### ✅ Sudah Diimplementasikan
- **Homepage** - Landing page dengan hero section dan fitur overview
- **Authentication** - Login & Register dengan Zustand store
- **Direktori Rumah Sakit** - Daftar, search, dan filter RS
- **Direktori Dokter** - Daftar, search, dan filter dokter spesialis
- **Assessment Form** - Form komprehensif untuk patient assessment
- **Responsive Design** - Mobile-first dengan Tailwind CSS

### 📦 Struktur Project

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HospitalCard.tsx
│   ├── DoctorCard.tsx
│   └── LoadingSpinner.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── HospitalsPage.tsx
│   ├── DoctorsPage.tsx
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   └── AssessmentPage.tsx
├── services/           # API services
│   ├── api.ts
│   ├── auth.ts
│   ├── assessment.ts
│   ├── directory.ts
│   └── booking.ts
├── store/              # Zustand stores
│   ├── authStore.ts
│   └── bookingStore.ts
├── types/              # TypeScript types
│   └── index.ts
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js v18+
- npm atau yarn

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Setup environment variables
cp .env.example .env

# Edit .env dengan konfigurasi Anda:
VITE_API_BASE_URL=http://localhost:5000/api
VITE_GOOGLE_MAPS_API_KEY=your_key_here
VITE_APP_NAME=Medical Tourism Jogja

# 3. Start development server
npm run dev

# Server akan berjalan di http://localhost:3000
```

### Build untuk Production

```bash
npm run build
npm run preview
```

## 🎯 Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| **Frontend Framework** | React 18.2 | UI library |
| **Language** | TypeScript | Type-safe development |
| **Routing** | React Router v6 | Client-side routing |
| **Styling** | Tailwind CSS | Utility-first CSS |
| **Build Tool** | Vite | Fast build tool |
| **State Management** | Zustand | Lightweight store |
| **HTTP Client** | Axios | API requests |
| **Icons** | Lucide React | Beautiful icons |
| **Form Handling** | React Hook Form | Efficient form management |
| **Validation** | Zod | Schema validation |

## 📱 Pages & Routes

```
/                      - Homepage
/hospitals             - Direktori Rumah Sakit
/hospitals/:id         - Detail Rumah Sakit (coming soon)
/doctors               - Direktori Dokter Spesialis
/doctors/:id           - Detail Dokter (coming soon)
/hotels                - Direktori Hotel (coming soon)
/auth/login            - Login Page
/auth/register         - Register Page
/assessment            - Assessment Form
/assessment/:id/results - Assessment Results (coming soon)
/booking               - Booking Cart (coming soon)
/profile               - User Profile (coming soon)
```

## 🔗 API Integration

Frontend terintegrasi dengan backend melalui Axios client:

### Endpoints yang Sudah Didukung

**Authentication**
```
POST   /api/auth/register     - Register user baru
POST   /api/auth/login        - Login user
POST   /api/auth/logout       - Logout
GET    /api/auth/me           - Get current user
```

**Assessment**
```
POST   /api/assessment                  - Create assessment
GET    /api/assessment/:id              - Get assessment detail
PUT    /api/assessment/:id              - Update assessment
GET    /api/assessment/:id/recommendations - Get recommendations
```

**Directory**
```
GET    /api/hospitals              - List hospitals
GET    /api/hospitals/:id          - Hospital detail
GET    /api/hospitals/nearby       - Nearby hospitals
GET    /api/doctors                - List doctors
GET    /api/doctors/specialty/:specialty - Doctors by specialty
GET    /api/hotels                 - List hotels
```

**Booking**
```
POST   /api/bookings              - Create booking
GET    /api/bookings/:id          - Booking detail
GET    /api/bookings/user         - User bookings
PUT    /api/bookings/:id/status   - Update status
DELETE /api/bookings/:id          - Cancel booking
```

## 📊 State Management

### Authentication Store (Zustand)

```typescript
useAuthStore:
- user: User | null
- token: string | null
- isLoading: boolean
- error: string | null
- setUser(user)
- setToken(token)
- logout()
```

### Booking Store (Zustand)

```typescript
useBookingStore:
- cart: BookingCart[]
- addToCart(item)
- removeFromCart(id)
- clearCart()
- getTotalAmount()
```

## 🎨 Styling & Components

### Tailwind CSS Config

Custom colors sudah dikonfigurasi:
- `primary` - #2563eb (Blue)
- `secondary` - #1e40af (Dark Blue)
- `accent` - #f59e0b (Amber)
- `success` - #10b981 (Green)
- `danger` - #ef4444 (Red)

### Component Classes

```css
.btn              /* Base button */
.btn-primary      /* Primary button */
.btn-secondary    /* Secondary button */
.btn-outline      /* Outline button */
.card             /* Card component */
.input            /* Form input */
.container        /* Max-width container */
.section          /* Section padding */
```

## 🔐 Authentication Flow

1. User registers/login
2. Credentials dikirim ke backend
3. Backend returns user data + JWT token
4. Token disimpan di localStorage
5. Token included di setiap request via Axios interceptor
6. Automatic redirect ke login jika token expired

## 🚧 Next Steps (Phase 2)

- [ ] Hotel Booking Page
- [ ] Rental Car Booking
- [ ] Tour Packages Listing
- [ ] Assessment Results & Recommendations
- [ ] User Profile & Booking History
- [ ] Payment Integration (Midtrans/Xendit)
- [ ] Admin Dashboard
- [ ] Real-time Notifications (Firebase)
- [ ] Google Maps Integration
- [ ] Map-based Search

## 📚 Documentation

- [System Design](./system-design.md) - Architecture & Database Design
- [System Document](./system-document.md) - Operational Guide & Wireframes

## 🤝 Contributing

Ketika membuat perubahan:

1. Pastikan types sudah proper di `src/types/index.ts`
2. Create services di `src/services/` untuk API calls
3. Use store dari `src/store/` untuk state management
4. Keep components reusable di `src/components/`
5. Follow Tailwind conventions untuk styling

## 📝 Environment Variables

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
VITE_APP_NAME=Medical Tourism Jogja
```

## 🐛 Troubleshooting

**Port 3000 sudah digunakan?**
```bash
npm run dev -- --port 3001
```

**CORS Error?**
- Pastikan backend sudah set CORS headers
- Check VITE_API_BASE_URL di .env

**Types tidak terdeteksi?**
- Restart IDE Anda
- Clear node_modules dan reinstall: `rm -rf node_modules && npm install`

## 📞 Support

- Email: support@medicaltourismjogja.com
- WhatsApp: +62 812-3456-7890
- Documentation: Lihat system-document.md

---

**Version:** 1.0.0 (MVP)  
**Last Updated:** July 10, 2026  
**Status:** Development
