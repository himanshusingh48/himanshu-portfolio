import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10">
      <div className="container py-6 text-sm text-slate-400">
        <span>{new Date().getFullYear()}</span> Himanshu Singh. Built with React & Tailwind.
      </div>
    </footer>
  )
}
