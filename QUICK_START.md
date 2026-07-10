# Quick Start Guide - Medical Tourism Jogja MVP

Panduan singkat untuk memulai development Medical Tourism Jogja React MVP.

## ⚡ 5 Menit Setup

### 1. Install Dependencies
```bash
cd /Users/anggaadiwibowo/Documents/Antigravity/medical-tourism-jogja
npm install
```

### 2. Setup Environment
```bash
cp .env.example .env
```

Edit `.env`:
```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_GOOGLE_MAPS_API_KEY=your_key_here
VITE_APP_NAME=Medical Tourism Jogja
```

### 3. Start Development Server
```bash
npm run dev
```

Open http://localhost:3000 in your browser ✅

## 📂 Project Structure Quick Reference

```
src/
├── components/     → Reusable UI components
├── pages/          → Page components
├── services/       → API integration
├── store/          → State management
├── types/          → TypeScript definitions
└── data/           → Mock data
```

## 🗂️ Important Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main app with routing |
| `src/types/index.ts` | All TypeScript types |
| `src/services/api.ts` | Axios configuration |
| `src/store/authStore.ts` | User state |
| `vite.config.ts` | Build configuration |
| `tailwind.config.js` | Styling configuration |

## 🚀 Key Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm run preview         # Preview production build

# Linting (optional)
npm run lint           # Check code quality
```

## 📄 Key Documentation

Read in this order:

1. **README.md** - Overview & setup
2. **IMPLEMENTATION_GUIDE.md** - Architecture & patterns
3. **PROJECT_STATUS.md** - Current status
4. **system-design.md** - Technical design
5. **system-document.md** - Operations manual

## 🎯 Common Tasks

### Add a New Page
```typescript
// 1. Create src/pages/NewPage.tsx
export const NewPage = () => {
  return <div>New Page</div>
}

// 2. Import in App.tsx
import { NewPage } from '@/pages/NewPage'

// 3. Add route
<Route path="/new" element={<NewPage />} />
```

### Add a New Component
```typescript
// 1. Create src/components/NewComponent.tsx
interface NewComponentProps {
  title: string
}

export const NewComponent = ({ title }: NewComponentProps) => {
  return <div>{title}</div>
}

// 2. Use in pages
<NewComponent title="Hello" />
```

### Call API
```typescript
// 1. Use existing service
import { directoryService } from '@/services/directory'

// 2. In component
const [data, setData] = useState([])

useEffect(() => {
  const fetchData = async () => {
    const result = await directoryService.getHospitals()
    setData(result)
  }
  fetchData()
}, [])
```

### Use State Management
```typescript
// Import store
import { useAuthStore } from '@/store/authStore'

// Use in component
const { user, logout } = useAuthStore()

// Update state
const { setUser, setToken } = useAuthStore()
setUser(newUser)
setToken(newToken)
```

## 🎨 Styling with Tailwind

```typescript
// Use utility classes
<div className="bg-primary text-white p-4 rounded-lg">
  <h1 className="text-2xl font-bold mb-2">Title</h1>
  <p className="text-gray-100">Description</p>
</div>

// Use component classes
<button className="btn-primary">Click me</button>
<div className="card">Card content</div>
<input className="input" />
```

## 🔍 Available Routes

```
/ ......................... Homepage
/hospitals ................ Hospital Directory
/doctors .................. Doctor Directory
/auth/login ............... Login Page
/auth/register ............ Register Page
/assessment ............... Assessment Form
```

## 📦 Available Dependencies

```json
{
  "react": "18.2.0",
  "react-router-dom": "6.14.0",
  "axios": "1.4.0",
  "tailwindcss": "3.3.0",
  "zustand": "4.4.1",
  "react-query": "3.39.3",
  "lucide-react": "0.292.0"
}
```

## ✨ Current Pages

### ✅ Implemented
- HomePage - Landing page
- HospitalsPage - Hospital directory
- DoctorsPage - Doctor directory
- LoginPage - Authentication
- RegisterPage - User signup
- AssessmentPage - Patient form

### 📋 Planned (Phase 2)
- AssessmentResultsPage
- HotelsPage
- RentalsPage
- ToursPage
- BookingPage
- PaymentPage
- ProfilePage

## 🧩 Using Components

```typescript
// HospitalCard
import { HospitalCard } from '@/components/HospitalCard'
<HospitalCard hospital={hospitalData} />

// DoctorCard
import { DoctorCard } from '@/components/DoctorCard'
<DoctorCard doctor={doctorData} />

// LoadingSpinner
import { LoadingSpinner } from '@/components/LoadingSpinner'
{loading && <LoadingSpinner />}
```

## 🔗 API Base URLs

Development:
```
http://localhost:5000/api
```

Production (update in .env):
```
https://api.medicaltourismjogja.com/api
```

## 🐛 Troubleshooting

**Port 3000 sudah digunakan?**
```bash
npm run dev -- --port 3001
```

**Build error?**
```bash
rm -rf node_modules
npm install
npm run build
```

**Types tidak terdeteksi?**
- Restart VS Code
- Run: `npm install`

**API tidak terhubung?**
- Pastikan backend berjalan di port 5000
- Check `.env` VITE_API_BASE_URL

## 📱 Testing Pages

### Homepage
- Visit: http://localhost:3000
- Check: Hero section, features, CTA buttons

### Hospital Directory
- Visit: http://localhost:3000/hospitals
- Test: Search, filters, card display

### Doctor Directory
- Visit: http://localhost:3000/doctors
- Test: Search, filters, specialty dropdown

### Login
- Visit: http://localhost:3000/auth/login
- Test: Form validation, error handling

### Assessment
- Visit: http://localhost:3000/assessment
- Test: All form fields, validation

## 🎯 Next Steps

1. **Explore the code**
   - Read `src/App.tsx`
   - Check `src/types/index.ts`
   - Review `src/services/`

2. **Understand the flow**
   - Auth → Login stores token
   - Directory → Calls API service
   - Assessment → Multi-step form

3. **Start developing**
   - Pick Phase 2 task
   - Follow folder structure
   - Write TypeScript types first

4. **Test locally**
   - `npm run dev`
   - Test on mobile (via Tailwind responsive)
   - Check browser console

## 📚 Learn More

- React: https://react.dev
- TypeScript: https://www.typescriptlang.org
- Tailwind: https://tailwindcss.com
- Zustand: https://github.com/pmndrs/zustand
- Vite: https://vitejs.dev

## 🔑 Key Principles

1. **Type Safety** - Always use TypeScript types
2. **Reusability** - Create components not pages
3. **Separation** - Keep logic in services
4. **State** - Use Zustand stores
5. **Styling** - Use Tailwind utilities

## 🚀 Ready to Code!

You're all set! Start by:

```bash
npm run dev
```

Then pick your first task from Phase 2 in PROJECT_STATUS.md 🎉

---

**Happy Coding!** 💻  
Need help? Check the README.md or IMPLEMENTATION_GUIDE.md
