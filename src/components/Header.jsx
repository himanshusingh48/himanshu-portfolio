import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const sections = nav.map(n => document.getElementById(n.id))
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    )
    sections.forEach(s => s && obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold tracking-tight">
            <span className="text-sky-400">Himanshu</span> Singh
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm transition ${active===item.id ? 'text-white' : 'text-slate-300 hover:text-white'}`}
              >
                {item.label}
              </a>
            ))}
            <span className="ml-4 text-xs rounded-full border border-white/10 px-3 py-1 text-slate-200">
              Frontend Developer
            </span>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2">
            {nav.map(item => (
              <a key={item.id} href={`#${item.id}`} className="block text-slate-200" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
