import React from 'react'
import { motion } from 'framer-motion'
import { Hammer, Github } from 'lucide-react'

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
            <Hammer />
            <h3 className="text-lg font-semibold">Currently working</h3>
          </div>
          <p className="mt-3 text-slate-300">
            I'm actively building new projects. This section will be updated with live demos and GitHub links.
          </p>
          <a href="https://github.com/123Himansh/" target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 mt-4 text-sky-400 hover:underline">
            <Github size={18} /> View GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
