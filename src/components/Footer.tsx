export const Footer = () => {
  return (
    <footer className="bg-dark text-white section">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Medical Tourism Jogja</h3>
          <p className="text-gray-400">
            Platform one-stop untuk wisatawan medis di Yogyakarta
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Produk</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Assessment</a></li>
            <li><a href="#" className="hover:text-white">Direktori RS</a></li>
            <li><a href="#" className="hover:text-white">Booking</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Perusahaan</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Karir</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Kontak</h4>
          <p className="text-gray-400 mb-2">📧 support@medicaltourismjogja.com</p>
          <p className="text-gray-400">📱 +62 812-3456-7890</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2026 Medical Tourism Jogja. Semua hak dilindungi.</p>
      </div>
    </footer>
  )
}
