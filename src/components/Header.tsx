import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "교습소 소개" },
    { href: "#programs", label: "교육 프로그램" },
    { href: "#teacher", label: "선생님 소개" },
    { href: "#gallery", label: "갤러리" },
    { href: "#location", label: "오시는 길" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <span className="w-10 h-10 bg-piano-green rounded-full flex items-center justify-center text-white text-lg font-bold">🌿</span>
              </div>
              <div className="flex items-baseline gap-2 h-20 pt-7">
                <span className="text-2xl font-bold text-piano-black font-serif tracking-tight">피아노숲</span>
                <span className="text-[8px] text-gray-400 font-medium whitespace-nowrap pb-1">영주교육청등록 제656호</span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-piano-green transition-colors">
                {link.label}
              </Link>
            ))}
            <Link 
              href="#consultation" 
              className="px-5 py-2.5 bg-piano-green text-white text-sm font-semibold rounded-full hover:bg-piano-green-light transition-all shadow-sm"
            >
              상담 문의
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-piano-black focus:outline-none p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="block py-4 text-base font-medium text-gray-600 border-b border-gray-50 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex justify-start">
              <Link 
                href="#consultation" 
                onClick={() => setIsOpen(false)}
                className="inline-block px-6 py-3 bg-piano-green text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform text-sm"
              >
                상담 문의하기
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
