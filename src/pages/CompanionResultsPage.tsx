import { useParams, useNavigate } from 'react-router-dom'
import { mockHotels } from '@/data/mockData'

export const CompanionResultsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="bg-white">
      {/* Success Header */}
      <section className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-4xl font-bold mb-4">Penilaian Pendamping Diterima!</h1>
            <p className="text-xl text-purple-100 mb-6">
              Kami telah merekomendasikan penginapan, fasilitas, dan paket wisata yang sempurna untuk Anda
            </p>
            <div className="bg-purple-700 inline-block px-4 py-2 rounded text-sm">
              ID Penilaian: <span className="font-bold">#{id}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="bg-purple-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">📅 Perjalanan Pendamping Pasien</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="font-bold mb-2">Hari 1-3: Treatment</h3>
              <p className="text-sm text-gray-600">
                Pendamping menginap di hotel, menemani pasien di rumah sakit untuk treatment dan konsultasi dokter
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="text-4xl mb-3">😌</div>
              <h3 className="font-bold mb-2">Hari 4-5: Recovery</h3>
              <p className="text-sm text-gray-600">
                Pasien mulai recovery, pendamping dapat istirahat dan menikmati fasilitas hotel
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="font-bold mb-2">Hari 6-7: Recovery Aktif</h3>
              <p className="text-sm text-gray-600">
                Pasien mulai aktif, dapat menikmati light activities bersama paket wisata kami
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-bold mb-2">Hari 8+: Full Recovery</h3>
              <p className="text-sm text-gray-600">
                Pasien sepenuhnya recovery, nikmati full tour packages dan wisata kuliner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Hotels */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">🏨 Penginapan Rekomendasi untuk Pendamping</h2>
          <p className="text-gray-600 mb-8">Hotel-hotel premium dengan harga spesial untuk pendamping pasien medical tourism</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                  <div className="flex items-center gap-2">
                    {'⭐'.repeat(hotel.star_rating)}
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="text-lg">📍</span>
                      <div className="text-sm">
                        <div className="font-semibold">Lokasi</div>
                        <div className="text-gray-600">{hotel.address}</div>
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
                        <div className="text-gray-600 text-xs">{hotel.amenities.join(', ')}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-lg">💰</span>
                      <div className="text-sm">
                        <div className="font-semibold">Harga Standar</div>
                        <div className="text-gray-600">
                          Rp {hotel.price_per_night_min.toLocaleString('id-ID')}/malam
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-lg">🎯</span>
                      <div className="text-sm">
                        <div className="font-semibold">Harga Khusus Pendamping</div>
                        <div className="text-green-600 font-bold">
                          Rp {Math.floor(hotel.price_per_night_min * 0.6).toLocaleString('id-ID')}/malam (diskon 40%)
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companion Services */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">🎁 Layanan Khusus untuk Pendamping</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded shadow">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-2xl font-bold mb-3">Penginapan & Akomodasi</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span>✓</span> Hotel bintang 5 dekat rumah sakit</li>
                <li className="flex items-center gap-2"><span>✓</span> Diskon 40% untuk pendamping</li>
                <li className="flex items-center gap-2"><span>✓</span> Fasilitas WiFi, AC, TV, dll</li>
                <li className="flex items-center gap-2"><span>✓</span> Breakfast included</li>
                <li className="flex items-center gap-2"><span>✓</span> Room service 24/7</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded shadow">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold mb-3">Makanan & Minuman</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span>✓</span> Breakfast di hotel (included)</li>
                <li className="flex items-center gap-2"><span>✓</span> Lunch voucher harian</li>
                <li className="flex items-center gap-2"><span>✓</span> Dinner di restoran partner</li>
                <li className="flex items-center gap-2"><span>✓</span> Welcome drink & snacks</li>
                <li className="flex items-center gap-2"><span>✓</span> Diet khusus tersedia</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded shadow">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold mb-3">Paket Wisata Post-Recovery</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span>✓</span> Heritage tours (Borobudur, Prambanan)</li>
                <li className="flex items-center gap-2"><span>✓</span> Cooking class & culinary</li>
                <li className="flex items-center gap-2"><span>✓</span> Photography tours</li>
                <li className="flex items-center gap-2"><span>✓</span> Spa & wellness retreat</li>
                <li className="flex items-center gap-2"><span>✓</span> Guide profesional & transport</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-3">Dukungan & Bantuan</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span>✓</span> Concierge service 24/7</li>
                <li className="flex items-center gap-2"><span>✓</span> Support staff berbahasa Inggris</li>
                <li className="flex items-center gap-2"><span>✓</span> Emergency medical support</li>
                <li className="flex items-center gap-2"><span>✓</span> Transportation arrangements</li>
                <li className="flex items-center gap-2"><span>✓</span> Translation services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">📅 Saran Itinerary untuk Pendamping</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded shadow">
              <h3 className="font-bold text-lg mb-2">🏥 Hari 1-3: Treatment Phase</h3>
              <p className="text-gray-700">
                Fokus menemani pasien di rumah sakit. Morning: Konsultasi dokter & pemeriksaan. Afternoon: Hospital rest & light activity. Evening: Dinner di hotel restaurant & early rest.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded shadow">
              <h3 className="font-bold text-lg mb-2">😌 Hari 4-5: Recovery Phase</h3>
              <p className="text-gray-700">
                Pasien memulai recovery. Anda dapat: Spa & wellness treatment di hotel (morning), Light shopping di mall terdekat (afternoon), Cooking class (3 hours) untuk belajar masakan lokal.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded shadow">
              <h3 className="font-bold text-lg mb-2">✨ Hari 6-7: Active Recovery</h3>
              <p className="text-gray-700">
                Pasien mulai aktif normal. Nikmati: Cycling tour ke desa tradisional (morning), Meditation & mindfulness (evening), Photography tour ke hidden gems yogyakarta.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded shadow">
              <h3 className="font-bold text-lg mb-2">🎉 Hari 8+: Full Recovery & Tourism</h3>
              <p className="text-gray-700">
                Pasien sepenuhnya sembuh. Full tourism mode: Borobudur Heritage Tour, Prambanan visit, Night bazaar shopping, Batik workshop, Culinary tours, Photography sessions di tempat indah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">🎯 Langkah Selanjutnya</h2>
          <p className="text-xl mb-8">Hubungi tim kami untuk konfirmasi penginapan dan paket wisata Anda</p>
          
          <div className="bg-white text-gray-800 p-6 rounded shadow-lg inline-block">
            <div className="text-lg font-bold mb-2">📞 Hubungi Kami</div>
            <div className="text-gray-700 mb-4">
              <div>📱 WhatsApp: +62 812-3456-7890</div>
              <div>📧 Email: companion@medicaltourismjogja.com</div>
              <div>⏰ Available: 24/7</div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button 
              onClick={() => navigate('/hotels')}
              className="block w-full md:w-auto bg-white text-purple-600 px-8 py-3 rounded font-bold hover:bg-gray-100 transition mx-auto"
            >
              Lihat Pilihan Hotel
            </button>
            <button 
              onClick={() => navigate('/tours')}
              className="block w-full md:w-auto border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-purple-700 transition mx-auto"
            >
              Lihat Paket Wisata
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
