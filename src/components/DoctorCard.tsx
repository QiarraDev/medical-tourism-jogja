import { Link } from 'react-router-dom'
import { Doctor } from '@/types'

interface DoctorCardProps {
  doctor: Doctor
}

export const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-blue-600 mb-1">{doctor.full_name}</h3>
        <p className="text-sm text-gray-600 mb-2">{doctor.title}</p>
        <p className="text-sm font-medium mb-2">{doctor.specialty}</p>
      </div>

      <div className="mb-4 space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span>☎️</span>
          <span>{doctor.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>📅</span>
          <span>{doctor.years_experience} tahun pengalaman</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm">Biaya Konsultasi:</span>
          <span className="font-bold text-blue-600">Rp {doctor.consultation_fee.toLocaleString()}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-1">
          <span>⭐</span>
          <span className="text-sm font-medium">{doctor.rating}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Link to={`/doctors/${doctor.id}`} className="bg-blue-600 text-white px-4 py-2 rounded flex-1 text-center font-bold hover:bg-blue-700">
          Detail
        </Link>
        <button className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded flex-1 font-bold hover:bg-blue-600 hover:text-white">
          Booking
        </button>
      </div>
    </div>
  )
}
