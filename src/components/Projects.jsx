import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'AI Chat Assistant',
    description: 'A conversational AI assistant powered by transformer models with real-time streaming responses. Built with a FastAPI backend and React frontend, supporting multi-turn conversations and context retention.',
    tags: ['Python', 'PyTorch', 'React', 'FastAPI'],
    images: [null, null, null],
    siteUrl: 'https://your-site-url.com',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with cart management, payments, and admin dashboard. Integrated Stripe for secure payments and built a real-time inventory management system.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    images: [null, null, null],
    siteUrl: 'https://your-site-url.com',
  },
  {
    title: 'Image Classifier',
    description: 'Deep learning model for multi-class image classification with 95%+ accuracy on benchmark datasets. Trained on custom datasets using transfer learning with ResNet architecture.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    images: [null, null, null],
    siteUrl: 'https://your-site-url.com',
  },
  {
    title: 'Portfolio Dashboard',
    description: 'Real-time analytics dashboard for tracking stock portfolios with interactive charts. Features live data feeds, portfolio performance metrics, and customizable watchlists.',
    tags: ['React', 'TypeScript', 'D3.js', 'REST API'],
    images: [null, null, null],
    siteUrl: 'https://your-site-url.com',
  },
  {
    title: 'Task Manager App',
    description: 'Collaborative task management tool with drag-and-drop boards and real-time sync. Supports team workspaces, task assignments, deadlines, and progress tracking.',
    tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
    images: [null, null, null],
    siteUrl: 'https://your-site-url.com',
  },
  {
    title: 'NLP Sentiment Analyzer',
    description: 'Sentiment analysis pipeline for social media data using fine-tuned BERT models. Processes thousands of posts per minute with a REST API for easy integration.',
    tags: ['Python', 'HuggingFace', 'Scikit-learn', 'Pandas'],
    images: [null, null, null],
    siteUrl: 'https://your-site-url.com',
  },
]

function ProjectModal({ index, onClose }) {
  const project = projects[index]
  const [imgIndex, setImgIndex] = useState(0)

  const handlePrev = (e) => { e.stopPropagation(); setImgIndex(i => (i - 1 + project.images.length) % project.images.length) }
  const handleNext = (e) => { e.stopPropagation(); setImgIndex(i => (i + 1) % project.images.length) }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <motion.div
        key={index}
        className="relative w-full max-w-2xl bg-[#111111] border border-[#222222] rounded-2xl overflow-hidden shadow-2xl mx-4"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-neutral-500 hover:text-white bg-black/50 rounded-full p-1 transition-colors"
        >
          <X size={16} />
        </button>

        {/* Image with arrows */}
        <div className="relative h-56 bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
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
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/90 border border-white/10 hover:border-white/30 text-white rounded-full p-2 transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/90 border border-white/10 hover:border-white/30 text-white rounded-full p-2 transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {project.images.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${i === imgIndex ? 'bg-white' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-white font-semibold text-xl">{project.title}</h3>
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-neutral-200 text-black text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-200 whitespace-nowrap flex-shrink-0"
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
              <div className="h-44 bg-[#0a0a0a] flex items-center justify-center">
                <span className="text-neutral-600 text-sm">Project Image</span>
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
