import { useState } from 'react'
import { mockTherapies } from '@/data/mockData'

export const TherapyPage = () => {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const therapyTypes = [
    { id: 'all', name: 'Semua Terapi', icon: '💆' },
    { id: 'fisioterapi', name: 'Fisioterapi', icon: '🏃' },
    { id: 'akupunktur', name: 'Akupunktur', icon: '🧖' },
    { id: 'rehab', name: 'Rehabilitasi', icon: '🚴' },
    { id: 'wicara', name: 'Terapi Wicara', icon: '🗣️' },
    { id: 'okupasi', name: 'Ocupasi Terapi', icon: '🖐️' },
  ]

  const filteredTherapies = mockTherapies.filter(therapy => {
    const matchesType = selectedType === 'all' || therapy.therapy_type === selectedType
    const matchesSearch = therapy.therapy_name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesSearch
  })

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">💆 Layanan Terapi Medis</h1>
          <p className="text-xl text-purple-100">
            Program terapi komprehensif untuk pemulihan dan rehabilitasi Anda dengan terapis bersertifikat
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-purple-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <input
              type="text"
              placeholder="🔍 Cari terapi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {therapyTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 py-2 rounded-full font-semibold transition flex items-center gap-2 ${
                  selectedType === type.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50'
                }`}
              >
                <span>{type.icon}</span>
                {type.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Program Terapi Tersedia</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTherapies.map((therapy) => (
              <div key={therapy.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden border-t-4 border-purple-500">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6">
                  <h3 className="text-2xl font-bold">{therapy.therapy_name}</h3>
                  <p className="text-purple-100 text-sm mt-2 capitalize">{therapy.therapy_type}</p>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{therapy.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                      <span className="text-gray-600">⏱️ Durasi per Sesi</span>
                      <span className="font-bold text-purple-600">{therapy.duration_minutes} Menit</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                      <span className="text-gray-600">💰 Harga per Sesi</span>
                      <span className="font-bold text-purple-600">Rp {therapy.price_per_session.toLocaleString('id-ID')}</span>
                    </div>
                  </div>

                  {therapy.facilities && therapy.facilities.length > 0 && (
                    <div className="mb-6">
                      <div className="font-semibold text-sm mb-3">✨ Fasilitas:</div>
                      <div className="space-y-2">
                        {therapy.facilities.map((facility, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="text-purple-600">✓</span>
                            <span>{facility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                    Booking Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredTherapies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada terapi yang sesuai dengan pencarian Anda</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Mengapa Memilih Layanan Terapi Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="font-bold mb-2 text-lg">Terapis Profesional</h3>
              <p className="text-gray-600 text-sm">Terapis bersertifikat dan berpengalaman di bidangnya masing-masing</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="font-bold mb-2 text-lg">Standar Medis</h3>
              <p className="text-gray-600 text-sm">Fasilitas dan peralatan terapi mengikuti standar medis internasional</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-bold mb-2 text-lg">Program Terukur</h3>
              <p className="text-gray-600 text-sm">Setiap sesi terapi direncanakan dengan baik sesuai kebutuhan pasien</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold mb-2 text-lg">Konsultasi Gratis</h3>
              <p className="text-gray-600 text-sm">Konsultasi awal gratis untuk menentukan program terapi terbaik</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Siap untuk Memulai Terapi Anda?</h2>
          <p className="text-purple-100 mb-8 text-lg">Hubungi kami untuk konsultasi dan pemesanan program terapi Anda</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition">
              Hubungi Kami
            </button>
            <button className="bg-purple-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-800 transition">
              Booking Sekarang
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
