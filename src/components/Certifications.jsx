import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const certifications = [
  {
    title: 'Certification Title',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    description: 'Brief description or credential ID placeholder.',
  },
  {
    title: 'Seminar / Workshop Title',
    issuer: 'Organizing Body',
    date: 'Month Year',
    description: 'Brief description of what was covered or achieved.',
  },
  {
    title: 'Another Certification',
    issuer: 'Platform / Institution',
    date: 'Month Year',
    description: 'Brief description or credential ID placeholder.',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-dark-section">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Certifications & Seminars</h2>
          <div className="w-16 h-1 bg-white rounded" />
        </motion.div>

        <div className="relative border-l-2 border-white/20 pl-8 space-y-10">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-[2.85rem] top-1 w-5 h-5 rounded-full bg-[#080808] border-2 border-white flex items-center justify-center">
                <Award size={10} className="text-white" />
              </div>
              <div className="bg-dark-card border border-[#222222] rounded-xl p-5 hover:border-white/30 transition-colors duration-300">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
                  <h3 className="text-white font-semibold">{cert.title}</h3>
                  <span className="text-xs text-neutral-300 bg-white/10 border border-white/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-neutral-500 text-sm">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
