import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
          <div className="w-16 h-1 bg-white rounded mb-8" />
          <div className="space-y-5 text-neutral-400 leading-relaxed">
            <p>
              I'm a full-stack web developer passionate about building intelligent, scalable applications with JavaScript, TypeScript, and Python. My projects span from clinical management systems and financial chatbots to AI-powered platforms, where I focus on enhancing user experience, data accessibility, and system reliability.
            </p>
            <p>
              I've contributed to organizations by streamlining workflows and improving efficiency—whether through data management at a veterinary clinic or developing full-stack solutions that cut errors and boost performance. My work has consistently delivered measurable impact, such as reducing response latency by 45% and improving reporting efficiency by 30%.
            </p>
            <p>
              Recently, I've been diving deeper into artificial intelligence, integrating NLP and LLMs into modern applications. This exploration has led me to create AI-driven chat platforms and finance tools that transform how users interact with data. My goal is to continue leveraging AI and cloud technologies to build secure, innovative solutions that empower businesses and communities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
