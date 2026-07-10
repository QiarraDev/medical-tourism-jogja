import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Hospital, Doctor } from '@/types'
import { mockHospitals, mockDoctors } from '@/data/mockData'

export const AssessmentResultsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [recommendedHospitals, setRecommendedHospitals] = useState<Hospital[]>([])
  const [recommendedDoctors, setRecommendedDoctors] = useState<Doctor[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to get recommendations
    setTimeout(() => {
      setRecommendedHospitals(mockHospitals)
      setRecommendedDoctors(mockDoctors)
      setLoading(false)
    }, 1000)
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Memproses assessment Anda...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Success Header */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-4xl font-bold mb-4">Assessment Berhasil!</h1>
            <p className="text-xl text-green-100 mb-6">
              Kami telah menganalisis data kesehatan Anda dan menemukan rumah sakit & dokter terbaik
            </p>
            <div className="bg-green-700 inline-block px-4 py-2 rounded text-sm">
              ID Assessment: <span className="font-bold">#{id}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="bg-green-50 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="text-4xl mb-3">🏥</div>
            <div className="text-2xl font-bold text-blue-600">{recommendedHospitals.length}</div>
            <div className="text-gray-600">Rumah Sakit Rekomendasi</div>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="text-4xl mb-3">👨‍⚕️</div>
            <div className="text-2xl font-bold text-purple-600">{recommendedDoctors.length}</div>
            <div className="text-gray-600">Dokter Spesialis</div>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="text-4xl mb-3">⏱️</div>
            <div className="text-2xl font-bold text-orange-600">2-3 Hari</div>
            <div className="text-gray-600">Waktu Persiapan</div>
          </div>
        </div>
      </section>

      {/* Recommended Hospitals */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">🏥 Rumah Sakit Rekomendasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendedHospitals.map((hospital) => (
              <div key={hospital.id} className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{hospital.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <span key={i} className={i <= Math.round(hospital.rating) ? '⭐' : '☆'}>
                          {i <= Math.round(hospital.rating) ? '⭐' : '☆'}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm">({hospital.review_count} ulasan)</span>
                  </div>
                  <div className="text-blue-100 text-sm">Kelas: {hospital.hospital_class}</div>
                </div>
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="text-lg">📍</span>
                      <div className="text-sm">
                        <div className="font-semibold">Lokasi</div>
                        <div className="text-gray-600">{hospital.address}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-lg">⏰</span>
                      <div className="text-sm">
                        <div className="font-semibold">Jam Operasional</div>
                        <div className="text-gray-600">{hospital.working_hours}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-lg">🏨</span>
                      <div className="text-sm">
                        <div className="font-semibold">Fasilitas</div>
                        <div className="text-gray-600">{hospital.facilities.join(', ')}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-lg">📞</span>
                      <div className="text-sm">
                        <div className="font-semibold">Kontak</div>
                        <div className="text-gray-600">{hospital.phone}</div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/hospitals?hospital=${hospital.id}`)}
                    className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Doctors */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">👨‍⚕️ Dokter Spesialis Rekomendasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendedDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{doctor.full_name}</h3>
                  <div className="text-purple-100 mb-3">
                    <span className="bg-purple-700 px-3 py-1 rounded text-sm">{doctor.specialty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <span key={i} className={i <= Math.round(doctor.rating) ? '⭐' : '☆'}>
                          {i <= Math.round(doctor.rating) ? '⭐' : '☆'}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="text-lg">🏥</span>
                      <div className="text-sm">
                        <div className="font-semibold">Rumah Sakit</div>
                        <div className="text-gray-600">{mockHospitals.find(h => h.id === doctor.hospital_id)?.name}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-lg">📚</span>
                      <div className="text-sm">
                        <div className="font-semibold">Pengalaman</div>
                        <div className="text-gray-600">{doctor.years_experience} tahun</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-lg">💰</span>
                      <div className="text-sm">
                        <div className="font-semibold">Biaya Konsultasi</div>
                        <div className="text-gray-600">Rp {doctor.consultation_fee.toLocaleString('id-ID')}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-lg">⏰</span>
                      <div className="text-sm">
                        <div className="font-semibold">Jadwal Praktik</div>
                        <div className="text-gray-600">
                          {Object.entries(doctor.schedule).map(([day, time]) => (
                            <div key={day}>{day}: {time}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/doctors?doctor=${doctor.id}`)}
                    className="w-full bg-purple-600 text-white py-2 rounded font-semibold hover:bg-purple-700 transition"
                  >
                    Lihat Profil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">📋 Langkah Selanjutnya</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Pilih Dokter</h3>
              <p className="text-gray-600 text-sm">Pilih dokter spesialis yang sesuai dengan kebutuhan Anda</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Booking Jadwal</h3>
              <p className="text-gray-600 text-sm">Pilih tanggal dan waktu konsultasi yang tersedia</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Pesan Hotel</h3>
              <p className="text-gray-600 text-sm">Pilih hotel di dekat rumah sakit pilihan Anda</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">Bayar & Selesai</h3>
              <p className="text-gray-600 text-sm">Lakukan pembayaran dan tunggu konfirmasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Siap untuk Memulai?</h2>
          <p className="text-xl mb-8">Hubungi tim kami untuk proses booking selanjutnya</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate('/hospitals')}
              className="bg-yellow-500 text-black px-8 py-3 rounded font-bold hover:bg-yellow-600 transition"
            >
              Jelajahi Rumah Sakit
            </button>
            <button
              onClick={() => navigate('/doctors')}
              className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-blue-600 transition"
            >
              Lihat Dokter Spesialis
            </button>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-400">
            <p className="text-blue-100 mb-4">Hubungi Tim Support Kami:</p>
            <div className="flex justify-center gap-8 flex-wrap">
              <div>
                <div className="font-bold">📞 WhatsApp</div>
                <div className="text-blue-200">+62 812-3456-7890</div>
              </div>
              <div>
                <div className="font-bold">📧 Email</div>
                <div className="text-blue-200">support@medicaltourismjogja.com</div>
              </div>
              <div>
                <div className="font-bold">⏰ Jam Operasional</div>
                <div className="text-blue-200">24/7 Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
