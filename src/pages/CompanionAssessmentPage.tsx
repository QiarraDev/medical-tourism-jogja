import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface CompanionForm {
  companionName: string
  relationship: string
  dateOfBirth: string
  gender: string
  phoneNumber: string
  email: string
  specialNeeds: string
  accommodationPreference: string
  budgetPerNight: number
  stayDuration: number
  activityInterest: string
  roomType: string
  notes: string
}

export const CompanionAssessmentPage = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<CompanionForm>({
    companionName: 'Pak Robert (Suami)',
    relationship: 'Suami',
    dateOfBirth: '1978-03-20',
    gender: 'M',
    phoneNumber: '+62 812-3456-7890',
    email: 'robert@email.com',
    specialNeeds: 'Tidak ada',
    accommodationPreference: 'Dekat rumah sakit',
    budgetPerNight: 1000000,
    stayDuration: 7,
    activityInterest: 'Wisata budaya dan kuliner',
    roomType: 'Deluxe room',
    notes: 'Suami akan menemani selama masa perawatan dan recovery',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('budget') || name === 'stayDuration' ? parseInt(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const mockAssessmentId = Math.floor(Math.random() * 10000) + 5000
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Navigate to results page
      navigate(`/companion/assessment/${mockAssessmentId}/results`)
    } catch (err: any) {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-purple-500 text-white px-4 py-2 rounded inline-block mb-4 text-sm font-bold">
            👥 PENILAIAN PENDAMPING - Form sudah terisi dengan data contoh
          </div>
          <h1 className="text-4xl font-bold mb-4">Penilaian Pendamping Pasien</h1>
          <p className="text-xl text-purple-100">
            Informasi untuk pendamping pasien - penginapan, makanan, dan aktivitas selama masa perawatan dan recovery
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded shadow-lg p-8">
            {/* Section 1: Data Pendamping */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-purple-600">
                1. Data Pendamping Pasien
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Pendamping</label>
                  <input
                    type="text"
                    name="companionName"
                    value={formData.companionName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Hubungan dengan Pasien</label>
                  <select
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                    required
                  >
                    <option value="Suami">Suami</option>
                    <option value="Istri">Istri</option>
                    <option value="Anak">Anak</option>
                    <option value="Orang Tua">Orang Tua</option>
                    <option value="Saudara">Saudara</option>
                    <option value="Teman">Teman</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tanggal Lahir</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Jenis Kelamin</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  >
                    <option value="M">Laki-laki</option>
                    <option value="F">Perempuan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Kebutuhan Khusus */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-purple-600">
                2. Kebutuhan Khusus & Preferensi
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Kebutuhan Khusus (jika ada)</label>
                  <input
                    type="text"
                    name="specialNeeds"
                    value={formData.specialNeeds}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                    placeholder="Contoh: Diet khusus, alergi, dll"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferensi Penginapan</label>
                  <textarea
                    name="accommodationPreference"
                    value={formData.accommodationPreference}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                    rows={3}
                    placeholder="Dekat rumah sakit, bising, quietness, dll"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Minat Aktivitas Wisata</label>
                  <textarea
                    name="activityInterest"
                    value={formData.activityInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                    rows={3}
                    placeholder="Wisata budaya, kuliner, alam, shopping, dll"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Penginapan & Durasi */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-purple-600">
                3. Penginapan & Durasi Menginap
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tipe Kamar</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  >
                    <option value="Standard room">Standard Room</option>
                    <option value="Deluxe room">Deluxe Room</option>
                    <option value="Suite">Suite</option>
                    <option value="Family room">Family Room</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Durasi Menginap (Malam)</label>
                  <input
                    type="number"
                    name="stayDuration"
                    value={formData.stayDuration}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                    min="1"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget per Malam (Rp)</label>
                  <input
                    type="number"
                    name="budgetPerNight"
                    value={formData.budgetPerNight}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Total Durasi (dengan wisata)</label>
                  <select
                    name="stayDuration"
                    value={formData.stayDuration}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  >
                    <option value={3}>3 Hari (Treatment + 1 hari recovery)</option>
                    <option value={7}>7 Hari (Treatment + 3 hari recovery + wisata)</option>
                    <option value={10}>10 Hari (Treatment + 5 hari recovery + wisata)</option>
                    <option value={14}>14 Hari (Treatment + 7 hari recovery + wisata)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 4: Catatan Tambahan */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-purple-600">
                4. Catatan Tambahan
              </h2>

              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                rows={4}
                placeholder="Informasi tambahan yang ingin kami ketahui..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition disabled:opacity-50"
            >
              {loading ? '⏳ Sedang memproses...' : '✅ Kirim Penilaian Pendamping'}
            </button>
          </form>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-purple-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">📋 Informasi untuk Pendamping</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <div className="text-3xl mb-3">🏨</div>
              <h3 className="font-bold mb-2">Penginapan Gratis/Subsidi</h3>
              <p className="text-sm text-gray-600">
                Kami menyediakan penginapan gratis atau subsidi untuk pendamping pasien di hotel partner kami
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="text-3xl mb-3">🍽️</div>
              <h3 className="font-bold mb-2">Makan & Minuman</h3>
              <p className="text-sm text-gray-600">
                Makanan dan minuman disediakan untuk mendukung kenyamanan pendamping pasien
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="text-3xl mb-3">✈️</div>
              <h3 className="font-bold mb-2">Wisata Post-Recovery</h3>
              <p className="text-sm text-gray-600">
                Setelah pasien sembuh, pendamping dapat menikmati paket wisata special dengan harga mitra
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
