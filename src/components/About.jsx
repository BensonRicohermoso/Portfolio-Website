import { motion } from 'framer-motion'
import InfiniteMenu from './InfiniteMenu'

// Placeholder items — swap out images/links/titles when ready
const items = [
  {
    image: '/images/project-cards/Ithink-1.png',
    link: 'https://weareithink.vercel.app',
    title: ' ',
    description: ' '
  },
  {
    image: '/images/about-cards/aws-certi.png',
    link: ' ',
    title: ' ',
    description: ''
  },
  {
    image: '/images/project-cards/xernor-1.png',
    link: 'https://xenor-ai.vercel.app',
    title: ' ',
    description: ' '
  },
  {
    image: '/images/about-cards/care-coding.jpg',
    link: ' ',
    title: ' ',
    description: ''
  },
  {
    image: '/images/project-cards/finbot-1.png',
    link: 'https://financial-management-chatbot.vercel.app',
    title: ' ',
    description: ' '
  },
  {
    image: '/images/about-cards/hackathon.jpg',
    link: ' ',
    title: ' ',
    description: ''
  },
  {
    image: '/images/project-cards/care-1.png',
    link: 'https://weareithink.vercel.app',
    title: ' ',
    description: ' '
  },
  {
    image: '/images/about-cards/ithink-dash.jpg',
    link: ' ',
    title: ' ',
    description: ''
  }
]

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row min-h-screen w-full"
    >
      {/* ── Left Div ── 50% width, about text */}
      <div className="w-full md:w-1/2 flex items-center justify-center py-6 md:py-24 px-4 md:px-12 pl-0 md:pl-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="max-w-xl w-full"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">About Me</h2>
          <div className="w-12 sm:w-16 h-1 bg-white rounded mb-8" />
          <div className="space-y-5 text-neutral-400 leading-relaxed text-sm sm:text-base">
            <p>
              I'm a full-stack web developer passionate about building intelligent, scalable
              applications with JavaScript, TypeScript, and Python. My projects span from clinical
              management systems and financial chatbots to AI-powered platforms, where I focus on
              enhancing user experience, data accessibility, and system reliability.
            </p>
            <p>
              I've contributed to organizations by streamlining workflows and improving
              efficiency—whether through data management at a veterinary clinic or developing
              full-stack solutions that cut errors and boost performance. My work has consistently
              delivered measurable impact, such as reducing response latency by 45% and improving
              reporting efficiency by 30%.
            </p>
            <p>
              Recently, I've been diving deeper into artificial intelligence, integrating NLP and
              LLMs into modern applications. This exploration has led me to create AI-driven chat
              platforms and finance tools that transform how users interact with data. My goal is
              to continue leveraging AI and cloud technologies to build secure, innovative
              solutions that empower businesses and communities.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Right Div ── 50% width, InfiniteMenu */}
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <div style={{ height: '600px', position: 'relative', width: '100%' }}>
          <InfiniteMenu items={items} scale={0.9} />
        </div>
      </div>
    </section>
  )
}