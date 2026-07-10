import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HomePage } from '@/pages/HomePage'
import { HospitalsPage } from '@/pages/HospitalsPage'
import { DoctorsPage } from '@/pages/DoctorsPage'
import { HotelsPage } from '@/pages/HotelsPage'
import { TransportationPage } from '@/pages/TransportationPage'
import { ToursPage } from '@/pages/ToursPage'
import { LoginPage } from '@/pages/LoginPage'
import { RegisterPage } from '@/pages/RegisterPage'
import { AssessmentPage } from '@/pages/AssessmentPage'
import { AssessmentResultsPage } from '@/pages/AssessmentResultsPage'
import { CompanionAssessmentPage } from '@/pages/CompanionAssessmentPage'
import { CompanionResultsPage } from '@/pages/CompanionResultsPage'
import { ComponentsShowcase } from '@/pages/ComponentsShowcase'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-1 bg-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hospitals" element={<HospitalsPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/hotels" element={<HotelsPage />} />
            <Route path="/transportation" element={<TransportationPage />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/assessment/:id/results" element={<AssessmentResultsPage />} />
            <Route path="/companion/assessment" element={<CompanionAssessmentPage />} />
            <Route path="/companion/assessment/:id/results" element={<CompanionResultsPage />} />
            <Route path="/components" element={<ComponentsShowcase />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
