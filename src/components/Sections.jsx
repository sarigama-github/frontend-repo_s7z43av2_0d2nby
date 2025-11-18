import { useMemo } from 'react'
import { Sprout, Bookmark, Calendar, Users2, Wallet, Star, MapPin, Building2 } from 'lucide-react'

export function SectionTitle({ title, action }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3>{title}</h3>
      {action}
    </div>
  )
}

export function Card({ children }) {
  return <div className="bg-secondary card-radius p-6">{children}</div>
}

export function PostCard({ post }) {
  return (
    <div className="bg-secondary card-radius overflow-hidden">
      <div className="aspect-video bg-black/20" style={{backgroundImage: `url(${post.image_url || ''})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
      <div className="p-6 space-y-2">
        <h4 className="text-white">{post.title}</h4>
        <p>{post.description}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-2xl brand-gradient" />
            <small className="text-secondary">{post.org_name || 'Organization'}</small>
          </div>
          <button className="btn-radius px-3 py-2 hover:bg-white/5">
            <Bookmark size={16} className="text-secondary" />
          </button>
        </div>
      </div>
    </div>
  )
}

export function OrganizationCard({ org }) {
  return (
    <div className="bg-secondary card-radius p-6 space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl brand-gradient" />
        <div>
          <h4 className="text-white">{org.name}</h4>
          <small className="text-secondary flex items-center gap-1"><Building2 size={14} /> {org.category || 'Category'}</small>
        </div>
      </div>
      <p>{org.description}</p>
      <div className="flex items-center justify-between">
        <small className="text-secondary">{org.subscribers || 0} subscribers</small>
        <button className="btn-radius px-4 py-2 brand-gradient text-white">Subscribe</button>
      </div>
    </div>
  )
}

export function CourseCard({ course }) {
  return (
    <div className="bg-secondary card-radius p-6">
      <div className="aspect-video bg-black/20 mb-4" style={{backgroundImage: `url(${course.thumbnail_url || ''})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
      <h4 className="text-white">{course.title}</h4>
      <p className="mt-1">{course.description}</p>
      <div className="flex items-center justify-between mt-3">
        <small className="text-secondary">{course.difficulty || 'beginner'} • {course.duration_hours || 0}h</small>
        <button className="btn-radius px-4 py-2 brand-gradient text-white">{course.price ? `$${course.price}` : 'Enroll'}</button>
      </div>
    </div>
  )
}

export function EventCard({ event }) {
  return (
    <div className="bg-secondary card-radius p-6 space-y-2">
      <div className="aspect-video bg-black/20 mb-2" style={{backgroundImage: `url(${event.image_url || ''})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
      <h4 className="text-white">{event.title}</h4>
      <small className="text-secondary flex items-center gap-1"><Calendar size={14} /> {event.date || 'TBD'}</small>
      <small className="text-secondary flex items-center gap-1"><MapPin size={14} /> {event.location || (event.online ? 'Online' : 'TBA')}</small>
      <div className="flex items-center justify-between mt-2">
        <small className="text-secondary">{event.attendees || 0} attending</small>
        <button className="btn-radius px-4 py-2 brand-gradient text-white">{event.price ? `$${event.price}` : 'Register'}</button>
      </div>
    </div>
  )
}

export function JobCard({ job }) {
  return (
    <div className="bg-secondary card-radius p-6 space-y-2">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl brand-gradient" />
        <div>
          <h4 className="text-white">{job.title}</h4>
          <small className="text-secondary">{job.organization || 'Organization'} • {job.location || job.remote || 'Remote'}</small>
        </div>
      </div>
      <p>{job.description}</p>
      <div className="flex items-center justify-between">
        <small className="text-secondary">{job.type || 'full-time'}</small>
        <div className="flex gap-2">
          <button className="btn-radius px-4 py-2 hover:bg-white/5 text-secondary">Save</button>
          <button className="btn-radius px-4 py-2 brand-gradient text-white">Apply</button>
        </div>
      </div>
    </div>
  )
}
