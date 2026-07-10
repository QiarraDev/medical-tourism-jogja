import { useState } from 'react'
import { mockHotels } from '@/data/mockData'

export const HotelsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredHotels = mockHotels.filter(hotel =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hotel.address.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">🏨 Penginapan & Hotel</h1>
          <p className="text-xl text-blue-100">
            Partner hotel premium kami dekat dengan rumah sakit pilihan Anda. Nikmati kenyamanan maksimal selama perjalanan medis.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-blue-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded shadow-lg p-6">
            <input
              type="text"
              placeholder="🔍 Cari hotel, lokasi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Hotels List */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Pilihan Hotel Premium</h2>

          {filteredHotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredHotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
                    <h3 className="text-xl font-bold mb-3">{hotel.name}</h3>
                    <div className="flex items-center gap-2">
                      {'⭐'.repeat(hotel.star_rating)} <span className="text-sm">({hotel.star_rating} bintang)</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <span className="text-lg">📍</span>
                        <div className="text-sm">
                          <div className="font-semibold">Lokasi</div>
                          <div className="text-gray-600">{hotel.address}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="text-lg">📞</span>
                        <div className="text-sm">
                          <div className="font-semibold">Kontak</div>
                          <div className="text-gray-600">{hotel.phone}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="text-lg">🛏️</span>
                        <div className="text-sm">
                          <div className="font-semibold">Tipe Kamar</div>
                          <div className="text-gray-600">{hotel.room_types.join(', ')}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="text-lg">🎁</span>
                        <div className="text-sm">
                          <div className="font-semibold">Fasilitas</div>
                          <div className="text-gray-600">{hotel.amenities.join(', ')}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="text-lg">💰</span>
                        <div className="text-sm">
                          <div className="font-semibold">Harga per Malam</div>
                          <div className="text-gray-600">
                            Rp {hotel.price_per_night_min.toLocaleString('id-ID')} - Rp {hotel.price_per_night_max.toLocaleString('id-ID')}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="text-lg">🏥</span>
                        <div className="text-sm">
                          <div className="font-semibold">Jarak ke RS</div>
                          <div className="text-gray-600">{hotel.distance_to_hospital} km</div>
                        </div>
                      </div>

                      {hotel.has_disability_access && (
                        <div className="flex items-start gap-2">
                          <span className="text-lg">♿</span>
                          <div className="text-sm text-gray-600">Akses untuk kursi roda tersedia</div>
                        </div>
                      )}
                    </div>

                    <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Tidak ada hotel yang sesuai dengan pencarian Anda</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Mengapa Pilih Hotel Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Dekat Rumah Sakit</h3>
              <p className="text-gray-600">Semua hotel kami berlokasi maksimal 3km dari rumah sakit pilihan Anda</p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2">Bintang Lima</h3>
              <p className="text-gray-600">Semua partner hotel kami adalah bintang lima dengan fasilitas kelas dunia</p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Harga Terjangkau</h3>
              <p className="text-gray-600">Harga lebih murah dari hotel internasional dengan kualitas setara</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
