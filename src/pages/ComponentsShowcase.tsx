import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button, Input, Select, Card, CardHeader, CardTitle, CardContent, Badge } from '@/components/ui'
import { FiArrowRight, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

export function ComponentsShowcase() {
  const [email, setEmail] = useState('')
  const [selectedSize, setSelectedSize] = useState('medium')

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            🎨 UI Components Showcase
          </h1>
          <p className="text-xl text-gray-600">Professional JavaScript UI/UX Library Demo</p>
        </motion.div>

        {/* Components Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Buttons Section */}
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>🔘</span> Buttons
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 font-semibold">Default Buttons</p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="default">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-600 font-semibold">Sizes</p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra Large</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-600 font-semibold">Special Variants</p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="gradient">Gradient Button</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Link Button</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Badges Section */}
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>🏷️</span> Badges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 font-semibold">Status Badges</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="default">Default</Badge>
                      <Badge variant="success">Success</Badge>
                      <Badge variant="warning">Warning</Badge>
                      <Badge variant="info">Info</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 font-semibold">Other Variants</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Example Use Cases</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Badge variant="success">✓</Badge>
                      <span>Appointment Confirmed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">!</Badge>
                      <span>Pending Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="info">ℹ</Badge>
                      <span>Demo Mode</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Input Fields Section */}
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>📝</span> Input Fields
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Text Input</label>
                  <Input placeholder="Enter your name..." />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Input</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Password Input</label>
                  <Input type="password" placeholder="••••••••" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Number Input</label>
                  <Input type="number" placeholder="0" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Disabled Input</label>
                  <Input disabled placeholder="This is disabled..." />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Select Fields Section */}
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>📋</span> Select Fields
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Hospital Type</label>
                  <Select>
                    <option>Pilih tipe rumah sakit...</option>
                    <option>Rumah Sakit Umum</option>
                    <option>Rumah Sakit Spesialis</option>
                    <option>Klinik</option>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Room Size</label>
                  <Select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                    <option value="small">Small Room</option>
                    <option value="medium">Medium Room</option>
                    <option value="large">Large Room</option>
                    <option value="suite">Suite</option>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Duration</label>
                  <Select disabled>
                    <option>Select duration...</option>
                  </Select>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">Selected Size: <strong>{selectedSize}</strong></p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cards Section */}
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>📇</span> Card Component
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">This is a Card component with multiple parts:</p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Hospital Card Example</h4>
                  <p className="text-sm text-blue-800">
                    Lorem Ipsum Hospital menyediakan layanan kesehatan terpadu dengan dokter spesialis berpengalaman.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700">Features:</p>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>✓ Header & Footer support</li>
                    <li>✓ Smooth shadow transitions</li>
                    <li>✓ Hover effects</li>
                    <li>✓ Responsive design</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Animations Section */}
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>✨</span> Animations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 mb-4">Powered by Framer Motion</p>

                <div className="space-y-3">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-blue-100 text-blue-800 p-3 rounded-lg text-center font-semibold"
                  >
                    Floating Animation
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 rounded-lg font-semibold"
                  >
                    Hover & Tap me!
                  </motion.button>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-green-100 text-green-800 p-3 rounded-lg text-center"
                  >
                    Scroll Animation ↓
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Summary Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardHeader>
              <CardTitle className="text-2xl">✅ Professional UI/UX Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex gap-3">
                  <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Framer Motion</h4>
                    <p className="text-sm text-gray-600">Smooth animations & transitions</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">React Icons</h4>
                    <p className="text-sm text-gray-600">4000+ professional icons</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Radix UI</h4>
                    <p className="text-sm text-gray-600">Accessible components</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row gap-3 items-center justify-between">
                <p className="text-gray-700 font-medium">Ready to see it in action?</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
                >
                  View Full Platform <FiArrowRight />
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
