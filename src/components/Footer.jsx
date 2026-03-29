import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Send, CheckCircle2, Loader2, ArrowUp } from 'lucide-react'

const stats = [
  { value: '10+', label: 'Projects' },
  { value: '15+', label: 'Tech Stacks' },
  { value: '100%', label: 'Satisfaction' },
]

const contactInfo = [
  { icon: <Mail size={16} />, label: 'Email', value: 'bensonricohermoso@gmail.com' },
  { icon: <Phone size={16} />, label: 'Phone', value: '+63969 079 6200' },
  { icon: <MapPin size={16} />, label: 'Location', value: 'Philippines' },
]

const socials = [
  { icon: <Linkedin size={15} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/benson-ricohermoso-0ab240302/' },
  { icon: <Github size={15} />, label: 'GitHub', href: 'https://github.com/BensonRicohermoso' },
]


export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Show back to top button on mobile when contact section is in view
  useEffect(() => {
    const handleScroll = () => {
      const contact = document.getElementById('contact')
      if (!contact) return
      const rect = contact.getBoundingClientRect()
      // Show if top of contact is in viewport and screen is mobile
      if (window.innerWidth < 640 && rect.top < window.innerHeight && rect.bottom > 0) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch("https://formspree.io/f/xgopoqyo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
        // Reset to idle after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error("Form error:", error)
      setStatus('error')
    }
  }

  return (
    <>
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
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-full transition-all duration-200 
                    ${status === 'success' ? 'bg-green-500 text-white' : 'bg-white hover:bg-neutral-200 text-black'} 
                    ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle2 size={15} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-xs text-center mt-2">Something went wrong. Please try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </footer>
      {/* Back to Top Button for mobile */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50 sm:hidden bg-white text-black font-semibold px-3 py-1.5 rounded-full shadow-lg border border-neutral-200 hover:bg-neutral-200 transition-all duration-200 opacity-80 hover:opacity-100 text-xs flex items-center gap-1"
          style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.18)' }}
        >
          <ArrowUp size={14} className="inline-block" />
          Back to Top
        </button>
      )}
    </>
  )
}