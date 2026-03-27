import { motion } from 'framer-motion'
import { Award, BookOpen, GraduationCap } from 'lucide-react'

const sections = [
  {
    icon: <BookOpen size={18} className="text-white" />,
    heading: 'Certifications',
    items: [
      {
        title: 'AWS Cloud Support Associate',
        issuer: 'Coursera',
        description: 'Earned certification in cloud infrastructure and support, focusing on AWS services, deployment, and troubleshooting.',
      },
      {
        title: 'English for Media Literacy MOOC',
        issuer: 'OPEN',
        description: 'Completed training in media literacy and communication, enhancing skills in analyzing and creating content in English for global contexts.',
      },
    ],
  },
  {
    icon: <Award size={18} className="text-white" />,
    heading: 'Awards',
    items: [
      {
        title: 'Glitch Hunt – 2nd Runner-up',
        issuer: 'Google Developer Groups Community (Hackfest 2026)',
        description: 'Recognized for innovative problem-solving and coding skills during a competitive hackathon event.',
      },
      {
        title: "Dean's Lister",
        issuer: 'First Year College and Second Year 1st Semester',
        description: 'Awarded for academic excellence and consistent high performance in coursework.',
      },
    ],
  },
  {
    icon: <GraduationCap size={18} className="text-white" />,
    heading: 'Seminars & Workshops',
    items: [
      {
        title: 'Mastering Programming & Data Analytics Event',
        issuer: 'LMS & Power BI',
        description: 'Participated in a workshop focused on advanced programming techniques and data analytics, including hands-on training with Power BI for business intelligence.',
      },
    ],
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

        <div className="space-y-10">
          {sections.map((section, si) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: si * 0.15 }}
            >
              {/* Section heading */}
              <div className="flex items-center gap-2 mb-4">
                {section.icon}
                <h3 className="text-white font-semibold text-lg">{section.heading}</h3>
              </div>

              {/* Timeline */}
              <div className="relative border-l-2 border-white/20 pl-6 space-y-5">
                {section.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: ii * 0.1 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div className="absolute -left-[1.65rem] top-1.5 w-3 h-3 rounded-full bg-[#080808] border-2 border-white" />

                    <div className="bg-dark-card border border-[#222222] rounded-xl p-4 hover:border-white/30 transition-colors duration-300">
                      <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                        <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                      </div>
                      <p className="text-neutral-400 text-xs mb-2">{item.issuer}</p>
                      <p className="text-neutral-500 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
