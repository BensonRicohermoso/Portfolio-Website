import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, FileText, X, Send } from 'lucide-react'
import Threads from './Threads'

function CVModal({ onClose }) {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('CV Request')
    const body = encodeURIComponent(`From: ${email}\n\n${message}`)
    window.location.href = `mailto:bensonricohermoso@gmail.com?subject=${subject}&body=${body}`
    onClose()
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-md bg-[#111111] border border-[#222222] rounded-2xl p-6 shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        <h2 className="text-white font-semibold text-lg mb-1">Request CV</h2>
        <p className="text-neutral-500 text-sm mb-6">Fill in your details and I'll send my CV to your email.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-neutral-400 mb-1 block">Your Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
          <div>
            <label className="text-xs text-neutral-400 mb-1 block">Message <span className="text-neutral-600">(optional)</span></label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Hi Benson, I'd like to request your CV..."
              rows={3}
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-black text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
          >
            <Send size={14} />
            Send Request
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-start justify-center px-6 pt-36 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Threads amplitude={1} distance={0} enableMouseInteraction />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-16 pt-8 pb-24">

        {/* Left Div — Text */}
        <motion.div
          className="flex-1 text-center md:text-left self-start pt-4"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-neutral-500 font-medium mb-3 tracking-widest uppercase text-xs">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            Benson Ricohermoso
          </h1>
          <p className="text-lg text-neutral-400 mb-8 font-light">
            Software Engineer & AI Specialist
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-200 text-black text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              <Mail size={15} />
              Email Me Now
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30 hover:border-white/60 transition-colors duration-200"
            >
              <FileText size={15} />
              Request CV
            </button>
          </div>
        </motion.div>

        {/* Right Div — Photo */}
        <motion.div
          className="flex-shrink-0 self-start -mt-4"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-56 h-96 md:w-80 md:h-[28rem] rounded-2xl border-4 border-white glow-border overflow-hidden">
            <img src="/src/images/picture.jpg" alt="Benson Ricohermoso" className="w-full h-full object-cover" />
          </div>
        </motion.div>

      </div>

      {/* CV Request Modal */}
      <AnimatePresence>
        {showModal && <CVModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>

    </section>
  )
}
