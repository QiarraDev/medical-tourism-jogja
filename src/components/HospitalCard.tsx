import { Link } from 'react-router-dom'
import { MapPin, Phone, Star } from 'lucide-react'
import { Hospital } from '@/types'

interface HospitalCardProps {
  hospital: Hospital
}

export const HospitalCard = ({ hospital }: HospitalCardProps) => {
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-primary mb-2">{hospital.name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
          <MapPin size={16} />
          <span>{hospital.address}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Phone size={16} />
          <span>{hospital.phone}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Kelas: {hospital.hospital_class}</span>
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{hospital.rating}</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs text-gray-600 mb-2 font-semibold">Spesialisasi:</p>
        <div className="flex flex-wrap gap-2">
          {hospital.specialties.slice(0, 3).map((specialty) => (
            <span
              key={specialty}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <Link to={`/hospitals/${hospital.id}`} className="btn-primary flex-1 text-center">
          Detail
        </Link>
        <button className="btn-outline flex-1">
          Booking
        </button>
      </div>
    </div>
  )
}
