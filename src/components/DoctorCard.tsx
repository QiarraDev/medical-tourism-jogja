import { Link } from 'react-router-dom'
import { Phone, Calendar, Star } from 'lucide-react'
import { Doctor } from '@/types'

interface DoctorCardProps {
  doctor: Doctor
}

export const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-primary mb-1">{doctor.full_name}</h3>
        <p className="text-sm text-gray-600 mb-2">{doctor.title}</p>
        <p className="text-sm font-medium mb-2">{doctor.specialty}</p>
      </div>

      <div className="mb-4 space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span>{doctor.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{doctor.years_experience} tahun pengalaman</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm">Biaya Konsultasi:</span>
          <span className="font-bold text-primary">Rp {doctor.consultation_fee.toLocaleString()}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-1">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{doctor.rating}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Link to={`/doctors/${doctor.id}`} className="btn-primary flex-1 text-center">
          Detail
        </Link>
        <button className="btn-outline flex-1">
          Booking
        </button>
      </div>
    </div>
  )
}
