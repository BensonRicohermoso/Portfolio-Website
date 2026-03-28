import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, FileText, X, Send, ChevronLeft, ChevronRight, Loader2, Eye } from 'lucide-react'
import Threads from './Threads'
import HeroProfileAndPreview from './HeroProfileAndPreview'

const categories = [
  {
    label: 'Website',
    image: '/images/hero-cards/web-preview.png',
  },
  {
    label: 'Software',
    image: '/images/hero-cards/software-preview.png',
  },
  {
    label: 'Webapp',
    image: '/images/hero-cards/webapp-preview.png',
  },
]

function CVModal({ onClose }) {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch("https://formspree.io/f/xgopoqyo", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json" 
        },
        body: JSON.stringify({
          email: email,
          message: message || "I'd like to request your CV.",
          _subject: "📄 New CV Request from Portfolio"
        }),
      });

      if (response.ok) {
        setStatus('success')
        setTimeout(() => {
          onClose()
        }, 2000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error("Formspree Error:", error)
      setStatus('error')
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-[150] flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative w-full max-w-md bg-[#111111] border border-[#222222] rounded-2xl p-6 shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ duration: 0.2 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors">
          <X size={18} />
        </button>
        
        <h2 className="text-white font-semibold text-lg mb-1">Request CV</h2>
        <p className="text-neutral-500 text-sm mb-6">Enter your email and I'll send my CV over shortly.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-neutral-400 mb-1 block">Your Email</label>
            <input
              type="email" required value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
          <div>
            <label className="text-xs text-neutral-400 mb-1 block">Message <span className="text-neutral-600">(optional)</span></label>
            <textarea
              value={message} onChange={e => setMessage(e.target.value)}
              placeholder="Hi Benson, I'd like to request your CV..."
              rows={3}
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
            />
          </div>

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className={`w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200
              ${status === 'success' ? 'bg-green-500 text-white' : 'bg-white hover:bg-neutral-200 text-black'}
              ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {status === 'loading' ? (
              <><Loader2 size={14} className="animate-spin" /> Sending...</>
            ) : status === 'success' ? (
              "Request Sent! ✅"
            ) : (
              <><Send size={14} /> Send Request</>
            )}
          </button>
          
          {status === 'error' && (
            <p className="text-red-500 text-[10px] text-center mt-2">Something went wrong. Please try again.</p>
          )}
        </form>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const [showModal, setShowModal] = useState(false)
  const [catIndex, setCatIndex] = useState(0)
  const [showImageModal, setShowImageModal] = useState(false)
  const [views, setViews] = useState(null)

  // Fetch and Increment visit count on component mount
  useEffect(() => {
    fetch('/api/views') // Ensure your API file is named views.js
      .then(res => res.json())
      .then(data => {
        if (data.views) setViews(data.views)
      })
      .catch(err => console.error("Error fetching views:", err))
  }, [])

  const prev = () => setCatIndex(i => (i - 1 + categories.length) % categories.length)
  const next = () => setCatIndex(i => (i + 1) % categories.length)

  useEffect(() => {
    const interval = setInterval(() => {
      setCatIndex(i => (i + 1) % categories.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-start justify-center px-6 pt-36 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Threads amplitude={1} distance={0} enableMouseInteraction />
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center gap-8 pt-8 pb-24">
        <div className="w-full flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neutral-500 font-medium mb-3 tracking-widest uppercase text-xs text-center"
          >
            Welcome to my portfolio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight text-center"
          >
            Benson Ricohermoso
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 mb-4 font-light text-center"
          >
            Software Engineer & AI Specialist
          </motion.p>

          {/* Live View Counter Badge */}
          {views !== null && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-lg"
            >
              <div className="relative flex h-2 w-2">
                {/* Subtle pulse animation to show it's "Live" */}
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
    
              <div className="flex items-center gap-1.5">
                <Eye size={15} className="text-neutral-300" />
                <span className="text-sm text-neutral-200 font-semibold tracking-wide">
                  {views.toLocaleString()}
                </span>
                <span className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase ml-0.5">
                  Views
                </span>
              </div>
            </motion.div>
          )}
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <a href="#contact" className="inline-flex items-center gap-2 bg-white hover:bg-neutral-200 text-black text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200">
              <Mail size={15} /> Email Me Now
            </a>
            <button onClick={() => setShowModal(true)} className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/20 hover:border-white/40 transition-colors duration-200">
              <FileText size={15} /> Request CV
            </button>
          </div>
        </div>

        <div className="block sm:hidden w-full">
          <HeroProfileAndPreview disablePreviewTilt={showImageModal} />
        </div>

        <div className="hidden sm:flex w-full flex-row items-center justify-center gap-12">
          <motion.div className="flex flex-col items-center" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="w-28 sm:w-36 md:w-48 bg-[#111111] border border-[#222222] rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#222222]">
                <span className="text-white text-[10px] uppercase font-bold tracking-wider">{categories[catIndex].label}</span>
              </div>
              <div className="relative h-16 sm:h-20 md:h-24 bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div key={catIndex} className="absolute inset-0 flex items-center justify-center p-2" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <img src={categories[catIndex].image} alt={categories[catIndex].label} className="h-full w-full object-contain cursor-zoom-in hover:scale-105 transition-transform" onClick={() => setShowImageModal(true)} />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex items-center justify-between px-2 py-1.5 bg-[#0d0d0d]">
                <button onClick={prev} className="text-neutral-500 hover:text-white transition-colors p-1"><ChevronLeft size={14} /></button>
                <div className="flex gap-1">
                  {categories.map((_, i) => (
                    <span key={i} className={`w-1 h-1 rounded-full transition-all duration-300 ${i === catIndex ? 'bg-white w-2' : 'bg-white/20'}`} />
                  ))}
                </div>
                <button onClick={next} className="text-neutral-500 hover:text-white transition-colors p-1"><ChevronRight size={14} /></button>
              </div>
            </div>
          </motion.div>

          <motion.div className="flex-shrink-0" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/0 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-2xl border-2 border-white/10 overflow-hidden bg-[#111]">
                <img src="/images/profile.jpg" alt="Benson Ricohermoso" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showImageModal && (
          <motion.div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowImageModal(false)}>
            <motion.img src={categories[catIndex].image} alt="Preview" initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="max-w-full max-h-[85vh] rounded-xl border border-white/10 shadow-2xl object-contain" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && <CVModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </section>
  )
}