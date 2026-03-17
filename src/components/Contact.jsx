import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, error: null, success: false })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, error: null, success: false })

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ loading: false, error: null, success: true })
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000)
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      setStatus({ loading: false, error: error.message, success: false })
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8">Contact</motion.h2>
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass p-8 rounded-2xl relative">
            <h3 className="text-2xl font-semibold mb-6 text-sky-400">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {status.error && (
                <div className="p-3 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg">
                  {status.error}
                </div>
              )}
              {status.success && (
                <div className="p-3 text-sm text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-500/50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {status.loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid sm:grid-cols-2 gap-6 content-start"
        >
          <a target="_blank" rel="noreferrer"
            href="mailto:himansh8619@gmail.com"
            className="rounded-2xl glass p-6 flex flex-col items-center text-center hover:shadow-glow transition hover:-translate-y-1">
            <p className="text-sm text-slate-400">Email</p>
            <p className="mt-2 font-medium text-white">himansh8619@gmail.com</p>
          </a>
          <a target="_blank" rel="noreferrer"
            href="https://www.linkedin.com/in/himanshu-singh48/"
            className="rounded-2xl glass p-6 flex flex-col items-center text-center hover:shadow-glow transition hover:-translate-y-1">
            <p className="text-sm text-slate-400">LinkedIn</p>
            <p className="mt-2 text-sm font-medium text-white break-all">/in/himanshu-singh48/</p>
          </a>
          <a target="_blank" rel="noreferrer"
            href="tel:+918619084706"
            className="rounded-2xl glass p-6 flex flex-col items-center text-center hover:shadow-glow transition hover:-translate-y-1">
            <p className="text-sm text-slate-400">Contact Number</p>
            <p className="mt-2 font-medium text-white">+91 8619084706</p>
          </a>
          <a target="_blank" rel="noreferrer"
            href="https://github.com/himanshusingh48/"
            className="rounded-2xl glass p-6 flex flex-col items-center text-center hover:shadow-glow transition hover:-translate-y-1">
            <p className="text-sm text-slate-400">GitHub</p>
            <p className="mt-2 text-sm font-medium text-white break-all">github.com/himanshusingh48</p>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
