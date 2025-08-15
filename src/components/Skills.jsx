import React from 'react'
import { motion } from 'framer-motion'

const skills = ["HTML5", "CSS", "JavaScript", "React", "MERN", "Bootstrap"]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8">Skills</motion.h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="px-4 py-2 rounded-full glass text-slate-200 text-sm shadow-glow">
            {s}
          </motion.span>
        ))}
      </div>
    </section>
  )
}
