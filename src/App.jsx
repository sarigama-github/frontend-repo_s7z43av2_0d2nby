import { useEffect, useMemo, useState } from 'react'
import { useNavigate, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import ResponsiveLayout from './components/Layout'
import { SectionTitle, PostCard, OrganizationCard, CourseCard, EventCard, JobCard } from './components/Sections'

function GardenPage() {
  const sample = Array.from({length: 6}).map((_, i) => ({
    title: `Growing your skills ${i+1}`,
    description: 'A practical guide to cultivate your learning routine with tangible outcomes.',
    image_url: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop',
    org_name: 'Green Labs'
  }))
  return (
    <div className="space-y-6">
      <SectionTitle title="Garden" action={<div className="flex gap-2"><button className="btn-radius px-4 py-2 hover:bg-white/5">All</button><button className="btn-radius px-4 py-2 brand-gradient text-white">Subscribed</button></div>} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sample.map((p, idx) => (<PostCard key={idx} post={p} />))}
      </div>
    </div>
  )
}

function ExplorePage() {
  const sample = Array.from({length: 6}).map((_, i) => ({
    name: `Org ${i+1}`,
    description: 'Sharing knowledge across technology, design and business.',
    subscribers: 120 + i*3,
    category: 'Technology'
  }))
  return (
    <div className="space-y-6">
      <SectionTitle title="Explore Organizations" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sample.map((o, idx) => (<OrganizationCard key={idx} org={o} />))}
      </div>
    </div>
  )
}

function LearnPage() {
  const courses = Array.from({length: 6}).map((_, i) => ({
    title: `Course ${i+1}`,
    description: 'Hands-on modules to accelerate your growth.',
    difficulty: ['beginner','intermediate','advanced'][i%3],
    duration_hours: 6 + i,
    price: i % 2 === 0 ? 0 : 49
  }))
  return (
    <div className="space-y-6">
      <SectionTitle title="Courses" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, idx) => (<CourseCard key={idx} course={c} />))}
      </div>
    </div>
  )
}

function CareerPage() {
  const jobs = Array.from({length: 6}).map((_, i) => ({
    title: `Role ${i+1}`,
    description: 'Help build the next generation of learning tools.',
    organization: 'Green Labs',
    location: 'Remote',
    type: ['full-time','part-time','internship','freelance'][i%4]
  }))
  return (
    <div className="space-y-6">
      <SectionTitle title="Career" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((j, idx) => (<JobCard key={idx} job={j} />))}
      </div>
    </div>
  )
}

function CommunityPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Community" />
      <div className="bg-secondary card-radius p-6">
        <p>Organization-specific chat channels and direct messages will appear here.</p>
      </div>
    </div>
  )
}

function AppShell() {
  const navigate = useNavigate()
  const location = useLocation()
  const activeKey = useMemo(() => {
    if (location.pathname.startsWith('/app/garden')) return 'garden'
    if (location.pathname.startsWith('/app/explore')) return 'explore'
    if (location.pathname.startsWith('/app/learn')) return 'learn'
    if (location.pathname.startsWith('/app/career')) return 'career'
    if (location.pathname.startsWith('/app/community')) return 'community'
    return 'garden'
  }, [location.pathname])

  return (
    <ResponsiveLayout activeKey={activeKey} onNavigate={navigate}>
      <Routes>
        <Route path="garden" element={<GardenPage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="learn/*" element={<LearnPage />} />
        <Route path="career" element={<CareerPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="*" element={<Navigate to="garden" replace />} />
      </Routes>
    </ResponsiveLayout>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app/garden" replace />} />
      <Route path="/app/*" element={<AppShell />} />
    </Routes>
  )
}
