const links = ['Home', 'About', 'Tech Stack', 'Projects', 'Certifications', 'Contact']

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-indigo-400 font-bold text-xl tracking-wide">{'<Portfolio />'}</span>
        <ul className="hidden md:flex gap-6 text-sm text-slate-300">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
