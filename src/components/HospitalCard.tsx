import { Link } from 'react-router-dom'
import { Hospital } from '@/types'

interface HospitalCardProps {
  hospital: Hospital
}

export const HospitalCard = ({ hospital }: HospitalCardProps) => {
  return (
    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-blue-600 mb-2">{hospital.name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
          <span>📍</span>
          <span>{hospital.address}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>☎️</span>
          <span>{hospital.phone}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Kelas: {hospital.hospital_class}</span>
          <div className="flex items-center gap-1">
            <span>⭐</span>
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
        <Link to={`/hospitals/${hospital.id}`} className="bg-blue-600 text-white px-4 py-2 rounded flex-1 text-center font-bold hover:bg-blue-700">
          Detail
        </Link>
        <button className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded flex-1 font-bold hover:bg-blue-600 hover:text-white">
          Booking
        </button>
      </div>
    </div>
  )
}
