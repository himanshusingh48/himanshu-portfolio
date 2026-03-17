import React from 'react'
import { motion } from 'framer-motion'
import { Hammer, Github, Briefcase, ExternalLink } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8">Projects</motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl glass p-6 shadow-glow">
          <div className="flex items-center gap-3">
            <Briefcase />
            <h3 className="text-lg font-semibold">Recruitment Portal</h3>
          </div>
          <p className="mt-3 text-slate-300 text-sm leading-relaxed">
            A comprehensive full-stack recruitment platform featuring job listings, applicant tracking, interview scheduling, and secure role-based JWT authentication.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-sky-300">
            <span className="px-2 py-1 bg-sky-500/10 rounded-md border border-sky-500/20">React</span>
            <span className="px-2 py-1 bg-sky-500/10 rounded-md border border-sky-500/20">Node.js</span>
            <span className="px-2 py-1 bg-sky-500/10 rounded-md border border-sky-500/20">Express</span>
            <span className="px-2 py-1 bg-sky-500/10 rounded-md border border-sky-500/20">MongoDB</span>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="https://recruitment-portal-nwkx9n8tz-himanshu-singhs-projects-d52f2459.vercel.app/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors">
              <ExternalLink size={16} /> Live Demo
            </a>
            <a href="https://github.com/himanshusingh48/recruitment-portal" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
              <Github size={16} /> Code
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
