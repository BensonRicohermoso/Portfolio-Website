import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-400 font-medium mb-2 tracking-widest uppercase text-sm">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-indigo-400">Alex</span>
          </h1>
          <div className="text-xl md:text-2xl text-slate-300 mb-8 h-8">
            <TypeAnimation
              sequence={[
                'Software Engineer', 2000,
                'AI Specialist', 2000,
                'Full-Stack Developer', 2000,
              ]}
              repeat={Infinity}
              wrapper="span"
            />
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 shadow-lg shadow-indigo-500/30"
          >
            <Mail size={18} />
            Email Me Now
          </a>
        </motion.div>

        {/* Avatar */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-slate-700 border-4 border-indigo-500 glow-border overflow-hidden flex items-center justify-center">
            <span className="text-slate-400 text-sm">Photo</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
