import React from 'react';
import { Home, User, Code, Briefcase, Mail, Menu, X } from 'lucide-react';
import Hannan from "../components/image/Hannan.jpg"

const navItems = [
  { label: 'Home', icon: <Home className="w-7 h-7" />, href: '#home' },
  { label: 'About', icon: <User className="w-7 h-7" />, href: '#about' },
  { label: 'Skills', icon: <Code className="w-7 h-7" />, href: '#skills' },
  { label: 'Projects', icon: <Briefcase className="w-7 h-7" />, href: '#projects' },
  { label: 'Contact', icon: <Mail className="w-7 h-7" />, href: '#contact' },
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-[85%] z-50 p-2 rounded-lg glass-effect lg:hidden"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full glass-effect z-40 transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-80
      `}>
        <div className="h-full flex flex-col">
          {/* Profile Section */}
          <div className="p-6 text-center border-b border-white/10">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden glass-effect p-1">

{/* image */}

              <img
                src={Hannan}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />

            </div>
            <h2 className="text-2xl font-bold text-[#381010] mb-1">Hannan_Siddiqui</h2>
            <p className="text-xl text-[#3d1212] font-bold">Software Engineer</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2 text-[#231e1e]">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-2xl flex items-center gap-3 px-4 py-3  font-bold  rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="p-4 mb-10 border-t border-white/10">
            <div className="flex justify-center gap-4">
              <a href="https://github.com/hannan-siddiqui?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/hannan-siddiqui-990961258/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="siddiquihannan824@gmail.com" className="text-gray-300 hover:text-white">
                <Mail className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}