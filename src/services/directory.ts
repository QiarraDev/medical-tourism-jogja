import apiClient from './api'
import { Hospital, Doctor, Therapy, Hotel } from '@/types'

export const directoryService = {
  // Hospitals
  getHospitals: async (filters?: any): Promise<Hospital[]> => {
    const response = await apiClient.get('/hospitals', { params: filters })
    return response.data
  },

  getHospital: async (id: number): Promise<Hospital> => {
    const response = await apiClient.get(`/hospitals/${id}`)
    return response.data
  },

  getNearbyHospitals: async (
    latitude: number,
    longitude: number,
    radiusKm: number = 5
  ): Promise<Hospital[]> => {
    const response = await apiClient.get('/hospitals/nearby', {
      params: { latitude, longitude, radius_km: radiusKm },
    })
    return response.data
  },

  // Doctors
  getDoctors: async (filters?: any): Promise<Doctor[]> => {
    const response = await apiClient.get('/doctors', { params: filters })
    return response.data
  },

  getDoctor: async (id: number): Promise<Doctor> => {
    const response = await apiClient.get(`/doctors/${id}`)
    return response.data
  },

  getDoctorsBySpecialty: async (specialty: string): Promise<Doctor[]> => {
    const response = await apiClient.get(`/doctors/specialty/${specialty}`)
    return response.data
  },

  // Therapies
  getTherapies: async (filters?: any): Promise<Therapy[]> => {
    const response = await apiClient.get('/therapies', { params: filters })
    return response.data
  },

  getTherapy: async (id: number): Promise<Therapy> => {
    const response = await apiClient.get(`/therapies/${id}`)
    return response.data
  },

  // Hotels
  getHotels: async (filters?: any): Promise<Hotel[]> => {
    const response = await apiClient.get('/hotels', { params: filters })
    return response.data
  },

  getHotel: async (id: number): Promise<Hotel> => {
    const response = await apiClient.get(`/hotels/${id}`)
    return response.data
  },

  getNearbyHotels: async (
    latitude: number,
    longitude: number,
    radiusKm: number = 5
  ): Promise<Hotel[]> => {
    const response = await apiClient.get('/hotels/nearby', {
      params: { latitude, longitude, radius_km: radiusKm },
    })
    return response.data
  },
}
