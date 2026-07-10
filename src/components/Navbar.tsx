import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiLogOut, FiHome, FiHeart, FiUsers, FiGrid, FiTruck, FiMapPin, FiClipboard } from 'react-icons/fi'
import { Badge } from '@/components/ui'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const navItems = [
    { label: 'Beranda', path: '/', icon: FiHome },
    { label: 'RS', path: '/hospitals', icon: FiHeart },
    { label: 'Dokter', path: '/doctors', icon: FiUsers },
    { label: 'Hotel', path: '/hotels', icon: FiGrid },
    { label: 'Transport', path: '/transportation', icon: FiTruck },
    { label: 'Wisata', path: '/tours', icon: FiMapPin },
    { label: 'Assessment', path: '/assessment', icon: FiClipboard },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md">
      {/* Demo Mode Badge dengan animasi */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-black text-center py-2 text-sm font-bold"
      >
        🎬 DEMO MODE - Semua fitur berjalan dengan data simulasi
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo dengan gradient */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="flex items-center gap-2">
            <span className="text-3xl">🏥</span>
            <div className="hidden sm:flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Medical
              </span>
              <span className="text-xs font-semibold text-gray-600">Tourism Jogja</span>
            </div>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-1 items-center">
          {navItems.map((item) => (
            <motion.button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <item.icon size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="hidden md:flex items-center gap-3">
              <Badge variant="info" className="text-xs">
                👤 {user.full_name || user.email}
              </Badge>
              <motion.button
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transition flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLogOut size={18} />
                <span className="text-sm">Keluar</span>
              </motion.button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <motion.button
                onClick={() => navigate('/auth/login')}
                className="text-blue-600 hover:text-blue-700 font-medium px-3 py-2 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Masuk
              </motion.button>
              <motion.button
                onClick={() => navigate('/auth/register')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Daftar
              </motion.button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-gray-700 hover:text-blue-600 p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu dengan animasi smooth */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path)
                    setIsOpen(false)
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition text-left"
                  whileHover={{ x: 4 }}
                  whileTap={{ x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <item.icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}

              <div className="border-t pt-3 mt-3">
                {user ? (
                  <>
                    <Badge variant="info" className="mb-3 w-full text-center">
                      👤 {user.full_name || user.email}
                    </Badge>
                    <motion.button
                      onClick={() => {
                        handleLogout()
                        setIsOpen(false)
                      }}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiLogOut size={18} />
                      <span>Keluar</span>
                    </motion.button>
                  </>
                ) : (
                  <div className="flex flex-col gap-2">
                    <motion.button
                      onClick={() => {
                        navigate('/auth/login')
                        setIsOpen(false)
                      }}
                      className="text-blue-600 hover:text-blue-700 font-medium py-2 transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Masuk
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        navigate('/auth/register')
                        setIsOpen(false)
                      }}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Daftar
                    </motion.button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
