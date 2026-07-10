import { Link } from 'react-router-dom'
import { Hospital, Users, MapPin, Zap } from 'lucide-react'

export const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Destinasi Medis Terdepan di Yogyakarta
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Platform one-stop yang menghubungkan Anda dengan rumah sakit berkualitas, dokter spesialis, dan layanan wisata medis terbaik
            </p>
            <div className="flex gap-4">
              <Link to="/assessment" className="btn-primary">
                Mulai Assessment
              </Link>
              <Link to="/hospitals" className="btn-outline">
                Jelajahi Layanan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Mengapa Memilih Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card text-center">
              <Hospital className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Rumah Sakit Terkemuka</h3>
              <p className="text-gray-600">
                Direktori lengkap rumah sakit kelas nasional dengan layanan terbaik
              </p>
            </div>

            <div className="card text-center">
              <Users className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Dokter Spesialis</h3>
              <p className="text-gray-600">
                Ribuan dokter berpengalaman siap memberikan layanan kesehatan
              </p>
            </div>

            <div className="card text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Akomodasi Lengkap</h3>
              <p className="text-gray-600">
                Hotel, rental mobil, dan paket wisata dalam satu platform
              </p>
            </div>

            <div className="card text-center">
              <Zap className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Mudah & Cepat</h3>
              <p className="text-gray-600">
                Proses booking yang sederhana hanya dalam beberapa menit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary">📋 Assessment Pasien</h3>
              <p className="text-gray-600 mb-4">
                Isi formulir kesehatan Anda dan dapatkan rekomendasi rumah sakit dan dokter spesialis terbaik secara otomatis
              </p>
              <Link to="/assessment" className="text-primary font-bold hover:underline">
                Mulai Assessment →
              </Link>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary">🏥 Direktori Rumah Sakit</h3>
              <p className="text-gray-600 mb-4">
                Cari dan bandingkan rumah sakit berdasarkan spesialisasi, fasilitas, dan rating
              </p>
              <Link to="/hospitals" className="text-primary font-bold hover:underline">
                Lihat Rumah Sakit →
              </Link>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary">👨‍⚕️ Dokter Spesialis</h3>
              <p className="text-gray-600 mb-4">
                Temukan dokter berpengalaman sesuai dengan kebutuhan kesehatan Anda
              </p>
              <Link to="/doctors" className="text-primary font-bold hover:underline">
                Lihat Dokter →
              </Link>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary">🏨 Hotel & Transportasi</h3>
              <p className="text-gray-600 mb-4">
                Booking hotel nyaman dan rental mobil untuk kenyamanan perjalanan medis Anda
              </p>
              <Link to="/hotels" className="text-primary font-bold hover:underline">
                Lihat Hotel →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white section">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Siap untuk Perjalanan Medis Anda?</h2>
          <p className="text-xl mb-8">
            Mulai dengan assessment kesehatan Anda hari ini dan dapatkan rekomendasi terbaik
          </p>
          <Link to="/assessment" className="btn-outline text-white border-white hover:bg-white hover:text-primary">
            Mulai Sekarang
          </Link>
        </div>
      </section>
    </div>
  )
}
