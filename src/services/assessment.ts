import apiClient from './api'
import { Assessment, HospitalRecommendation, HotelRecommendation } from '@/types'

export const assessmentService = {
  createAssessment: async (data: any): Promise<Assessment> => {
    const response = await apiClient.post('/assessment', data)
    return response.data
  },

  getAssessment: async (id: number): Promise<Assessment> => {
    const response = await apiClient.get(`/assessment/${id}`)
    return response.data
  },

  updateAssessment: async (id: number, data: any): Promise<Assessment> => {
    const response = await apiClient.put(`/assessment/${id}`, data)
    return response.data
  },

  getRecommendations: async (id: number): Promise<{
    hospitals: HospitalRecommendation[]
    hotels: HotelRecommendation[]
  }> => {
    const response = await apiClient.get(`/assessment/${id}/recommendations`)
    return response.data
  },
}
