import { useEffect, useState } from 'react'
import { Sprout, Compass, BookOpen, Briefcase, MessageCircle, Settings, Search, Bell } from 'lucide-react'

const navItems = [
  { key: 'garden', label: 'Garden', icon: Sprout, route: '/app/garden' },
  { key: 'explore', label: 'Explore', icon: Compass, route: '/app/explore' },
  { key: 'learn', label: 'Learn', icon: BookOpen, route: '/app/learn' },
  { key: 'career', label: 'Career', icon: Briefcase, route: '/app/career' },
  { key: 'community', label: 'Community', icon: MessageCircle, route: '/app/community' },
]

function Header() {
  return (
    <div className="px-4 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 card-radius brand-gradient flex items-center justify-center">
          <Sprout className="text-white" size={20} />
        </div>
        <h3>Dgardn</h3>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 bg-secondary input-radius px-4 py-2">
          <Search size={18} className="text-tertiary" />
          <input placeholder="Search" className="bg-transparent outline-none text-secondary" />
        </div>
        <button className="w-10 h-10 card-radius bg-secondary flex items-center justify-center">
          <Bell size={18} className="text-secondary" />
        </button>
      </div>
    </div>
  )
}

export function MobileApp({ children, activeKey, onNavigate }) {
  return (
    <div className="min-h-screen bg-primary pb-24">
      <Header />
      <div className="px-4">{children}</div>

      <nav className="fixed bottom-0 left-0 right-0 h-[72px] bg-secondary/80 backdrop-blur border-t border-white/5">
        <div className="grid grid-cols-5 h-full">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = activeKey === item.key
            return (
              <button
                key={item.key}
                onClick={() => onNavigate(item.route)}
                className={`mx-2 my-3 card-radius flex items-center justify-center gap-2 ${active ? 'brand-gradient' : 'bg-secondary hover:bg-white/5'}`}
              >
                <Icon size={20} className={active ? 'text-white' : 'text-secondary'} />
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export function WebApp({ children, activeKey, onNavigate }) {
  return (
    <div className="min-h-screen bg-primary flex">
      <aside className="hidden md:flex w-[260px] flex-col gap-3 px-3 py-6 bg-secondary">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 card-radius brand-gradient flex items-center justify-center">
            <Sprout className="text-white" size={20} />
          </div>
          <h3>Dgardn</h3>
        </div>
        <div className="mt-6 flex-1 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = activeKey === item.key
            return (
              <button
                key={item.key}
                onClick={() => onNavigate(item.route)}
                className={`w-full flex items-center gap-3 px-3 py-3 card-radius text-left ${active ? 'brand-gradient' : 'hover:bg-white/5'}`}
              >
                <Icon size={18} className="text-white" />
                <span className="text-white">{item.label}</span>
              </button>
            )
          })}
        </div>
        <div className="mt-auto">
          <button className="w-full px-3 py-3 card-radius hover:bg-white/5 flex items-center gap-3">
            <Settings size={18} className="text-secondary" />
            <span className="text-secondary">Settings</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 flex justify-center">
        <div className="w-full max-w-4xl">
          <Header />
          <div className="px-4 pb-24">{children}</div>
        </div>
      </main>
    </div>
  )
}

export default function ResponsiveLayout({ children, activeKey, onNavigate }) {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : true)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  if (isMobile) {
    return <MobileApp activeKey={activeKey} onNavigate={onNavigate}>{children}</MobileApp>
  }
  return <WebApp activeKey={activeKey} onNavigate={onNavigate}>{children}</WebApp>
}
