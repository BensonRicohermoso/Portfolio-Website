import { Github, Linkedin, Phone } from 'lucide-react'

const socials = [
  {
    icon: <Linkedin size={22} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/your-profile',
  },
  {
    icon: <Github size={22} />,
    label: 'GitHub',
    href: 'https://github.com/your-username',
  },
  {
    icon: <Phone size={22} />,
    label: '+1 (555) 000-0000',
    href: 'tel:+15550000000',
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-[#222222]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Connect With Me</h2>
        <div className="w-16 h-1 bg-white rounded mx-auto mb-8" />
        <p className="text-neutral-500 mb-10 max-w-md mx-auto">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-neutral-400 hover:text-white bg-dark-card hover:bg-[#1a1a1a] border border-[#222222] hover:border-white/30 px-5 py-3 rounded-xl transition-all duration-200 group"
            >
              <span className="group-hover:scale-110 transition-transform duration-200">{s.icon}</span>
              <span className="text-sm font-medium">{s.label}</span>
            </a>
          ))}
        </div>

        <p className="text-neutral-700 text-xs mt-12">
          © {new Date().getFullYear()} Benson. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
