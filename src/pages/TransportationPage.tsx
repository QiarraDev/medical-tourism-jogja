import { useState } from 'react'

const transportationData = [
  {
    id: 1,
    name: 'Airport Transfer - Mobil Standar',
    type: 'Airport Transfer',
    description: 'Layanan antar dari bandara ke hotel/rumah sakit dengan mobil standar AC',
    price: 250000,
    duration: '30-40 menit',
    passengers: '1-3 orang',
    includes: ['Driver profesional', 'AC', 'Wifi', 'Mineral water'],
    icon: '🚗'
  },
  {
    id: 2,
    name: 'Airport Transfer - Mobil Premium',
    type: 'Airport Transfer',
    description: 'Layanan antar premium dari bandara dengan mobil mewah dan driver berpengalaman',
    price: 450000,
    duration: '30-40 menit',
    passengers: '1-4 orang',
    includes: ['Driver profesional', 'AC Dingin', 'Wifi', 'Snacks & minuman', 'Phone charger'],
    icon: '🚙'
  },
  {
    id: 3,
    name: 'Rental Mobil - Harian',
    type: 'Rental Mobil',
    description: 'Sewa mobil dengan driver untuk perjalanan harian Anda',
    price: 400000,
    duration: '24 jam',
    passengers: '1-4 orang',
    includes: ['Driver berpengalaman', 'AC', 'Wifi', 'Bensin', 'Asuransi'],
    icon: '🚕'
  },
  {
    id: 4,
    name: 'Rental Mobil - 3 Hari',
    type: 'Rental Mobil',
    description: 'Paket sewa mobil 3 hari dengan harga special',
    price: 900000,
    duration: '3 x 24 jam',
    passengers: '1-4 orang',
    includes: ['Driver berpengalaman', 'AC', 'Wifi', 'Bensin', 'Asuransi', 'Free upgrade'],
    icon: '🚕'
  },
  {
    id: 5,
    name: 'Ambulansi Privat',
    type: 'Medical Transport',
    description: 'Ambulansi dengan paramedic untuk kebutuhan medis khusus',
    price: 750000,
    duration: 'Per perjalanan',
    passengers: 'Pasien + 1 pendamping',
    includes: ['Paramedic profesional', 'Alat medis lengkap', 'AC', 'Monitoring kesehatan'],
    icon: '🚑'
  },
  {
    id: 6,
    name: 'Jasa Antar Obat & Hasil Lab',
    type: 'Delivery Service',
    description: 'Layanan pengiriman obat dan hasil laboratorium ke hotel Anda',
    price: 100000,
    duration: '2-3 jam',
    passengers: 'N/A',
    includes: ['Same day delivery', 'Packaging aman', 'Driver terlatih', 'Free tracking'],
    icon: '📦'
  }
]

export const TransportationPage = () => {
  const [selectedType, setSelectedType] = useState<string>('All')

  const transportTypes = ['All', 'Airport Transfer', 'Rental Mobil', 'Medical Transport', 'Delivery Service']
  
  const filteredTransport = selectedType === 'All' 
    ? transportationData 
    : transportationData.filter(t => t.type === selectedType)

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
          <div className="flex flex-wrap gap-3 justify-center">
            {transportTypes.map(type => (
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
          <h2 className="text-3xl font-bold mb-12">Layanan Transportasi Tersedia</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTransport.map((service) => (
              <div key={service.id} className="bg-white rounded shadow-lg hover:shadow-xl transition overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-4xl mb-2">{service.icon}</div>
                      <h3 className="text-xl font-bold">{service.name}</h3>
                      <p className="text-green-100 text-sm mt-2">{service.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">Rp {service.price.toLocaleString('id-ID')}</div>
                      <div className="text-green-100 text-sm">{service.duration}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="mb-4">
                    <div className="font-semibold text-sm mb-2">👥 Kapasitas: {service.passengers}</div>
                    <div className="text-sm text-gray-600">
                      <div className="font-semibold mb-2">✨ Termasuk:</div>
                      <ul className="space-y-1">
                        {service.includes.map((inc, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span>✓</span> {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
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
