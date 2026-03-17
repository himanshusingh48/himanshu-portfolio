import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "1. Programming Languages",
    skills: ["JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "2. Frameworks / Libraries",
    skills: ["React.js", "Node.js"]
  },
  {
    title: "3. Database",
    skills: ["MongoDB"]
  },
  {
    title: "4. Tools",
    skills: ["Git", "GitHub", "VS Code"]
  },
  {
    title: "5. Cloud / Platforms",
    skills: ["AWS (Basics)", "Vercel", "Render"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8">Skills</motion.h2>
      <div className="flex flex-col gap-6">
        {skillCategories.map((category, idx) => (
          <div key={category.title}>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-xl font-semibold mb-4 text-sky-400"
            >
              {category.title}
            </motion.h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((s, i) => (
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
          </div>
        ))}
      </div>
    </section>
  )
}
