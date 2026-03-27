import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { MdOutlineStackedBarChart } from 'react-icons/md'
import { VscProject } from 'react-icons/vsc'
import { RiAwardLine } from 'react-icons/ri'
import { BiEnvelope } from 'react-icons/bi'
import Dock from './Dock'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

const smoothScroll = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const items = [
  {
    icon: <AiOutlineHome size={20} className="text-white" />,
    label: 'Home',
    onClick: () => smoothScroll('home'),
  },
  {
    icon: <AiOutlineUser size={20} className="text-white" />,
    label: 'About',
    onClick: () => smoothScroll('about'),
  },
  {
    icon: <MdOutlineStackedBarChart size={20} className="text-white" />,
    label: 'Tech Stack',
    onClick: () => smoothScroll('tech-stack'),
  },
  {
    icon: <VscProject size={20} className="text-white" />,
    label: 'Projects',
    onClick: () => smoothScroll('projects'),
  },
  {
    icon: <RiAwardLine size={20} className="text-white" />,
    label: 'Certifications',
    onClick: () => smoothScroll('certifications'),
  },
  {
    icon: <BiEnvelope size={20} className="text-white" />,
    label: 'Contact',
    onClick: () => smoothScroll('contact'),
  },
]


export default function Navbar() {
  // Mobile menu state
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Burger menu for mobile (top left) */}
      <button
        className="fixed top-3 left-3 z-50 sm:hidden bg-[#111111] border border-[#222222] rounded-full p-2 shadow-md"
        onClick={() => setOpen(o => !o)}
        aria-label="Open navigation menu"
      >
        <FiMenu size={24} className="text-white" />
      </button>

      {/* Navbar: hidden on mobile unless open, always visible on sm+ */}
      <div
        className={`fixed top-0 sm:top-auto sm:bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300 ${open ? 'block' : 'hidden'} sm:flex`}
      >
        <div className="pointer-events-auto">
          <Dock
            items={items}
            panelHeight={44}
            baseItemSize={36}
            magnification={50}
            className="sm:!h-[68px] sm:!min-h-[68px]"
          />
        </div>
      </div>

      {/* Overlay to close menu when open on mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 sm:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close navigation menu"
        />
      )}
    </>
  );
}
