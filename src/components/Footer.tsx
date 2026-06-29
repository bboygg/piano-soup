import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { href: "#about", label: "교습소 소개" },
    { href: "#programs", label: "교육 프로그램" },
    { href: "#teacher", label: "선생님 소개" },
    { href: "#gallery", label: "갤러리" },
    { href: "#location", label: "오시는 길" },
  ];

  return (
    <footer className="bg-piano-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-piano-green rounded-full flex items-center justify-center text-white text-lg font-bold">🌿</span>
              <div className="flex flex-col gap-2">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-white font-serif tracking-tight">피아노숲</span>
                  <span className="text-[10px] text-gray-400 font-medium mb-1">영주교육청등록 제656호</span>
                </div>
                <span className="text-[8px] text-piano-green-light font-bold tracking-[0.3em] -mt-1 uppercase">PIANO SOUP MUSIC STUDIO</span>
              </div>
            </Link>
            <div className="text-gray-400 max-w-sm leading-relaxed mb-6 space-y-1">
              <p>일상 속 작은 숲, 피아노숲 음악교습소입니다.</p>
              <p>맑은 공기와 평온함이 가득한 이곳에서</p>
              <p>당신의 음악적 감성을 더욱 깊고 풍성하게 가꾸어 드립니다.</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">사이트맵</h4>
            <ul className="space-y-4 text-gray-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">연락처</h4>
            <ul className="space-y-4 text-gray-400">
              <li>054-633-1999</li>
              <li><a href="mailto:piano_soup@naver.com" className="hover:text-white transition-colors">piano_soup@naver.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 text-center md:text-left">
          <p>© 2026 PIANO SOUP MUSIC STUDIO. <br className="md:hidden" /> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
