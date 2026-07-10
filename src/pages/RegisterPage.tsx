import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { User, Mail, Phone, Lock } from 'lucide-react'
import { authService } from '@/services/auth'
import { useAuthStore } from '@/store/authStore'

export const RegisterPage = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState<'patient' | 'companion'>('patient')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { setUser, setToken } = useAuthStore()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Password tidak cocok')
      return
    }

    setLoading(true)

    try {
      const response = await authService.register({
        full_name: fullName,
        email,
        phone,
        password,
        role,
      })
      setUser(response.user)
      setToken(response.token)
      localStorage.setItem('token', response.token)
      navigate('/')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registrasi gagal. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-light flex items-center justify-center py-12">
      <div className="card w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-primary">Medical Tourism</h1>
        <p className="text-center text-gray-600 mb-8">Daftar akun baru</p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="input pl-10"
                placeholder="Nama Anda"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input pl-10"
                placeholder="email@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Nomor Telepon</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input pl-10"
                placeholder="+62 812 3456 7890"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Peran</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as 'patient' | 'companion')}
              className="input"
            >
              <option value="patient">Pasien</option>
              <option value="companion">Pendamping</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input pl-10"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Konfirmasi Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input pl-10"
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
            {loading ? 'Sedang mendaftar...' : 'Daftar'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Sudah punya akun?{' '}
          <Link to="/auth/login" className="text-primary font-bold hover:underline">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  )
}
