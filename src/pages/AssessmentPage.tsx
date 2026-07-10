import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AssessmentForm } from '@/types'
import { assessmentService } from '@/services/assessment'
import { useAuthStore } from '@/store/authStore'

export const AssessmentPage = () => {
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState<AssessmentForm>({
    patientName: 'Ibu Sarah', // Demo data filled
    dateOfBirth: '1980-05-15',
    gender: 'F',
    bloodType: 'A',
    chiefComplaint: 'Nyeri dada & sesak napas',
    symptoms: 'Mengalami nyeri dada saat beraktivitas, sesak napas ringan, dan kelelahan yang berlebihan. Gejala sudah dirasakan selama 2 minggu terakhir.',
    severity: 'moderate',
    allergies: 'Amoksisilin, Aspirin',
    preferredLocation: 'Sekip',
    budgetMin: 5000000,
    budgetMax: 25000000,
    numCompanions: 1,
    emergencyContact: 'Pak Robert (suami)',
    emergencyPhone: '+62 812-3456-7890',
  })

  // Demo mode: allow assessment without login
  // if (!user) {
  //   return (
  //     <div className="container py-12 text-center">
  //       <p className="text-lg text-gray-600 mb-4">
  //         Anda harus login untuk melakukan assessment
  //       </p>
  //       <button onClick={() => navigate('/auth/login')} className="btn-primary">
  //         Login
  //       </button>
  //     </div>
  //   )
  // }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('budget') || name === 'numCompanions' ? parseInt(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Demo mode: create a random assessment ID
      const mockAssessmentId = Math.floor(Math.random() * 10000) + 1000
      
      // Simulate API delay for realistic feel
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Navigate to results page (demo mode always works)
      navigate(`/assessment/${mockAssessmentId}/results`)
    } catch (err: any) {
      setError('Gagal membuat assessment')
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-yellow-500 text-black px-4 py-2 rounded inline-block mb-4 text-sm font-bold">
            🎬 DEMO MODE - Form sudah terisi dengan data contoh
          </div>
          <h1 className="text-4xl font-bold mb-4">Assessment Kesehatan</h1>
          <p className="text-blue-100">
            Isi formulir untuk mendapatkan rekomendasi rumah sakit dan dokter terbaik. Form ini sudah terisi dengan data contoh untuk demo.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded shadow-lg p-8">
            {/* Section 1: Data Pasien */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary">
                1. Data Pasien
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Pasien</label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tanggal Lahir</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Jenis Kelamin</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="M">Laki-laki</option>
                    <option value="F">Perempuan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Golongan Darah</label>
                  <select
                    name="bloodType"
                    value={formData.bloodType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Kesehatan */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary">
                2. Informasi Kesehatan
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Keluhan Utama</label>
                  <input
                    type="text"
                    name="chiefComplaint"
                    value={formData.chiefComplaint}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Contoh: Sakit dada"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Gejala Lengkap</label>
                  <textarea
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    rows={4}
                    placeholder="Jelaskan gejala yang Anda alami..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tingkat Keparahan</label>
                  <select
                    name="severity"
                    value={formData.severity}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="mild">Ringan</option>
                    <option value="moderate">Sedang</option>
                    <option value="severe">Berat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Alergi (jika ada)</label>
                  <input
                    type="text"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Contoh: Amoksisilin, Aspirin"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Preferensi */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary">
                3. Preferensi & Anggaran
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Lokasi Preferensi</label>
                  <input
                    type="text"
                    name="preferredLocation"
                    value={formData.preferredLocation}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Sekip, Yogyakarta"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Jumlah Pendamping</label>
                  <input
                    type="number"
                    name="numCompanions"
                    value={formData.numCompanions}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget Minimal (Rp)</label>
                  <input
                    type="number"
                    name="budgetMin"
                    value={formData.budgetMin}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget Maksimal (Rp)</label>
                  <input
                    type="number"
                    name="budgetMax"
                    value={formData.budgetMax}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Kontak Darurat */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-blue-600">
                4. Kontak Darurat
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Kontak Darurat</label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? '⏳ Sedang memproses...' : '✅ Kirim Assessment'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
