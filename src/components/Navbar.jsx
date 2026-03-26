import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { MdOutlineStackedBarChart } from 'react-icons/md'
import { VscProject } from 'react-icons/vsc'
import { RiAwardLine } from 'react-icons/ri'
import { BiEnvelope } from 'react-icons/bi'
import Dock from './Dock'

const items = [
  {
    icon: <AiOutlineHome size={20} className="text-white" />,
    label: 'Home',
    onClick: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    icon: <AiOutlineUser size={20} className="text-white" />,
    label: 'About',
    onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    icon: <MdOutlineStackedBarChart size={20} className="text-white" />,
    label: 'Tech Stack',
    onClick: () => document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    icon: <VscProject size={20} className="text-white" />,
    label: 'Projects',
    onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    icon: <RiAwardLine size={20} className="text-white" />,
    label: 'Certifications',
    onClick: () => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    icon: <BiEnvelope size={20} className="text-white" />,
    label: 'Contact',
    onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
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
