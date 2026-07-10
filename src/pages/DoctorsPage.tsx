import { useState, useEffect } from 'react'
import { DoctorCard } from '@/components/DoctorCard'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { directoryService } from '@/services/directory'
import { mockDoctors } from '@/data/mockData'
import { Doctor } from '@/types'

export const DoctorsPage = () => {
  const [doctors, setDoctors] = useState<Doctor[]>(mockDoctors)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState({
    specialty: '',
  })

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true)
        // Try to fetch from API, fallback to mock data
        try {
          const data = await directoryService.getDoctors(filter)
          setDoctors(data)
        } catch (apiError) {
          console.log('API not available, using mock data')
          setDoctors(mockDoctors)
        }
      } catch (error) {
        console.error('Error fetching doctors:', error)
        setDoctors(mockDoctors)
      } finally {
        setLoading(false)
      }
    }

    fetchDoctors()
  }, [filter])

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.full_name.toLowerCase().includes(search.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(search.toLowerCase())
  )

  const specialties = [
    'Kulit & Kelamin',
    'Penyakit Dalam',
    'Jantung',
    'Orthopedi',
    'Mata',
    'Bedah',
    'Kandungan',
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Direktori Dokter Spesialis</h1>
          <p className="text-blue-100">
            Temukan dokter spesialis berpengalaman untuk kebutuhan kesehatan Anda
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-lg font-bold mb-4">🔍 Filter</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Spesialisasi</label>
                    <select
                      value={filter.specialty}
                      onChange={(e) =>
                        setFilter({ ...filter, specialty: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Semua Spesialisasi</option>
                      {specialties.map((specialty) => (
                        <option key={specialty} value={specialty}>
                          {specialty}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <span className="absolute left-3 top-3 text-xl">🔍</span>
                  <input
                    type="text"
                    placeholder="Cari nama atau spesialisasi dokter..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  />
                </div>
              </div>

              {/* Results */}
              {loading ? (
                <LoadingSpinner />
              ) : filteredDoctors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredDoctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    Tidak ada dokter yang sesuai dengan pencarian Anda
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
