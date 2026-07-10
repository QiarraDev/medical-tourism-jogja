import { create } from 'zustand'
import { BookingCart } from '@/types'

interface BookingStore {
  cart: BookingCart[]
  addToCart: (item: BookingCart) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  getTotalAmount: () => number
  getCartItems: () => BookingCart[]
}

export const useBookingStore = create<BookingStore>((set, get) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id)
      if (existing) {
        return state
      }
      return { cart: [...state.cart, item] }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
  getTotalAmount: () => {
    return get().cart.reduce((total, item) => total + item.amount, 0)
  },
  getCartItems: () => get().cart,
}))
