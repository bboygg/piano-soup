"use client";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Check } from 'lucide-react';

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('054-633-1999');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Header />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-12 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-16 items-center">
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-piano-black mb-4 sm:mb-8 leading-tight font-serif">
                  왜 <span className="text-piano-green">피아노숲</span> 인가요?
                </h2>
                <div className="space-y-2 sm:space-y-6 text-[10px] sm:text-lg text-gray-600 leading-relaxed">
                  <p>
                    피아노숲은 자연의 평온함 속에서 음악을 만나는 공간입니다. 
                    지친 마음을 맑게 정화하고, 피아노 선율을 통해 
                    나만의 온전한 즐거움을 발견할 수 있도록 돕습니다.
                  </p>
                  <p className="hidden sm:block">
                    나무 한 그루가 모여 울창한 숲을 이루듯, 한 곡 한 곡 정성껏 익히며 
                    당신만의 풍성한 음악 세계를 가꾸어 나가는 여정을 함께합니다.
                  </p>
                </div>
                
                <div className="mt-4 sm:mt-12 grid grid-cols-2 gap-2 sm:gap-8">
                  <div>
                    <h4 className="font-bold text-piano-black text-[10px] sm:text-xl mb-1 sm:mb-2">1:1 맞춤 레슨</h4>
                    <p className="text-[8px] sm:text-sm text-gray-500">개인별 맞춤형 지도</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-piano-black text-[10px] sm:text-xl mb-1 sm:mb-2">쉼이 있는 공간</h4>
                    <p className="text-[8px] sm:text-sm text-gray-500">쾌적한 숲 같은 환경</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="relative w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="aspect-square bg-piano-green/5 rounded-2xl sm:rounded-[60px] flex items-center justify-center p-2 sm:p-8">
                  <div className="w-full h-full bg-white rounded-xl sm:rounded-[40px] shadow-2xl flex items-center justify-center text-piano-green/20">
                    <svg className="w-8 h-8 sm:w-32 sm:h-32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M12 19V5l7 7-7 7"/><path d="M12 19V5l-7 7 7 7"/></svg>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -top-4 -right-4 sm:-top-10 sm:-right-10 w-12 h-12 sm:w-40 sm:h-40 bg-piano-green/10 rounded-full blur-xl sm:blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <Programs />

      {/* Teacher Section */}
      <section id="teacher" className="py-12 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-16 items-center">
            <div className="relative order-2 sm:order-1">
              <div className="aspect-[4/5] bg-white rounded-2xl sm:rounded-[40px] overflow-hidden shadow-2xl border-4 sm:border-8 border-white relative group">
                <div className="absolute inset-0 bg-piano-green/5 flex items-center justify-center text-piano-green/20 font-serif italic text-xs sm:text-2xl">
                  Teacher Photo
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-8 bg-gradient-to-t from-piano-black/50 to-transparent">
                  <p className="text-white font-serif text-[10px] sm:text-2xl font-bold text-center">선생님</p>
                </div>
              </div>
            </div>

            <div className="w-full order-1 sm:order-2">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-piano-green font-bold text-[8px] sm:text-sm tracking-widest uppercase mb-2 sm:mb-4 block">Meet the Teacher</span>
                <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-piano-black mb-4 sm:mb-8 leading-tight font-serif">
                  마음으로 연주하는 <br />
                  <span className="text-piano-green">선생님 소개</span>
                </h2>
                <div className="space-y-2 sm:space-y-6 text-[10px] sm:text-lg text-gray-600 leading-relaxed">
                  <p>
                    피아노는 기술을 익히는 것보다 자신의 감정을 온전히 실어 보내는 것이 중요합니다. 
                  </p>
                  <ul className="space-y-1 sm:space-y-3 pt-2 sm:pt-6 border-t border-gray-200">
                    <li className="flex items-center gap-1.5 sm:gap-3">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-piano-green rounded-full"></span>
                      <span>10년 이상의 레슨 경험</span>
                    </li>
                    <li className="flex items-center gap-1.5 sm:gap-3">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-piano-green rounded-full"></span>
                      <span>개인별 맞춤형 교수법 적용</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section - Restored and softened copy */}
      <section id="consultation" className="py-12 sm:py-24 bg-piano-green relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl sm:blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-5xl font-bold text-white mb-4 sm:mb-8 leading-tight font-serif">
              피아노숲에서 시작하는 <br />
              <span className="text-white/80">첫 번째 음악 여정</span>
            </h2>
            <p className="text-white/70 text-xs sm:text-lg mb-8 sm:mb-12 leading-relaxed">
              피아노숲은 언제나 여러분을 기다리고 있어요. <br />
              궁금한 점이 있다면 언제든 편하게 똑똑- 문을 두드려주세요. <br className="hidden sm:block" />
              따뜻한 마음으로 맞이하겠습니다.
            </p>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-8 max-w-3xl mx-auto">
              <button 
                onClick={handleCopyPhone}
                className="bg-white/10 backdrop-blur-md p-6 sm:p-10 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer text-center active:scale-95 group"
              >
                <h4 className="text-white font-bold mb-2 sm:mb-4 text-[10px] sm:text-xl">상담 예약 및 문의</h4>
                <p className="text-white text-[12px] sm:text-2xl font-bold group-hover:scale-105 transition-transform">054-633-1999</p>
                <p className="text-[8px] sm:text-xs text-white/40 mt-2 sm:mt-4 italic">클릭하여 번호 복사</p>
              </button>
              
              <a 
                href="https://open.kakao.com/o/sXXXXXXXX" 
                target="_blank"
                className="bg-white/10 backdrop-blur-md p-6 sm:p-10 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/20 transition-all text-center flex flex-col justify-center active:scale-95 group"
              >
                <h4 className="text-white font-bold mb-2 sm:mb-4 text-[10px] sm:text-xl">카카오톡 상담</h4>
                <p className="text-white text-[12px] sm:text-2xl font-bold group-hover:scale-105 transition-transform">실시간 오픈채팅</p>
                <p className="text-[8px] sm:text-xs text-white/40 mt-2 sm:mt-4 italic">클릭하여 채팅 시작</p>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-piano-black mb-8 sm:mb-12 font-serif">피아노숲의 일상</h2>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-lg sm:rounded-2xl overflow-hidden hover:opacity-90 transition-opacity cursor-pointer">
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-[8px] sm:text-sm italic text-center px-1">Piano Forest {i}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-12">
            <a 
              href="https://www.instagram.com/pianosoup2019/" 
              target="_blank" 
              className="inline-flex items-center gap-1 sm:gap-2 text-piano-green font-bold hover:underline text-xs sm:text-base"
            >
              인스타그램에서 더 보기 <span className="text-sm sm:text-xl">→</span>
            </a>
          </div>
        </div>
      </section>

      <Location />
      <Footer />

      {/* Modern Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, x: '-50%' }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-10 left-1/2 z-[100] bg-piano-black text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/10 w-[90%] max-w-xs sm:max-w-none sm:w-auto"
          >
            <div className="w-5 h-5 bg-piano-green rounded-full flex items-center justify-center flex-shrink-0">
              <Check size={12} className="text-white" />
            </div>
            <span className="text-sm font-medium whitespace-nowrap">전화번호가 클립보드에 복사되었습니다.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
