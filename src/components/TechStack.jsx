import { motion } from 'framer-motion'
import { Monitor, Server, Brain } from 'lucide-react'

const categories = [
  {
    icon: <Monitor className="text-indigo-400" size={28} />,
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'TypeScript', 'Next.js', 'Framer Motion'],
  },
  {
    icon: <Server className="text-indigo-400" size={28} />,
    title: 'Backend',
    skills: ['Node.js', 'Python', 'Express', 'PostgreSQL', 'REST APIs'],
  },
  {
    icon: <Brain className="text-indigo-400" size={28} />,
    title: 'AI / Machine Learning',
    skills: ['PyTorch', 'Scikit-learn', 'TensorFlow', 'Pandas', 'OpenCV'],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-slate-800/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Tech Stack</h2>
          <div className="w-16 h-1 bg-indigo-500 rounded" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-indigo-500/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                {cat.icon}
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
