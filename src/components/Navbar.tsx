import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, LogOut, User } from 'lucide-react'
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
    <nav className="bg-white shadow-md">
      <div className="container flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold text-primary">
          🏥 Medical Tourism
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-dark hover:text-primary">
            Home
          </Link>
          <Link to="/hospitals" className="text-dark hover:text-primary">
            Rumah Sakit
          </Link>
          <Link to="/doctors" className="text-dark hover:text-primary">
            Dokter
          </Link>
          <Link to="/hotels" className="text-dark hover:text-primary">
            Hotel
          </Link>

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-dark">{user.full_name}</span>
              <button
                onClick={handleLogout}
                className="btn-primary flex items-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          ) : (
            <Link to="/auth/login" className="btn-primary">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-light p-4 space-y-4">
          <Link to="/" className="block text-dark hover:text-primary">
            Home
          </Link>
          <Link to="/hospitals" className="block text-dark hover:text-primary">
            Rumah Sakit
          </Link>
          <Link to="/doctors" className="block text-dark hover:text-primary">
            Dokter
          </Link>
          <Link to="/hotels" className="block text-dark hover:text-primary">
            Hotel
          </Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <LogOut size={18} />
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="btn-primary block text-center">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
