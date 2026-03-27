import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { MdOutlineStackedBarChart } from 'react-icons/md'
import { VscProject } from 'react-icons/vsc'
import { RiAwardLine } from 'react-icons/ri'
import { BiEnvelope } from 'react-icons/bi'
import Dock from './Dock'

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
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
    </div>
  )
}
