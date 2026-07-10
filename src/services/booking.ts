import apiClient from './api'
import { Booking } from '@/types'

export const bookingService = {
  createBooking: async (data: any): Promise<Booking> => {
    const response = await apiClient.post('/bookings', data)
    return response.data
  },

  getBooking: async (id: number): Promise<Booking> => {
    const response = await apiClient.get(`/bookings/${id}`)
    return response.data
  },

  getUserBookings: async (): Promise<Booking[]> => {
    const response = await apiClient.get('/bookings/user')
    return response.data
  },

  updateBookingStatus: async (id: number, status: string): Promise<Booking> => {
    const response = await apiClient.put(`/bookings/${id}/status`, { status })
    return response.data
  },

  cancelBooking: async (id: number): Promise<void> => {
    await apiClient.delete(`/bookings/${id}`)
  },
}
