import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const titles = ['Frontend Developer', 'React Enthusiast', 'MERN Learner']

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [display, setDisplay] = useState('')

  useEffect(() => {
    let i = 0
    let timer = setInterval(() => {
      setDisplay(titles[idx].slice(0, i++))
      if (i > titles[idx].length) {
        clearInterval(timer)
        setTimeout(() => {
          setIdx((idx + 1) % titles.length)
          setDisplay('')
        }, 1200)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [idx])

  return (
    <section className="section">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Hi, I'm <span className="text-sky-400">Himanshu Singh</span>
          </h1>
          <p className="mt-2 text-lg text-slate-300">
            <span className="text-white">{display}</span><span className="animate-pulse">|</span>
          </p>
          <p className="mt-5 text-slate-300 leading-relaxed">
            I craft elegant, accessible and high-performance web interfaces. Currently strengthening my MERN skills to build robust end‑to‑end products.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 transition shadow-glow">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-xl glass">Contact</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl glass p-8 shadow-glow bg-grid bg-[length:var(--tw-bg-size-grid)]"
        >
          <div className="aspect-[4/3] rounded-2xl glass grid place-items-center">
            <div className="text-center">
              <p className="text-sm text-slate-300">Portfolio Snapshot</p>
              <p className="text-xl font-semibold mt-2">Clean • Modern • Fast</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
