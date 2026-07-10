import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiEdit2, FiTrash2, FiSave, FiX, FiSettings } from 'react-icons/fi'
import { Button, Input, Select, Card, CardHeader, CardTitle, CardContent, Badge } from '@/components/ui'
import { mockDoctors, mockHospitals, mockRentalCars, mockTherapies, mockHotels } from '@/data/mockData'
import { Doctor, RentalCar, Therapy, Hospital, Hotel } from '@/types'

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'doctors' | 'hospitals' | 'rental' | 'therapy' | 'hotels' | 'tours' | 'settings'>('doctors')
  
  // Doctors state
  const [doctors, setDoctors] = useState<Doctor[]>(mockDoctors)
  const [editingDoctorId, setEditingDoctorId] = useState<number | null>(null)
  const [isAddingDoctor, setIsAddingDoctor] = useState(false)
  const [doctorFormData, setDoctorFormData] = useState<Partial<Doctor>>({})
  const [searchDoctor, setSearchDoctor] = useState('')
  const [filterSpecialty, setFilterSpecialty] = useState('all')

  // Hospital state
  const [hospitals, setHospitals] = useState<Hospital[]>(mockHospitals)
  const [editingHospitalId, setEditingHospitalId] = useState<number | null>(null)
  const [isAddingHospital, setIsAddingHospital] = useState(false)
  const [hospitalFormData, setHospitalFormData] = useState<Partial<Hospital>>({})
  const [searchHospital, setSearchHospital] = useState('')

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

  // Hotels state
  const [hotels, setHotels] = useState<Hotel[]>(mockHotels)
  const [editingHotelId, setEditingHotelId] = useState<number | null>(null)
  const [isAddingHotel, setIsAddingHotel] = useState(false)
  const [hotelFormData, setHotelFormData] = useState<Partial<Hotel>>({})
  const [searchHotel, setSearchHotel] = useState('')

  // Settings state
  const [platformName, setPlatformName] = useState('Medical Tourism Jogja')
  const [platformEmail, setPlatformEmail] = useState('support@medicaltourismjogja.com')
  const [platformPhone, setPlatformPhone] = useState('+62 812-3456-7890')
  const [platformAddress, setPlatformAddress] = useState('Yogyakarta, Indonesia')

  // Filters & Search
  const filteredDoctors = doctors.filter(doc => {
    const matchesSearch = doc.full_name.toLowerCase().includes(searchDoctor.toLowerCase())
    const matchesSpecialty = filterSpecialty === 'all' || doc.specialty === filterSpecialty
    return matchesSearch && matchesSpecialty
  })

  const uniqueSpecialties = Array.from(new Set(doctors.map(d => d.specialty)))

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchHospital.toLowerCase())
  )

  const filteredRentals = rentals.filter(rental =>
    rental.name.toLowerCase().includes(searchRental.toLowerCase())
  )

  const filteredTherapies = therapies.filter(therapy =>
    therapy.therapy_name.toLowerCase().includes(searchTherapy.toLowerCase())
  )

  const filteredHotels = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(searchHotel.toLowerCase())
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

  // Hospital handlers
  const handleEditHospital = (hospital: Hospital) => {
    setEditingHospitalId(hospital.id)
    setHospitalFormData({ ...hospital })
  }

  const handleAddHospital = () => {
    setIsAddingHospital(true)
    setHospitalFormData({
      name: '',
      address: '',
      phone: '',
      email: '',
      website: '',
      hospital_class: 'B',
      specialties: [],
      rating: 4.5,
      review_count: 0,
      working_hours: '24 Jam',
      has_emergency: true,
      has_ambulance: true,
      facilities: [],
      images: [],
      latitude: 0,
      longitude: 0,
    })
  }

  const handleSaveHospital = () => {
    if (editingHospitalId) {
      setHospitals(hospitals.map(h => h.id === editingHospitalId ? { ...h, ...hospitalFormData } : h))
      setEditingHospitalId(null)
    } else if (isAddingHospital) {
      const newHospital: Hospital = {
        id: Math.max(...hospitals.map(h => h.id), 0) + 1,
        ...(hospitalFormData as Hospital)
      }
      setHospitals([...hospitals, newHospital])
      setIsAddingHospital(false)
    }
    setHospitalFormData({})
  }

  const handleDeleteHospital = (id: number) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus rumah sakit ini?')) {
      setHospitals(hospitals.filter(h => h.id !== id))
    }
  }

  const handleCancelHospital = () => {
    setEditingHospitalId(null)
    setIsAddingHospital(false)
    setHospitalFormData({})
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

  // Hotel handlers
  const handleEditHotel = (hotel: Hotel) => {
    setEditingHotelId(hotel.id)
    setHotelFormData({ ...hotel })
  }

  const handleAddHotel = () => {
    setIsAddingHotel(true)
    setHotelFormData({
      name: '',
      address: '',
      phone: '',
      email: '',
      latitude: 0,
      longitude: 0,
      star_rating: 4,
      amenities: [],
      room_types: [],
      price_per_night_min: 0,
      price_per_night_max: 0,
      distance_to_hospital: 0,
      has_disability_access: false,
    })
  }

  const handleSaveHotel = () => {
    if (editingHotelId) {
      setHotels(hotels.map(h => h.id === editingHotelId ? { ...h, ...hotelFormData } : h))
      setEditingHotelId(null)
    } else if (isAddingHotel) {
      const newHotel: Hotel = {
        id: Math.max(...hotels.map(h => h.id), 0) + 1,
        ...(hotelFormData as Hotel)
      }
      setHotels([...hotels, newHotel])
      setIsAddingHotel(false)
    }
    setHotelFormData({})
  }

  const handleDeleteHotel = (id: number) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus hotel ini?')) {
      setHotels(hotels.filter(h => h.id !== id))
    }
  }

  const handleCancelHotel = () => {
    setEditingHotelId(null)
    setIsAddingHotel(false)
    setHotelFormData({})
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
              <p className="text-gray-600 mt-2">Kelola semua data platform - Dokter, RS, Rental, Terapi, Hotel & Wisata</p>
            </div>
            <Badge variant="info">Full Admin Access</Badge>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-2 mb-8 border-b border-gray-200 overflow-x-auto pb-2"
        >
          <button
            onClick={() => setActiveTab('doctors')}
            className={`pb-2 px-4 font-semibold transition whitespace-nowrap text-sm md:text-base ${
              activeTab === 'doctors'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            👨‍⚕️ Dokter ({doctors.length})
          </button>
          <button
            onClick={() => setActiveTab('hospitals')}
            className={`pb-2 px-4 font-semibold transition whitespace-nowrap text-sm md:text-base ${
              activeTab === 'hospitals'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            🏥 RS ({hospitals.length})
          </button>
          <button
            onClick={() => setActiveTab('rental')}
            className={`pb-2 px-4 font-semibold transition whitespace-nowrap text-sm md:text-base ${
              activeTab === 'rental'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            🚗 Rental ({rentals.length})
          </button>
          <button
            onClick={() => setActiveTab('therapy')}
            className={`pb-2 px-4 font-semibold transition whitespace-nowrap text-sm md:text-base ${
              activeTab === 'therapy'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            💆 Terapi ({therapies.length})
          </button>
          <button
            onClick={() => setActiveTab('hotels')}
            className={`pb-2 px-4 font-semibold transition whitespace-nowrap text-sm md:text-base ${
              activeTab === 'hotels'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            🏨 Hotel ({hotels.length})
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-2 px-4 font-semibold transition whitespace-nowrap text-sm md:text-base ${
              activeTab === 'settings'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            ⚙️ Pengaturan
          </button>
        </motion.div>

        {/* Doctors Tab */}
        <AnimatePresence>
          {activeTab === 'doctors' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {!isAddingDoctor && editingDoctorId === null && (
                <motion.div className="mb-6">
                  <Button onClick={handleAddDoctor} className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                    <FiPlus size={20} /> Tambah Dokter
                  </Button>
                </motion.div>
              )}
              {!isAddingDoctor && editingDoctorId === null && (
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Input placeholder="Cari dokter..." value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />
                  <Select value={filterSpecialty} onChange={(e) => setFilterSpecialty(e.target.value)}>
                    <option value="all">Semua Spesialisasi</option>
                    {uniqueSpecialties.map(spec => <option key={spec} value={spec}>{spec}</option>)}
                  </Select>
                </motion.div>
              )}
              {(isAddingDoctor || editingDoctorId !== null) && (
                <motion.div className="mb-8">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader><CardTitle>{isAddingDoctor ? 'Tambah Dokter' : 'Edit Dokter'}</CardTitle></CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="Nama" value={doctorFormData.full_name || ''} onChange={(e) => setDoctorFormData({ ...doctorFormData, full_name: e.target.value })} />
                        <Input label="Spesialisasi" value={doctorFormData.specialty || ''} onChange={(e) => setDoctorFormData({ ...doctorFormData, specialty: e.target.value })} />
                        <Input label="Alamat" value={doctorFormData.practice_address || ''} onChange={(e) => setDoctorFormData({ ...doctorFormData, practice_address: e.target.value })} />
                        <Input label="Telepon" value={doctorFormData.phone || ''} onChange={(e) => setDoctorFormData({ ...doctorFormData, phone: e.target.value })} />
                        <Input label="Email" value={doctorFormData.email || ''} onChange={(e) => setDoctorFormData({ ...doctorFormData, email: e.target.value })} />
                        <Input label="Tarif Konsultasi" type="number" value={doctorFormData.consultation_fee || ''} onChange={(e) => setDoctorFormData({ ...doctorFormData, consultation_fee: parseInt(e.target.value) })} />
                        <Input label="Pengalaman (tahun)" type="number" value={doctorFormData.years_experience || ''} onChange={(e) => setDoctorFormData({ ...doctorFormData, years_experience: parseInt(e.target.value) })} />
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button onClick={handleSaveDoctor} className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                          <FiSave size={18} /> Simpan
                        </button>
                        <button onClick={handleCancelDoctor} className="flex items-center gap-2 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700">
                          <FiX size={18} /> Batal
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
              <motion.div className="space-y-4">
                {filteredDoctors.map((doctor) => (
                  <Card key={doctor.id} className="hover:shadow-lg">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold">{doctor.full_name}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2 text-sm">
                            <div><p className="text-gray-500">Spesialisasi</p><p className="font-semibold">{doctor.specialty}</p></div>
                            <div><p className="text-gray-500">Pengalaman</p><p className="font-semibold">{doctor.years_experience} tahun</p></div>
                            <div><p className="text-gray-500">Tarif</p><p className="font-semibold">Rp {doctor.consultation_fee.toLocaleString()}</p></div>
                            <div><p className="text-gray-500">Rating</p><p className="font-semibold">⭐ {doctor.rating}</p></div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => handleEditDoctor(doctor)} className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"><FiEdit2 size={18} /></button>
                          <button onClick={() => handleDeleteDoctor(doctor.id)} className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200"><FiTrash2 size={18} /></button>
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
              {!isAddingHospital && editingHospitalId === null && (
                <motion.div className="mb-6">
                  <Button onClick={handleAddHospital} className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                    <FiPlus size={20} /> Tambah Rumah Sakit
                  </Button>
                </motion.div>
              )}
              {!isAddingHospital && editingHospitalId === null && (
                <motion.div className="mb-6">
                  <Input placeholder="Cari rumah sakit..." value={searchHospital} onChange={(e) => setSearchHospital(e.target.value)} />
                </motion.div>
              )}
              {(isAddingHospital || editingHospitalId !== null) && (
                <motion.div className="mb-8">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader><CardTitle>{isAddingHospital ? 'Tambah Rumah Sakit' : 'Edit Rumah Sakit'}</CardTitle></CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="Nama RS" value={hospitalFormData.name || ''} onChange={(e) => setHospitalFormData({ ...hospitalFormData, name: e.target.value })} />
                        <Input label="Alamat" value={hospitalFormData.address || ''} onChange={(e) => setHospitalFormData({ ...hospitalFormData, address: e.target.value })} />
                        <Input label="Telepon" value={hospitalFormData.phone || ''} onChange={(e) => setHospitalFormData({ ...hospitalFormData, phone: e.target.value })} />
                        <Input label="Email" value={hospitalFormData.email || ''} onChange={(e) => setHospitalFormData({ ...hospitalFormData, email: e.target.value })} />
                        <Input label="Website" value={hospitalFormData.website || ''} onChange={(e) => setHospitalFormData({ ...hospitalFormData, website: e.target.value })} />
                        <Select label="Kelas RS" value={hospitalFormData.hospital_class || 'B'} onChange={(e) => setHospitalFormData({ ...hospitalFormData, hospital_class: e.target.value as any })}>
                          <option value="A">Kelas A</option><option value="B">Kelas B</option><option value="C">Kelas C</option><option value="D">Kelas D</option>
                        </Select>
                        <Input label="Rating" type="number" value={hospitalFormData.rating || ''} onChange={(e) => setHospitalFormData({ ...hospitalFormData, rating: parseFloat(e.target.value) })} />
                        <Input label="Review" type="number" value={hospitalFormData.review_count || ''} onChange={(e) => setHospitalFormData({ ...hospitalFormData, review_count: parseInt(e.target.value) })} />
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button onClick={handleSaveHospital} className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                          <FiSave size={18} /> Simpan
                        </button>
                        <button onClick={handleCancelHospital} className="flex items-center gap-2 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700">
                          <FiX size={18} /> Batal
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
              <motion.div className="space-y-4">
                {filteredHospitals.map((hospital) => (
                  <Card key={hospital.id} className="hover:shadow-lg">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold">{hospital.name}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2 text-sm">
                            <div><p className="text-gray-500">Kelas</p><p className="font-semibold"><Badge variant="info">{hospital.hospital_class}</Badge></p></div>
                            <div><p className="text-gray-500">Rating</p><p className="font-semibold">⭐ {hospital.rating}</p></div>
                            <div><p className="text-gray-500">Spesialisasi</p><p className="font-semibold">{hospital.specialties.length}</p></div>
                            <div><p className="text-gray-500">Telepon</p><p className="font-semibold">{hospital.phone}</p></div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => handleEditHospital(hospital)} className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"><FiEdit2 size={18} /></button>
                          <button onClick={() => handleDeleteHospital(hospital.id)} className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200"><FiTrash2 size={18} /></button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
