import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { authService } from '@/services/auth'
import { useAuthStore } from '@/store/authStore'

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { setUser, setToken } = useAuthStore()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      try {
        const response = await authService.login({ email, password })
        setUser(response.user)
        setToken(response.token)
        localStorage.setItem('token', response.token)
        navigate('/')
      } catch (apiError) {
        // Demo mode: allow any login
        const mockUser = {
          id: 1,
          full_name: email.split('@')[0],
          email: email,
          phone: '0812-3456-7890',
          role: 'patient' as const,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }
        const mockToken = 'demo_token_' + Math.random().toString(36).substr(2, 9)
        
        setUser(mockUser)
        setToken(mockToken)
        localStorage.setItem('token', mockToken)
        alert('✅ Demo Login: Backend tidak tersedia, Anda login dengan data demo.')
        navigate('/')
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login gagal. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-light flex items-center justify-center py-12">
      <div className="card w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-primary">Medical Tourism</h1>
        <p className="text-center text-gray-600 mb-8">Masuk ke akun Anda</p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-xl">✉️</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                placeholder="email@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-xl">🔒</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full"
          >
            {loading ? 'Sedang masuk...' : 'Masuk'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Belum punya akun?{' '}
          <Link to="/auth/register" className="text-primary font-bold hover:underline">
            Daftar sekarang
          </Link>
        </p>
      </div>
    </div>
  )
}
