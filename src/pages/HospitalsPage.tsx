import { useState, useEffect } from 'react'
import { Search, Filter } from 'lucide-react'
import { HospitalCard } from '@/components/HospitalCard'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { directoryService } from '@/services/directory'
import { Hospital } from '@/types'

export const HospitalsPage = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState({
    class: '',
    specialty: '',
  })

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        setLoading(true)
        const data = await directoryService.getHospitals(filter)
        setHospitals(data)
      } catch (error) {
        console.error('Error fetching hospitals:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchHospitals()
  }, [filter])

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(search.toLowerCase()) ||
    hospital.address.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Direktori Rumah Sakit</h1>
          <p className="text-blue-100">
            Temukan rumah sakit terbaik di Yogyakarta sesuai kebutuhan Anda
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="card">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Filter size={20} />
                  Filter
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Kelas Rumah Sakit</label>
                    <select
                      value={filter.class}
                      onChange={(e) =>
                        setFilter({ ...filter, class: e.target.value })
                      }
                      className="input"
                    >
                      <option value="">Semua Kelas</option>
                      <option value="A">Kelas A</option>
                      <option value="B">Kelas B</option>
                      <option value="C">Kelas C</option>
                      <option value="D">Kelas D</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Spesialisasi</label>
                    <select
                      value={filter.specialty}
                      onChange={(e) =>
                        setFilter({ ...filter, specialty: e.target.value })
                      }
                      className="input"
                    >
                      <option value="">Semua Spesialisasi</option>
                      <option value="Jantung">Jantung</option>
                      <option value="Orthopedi">Orthopedi</option>
                      <option value="Mata">Mata</option>
                      <option value="Kandungan">Kandungan</option>
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
                  <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Cari nama atau lokasi rumah sakit..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input pl-10"
                  />
                </div>
              </div>

              {/* Results */}
              {loading ? (
                <LoadingSpinner />
              ) : filteredHospitals.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredHospitals.map((hospital) => (
                    <HospitalCard key={hospital.id} hospital={hospital} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    Tidak ada rumah sakit yang sesuai dengan filter Anda
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
