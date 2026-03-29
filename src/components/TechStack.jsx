import { motion } from 'framer-motion'
import { Monitor, Server, Brain, Database } from 'lucide-react'
import { FaReact, FaPython } from 'react-icons/fa'
import { 
  SiTailwindcss, SiTypescript, SiNextdotjs, SiJavascript, 
  SiCplusplus, SiFastapi, SiFlask, SiOpenai, SiMysql, 
  SiMongodb, SiPostgresql, SiSqlite, SiVercel, SiFirebase, SiRailway 
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { BsBraces } from 'react-icons/bs'

const categories = [
  {
    icon: <Monitor className="text-white" size={28} />,
    title: 'Frontend',
    skills: [
      { label: 'React', icon: <FaReact />, color: '#61DAFB' },
      { label: 'Next.js', icon: <SiNextdotjs />, color: '#FFFFFF' },
      { label: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { label: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { label: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    ],
  },
  {
    icon: <Server className="text-white" size={28} />,
    title: 'Backend',
    skills: [
      { label: 'Python', icon: <FaPython />, color: '#3776AB' },
      { label: 'FastAPI', icon: <SiFastapi />, color: '#05998B' },
      { label: 'Flask', icon: <SiFlask />, color: '#FFFFFF' },
      { label: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    ],
  },
  {
    icon: <Brain className="text-white" size={28} />,
    title: 'AI & APIs',
    skills: [
      { label: 'OpenAI', icon: <SiOpenai />, color: '#74aa9c' },
      { label: 'NLP', icon: <BsBraces />, color: '#A855F7' },
      { label: 'LLMs', icon: <BsBraces />, color: '#EC4899' },
      { label: 'RESTful APIs', icon: <TbApi />, color: '#FF6C37' },
    ],
  },
  {
    icon: <Database className="text-white" size={28} />,
    title: 'Database & Cloud',
    skills: [
      { label: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
      { label: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { label: 'SQLite', icon: <SiSqlite />, color: '#003B57' },
      { label: 'Vercel', icon: <SiVercel />, color: '#FFFFFF' },
      { label: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
      { label: 'Railway', icon: <SiRailway />, color: '#FFFFFF' },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-[#0a0a0a]">
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
              className="bg-[#111111] border border-[#222222] rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#1a1a1a] rounded-lg">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              </div>

              <ul className="space-y-4">
                {cat.skills.map((skill) => (
                  <li 
                    key={skill.label} 
                    className="group flex items-center gap-3 text-neutral-400 text-sm transition-colors duration-300 hover:text-white"
                  >
                    <div 
                      className="flex items-center justify-center w-6 h-6 text-xl transition-all duration-300 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                      style={{ 
                        color: skill.color,
                        filter: `drop-shadow(0 0 8px ${skill.color}44)` 
                      }}
                    >
                      {skill.icon}
                    </div>
                    <span className="font-medium tracking-wide">{skill.label}</span>
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