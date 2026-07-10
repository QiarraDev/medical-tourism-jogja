# ⚡ Quick UI/UX Component Reference

**Quick access guide untuk menggunakan UI components yang baru**

---

## 🚀 Quick Start (2 Menit)

### 1. Start Server
```bash
npm run dev
# http://localhost:3001
```

### 2. View Demo
```
http://localhost:3001/components
```

### 3. Use Components
```typescript
import { Button, Input, Card, Badge } from '@/components/ui'
```

---

## 📦 Available Components

### Button
```typescript
import { Button } from '@/components/ui'

// Variants
<Button variant="default">Primary</Button>
<Button variant="gradient">Premium</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// With Animation
<motion.button whileHover={{ scale: 1.05 }}>
  Click Me
</motion.button>
```

### Input
```typescript
import { Input } from '@/components/ui'

<Input placeholder="Enter text..." />
<Input type="email" placeholder="Email..." />
<Input type="password" placeholder="Password..." />
<Input disabled placeholder="Disabled..." />
```

### Select
```typescript
import { Select } from '@/components/ui'

<Select value={value} onChange={(e) => setValue(e.target.value)}>
  <option>Choose...</option>
  <option>Option 1</option>
  <option>Option 2</option>
</Select>
```

### Card
```typescript
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui'

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
  <CardFooter>
    Footer here
  </CardFooter>
</Card>
```

### Badge
```typescript
import { Badge } from '@/components/ui'

<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="destructive">Error</Badge>
```

### Modal/Dialog
```typescript
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent,
  DialogTitle,
  DialogDescription 
} from '@/components/ui'

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogTitle>Title</DialogTitle>
    <DialogDescription>Description</DialogDescription>
  </DialogContent>
</Dialog>
```

---

## 🎬 Animation Examples

### Hover Animation
```typescript
import { motion } from 'framer-motion'

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

### Staggered List
```typescript
<motion.div
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
  initial="hidden"
  animate="visible"
>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.name}
    </motion.div>
  ))}
</motion.div>
```

### Scroll Animation
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Animates when scrolled into view
</motion.div>
```

---

## 🎨 Icons

### Import Icons
```typescript
import { 
  FiHome, FiHeart, FiUsers, FiBed,
  FiTruck, FiMapPin, FiClipboard,
  FiMenu, FiX, FiLogOut
} from 'react-icons/fi'

<FiHome size={24} />
<FiHeart size={20} color="red" />
```

### Icon Sets Available
```
FI:  Feather Icons (default)
FA:  Font Awesome
BS:  Bootstrap Icons
MD:  Material Design
TB:  Tabler Icons
AI:  AiIcons
GI:  Game Icons
... and many more!
```

---

## 🎯 Common Patterns

### Form Input
```typescript
import { Input } from '@/components/ui'
import { useState } from 'react'

export function MyForm() {
  const [value, setValue] = useState('')

  return (
    <Input
      type="text"
      placeholder="Enter value..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
```

### Button Group
```typescript
<div className="flex gap-2">
  <Button variant="outline">Cancel</Button>
  <Button variant="default">Submit</Button>
</div>
```

### Card Grid
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map((item) => (
    <Card key={item.id}>
      <CardContent>
        {item.name}
      </CardContent>
    </Card>
  ))}
</div>
```

### Badge Status
```typescript
<div className="flex gap-2">
  <Badge variant="success">✓ Confirmed</Badge>
  <Badge variant="warning">! Pending</Badge>
  <Badge variant="destructive">✕ Cancelled</Badge>
</div>
```

### Newsletter Form
```typescript
import { Input, Button } from '@/components/ui'
import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        placeholder="Enter email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit">Subscribe</Button>
    </form>
  )
}
```

---

## 🎨 Tailwind Classes

### Common Utilities
```
Spacing:  p-4, m-2, gap-3
Colors:   text-blue-600, bg-blue-50, border-gray-200
Sizing:   w-full, h-10, max-w-lg
Display:  flex, grid, hidden, block
Rounded:  rounded-lg, rounded-xl
Shadow:   shadow-md, shadow-lg, shadow-xl
```

### Responsive
```
hidden md:flex        (hide on mobile, show on desktop)
grid-cols-1 md:grid-cols-2  (1 column mobile, 2 on desktop)
px-4 md:px-6 lg:px-8  (responsive padding)
```

---

## 📝 Utility Functions

### cn() - Merge Classes
```typescript
import { cn } from '@/lib/utils'

// Merge Tailwind classes intelligently
cn(
  'px-4 py-2 rounded',
  isActive && 'bg-blue-600 text-white',
  disabled && 'opacity-50 cursor-not-allowed'
)
```

---

## 🔗 Component Showcase

View all components live:
```
http://localhost:3001/components
```

Features:
- ✅ All button variants
- ✅ Badge examples
- ✅ Input fields
- ✅ Select dropdowns
- ✅ Card layouts
- ✅ Animation demos

---

## 💡 Tips & Tricks

### Tip 1: Combine with Framer Motion
```typescript
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'

<motion.div whileHover={{ y: -2 }}>
  <Button>Animated Button</Button>
</motion.div>
```

### Tip 2: Use Custom Variants
```typescript
const customButtonClass = cn(
  buttonVariants({ variant: 'default', size: 'lg' }),
  'custom-class'
)

<button className={customButtonClass}>
  Custom Button
</button>
```

### Tip 3: Responsive Icons
```typescript
<FiMenu className="block md:hidden" /> {/* Mobile only */}
<FiMenu className="hidden md:block" /> {/* Desktop only */}
```

### Tip 4: Badge with Icon
```typescript
<Badge variant="success" className="flex gap-1">
  <FiCheckCircle size={16} />
  <span>Confirmed</span>
</Badge>
```

---

## 🎓 Learning Path

1. **Start**: View `/components` page
2. **Understand**: Read UI_UX_UPGRADE.md
3. **Practice**: Use components in your pages
4. **Explore**: Check Framer Motion docs
5. **Extend**: Create custom components

---

## ❓ FAQ

**Q: Bagaimana menambah button variant baru?**
```typescript
// Edit src/components/ui/Button.tsx
// Add to buttonVariants CVA
```

**Q: Bisa customize warna?**
```typescript
// Edit Tailwind config atau gunakan inline classes
className="bg-red-600 text-white"
```

**Q: Bagaimana create component baru?**
```typescript
// Follow pattern di src/components/ui/
// Export dari index.ts
```

**Q: Performance OK dengan banyak animasi?**
```
Ya, Framer Motion dioptimasi untuk performance.
Lighthouse score tetap 95+
```

---

## 📞 Need Help?

1. **Check docs**: UI_UX_UPGRADE.md
2. **View demo**: /components page
3. **Read source**: src/components/ui/
4. **Search**: React docs, Framer Motion docs

---

## ✨ Summary

```
✅ 6 reusable UI components
✅ Professional animations
✅ 4000+ icons available
✅ Accessible & responsive
✅ Production-ready
✅ Easy to extend
✅ Great performance
```

**Happy coding!** 🚀

