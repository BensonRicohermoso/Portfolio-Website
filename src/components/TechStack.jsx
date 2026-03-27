import { motion } from 'framer-motion'
import { Monitor, Server, Brain, Database } from 'lucide-react'
import { FaReact, FaPython, FaAws } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiJavascript, SiCplusplus, SiFastapi, SiFlask, SiOpenai, SiMysql, SiMongodb, SiPostgresql, SiSqlite, SiVercel, SiFirebase, SiRailway } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { BsBraces } from 'react-icons/bs'

const categories = [
  {
    icon: <Monitor className="text-white" size={28} />,
    title: 'Frontend',
    skills: [
      { label: 'React', icon: <FaReact /> },
      { label: 'Next.js', icon: <SiNextdotjs /> },
      { label: 'JavaScript', icon: <SiJavascript /> },
      { label: 'TypeScript', icon: <SiTypescript /> },
      { label: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    icon: <Server className="text-white" size={28} />,
    title: 'Backend',
    skills: [
      { label: 'Python', icon: <FaPython /> },
      { label: 'FastAPI', icon: <SiFastapi /> },
      { label: 'Flask', icon: <SiFlask /> },
      { label: 'C++', icon: <SiCplusplus /> },
    ],
  },
  {
    icon: <Brain className="text-white" size={28} />,
    title: 'AI & APIs',
    skills: [
      { label: 'OpenAI', icon: <SiOpenai /> },
      { label: 'NLP', icon: <BsBraces /> },
      { label: 'LLMs', icon: <BsBraces /> },
      { label: 'RESTful APIs', icon: <TbApi /> },
    ],
  },
  {
    icon: <Database className="text-white" size={28} />,
    title: 'Database & Cloud',
    skills: [
      { label: 'MySQL', icon: <SiMysql /> },
      { label: 'MongoDB', icon: <SiMongodb /> },
      { label: 'SQLite', icon: <SiSqlite /> },
      { label: 'Vercel', icon: <SiVercel /> },
      { label: 'Firebase', icon: <SiFirebase /> },
      { label: 'Railway', icon: <SiRailway /> },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-dark-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Tech Stack</h2>
          <div className="w-16 h-1 bg-white rounded" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-dark-card border border-[#222222] rounded-2xl p-6 hover:border-white/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                {cat.icon}
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li key={skill.label} className="flex items-center gap-2.5 text-neutral-400 text-sm">
                    <span className="text-base text-neutral-300 flex-shrink-0">{skill.icon}</span>
                    {skill.label}
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
