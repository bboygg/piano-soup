import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <span className="w-10 h-10 bg-piano-green rounded-full flex items-center justify-center text-white text-[10px] font-bold tracking-widest">PS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-piano-black font-serif tracking-tight">피아노숲</span>
                <span className="text-[8px] text-piano-green font-bold tracking-[0.3em] -mt-1 uppercase">Music Studio</span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-piano-green transition-colors">교습소 소개</Link>
            <Link href="#programs" className="text-sm font-medium text-gray-600 hover:text-piano-green transition-colors">교육 프로그램</Link>
            <Link href="#teacher" className="text-sm font-medium text-gray-600 hover:text-piano-green transition-colors">선생님 소개</Link>
            <Link href="#location" className="text-sm font-medium text-gray-600 hover:text-piano-green transition-colors">오시는 길</Link>
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
              className="text-gray-600 hover:text-piano-black focus:outline-none"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-gray-600 border-b border-gray-50">교습소 소개</Link>
            <Link href="#programs" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-gray-600 border-b border-gray-50">교육 프로그램</Link>
            <Link href="#teacher" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-gray-600 border-b border-gray-50">선생님 소개</Link>
            <Link href="#location" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-gray-600 border-b border-gray-50">오시는 길</Link>
            <div className="pt-4 pb-2 px-3">
              <Link 
                href="#consultation" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 bg-piano-green text-white font-semibold rounded-xl shadow-lg"
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
