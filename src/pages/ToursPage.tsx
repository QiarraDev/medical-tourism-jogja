import { useState } from 'react'

const tourPackages = [
  {
    id: 1,
    name: 'Yogyakarta Heritage Tour',
    description: 'Jelajahi warisan budaya Yogyakarta yang kaya - Candi Borobudur, Prambanan, dan Kraton',
    duration: '1 Hari',
    price: 450000,
    schedule: 'Setiap hari',
    includes: [
      'Candi Borobudur (sunrise)',
      'Candi Prambanan',
      'Kraton Yogyakarta',
      'Taman Pintar',
      'Guide bahasa Inggris/Indonesia',
      'Makan siang',
      'Transportasi'
    ],
    icon: '🏯',
    bestFor: 'Setelah recovery/ringan'
  },
  {
    id: 2,
    name: 'Nature & Adventure Tour',
    description: 'Petualangan alam di Yogyakarta - Tebing Beringsau, Air Terjun Mrican, dan kebun pertanian',
    duration: '1 Hari',
    price: 550000,
    schedule: 'Setiap hari',
    includes: [
      'Tebing Beringsau dengan pemandangan menakjubkan',
      'Air Terjun Mrican',
      'Kebun pertanian lokal',
      'Aktivitas ringan',
      'Guide lokal',
      'Makan siang',
      'Foto profesional'
    ],
    icon: '🌿',
    bestFor: 'Pasien dengan recovery baik'
  },
  {
    id: 3,
    name: 'Cooking Class & Culinary Tour',
    description: 'Belajar membuat masakan lokal Yogyakarta yang lezat - hidangan tradisional dan modern',
    duration: '3 Jam',
    price: 350000,
    schedule: 'Setiap hari',
    includes: [
      'Cooking class dengan chef profesional',
      'Pasar tradisional tour',
      'Belanja bahan baku',
      'Menu khusus 3 hidangan',
      'Makan hasil masakan Anda',
      'Resep rahasia',
      'Photo session'
    ],
    icon: '👨‍🍳',
    bestFor: 'Semua tingkatan'
  },
  {
    id: 4,
    name: 'Spa & Wellness Retreat',
    description: 'Rileksasi total dengan treatment spa tradisional Jawa yang menenangkan',
    duration: '2 Jam',
    price: 400000,
    schedule: 'Setiap hari',
    includes: [
      'Traditional Javanese massage',
      'Herbal steam therapy',
      'Aromatherapy treatment',
      'Reflexology',
      'Mineral water bath',
      'Tea & snacks sehat',
      'Relaksasi di private room'
    ],
    icon: '🧘‍♀️',
    bestFor: 'Recovery & relaxation'
  },
  {
    id: 5,
    name: 'Batik Workshop & Art Tour',
    description: 'Pelajari seni membatik tradisional - workshop interaktif dengan artisan lokal',
    duration: '2.5 Jam',
    price: 300000,
    schedule: 'Setiap hari',
    includes: [
      'Batik making workshop',
      'Menggunakan teknik tradisional',
      'Galeri seni batik',
      'Membawa pulang karya Anda',
      'Tutorial dari master batik',
      'Tea break',
      'Certificate'
    ],
    icon: '🎨',
    bestFor: 'Semua tingkatan'
  },
  {
    id: 6,
    name: 'Photography Tour - Hidden Gems',
    description: 'Jelajahi lokasi tersembunyi Yogyakarta yang Instagram-worthy dengan fotografer profesional',
    duration: '4 Jam',
    price: 600000,
    schedule: 'Setiap hari (pagi/sore)',
    includes: [
      'Visit 5+ hidden gems',
      'Fotografer profesional',
      'Editing & digital photos',
      'Drone photography',
      'Snacks & refreshments',
      'Private transportation',
      'Tips fotografi'
    ],
    icon: '📸',
    bestFor: 'Semua tingkatan'
  },
  {
    id: 7,
    name: 'Cycling Tour - Peaceful Villages',
    description: 'Bersepeda santai melalui desa-desa tradisional Yogyakarta yang damai',
    duration: '3 Jam',
    price: 250000,
    schedule: 'Setiap hari (pagi)',
    includes: [
      'Sepeda berkualitas',
      'Guide berpengalaman',
      'Helmet & safety gear',
      'Rute santai (15km)',
      'Visit desa tradisional',
      'Makan siang di rumah lokal',
      'Botol air mineral'
    ],
    icon: '🚴',
    bestFor: 'Pasien mobile & ringan'
  },
  {
    id: 8,
    name: 'Meditation & Mindfulness Retreat',
    description: 'Selesaikan perjalanan medis Anda dengan meditasi dan mindfulness di lokasi spiritual',
    duration: '2 Jam',
    price: 350000,
    schedule: 'Setiap hari (pagi/malam)',
    includes: [
      'Guided meditation',
      'Yoga session ringan',
      'Breathing exercise',
      'Tea ceremony',
      'Spiritual guidance',
      'Ambient music',
      'Certificate'
    ],
    icon: '🧘‍♂️',
    bestFor: 'Mental healing'
  }
]

export const ToursPage = () => {
  const [selectedDuration, setSelectedDuration] = useState<string>('All')

  const durations = ['All', '1-2 Jam', '2-3 Jam', '1 Hari']
  
  const filteredTours = selectedDuration === 'All' ? tourPackages : tourPackages.filter(tour => {
    if (selectedDuration === '1-2 Jam') return tour.duration === '2 Jam' || tour.duration === '2.5 Jam'
    if (selectedDuration === '2-3 Jam') return tour.duration === '3 Jam' || tour.duration === '3.5 Jam'
    if (selectedDuration === '1 Hari') return tour.duration === '1 Hari' || tour.duration === '4 Jam'
    return true
  })

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">✈️ Paket Wisata & Liburan</h1>
          <p className="text-xl text-orange-100">
            Nikmati pengalaman wisata tak terlupakan setelah perawatan medis - relaksasi dan petualangan menanti
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-orange-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-600 mb-4">Filter berdasarkan durasi:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {durations.map(duration => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedDuration === duration
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-50'
                }`}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Pilihan Paket Wisata</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded shadow-lg hover:shadow-xl transition overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl">{tour.icon}</div>
                    <div className="bg-orange-700 px-3 py-1 rounded text-xs font-bold">
                      {tour.bestFor}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
                  <p className="text-orange-100 text-sm mb-3">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold">Rp {tour.price.toLocaleString('id-ID')}</div>
                      <div className="text-orange-100 text-sm">⏱️ {tour.duration}</div>
                    </div>
                    <div className="text-sm text-orange-100">📅 {tour.schedule}</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <div className="font-semibold text-sm mb-3">✨ Paket Termasuk:</div>
                    <ul className="space-y-2">
                      {tour.includes.map((inc, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-orange-500 font-bold">✓</span>
                          <span className="text-gray-700">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition">
                    Pesan Wisata
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Mengapa Pilih Paket Wisata Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="font-bold mb-2">Desain untuk Recovery</h3>
              <p className="text-gray-600 text-sm">Semua aktivitas dirancang untuk mendukung proses pemulihan Anda</p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="font-bold mb-2">Guide Berpengalaman</h3>
              <p className="text-gray-600 text-sm">Guide profesional yang memahami kebutuhan wisatawan medis</p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="font-bold mb-2">Kenangan Indah</h3>
              <p className="text-gray-600 text-sm">Ciptakan kenangan indah dari perjalanan medis Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended */}
      <section className="bg-orange-50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">💡 Tips Pilihan Paket</h2>
          <div className="bg-white p-6 rounded shadow-lg max-w-2xl mx-auto">
            <p className="text-gray-700">
              <strong>Untuk pemulihan optimal:</strong> Mulai dengan aktivitas ringan seperti Meditation Retreat atau Cooking Class pada hari pertama. 
              Lanjutkan dengan aktivitas lebih aktif seperti Cycling Tour atau Photography Tour setelah 3-5 hari recovery. 
              Heritage Tour disarankan untuk wisatawan yang sudah sepenuhnya recover.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
