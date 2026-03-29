import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Persistent Header */}
      <header
        className="fixed top-0 left-0 right-0 z-[1100] h-[56px] bg-[#111111] border-b border-[#222222] flex items-center justify-between px-4 shadow-md"
        style={{ minHeight: 50 }}
      >
        {/* Brand/Logo removed */}
        {/* Hamburger Trigger */}
        <button
          className="w-11 h-11 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white/40"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(o => !o)}
        >
          {open ? (
            <AiOutlineClose size={28} className="text-white" />
          ) : (
            <FiMenu size={28} className="text-white" />
          )}
        </button>
      </header>

      {/* Menu Overlay */}
      {open && (
        <nav
          className="fixed inset-0 z-[1200] bg-[#111111] bg-opacity-95 flex flex-col scrollbar-hide"
          style={{ minHeight: '100vh', overflowY: 'hidden', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          <div className="flex items-center justify-end px-4 pt-4 pb-2">
            <button
              className="w-11 h-11 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <AiOutlineClose size={28} className="text-white" />
            </button>
          </div>
          <ul className="flex flex-col gap-6 mt-8 px-6">
            {navLinks.map(link => (
              <li key={link.label} className="w-full">
                <a
                  href={link.href}
                  className="block w-full text-white text-xl font-medium py-4 px-2 rounded-lg hover:bg-[#222222] transition-colors duration-200"
                  style={{ minHeight: 48 }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
