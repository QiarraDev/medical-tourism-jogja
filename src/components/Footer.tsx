import { motion } from 'framer-motion'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi'
import { useState } from 'react'

export const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  const footerSections = [
    {
      title: 'Layanan',
      links: [
        { label: 'Assessment Medis', href: '#' },
        { label: 'Direktori RS', href: '#' },
        { label: 'Booking Hotel', href: '#' },
        { label: 'Paket Wisata', href: '#' },
      ],
    },
    {
      title: 'Perusahaan',
      links: [
        { label: 'Tentang Kami', href: '#' },
        { label: 'Blog & Artikel', href: '#' },
        { label: 'Karir', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Kebijakan Privasi', href: '#' },
        { label: 'Syarat & Ketentuan', href: '#' },
        { label: 'Lisensi Medis', href: '#' },
        { label: 'Keamanan Data', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 mb-16 shadow-xl"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-2">Dapatkan Informasi Terbaru</h3>
            <p className="text-blue-100 mb-4">Berlangganan newsletter kami untuk tips kesehatan dan penawaran eksklusif</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition flex items-center gap-2"
              >
                {subscribed ? '✓ Berhasil' : 'Berlangganan'}
                <FiArrowRight size={18} />
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <motion.div className="flex items-center gap-2 mb-4" whileHover={{ scale: 1.05 }}>
              <span className="text-4xl">🏥</span>
              <div>
                <h3 className="text-xl font-bold">Medical Jogja</h3>
                <p className="text-xs text-gray-400">Tourism Platform</p>
              </div>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Platform one-stop untuk wisatawan medis yang mencari perawatan berkualitas dan pengalaman luar biasa di Yogyakarta.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition"
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="text-lg font-bold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition text-sm"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-white">Hubungi Kami</h4>
            <div className="space-y-3">
              <motion.div className="flex items-start gap-3" whileHover={{ x: 4 }}>
                <FiPhone className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-sm text-gray-400">24/7 Support</p>
                  <p className="text-sm font-semibold">+62 812-3456-7890</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-3" whileHover={{ x: 4 }}>
                <FiMail className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-sm font-semibold">support@medicaljogja.com</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-3" whileHover={{ x: 4 }}>
                <FiMapPin className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-sm text-gray-400">Lokasi</p>
                  <p className="text-sm font-semibold">Yogyakarta, Indonesia</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p>&copy; 2026 Medical Tourism Jogja. Semua hak dilindungi.</p>
          <div className="flex gap-4 items-center">
            <span className="inline-block bg-green-900 text-green-200 px-3 py-1 rounded-full text-xs font-semibold">
              ✓ Tersertifikasi Medis
            </span>
            <span className="inline-block bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">
              🔒 Aman & Terpercaya
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
