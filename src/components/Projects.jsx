import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Chat Assistant',
    description: 'A conversational AI assistant powered by transformer models with real-time streaming responses.',
    tags: ['Python', 'PyTorch', 'React', 'FastAPI'],
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with cart management, payments, and admin dashboard.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    title: 'Image Classifier',
    description: 'Deep learning model for multi-class image classification with 95%+ accuracy on benchmark datasets.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
  },
  {
    title: 'Portfolio Dashboard',
    description: 'Real-time analytics dashboard for tracking stock portfolios with interactive charts.',
    tags: ['React', 'TypeScript', 'D3.js', 'REST API'],
  },
  {
    title: 'Task Manager App',
    description: 'Collaborative task management tool with drag-and-drop boards and real-time sync.',
    tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
  },
  {
    title: 'NLP Sentiment Analyzer',
    description: 'Sentiment analysis pipeline for social media data using fine-tuned BERT models.',
    tags: ['Python', 'HuggingFace', 'Scikit-learn', 'Pandas'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-card border border-[#222222] rounded-2xl overflow-hidden hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-44 bg-[#0a0a0a] flex items-center justify-center">
                <span className="text-neutral-600 text-sm">Project Image</span>
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-neutral-500 text-sm mb-4 leading-relaxed">{project.description}</p>
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
    </section>
  )
}
