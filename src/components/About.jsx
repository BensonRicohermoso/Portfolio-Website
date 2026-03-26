import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
          <div className="w-16 h-1 bg-white rounded mb-8" />
          <div className="space-y-5 text-neutral-400 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus.
            </p>
            <p>
              Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, nunc augue
              iaculis purus, quis volutpat mi diam id nunc. My goal is to build impactful software
              that bridges the gap between cutting-edge AI research and real-world applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
