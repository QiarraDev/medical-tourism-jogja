import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      {/* Demo Mode Badge */}
      <div className="bg-yellow-500 text-black text-center py-2 text-sm font-bold">
        🎬 DEMO MODE - All features working with mock data (No backend needed)
      </div>
      
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold">
          🏥 Med Tourism
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link to="/hospitals" className="hover:text-blue-200">
            RS
          </Link>
          <Link to="/doctors" className="hover:text-blue-200">
            Dokter
          </Link>
          <Link to="/hotels" className="hover:text-blue-200">
            Hotel
          </Link>
          <Link to="/transportation" className="hover:text-blue-200">
            Transport
          </Link>
          <Link to="/tours" className="hover:text-blue-200">
            Wisata
          </Link>
          <Link to="/assessment" className="hover:text-blue-200">
            Assessment
          </Link>

          {user ? (
            <div className="flex items-center gap-4">
              <span>{user.full_name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/auth/login" className="bg-yellow-500 px-4 py-2 rounded text-black hover:bg-yellow-600">
              Login
            </Link>
          )}
        </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 p-4 space-y-4">
          <Link to="/" className="block text-white hover:text-blue-200">
            Home
          </Link>
          <Link to="/hospitals" className="block text-white hover:text-blue-200">
            RS
          </Link>
          <Link to="/doctors" className="block text-white hover:text-blue-200">
            Dokter
          </Link>
          <Link to="/hotels" className="block text-white hover:text-blue-200">
            Hotel
          </Link>
          <Link to="/transportation" className="block text-white hover:text-blue-200">
            Transport
          </Link>
          <Link to="/tours" className="block text-white hover:text-blue-200">
            Wisata
          </Link>
          <Link to="/assessment" className="block text-white hover:text-blue-200">
            Assessment
          </Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="block bg-yellow-500 px-4 py-2 rounded text-black text-center hover:bg-yellow-600">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
