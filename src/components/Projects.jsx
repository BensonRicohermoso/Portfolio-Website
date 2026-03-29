import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'IThink',
    date: '2026',
    siteUrl: 'https://i-think-roan.vercel.app/',
    description: 'A web-based platform for collaborative thinking, drafting, and chat-driven idea development. Users can create drafts, participate in discussions, and leverage AI-powered credibility checking to enhance the quality of their contributions. The platform features user authentication, dashboards, and interactive tools for organizing and refining ideas in a visually engaging environment.',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'Python', 'AI'],
    images: [
      '/images/project-cards/Ithink-1.png',
      '/images/project-cards/Ithink-2.png',
      '/images/project-cards/Ithink-3.png',
    ],
  },
  {
    title: 'XenorAI',
    date: 'March 2026',
    siteUrl: 'https://xenor-ai.vercel.app/',
    description: 'A modern full-stack AI chatbot system with a responsive Next.js frontend and FastAPI backend. It features real-time chat with typing indicators, GPT-powered intelligent responses, conversation history, error handling, and a clean RESTful API with Swagger documentation.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'OpenAI', 'Uvicorn', 'Axios'],
    images: [
      '/images/project-cards/xernor-1.png',
      '/images/project-cards/xenor-2.png',
      '/images/project-cards/xenor-3.png',
    ],
  },
  {
    title: 'Financial Management Chatbot (FinBot AI)',
    date: 'December 2025',
    siteUrl: 'https://financial-management-chatbot.vercel.app/',
    description: 'A Flask-based personal finance chatbot that processes natural language inputs to structure transaction data. It features interactive dashboards, time-based financial reports, and supports budgeting and expense tracking for improved financial awareness.',
    tags: ['Python', 'Flask', 'Chart.js', 'HTML5', 'CSS3', 'JavaScript', 'SQLite3'],
    images: [
      '/images/project-cards/finbot-1.png',
      '/images/project-cards/finbot-2.png',
      '/images/project-cards/finbot-3.png',
    ],
  },
  {
    title: 'Clinic Management System',
    date: 'January 2026',
    siteUrl: '',
    description: 'A comprehensive Flask-based clinical management system for patient tracking, vital signs monitoring, and appointment scheduling. It includes dashboard analytics, secure user authentication, and role-based access for healthcare staff.',
    tags: ['Python', 'Flask', 'SQLite3', 'HTML5', 'Tailwind CSS', 'JavaScript', 'Font Awesome', 'Werkzeug'],
    images: [
      '/images/project-cards/care-1.png',
      '/images/project-cards/care-2.png',
      '/images/project-cards/care-3.png',
    ],
  },
  {
    title: 'Grocery Store Management System',
    date: 'March 2026',
    siteUrl: '',
    description: 'A comprehensive Python-based grocery store management system with inventory tracking, point of sale (POS), sales reporting, and user management.',
    tags: ['Python', 'Tkinter', 'MySQL', 'crypts', 'ReportLab', 'OpenPyXL'],
    images: [
      '/images/project-cards/grocery-1.png',
      '/images/project-cards/grocery-2.png',
      '/images/project-cards/grocery-3.png',
    ],
  },
  {
    title: 'ForceQuest System',
    date: 'March 2026',
    siteUrl: '',
    description: 'An interactive physics simulator designed to visualize Work, Energy, and Power (W.E.P.) concepts. It allows users to manipulate parameters such as force, distance, mass, angle, and friction, then instantly see results through real-time animations, energy graphs, and detailed calculations. The system also includes an integrated physics quiz to reinforce learning.',
    tags: ['Python', 'Tkinter', 'NumPy', 'Matplotlib'],
    images: [
      '/images/project-cards/fquest-1.png',
      '/images/project-cards/fquest-2.png',
      '/images/project-cards/fquest-3.png',
    ],
  },
]

function ProjectModal({ index, onClose }) {
  const project = projects[index]
  const [imgIndex, setImgIndex] = useState(0)

  const handlePrev = (e) => { e.stopPropagation(); setImgIndex(i => (i - 1 + project.images.length) % project.images.length) }
  const handleNext = (e) => { e.stopPropagation(); setImgIndex(i => (i + 1) % project.images.length) }

  return (
    <motion.div
className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <motion.div
        key={index}
className="relative w-full max-w-[95vw] sm:max-w-2xl bg-[#111111] border border-[#222222] rounded-2xl overflow-hidden shadow-2xl mx-0"
        style={{ maxHeight: '95vh' }}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 text-neutral-500 hover:text-white bg-black/50 rounded-full p-1 transition-colors"
        >
          <X size={16} />
        </button>

        {/* Image with arrows */}
        <div className="relative h-44 sm:h-48 md:h-56 lg:h-64 bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">

            <motion.div
              key={imgIndex}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
            >
              {project.images[imgIndex] ? (
                <img src={project.images[imgIndex]} alt={`${project.title} ${imgIndex + 1}`} className="w-full h-full object-cover" />
              ) : (
                <span className="text-neutral-600 text-sm">Image {imgIndex + 1}</span>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Left arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/90 border border-white/10 hover:border-white/30 text-white rounded-full p-2 transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/90 border border-white/10 hover:border-white/30 text-white rounded-full p-2 transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {project.images.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${i === imgIndex ? 'bg-white' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-6 overflow-y-auto" style={{ maxHeight: 'calc(95vh - 10rem)' }}>
          <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4 mb-3">

            <h3 className="text-white font-semibold text-lg sm:text-xl">{project.title}</h3>
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-neutral-200 text-black text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-200 whitespace-nowrap flex-shrink-0 mt-2 sm:mt-0"
            >
              <ExternalLink size={12} />
              Visit Site
            </a>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed mb-5">{project.description}</p>
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/10 text-neutral-300 border border-white/20 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
          <div className="w-16 h-1 bg-white rounded" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedIndex(i)}
              className="bg-dark-card border border-[#222222] rounded-2xl overflow-hidden hover:border-white/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="h-44 bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                {project.images[0] ? (
                  <img src={project.images[0]} alt={project.title + ' preview'} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-neutral-600 text-sm">Project Image</span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-neutral-500 text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/10 text-neutral-300 border border-white/20 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <ProjectModal
            index={selectedIndex}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
