import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              🏥 Medical Tourism Yogyakarta
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Platform lengkap untuk wisatawan medis dengan layanan rumah sakit terbaik, dokter spesialis berpengalaman, dan paket wisata medis di Yogyakarta
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/assessment" className="bg-yellow-500 text-black px-6 py-3 rounded font-bold hover:bg-yellow-600 transition">
                ➜ Coba Assessment
              </Link>
              <Link to="/hospitals" className="bg-white text-blue-600 px-6 py-3 rounded font-bold hover:bg-gray-100 transition">
                Jelajahi RS
              </Link>
            </div>
            <p className="text-sm mt-6 text-blue-200">✓ 8 Rumah Sakit ✓ 15+ Dokter Spesialis ✓ 10+ Paket Wisata</p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-blue-50 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">5000+</div>
            <div className="text-sm text-gray-600">Pasien Terbantu</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">98%</div>
            <div className="text-sm text-gray-600">Kepuasan Pasien</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">24/7</div>
            <div className="text-sm text-gray-600">Customer Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">50+</div>
            <div className="text-sm text-gray-600">Partner Hotel</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">🎯 Mengapa Memilih Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded shadow text-center border-t-4 border-blue-600 hover:shadow-lg transition">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Rumah Sakit Terkemuka</h3>
              <p className="text-gray-600">
                Kerjasama dengan RS kelas A-B dengan sertifikasi internasional
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow text-center border-t-4 border-green-600 hover:shadow-lg transition">
              <div className="text-5xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-bold mb-2">Dokter Berpengalaman</h3>
              <p className="text-gray-600">
                Dokter spesialis dengan pengalaman 10-25 tahun
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow text-center border-t-4 border-purple-600 hover:shadow-lg transition">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Harga Kompetitif</h3>
              <p className="text-gray-600">
                30-50% lebih murah dari negara lain dengan kualitas sama
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow text-center border-t-4 border-orange-600 hover:shadow-lg transition">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">One-Stop Solution</h3>
              <p className="text-gray-600">
                RS, dokter, hotel, wisata dalam satu platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">📋 Cara Kerja Mudah</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Assessment</h3>
              <p className="text-sm text-gray-600">Isi formulir kesehatan online</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Rekomendasi</h3>
              <p className="text-sm text-gray-600">Dapatkan RS & dokter terbaik</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Booking</h3>
              <p className="text-sm text-gray-600">Pesan hotel dan transportasi</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">Perjalanan</h3>
              <p className="text-sm text-gray-600">Berangkat dan nikmati wisata</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">🎁 Layanan Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-blue-600">📋 Assessment Kesehatan</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Form assessment lengkap untuk diagnosis awal
              </p>
              <Link to="/assessment" className="text-blue-600 font-bold text-sm hover:underline">
                Coba Sekarang → 
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-green-600">🏥 Direktori RS</h3>
              <p className="text-gray-600 mb-4 text-sm">
                8 Rumah Sakit terbaik dengan spesialisasi lengkap
              </p>
              <Link to="/hospitals" className="text-green-600 font-bold text-sm hover:underline">
                Lihat RS →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-purple-600">👨‍⚕️ Dokter Spesialis</h3>
              <p className="text-gray-600 mb-4 text-sm">
                15+ dokter terbaik dengan pengalaman 10-25 tahun
              </p>
              <Link to="/doctors" className="text-purple-600 font-bold text-sm hover:underline">
                Lihat Dokter →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-orange-600">🏨 Hotel & Wisata</h3>
              <p className="text-gray-600 mb-4 text-sm">
                50+ Hotel premium dan paket wisata
              </p>
              <Link to="/hotels" className="text-orange-600 font-bold text-sm hover:underline">
                Lihat Paket →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">⭐ Testimoni Pasien</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(i => <span key={i}>⭐</span>)}
              </div>
              <p className="text-gray-600 mb-4">"Layanan sangat memuaskan! Prosesnya mudah dan cepat. Dokter sangat profesional."</p>
              <div className="font-bold">Ibu Sarah</div>
              <div className="text-sm text-gray-500">Malaysia</div>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(i => <span key={i}>⭐</span>)}
              </div>
              <p className="text-gray-600 mb-4">"Harga jauh lebih murah dari Singapura dengan kualitas setara. Rekomendasi hotel bagus!"</p>
              <div className="font-bold">Pak Rudi</div>
              <div className="text-sm text-gray-500">Indonesia</div>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(i => <span key={i}>⭐</span>)}
              </div>
              <p className="text-gray-600 mb-4">"Semua dalam satu platform! Dari RS, hotel, sampai wisata. Sangat praktis!"</p>
              <div className="font-bold">Dr. Ahmad</div>
              <div className="text-sm text-gray-500">Brunei</div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">🚀 Layanan Tambahan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-4 text-green-600">Transportasi & Pengantar</h3>
              <p className="text-gray-600 mb-4">
                Layanan transportasi lengkap: Airport transfer, rental mobil, ambulansi, delivery obat & hasil lab
              </p>
              <Link to="/transportation" className="text-green-600 font-bold hover:underline">
                Lihat Layanan →
              </Link>
            </div>

            <div className="bg-white p-8 rounded shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Paket Wisata & Liburan</h3>
              <p className="text-gray-600 mb-4">
                8+ paket wisata menarik untuk recovery: Borobudur, cooking class, spa, cycling, dan banyak lagi
              </p>
              <Link to="/tours" className="text-orange-600 font-bold hover:underline">
                Lihat Wisata →
              </Link>
            </div>

            <div className="bg-white p-8 rounded shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Penilaian Pendamping</h3>
              <p className="text-gray-600 mb-4">
                Khusus untuk pendamping pasien - penginapan, makanan, dan paket wisata post-recovery
              </p>
              <Link to="/companion/assessment" className="text-purple-600 font-bold hover:underline">
                Mulai Penilaian →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">🚀 Siap Memulai?</h2>
          <p className="text-xl mb-8">Mulai perjalanan medis Anda hari ini dengan assessment gratis</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/assessment" className="bg-yellow-500 text-black px-8 py-3 rounded font-bold hover:bg-yellow-600 transition">
              Mulai Assessment Sekarang
            </Link>
            <Link to="/auth/register" className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-blue-600 transition">
              Daftar Akun
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🏥 Medical Tourism Jogja</h3>
            <p className="text-gray-400">
              Platform terpercaya untuk wisatawan medis di Yogyakarta sejak 2024
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/hospitals" className="hover:text-white transition">Rumah Sakit</Link></li>
              <li><Link to="/doctors" className="hover:text-white transition">Dokter</Link></li>
              <li><Link to="/assessment" className="hover:text-white transition">Assessment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/assessment" className="hover:text-white transition">Assessment Kesehatan</Link></li>
              <li><Link to="/auth/login" className="hover:text-white transition">Login</Link></li>
              <li><Link to="/auth/register" className="hover:text-white transition">Daftar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">📞 Kontak</h4>
            <p className="text-gray-400 mb-2">📧 support@medicaltourismjogja.com</p>
            <p className="text-gray-400 mb-2">📱 +62 812-3456-7890</p>
            <p className="text-gray-400">⏰ 24/7 Customer Support</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Medical Tourism Jogja. Semua hak dilindungi. ✓ Terpercaya ✓ Profesional ✓ Terbaik</p>
        </div>
      </footer>
    </div>
  )
}
