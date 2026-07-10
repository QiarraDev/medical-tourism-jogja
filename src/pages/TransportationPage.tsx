import { useState } from 'react'
import { mockRentalCars } from '@/data/mockData'

export const TransportationPage = () => {
  const [selectedType, setSelectedType] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filterTypes = ['All', 'MPV', 'SUV', 'Minibus', 'Luxury']
  
  const filteredRentals = mockRentalCars.filter(rental => {
    const matchesType = selectedType === 'All' || rental.type === selectedType
    const matchesSearch = rental.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesSearch
  })

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">🚗 Transportasi & Pengantar</h1>
          <p className="text-xl text-green-100">
            Layanan transportasi lengkap untuk kenyamanan perjalanan medis Anda - dari bandara hingga rumah sakit
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-green-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <input
              type="text"
              placeholder="🔍 Cari kendaraan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {filterTypes.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedType === type
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-green-600 border-2 border-green-600 hover:bg-green-50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Armada Kendaraan Kami</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredRentals.map((rental) => (
              <div key={rental.id} className="bg-white rounded shadow-lg hover:shadow-xl transition overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-4xl mb-2">🚗</div>
                      <h3 className="text-xl font-bold">{rental.name}</h3>
                      <p className="text-green-100 text-sm mt-2">{rental.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">Rp {rental.price_per_day.toLocaleString('id-ID')}/Hari</div>
                      <div className="text-green-100 text-sm">Rp {rental.price_per_hour.toLocaleString('id-ID')}/Jam</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <div className="font-semibold text-sm mb-2">👥 Kapasitas: {rental.passenger_capacity} penumpang</div>
                    <div className="text-sm text-gray-600">
                      <div className="font-semibold mb-2">✨ Fasilitas:</div>
                      <ul className="space-y-1">
                        {rental.facilities.map((facility, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span>✓</span> {facility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
                    <p className="text-gray-700"><strong>Driver:</strong> {rental.driver_name}</p>
                    <p className="text-gray-700"><strong>Telepon:</strong> {rental.driver_phone}</p>
                  </div>

                  <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredRentals.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada kendaraan yang sesuai dengan pencarian Anda</p>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Keunggulan Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-bold mb-2">Driver Profesional</h3>
              <p className="text-gray-600 text-sm">Driver berpengalaman dan terlatih untuk keselamatan Anda</p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold mb-2">Real-time Tracking</h3>
              <p className="text-gray-600 text-sm">Lacak posisi kendaraan Anda secara real-time</p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Support team siap membantu kapan saja</p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="font-bold mb-2">Medical Ready</h3>
              <p className="text-gray-600 text-sm">Kendaraan dilengkapi standar medis</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
