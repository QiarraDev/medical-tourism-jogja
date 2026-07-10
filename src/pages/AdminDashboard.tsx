import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiEdit2, FiTrash2, FiSave, FiX } from 'react-icons/fi'
import { Button, Input, Select, Card, CardHeader, CardTitle, CardContent, Badge } from '@/components/ui'
import { mockDoctors, mockHospitals, mockRentalCars, mockTherapies } from '@/data/mockData'
import { Doctor, RentalCar, Therapy } from '@/types'

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'doctors' | 'hospitals' | 'rental' | 'therapy'>('doctors')
  
  // Doctors state
  const [doctors, setDoctors] = useState<Doctor[]>(mockDoctors)
  const [editingDoctorId, setEditingDoctorId] = useState<number | null>(null)
  const [isAddingDoctor, setIsAddingDoctor] = useState(false)
  const [doctorFormData, setDoctorFormData] = useState<Partial<Doctor>>({})
  const [searchDoctor, setSearchDoctor] = useState('')
  const [filterSpecialty, setFilterSpecialty] = useState('all')

  // Rental state
  const [rentals, setRentals] = useState<RentalCar[]>(mockRentalCars)
  const [editingRentalId, setEditingRentalId] = useState<number | null>(null)
  const [isAddingRental, setIsAddingRental] = useState(false)
  const [rentalFormData, setRentalFormData] = useState<Partial<RentalCar>>({})
  const [searchRental, setSearchRental] = useState('')

  // Therapy state
  const [therapies, setTherapies] = useState<Therapy[]>(mockTherapies)
  const [editingTherapyId, setEditingTherapyId] = useState<number | null>(null)
  const [isAddingTherapy, setIsAddingTherapy] = useState(false)
  const [therapyFormData, setTherapyFormData] = useState<Partial<Therapy>>({})
  const [searchTherapy, setSearchTherapy] = useState('')

  // Doctor filters
  const filteredDoctors = doctors.filter(doc => {
    const matchesSearch = doc.full_name.toLowerCase().includes(searchDoctor.toLowerCase())
    const matchesSpecialty = filterSpecialty === 'all' || doc.specialty === filterSpecialty
    return matchesSearch && matchesSpecialty
  })

  const uniqueSpecialties = Array.from(new Set(doctors.map(d => d.specialty)))

  // Rental filters
  const filteredRentals = rentals.filter(rental =>
    rental.name.toLowerCase().includes(searchRental.toLowerCase())
  )

  // Therapy filters
  const filteredTherapies = therapies.filter(therapy =>
    therapy.therapy_name.toLowerCase().includes(searchTherapy.toLowerCase())
  )

  // Doctor handlers
  const handleEditDoctor = (doctor: Doctor) => {
    setEditingDoctorId(doctor.id)
    setDoctorFormData({ ...doctor })
  }

  const handleAddDoctor = () => {
    setIsAddingDoctor(true)
    setDoctorFormData({
      full_name: '',
      specialty: '',
      practice_address: '',
      phone: '',
      email: '',
      consultation_fee: 0,
      years_experience: 0,
    })
  }

  const handleSaveDoctor = () => {
    if (editingDoctorId) {
      setDoctors(doctors.map(d => d.id === editingDoctorId ? { ...d, ...doctorFormData } : d))
      setEditingDoctorId(null)
    } else if (isAddingDoctor) {
      const newDoctor: Doctor = {
        id: Math.max(...doctors.map(d => d.id), 0) + 1,
        hospital_id: 1,
        title: 'dr.',
        sub_specialty: '',
        schedule: {},
        registration_number: '',
        education: [],
        certifications: [],
        rating: 4.5,
        is_available: true,
        ...(doctorFormData as Doctor)
      }
      setDoctors([...doctors, newDoctor])
      setIsAddingDoctor(false)
    }
    setDoctorFormData({})
  }

  const handleDeleteDoctor = (id: number) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus dokter ini?')) {
      setDoctors(doctors.filter(d => d.id !== id))
    }
  }

  const handleCancelDoctor = () => {
    setEditingDoctorId(null)
    setIsAddingDoctor(false)
    setDoctorFormData({})
  }

  // Rental handlers
  const handleEditRental = (rental: RentalCar) => {
    setEditingRentalId(rental.id)
    setRentalFormData({ ...rental })
  }

  const handleAddRental = () => {
    setIsAddingRental(true)
    setRentalFormData({
      name: '',
      type: 'MPV',
      passenger_capacity: 0,
      price_per_day: 0,
      price_per_hour: 0,
      driver_name: '',
      driver_phone: '',
      facilities: [],
      is_available: true,
    })
  }

  const handleSaveRental = () => {
    if (editingRentalId) {
      setRentals(rentals.map(r => r.id === editingRentalId ? { ...r, ...rentalFormData } : r))
      setEditingRentalId(null)
    } else if (isAddingRental) {
      const newRental: RentalCar = {
        id: Math.max(...rentals.map(r => r.id), 0) + 1,
        ...(rentalFormData as RentalCar)
      }
      setRentals([...rentals, newRental])
      setIsAddingRental(false)
    }
    setRentalFormData({})
  }

  const handleDeleteRental = (id: number) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus rental ini?')) {
      setRentals(rentals.filter(r => r.id !== id))
    }
  }

  const handleCancelRental = () => {
    setEditingRentalId(null)
    setIsAddingRental(false)
    setRentalFormData({})
  }

  // Therapy handlers
  const handleEditTherapy = (therapy: Therapy) => {
    setEditingTherapyId(therapy.id)
    setTherapyFormData({ ...therapy })
  }

  const handleAddTherapy = () => {
    setIsAddingTherapy(true)
    setTherapyFormData({
      therapy_name: '',
      therapy_type: 'fisioterapi',
      description: '',
      price_per_session: 0,
      duration_minutes: 30,
      facilities: [],
    })
  }

  const handleSaveTherapy = () => {
    if (editingTherapyId) {
      setTherapies(therapies.map(t => t.id === editingTherapyId ? { ...t, ...therapyFormData } : t))
      setEditingTherapyId(null)
    } else if (isAddingTherapy) {
      const newTherapy: Therapy = {
        id: Math.max(...therapies.map(t => t.id), 0) + 1,
        doctor_id: 1,
        hospital_id: 1,
        ...(therapyFormData as Therapy)
      }
      setTherapies([...therapies, newTherapy])
      setIsAddingTherapy(false)
    }
    setTherapyFormData({})
  }

  const handleDeleteTherapy = (id: number) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus terapi ini?')) {
      setTherapies(therapies.filter(t => t.id !== id))
    }
  }

  const handleCancelTherapy = () => {
    setEditingTherapyId(null)
    setIsAddingTherapy(false)
    setTherapyFormData({})
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">🔧 Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">Kelola data dokter, rental, terapi dan rumah sakit</p>
            </div>
            <Badge variant="info">Admin Mode</Badge>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-2 mb-8 border-b border-gray-200 overflow-x-auto"
        >
          <button
            onClick={() => setActiveTab('doctors')}
            className={`pb-4 px-6 font-semibold transition whitespace-nowrap ${
              activeTab === 'doctors'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            👨‍⚕️ Dokter ({doctors.length})
          </button>
          <button
            onClick={() => setActiveTab('hospitals')}
            className={`pb-4 px-6 font-semibold transition whitespace-nowrap ${
              activeTab === 'hospitals'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            🏥 Rumah Sakit ({mockHospitals.length})
          </button>
          <button
            onClick={() => setActiveTab('rental')}
            className={`pb-4 px-6 font-semibold transition whitespace-nowrap ${
              activeTab === 'rental'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            🚗 Rental ({rentals.length})
          </button>
          <button
            onClick={() => setActiveTab('therapy')}
            className={`pb-4 px-6 font-semibold transition whitespace-nowrap ${
              activeTab === 'therapy'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            💆 Terapi ({therapies.length})
          </button>
        </motion.div>

        {/* Doctors Tab */}
        <AnimatePresence>
          {activeTab === 'doctors' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {!isAddingDoctor && editingDoctorId === null && (
                <motion.div className="mb-6">
                  <Button onClick={handleAddDoctor} className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                    <FiPlus size={20} /> Tambah Dokter Baru
                  </Button>
                </motion.div>
              )}

              {!isAddingDoctor && editingDoctorId === null && (
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Input
                    placeholder="Cari dokter..."
                    value={searchDoctor}
                    onChange={(e) => setSearchDoctor(e.target.value)}
                  />
                  <Select value={filterSpecialty} onChange={(e) => setFilterSpecialty(e.target.value)}>
                    <option value="all">Semua Spesialisasi</option>
                    {uniqueSpecialties.map(spec => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </Select>
                </motion.div>
              )}

              {(isAddingDoctor || editingDoctorId !== null) && (
                <motion.div className="mb-8">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle>{isAddingDoctor ? 'Tambah Dokter Baru' : 'Edit Dokter'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="Nama Dokter" value={doctorFormData.full_name || ''} onChange={(e) => setDoctorFormData({ ...doctorFormData, full_name: e.target.value })} placeholder="dr. Nama Dokter" />
                        <Input label="Spesialisasi" value={doctorFormData.specialty || ''} onChange={(e) => setDoctorFormData({ ...doctorFormData, specialty: e.target.value })} placeholder="Jantung, Bedah, dll" />
                        <Input label="Alamat Praktik" value={doctorFormData.practice_address || ''} onChange={(e) => setDoctorFormData({ ...doctorFormData, practice_address: e.target.value })} placeholder="Jl. Alamat No. XX" />
                        <Input label="No Telepon" value={doctorFormData.phone || ''} onChange={(e) => setDoctorFormData({ ...doctorFormData, phone: e.target.value })} placeholder="(0274) 123456" />
                        <Input label="Email" type="email" value={doctorFormData.email || ''} onChange={(e) => setDoctorFormData({ ...doctorFormData, email: e.target.value })} placeholder="doctor@email.com" />
                        <Input label="Tarif Konsultasi (Rp)" type="number" value={doctorFormData.consultation_fee || ''} onChange={(e) => setDoctorFormData({ ...doctorFormData, consultation_fee: parseInt(e.target.value) })} placeholder="300000" />
                        <Input label="Pengalaman (tahun)" type="number" value={doctorFormData.years_experience || ''} onChange={(e) => setDoctorFormData({ ...doctorFormData, years_experience: parseInt(e.target.value) })} placeholder="15" />
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button onClick={handleSaveDoctor} className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                          <FiSave size={18} /> Simpan
                        </button>
                        <button onClick={handleCancelDoctor} className="flex items-center gap-2 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition">
                          <FiX size={18} /> Batal
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              <motion.div className="space-y-4">
                {filteredDoctors.map((doctor) => (
                  <Card key={doctor.id} className="hover:shadow-lg transition">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900">{doctor.full_name}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-sm">
                            <div><p className="text-gray-500">Spesialisasi</p><p className="font-semibold">{doctor.specialty}</p></div>
                            <div><p className="text-gray-500">Pengalaman</p><p className="font-semibold">{doctor.years_experience} tahun</p></div>
                            <div><p className="text-gray-500">Tarif</p><p className="font-semibold">Rp {doctor.consultation_fee.toLocaleString('id-ID')}</p></div>
                            <div><p className="text-gray-500">Telepon</p><p className="font-semibold text-blue-600">{doctor.phone}</p></div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button onClick={() => handleEditDoctor(doctor)} className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"><FiEdit2 size={18} /></button>
                          <button onClick={() => handleDeleteDoctor(doctor.id)} className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"><FiTrash2 size={18} /></button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Rental Tab */}
        <AnimatePresence>
          {activeTab === 'rental' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {!isAddingRental && editingRentalId === null && (
                <motion.div className="mb-6">
                  <Button onClick={handleAddRental} className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                    <FiPlus size={20} /> Tambah Rental Baru
                  </Button>
                </motion.div>
              )}

              {!isAddingRental && editingRentalId === null && (
                <motion.div className="mb-6">
                  <Input placeholder="Cari rental..." value={searchRental} onChange={(e) => setSearchRental(e.target.value)} />
                </motion.div>
              )}

              {(isAddingRental || editingRentalId !== null) && (
                <motion.div className="mb-8">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle>{isAddingRental ? 'Tambah Rental Baru' : 'Edit Rental'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="Nama Kendaraan" value={rentalFormData.name || ''} onChange={(e) => setRentalFormData({ ...rentalFormData, name: e.target.value })} placeholder="Toyota Avanza" />
                        <Select label="Tipe Kendaraan" value={rentalFormData.type || 'MPV'} onChange={(e) => setRentalFormData({ ...rentalFormData, type: e.target.value as any })}>
                          <option value="MPV">MPV</option>
                          <option value="SUV">SUV</option>
                          <option value="Minibus">Minibus</option>
                          <option value="Wheelchair Access">Wheelchair Access</option>
                          <option value="Luxury">Luxury</option>
                        </Select>
                        <Input label="Kapasitas Penumpang" type="number" value={rentalFormData.passenger_capacity || ''} onChange={(e) => setRentalFormData({ ...rentalFormData, passenger_capacity: parseInt(e.target.value) })} placeholder="7" />
                        <Input label="Harga/Hari (Rp)" type="number" value={rentalFormData.price_per_day || ''} onChange={(e) => setRentalFormData({ ...rentalFormData, price_per_day: parseInt(e.target.value) })} placeholder="350000" />
                        <Input label="Harga/Jam (Rp)" type="number" value={rentalFormData.price_per_hour || ''} onChange={(e) => setRentalFormData({ ...rentalFormData, price_per_hour: parseInt(e.target.value) })} placeholder="50000" />
                        <Input label="Nama Driver" value={rentalFormData.driver_name || ''} onChange={(e) => setRentalFormData({ ...rentalFormData, driver_name: e.target.value })} placeholder="Nama Driver" />
                        <Input label="No Telepon Driver" value={rentalFormData.driver_phone || ''} onChange={(e) => setRentalFormData({ ...rentalFormData, driver_phone: e.target.value })} placeholder="081234567890" />
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button onClick={handleSaveRental} className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                          <FiSave size={18} /> Simpan
                        </button>
                        <button onClick={handleCancelRental} className="flex items-center gap-2 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition">
                          <FiX size={18} /> Batal
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              <motion.div className="space-y-4">
                {filteredRentals.map((rental) => (
                  <Card key={rental.id} className="hover:shadow-lg transition">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900">{rental.name}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-sm">
                            <div><p className="text-gray-500">Tipe</p><p className="font-semibold">{rental.type}</p></div>
                            <div><p className="text-gray-500">Kapasitas</p><p className="font-semibold">{rental.passenger_capacity} orang</p></div>
                            <div><p className="text-gray-500">Harga/Hari</p><p className="font-semibold">Rp {rental.price_per_day.toLocaleString('id-ID')}</p></div>
                            <div><p className="text-gray-500">Driver</p><p className="font-semibold text-blue-600">{rental.driver_phone}</p></div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button onClick={() => handleEditRental(rental)} className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"><FiEdit2 size={18} /></button>
                          <button onClick={() => handleDeleteRental(rental.id)} className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"><FiTrash2 size={18} /></button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Therapy Tab */}
        <AnimatePresence>
          {activeTab === 'therapy' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {!isAddingTherapy && editingTherapyId === null && (
                <motion.div className="mb-6">
                  <Button onClick={handleAddTherapy} className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                    <FiPlus size={20} /> Tambah Terapi Baru
                  </Button>
                </motion.div>
              )}

              {!isAddingTherapy && editingTherapyId === null && (
                <motion.div className="mb-6">
                  <Input placeholder="Cari terapi..." value={searchTherapy} onChange={(e) => setSearchTherapy(e.target.value)} />
                </motion.div>
              )}

              {(isAddingTherapy || editingTherapyId !== null) && (
                <motion.div className="mb-8">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle>{isAddingTherapy ? 'Tambah Terapi Baru' : 'Edit Terapi'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="Nama Terapi" value={therapyFormData.therapy_name || ''} onChange={(e) => setTherapyFormData({ ...therapyFormData, therapy_name: e.target.value })} placeholder="Fisioterapi Post Operasi" />
                        <Select label="Jenis Terapi" value={therapyFormData.therapy_type || 'fisioterapi'} onChange={(e) => setTherapyFormData({ ...therapyFormData, therapy_type: e.target.value as any })}>
                          <option value="fisioterapi">Fisioterapi</option>
                          <option value="okupasi">Okupasi Terapi</option>
                          <option value="wicara">Terapi Wicara</option>
                          <option value="akupunktur">Akupunktur Medis</option>
                          <option value="rehab">Rehabilitasi</option>
                        </Select>
                        <Input label="Deskripsi" value={therapyFormData.description || ''} onChange={(e) => setTherapyFormData({ ...therapyFormData, description: e.target.value })} placeholder="Deskripsi terapi" />
                        <Input label="Harga/Sesi (Rp)" type="number" value={therapyFormData.price_per_session || ''} onChange={(e) => setTherapyFormData({ ...therapyFormData, price_per_session: parseInt(e.target.value) })} placeholder="150000" />
                        <Input label="Durasi (menit)" type="number" value={therapyFormData.duration_minutes || ''} onChange={(e) => setTherapyFormData({ ...therapyFormData, duration_minutes: parseInt(e.target.value) })} placeholder="45" />
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button onClick={handleSaveTherapy} className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                          <FiSave size={18} /> Simpan
                        </button>
                        <button onClick={handleCancelTherapy} className="flex items-center gap-2 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition">
                          <FiX size={18} /> Batal
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              <motion.div className="space-y-4">
                {filteredTherapies.map((therapy) => (
                  <Card key={therapy.id} className="hover:shadow-lg transition">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900">{therapy.therapy_name}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-sm">
                            <div><p className="text-gray-500">Jenis</p><p className="font-semibold capitalize">{therapy.therapy_type}</p></div>
                            <div><p className="text-gray-500">Durasi</p><p className="font-semibold">{therapy.duration_minutes} menit</p></div>
                            <div><p className="text-gray-500">Harga/Sesi</p><p className="font-semibold">Rp {therapy.price_per_session.toLocaleString('id-ID')}</p></div>
                            <div><p className="text-gray-500">Deskripsi</p><p className="font-semibold text-blue-600 truncate">{therapy.description}</p></div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button onClick={() => handleEditTherapy(therapy)} className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"><FiEdit2 size={18} /></button>
                          <button onClick={() => handleDeleteTherapy(therapy.id)} className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"><FiTrash2 size={18} /></button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hospitals Tab */}
        <AnimatePresence>
          {activeTab === 'hospitals' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="space-y-4">
                {mockHospitals.map((hospital) => (
                  <Card key={hospital.id} className="hover:shadow-lg transition">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900">{hospital.name}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-sm">
                            <div><p className="text-gray-500">Kelas</p><p className="font-semibold"><Badge variant="info">{hospital.hospital_class}</Badge></p></div>
                            <div><p className="text-gray-500">Rating</p><p className="font-semibold text-yellow-600">⭐ {hospital.rating}</p></div>
                            <div><p className="text-gray-500">Spesialisasi</p><p className="font-semibold">{hospital.specialties.length}</p></div>
                          </div>
                          <p className="text-sm text-gray-600 mt-3">📍 {hospital.address}</p>
                        </div>
                        <Badge variant="success">View Only</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
