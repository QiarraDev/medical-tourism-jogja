// User & Auth Types
export interface User {
  id: number
  full_name: string
  email: string
  phone: string
  role: 'patient' | 'companion' | 'admin'
  created_at: string
  updated_at: string
}

export interface AuthResponse {
  user: User
  token: string
}

// Patient Types
export interface Patient {
  id: number
  user_id: number
  date_of_birth: string
  gender: 'M' | 'F'
  blood_type: 'A' | 'B' | 'AB' | 'O'
  medical_history: string
  allergies: string
  emergency_contact: string
  emergency_phone: string
}

export interface Companion {
  id: number
  user_id: number
  patient_id: number
  relationship: string
  stay_duration: string
}

// Assessment Types
export interface Assessment {
  id: number
  patient_id: number
  chief_complaint: string
  symptoms: string
  severity: 'mild' | 'moderate' | 'severe'
  preferred_location: string
  budget_min: number
  budget_max: number
  assessment_date: string
  status: 'pending' | 'processing' | 'completed'
}

export interface AssessmentForm {
  patientName: string
  dateOfBirth: string
  gender: 'M' | 'F'
  bloodType: 'A' | 'B' | 'AB' | 'O'
  chiefComplaint: string
  symptoms: string
  severity: 'mild' | 'moderate' | 'severe'
  allergies: string
  preferredLocation: string
  budgetMin: number
  budgetMax: number
  numCompanions: number
  emergencyContact: string
  emergencyPhone: string
}

// Hospital Types
export interface Hospital {
  id: number
  name: string
  address: string
  phone: string
  email: string
  website: string
  hospital_class: 'A' | 'B' | 'C' | 'D'
  specialties: string[]
  latitude: number
  longitude: number
  rating: number
  review_count: number
  working_hours: string
  has_emergency: boolean
  has_ambulance: boolean
  facilities: string[]
  images: string[]
}

// Doctor Types
export interface Doctor {
  id: number
  hospital_id: number
  full_name: string
  title: string
  specialty: string
  sub_specialty?: string
  practice_address: string
  phone: string
  email: string
  schedule: Record<string, string>
  registration_number: string
  years_experience: number
  consultation_fee: number
  education: string[]
  certifications: string[]
  rating: number
  is_available: boolean
}

// Therapy Types
export interface Therapy {
  id: number
  doctor_id: number
  hospital_id: number
  therapy_name: string
  therapy_type: 'fisioterapi' | 'okupasi' | 'wicara' | 'akupunktur' | 'rehab'
  description: string
  price_per_session: number
  duration_minutes: number
  facilities: string[]
}

// Hotel Types
export interface Hotel {
  id: number
  name: string
  address: string
  phone: string
  email: string
  latitude: number
  longitude: number
  star_rating: number
  amenities: string[]
  room_types: string[]
  price_per_night_min: number
  price_per_night_max: number
  distance_to_hospital: number
  has_disability_access: boolean
}

// Rental Car Types
export interface RentalCar {
  id: number
  name: string
  type: 'MPV' | 'SUV' | 'Minibus' | 'Wheelchair Access' | 'Luxury'
  passenger_capacity: number
  price_per_day: number
  price_per_hour: number
  facilities: string[]
  is_available: boolean
  driver_name: string
  driver_phone: string
}

// Tour Package Types
export interface TourPackage {
  id: number
  package_name: string
  description: string
  duration: 'half_day' | 'full_day' | '2_days'
  destinations: string[]
  price_per_person: number
  inclusions: string[]
  exclusions: string[]
  is_active: boolean
}

// Recommendation Types
export interface HospitalRecommendation {
  id: number
  assessment_id: number
  hospital_id: number
  hospital: Hospital
  match_score: number
  reason: string
  is_selected: boolean
}

export interface HotelRecommendation {
  id: number
  assessment_id: number
  hotel_id: number
  hotel: Hotel
  match_score: number
  reason: string
  is_selected: boolean
}

// Booking Types
export interface Booking {
  id: number
  user_id: number
  patient_id: number
  booking_type: 'hospital' | 'hotel' | 'rental' | 'tour'
  reference_id: number
  booking_date: string
  service_date: string
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  total_amount: number
  notes: string
}

export interface BookingCart {
  id: string
  type: 'hospital' | 'hotel' | 'rental' | 'tour'
  referenceId: number
  itemName: string
  amount: number
  serviceDate: string
}

// Payment Types
export interface Payment {
  id: number
  booking_id: number
  amount: number
  payment_method: 'credit_card' | 'bank_transfer' | 'e_wallet'
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded'
  transaction_id: string
  payment_date: string
}

// Pagination Types
export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  pages: number
}

// Filter Types
export interface HospitalFilter {
  location?: string
  class?: string
  specialty?: string
  facility?: string
}

export interface DoctorFilter {
  name?: string
  specialty?: string
  hospital?: string
  location?: string
}

export interface HotelFilter {
  star?: number
  minPrice?: number
  maxPrice?: number
  distanceRadius?: number
  hasDisabilityAccess?: boolean
}
