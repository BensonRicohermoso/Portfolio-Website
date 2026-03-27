import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react'

const stats = [
  { value: '10+', label: 'Projects' },
  { value: '15+', label: 'Tech Stacks' },
  { value: '100%', label: 'Satisfaction' },
]

const contactInfo = [
  { icon: <Mail size={16} />, label: 'Email', value: 'bensonricohermoso@gmail.com' },
  { icon: <Phone size={16} />, label: 'Phone', value: '+63 XXX XXX XXXX' },
  { icon: <MapPin size={16} />, label: 'Location', value: 'Philippines' },
]

const socials = [
  { icon: <Linkedin size={15} />, label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile' },
  { icon: <Github size={15} />, label: 'GitHub', href: 'https://github.com/your-username' },
]

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    const subject = encodeURIComponent(form.subject || 'Message from Portfolio')
    window.location.href = `mailto:bensonricohermoso@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <footer id="contact" className="pt-20 pb-32 px-6 border-t border-[#222222] mb-0">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Connect With Me</h2>
          <div className="w-16 h-1 bg-white rounded" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left Column */}
          <div className="flex flex-col gap-6">

            {/* Contact Info Card */}
            <motion.div
              className="bg-[#111111] border border-[#222222] rounded-2xl p-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-white font-semibold mb-5">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-neutral-500 text-xs">{item.label}</p>
                      <p className="text-neutral-200 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="flex gap-3 mt-6">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 text-white text-xs font-medium px-4 py-2 transition-all duration-200"
                    style={{ borderRadius: '50px' }}
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
            {/* Stats Card */}
            <motion.div
              className="bg-[#111111] border border-[#222222] rounded-2xl p-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="grid grid-cols-3 divide-x divide-[#222222]">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center px-4 first:pl-0 last:pr-0">
                    <p className="text-white font-bold text-2xl">{stat.value}</p>
                    <p className="text-neutral-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column — Contact Form */}
          <motion.div
            className="bg-[#111111] border border-[#222222] rounded-2xl p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-full">

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-neutral-500 mb-1 block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Benson"
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-neutral-500 mb-1 block">Your Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs text-neutral-500 mb-1 block">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  placeholder="Project Inquiry"
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex-1">
                <label className="text-xs text-neutral-500 mb-1 block">Message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Hi Benson, I'd like to discuss..."
                  rows={6}
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-black text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-200"
              >
                <Send size={15} />
                Send Message
              </button>

            </form>
          </motion.div>

        </div>


      </div>
    </footer>
  )
}
