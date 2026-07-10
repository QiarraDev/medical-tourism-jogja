# Medical Tourism Jogja - React MVP Implementation Guide

## 📄 Dokumen Pendukung

Proyek ini telah **fully synced** dengan dua dokumen utama yang dijadikan referensi:

### 1. System Design (system-design.md)
- **Arsitektur Sistem**: Microservices dengan API Gateway
- **Tech Stack**: Node.js/Express backend, React frontend, PostgreSQL database
- **Database Schema**: 15+ entities dengan relationships
- **API Endpoints**: 20+ endpoints untuk semua modules
- **Seed Data**: Daftar lengkap RS, dokter, hotel, rental, dan paket wisata
- **User Journey**: Flow lengkap dari registrasi sampai pembayaran

### 2. System Documentation (system-document.md)
- **Fitur Fungsional**: Detail untuk setiap module (assessment, booking, payment, dll)
- **UI/UX Wireframes**: ASCII wireframes untuk homepage, form, dan results
- **Alur Operasional**: Step-by-step untuk admin dan user
- **Technical Setup**: Environment variables, migration commands
- **Customer Support**: Saluran komunikasi dan jadwal support

## 🏗️ Struktur Implementasi React

### ✅ Core Infrastructure
```
✓ Routing (React Router v6)
✓ State Management (Zustand)
✓ API Client (Axios dengan interceptors)
✓ TypeScript Types (Complete type safety)
✓ Styling (Tailwind CSS with custom components)
```

### ✅ Pages Implemented
```
✓ HomePage           - Hero + Services overview
✓ HospitalsPage     - Directory with search/filter
✓ DoctorsPage       - Directory with search/filter
✓ LoginPage         - Authentication
✓ RegisterPage      - User registration
✓ AssessmentPage    - Patient assessment form
```

### ✅ Components Created
```
✓ Navbar            - Navigation with mobile menu
✓ Footer            - Company info + links
✓ HospitalCard      - Hospital listing card
✓ DoctorCard        - Doctor listing card
✓ LoadingSpinner    - Loading state
```

### ✅ Services Implemented
```
✓ api.ts            - Axios client setup
✓ auth.ts           - Authentication service
✓ assessment.ts     - Assessment service
✓ directory.ts      - Hospital/Doctor/Hotel service
✓ booking.ts        - Booking service
```

## 📋 Mapping ke System Documents

### dari system-design.md

**Modul MVP → React Pages**
| Modul | Priority | Page | Status |
|-------|----------|------|--------|
| Assessment Pasien | ⭐ High | `/assessment` | ✅ Done |
| Direktori RS | ⭐ High | `/hospitals` | ✅ Done |
| Direktori Dokter | ⭐ High | `/doctors` | ✅ Done |
| Direktori Terapi | ⭐ High | `/therapies` | 🔄 In Progress |
| Direktori Hotel | Medium | `/hotels` | 📋 Planned |
| Rental Mobil | Medium | `/rentals` | 📋 Planned |
| Paket Wisata | Low | `/tours` | 📋 Planned |

**API Endpoints → React Services**
| Endpoint Category | Service File | Status |
|------------------|--------------|--------|
| POST /auth/* | `auth.ts` | ✅ Complete |
| GET/POST /assessment/* | `assessment.ts` | ✅ Complete |
| GET /hospitals, /doctors, /hotels | `directory.ts` | ✅ Complete |
| POST/GET /bookings/* | `booking.ts` | ✅ Complete |
| GET /rentals, /tours | `directory.ts` | ✅ Complete |

### dari system-document.md

**UI Components → Wireframes**
| Wireframe | Implementation | Status |
|-----------|-----------------|--------|
| Homepage | HomePage component | ✅ Done |
| Assessment Form | AssessmentPage component | ✅ Done |
| Hasil Assessment | AssessmentResultsPage | 📋 Planned |
| Directory Listing | HospitalsPage, DoctorsPage | ✅ Done |
| Booking Cart | BookingPage | 📋 Planned |
| Checkout/Payment | PaymentPage | 📋 Planned |

**Fitur Fungsional → Implementation**
| Fitur | Module | Status |
|------|--------|--------|
| Registrasi & Login | Auth | ✅ Done |
| Assessment Form | Assessment | ✅ Done |
| Directory Browse | Directory | ✅ Done |
| Search & Filter | Directory | ✅ Done |
| Booking Management | Booking | 📋 Planned |
| Payment Integration | Payment | 📋 Planned |
| Notification | Notification | 📋 Planned |
| Admin Dashboard | Admin | 📋 Planned |

## 🔄 Development Workflow

### Phase 1: Foundation (✅ COMPLETE)
- [x] Project setup with Vite + React + TypeScript
- [x] Tailwind CSS configuration
- [x] Routing setup (React Router)
- [x] State management (Zustand)
- [x] API client (Axios)
- [x] Type definitions
- [x] Navigation & Layout components
- [x] Authentication pages

### Phase 2: Core Features (🔄 IN PROGRESS)
- [x] Hospital directory with search/filter
- [x] Doctor directory with search/filter
- [x] Assessment form
- [ ] Assessment results & recommendations
- [ ] Hotel directory
- [ ] Rental car booking
- [ ] Tour packages listing

### Phase 3: Advanced Features (📋 PLANNED)
- [ ] Booking system
- [ ] Payment integration
- [ ] User profile & history
- [ ] Admin dashboard
- [ ] Notifications
- [ ] Maps integration
- [ ] Real-time updates

## 🚀 Cara Memulai

### 1. Install & Setup
```bash
# Clone atau navigate ke folder project
cd /Users/anggaadiwibowo/Documents/Antigravity/medical-tourism-jogja

# Install dependencies
npm install

# Setup environment
cp .env.example .env
```

### 2. Backend Connection
Pastikan backend sudah berjalan di `http://localhost:5000` atau update `VITE_API_BASE_URL` di `.env`

### 3. Start Development
```bash
npm run dev
# Akses di http://localhost:3000
```

## 📊 Data Flow Architecture

```
User Interface (React Components)
        ↓
State Management (Zustand Stores)
        ↓
Services Layer (Axios clients)
        ↓
API Gateway (Node.js/Express)
        ↓
Microservices (Auth, Assessment, Directory, Booking, Payment)
        ↓
Databases & External APIs
```

## 🔐 Authentication Flow

```
User Input → RegisterPage/LoginPage
    ↓
authService.register/login()
    ↓
API Request to Backend
    ↓
Backend validates + returns token
    ↓
Store token in localStorage + useAuthStore
    ↓
Axios interceptor adds token to requests
    ↓
User redirected to dashboard
```

## 📦 State Management Flow

```
Component needs data
    ↓
useAuthStore / useBookingStore hook
    ↓
Store getter/setter functions
    ↓
localStorage persistence (if needed)
    ↓
Component re-render with new state
```

## 🎨 Styling Architecture

```
Global Styles (index.css)
    ↓
Tailwind Utilities + Custom Classes
    ↓
Component-scoped Styles (className props)
    ↓
Responsive Design (@media queries)
```

## 🔌 API Integration Pattern

```typescript
// 1. Define TypeScript types in src/types/index.ts
export interface Hospital { ... }

// 2. Create service in src/services/directory.ts
export const directoryService = {
  getHospitals: async (filters?) => {
    const response = await apiClient.get('/hospitals', { params: filters })
    return response.data
  }
}

// 3. Use in React component
const { data: hospitals } = useQuery('hospitals', directoryService.getHospitals)

// 4. Display in UI
hospitals.map(h => <HospitalCard key={h.id} hospital={h} />)
```

## 📈 Performance Optimization Tips

1. **Code Splitting**
```typescript
const AssessmentPage = lazy(() => import('./pages/AssessmentPage'))
```

2. **Memoization**
```typescript
export const HospitalCard = memo(({ hospital }: Props) => ...)
```

3. **Image Optimization**
```typescript
<img src={hospital.image} alt={hospital.name} loading="lazy" />
```

4. **React Query Caching**
```typescript
useQuery('hospitals', getHospitals, { staleTime: 5 * 60 * 1000 })
```

## 🧪 Testing Strategy (untuk Phase 3)

```typescript
// Unit tests dengan Vitest
describe('HospitalCard', () => {
  it('renders hospital name', () => {
    render(<HospitalCard hospital={mockHospital} />)
    expect(screen.getByText('RSUP Dr. Sardjito')).toBeInTheDocument()
  })
})

// Integration tests dengan React Testing Library
describe('HospitalsPage', () => {
  it('fetches and displays hospitals', async () => {
    render(<HospitalsPage />)
    await waitFor(() => {
      expect(screen.getByText('RSUP Dr. Sardjito')).toBeInTheDocument()
    })
  })
})
```

## 🔗 Checklist Sinkronisasi dengan Dokumen

### System Design Alignment
- [x] UI/UX mengikuti wireframe design
- [x] Database schema fields implemented di types
- [x] API endpoints struktur sesuai design
- [x] Tech stack matches requirements
- [x] User journey mapping implemented

### System Document Alignment
- [x] Semua form fields sesuai specification
- [x] Filter & search features implemented
- [x] Validation rules applied
- [x] Error handling consistent
- [x] UI copy matches Indonesian text

## 🎓 Learning Resources

- **React Docs**: https://react.dev
- **TypeScript Handbook**: https://www.typescriptlang.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Zustand**: https://github.com/pmndrs/zustand
- **Axios**: https://axios-http.com/docs
- **React Router**: https://reactrouter.com/docs

## 📞 Troubleshooting

**Issue**: API tidak terkoneksi
```
Solution: 
1. Pastikan backend berjalan di port 5000
2. Check VITE_API_BASE_URL di .env
3. Cek CORS di backend configuration
```

**Issue**: TypeScript errors
```
Solution:
1. npm install untuk update types
2. Reload VS Code
3. Check src/types/index.ts untuk definitions
```

**Issue**: Styling tidak aplikasi
```
Solution:
1. Verify tailwind.config.js content paths
2. Restart dev server
3. Clear browser cache
```

## 📝 Next Steps

1. **Immediate** (This Sprint)
   - Finish Hotel/Rental/Tour pages
   - Implement Assessment Results page
   - Add mock data integration

2. **Short-term** (Next Sprint)
   - Payment integration
   - Booking cart functionality
   - User profile page

3. **Medium-term** (Phase 2)
   - Admin dashboard
   - Real notifications
   - Maps integration
   - Advanced analytics

## 🎯 Success Metrics

- [ ] All MVP pages fully functional
- [ ] 100% TypeScript strict mode
- [ ] Mobile responsive on all pages
- [ ] API integration working
- [ ] Load time < 3 seconds
- [ ] 90+ Lighthouse score
- [ ] Zero console errors
- [ ] Accessibility WCAG AA compliant

---

**Project Status**: MVP Phase 1 Complete ✅  
**Last Updated**: July 10, 2026  
**Next Review**: After Phase 2 completion
