"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center pt-20 overflow-hidden bg-piano-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-piano-green/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-piano-green/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block px-2 sm:px-4 py-1 bg-piano-green/10 text-piano-green text-[8px] sm:text-xs font-bold rounded-full mb-3 sm:mb-6 tracking-wider uppercase">
              PIANO SOUP MUSIC STUDIO
            </span>
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold text-piano-black leading-[1.3] mb-4 sm:mb-8 break-keep font-serif">
              <span className="inline-block pl-2 sm:pl-7 mb-2">일상 속 작은 숲,</span> <br />
              <span className="text-piano-green text-3xl sm:text-4xl lg:text-7xl">피아노숲</span> <br className="sm:hidden" />
              <span className="text-sm sm:text-xl lg:text-3xl font-sans font-medium text-gray-400">음악교습소</span>
            </h1>
            <p className="text-xs sm:text-lg text-gray-600 mb-6 sm:mb-10 max-w-xl leading-relaxed">
              맑은 공기와 평온함이 가득한 이곳에서 <br className="hidden sm:block" />
              당신의 음악적 감성을 더욱 깊고 풍성하게 가꾸어 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <Link 
                href="#programs" 
                className="px-4 sm:px-8 py-2.5 sm:py-4 bg-piano-green text-white text-[10px] sm:text-base font-bold rounded-lg sm:rounded-xl text-center hover:bg-piano-green-light transition-all shadow-xl shadow-piano-green/20 active:scale-95"
              >
                교육 프로그램
              </Link>
              <Link 
                href="#location" 
                className="px-4 sm:px-8 py-2.5 sm:py-4 bg-white border border-piano-green sm:border-2 text-piano-green text-[10px] sm:text-base font-bold rounded-lg sm:rounded-xl text-center hover:bg-piano-green/5 transition-all active:scale-95"
              >
                오시는 길
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl sm:rounded-[40px] overflow-hidden shadow-xl sm:shadow-2xl relative border-4 sm:border-8 border-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-piano-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-serif italic text-xs sm:text-4xl text-center p-4">
                Academy Interior <br /> Photo
              </div>
            </div>
            
            {/* Floating Card - Scaled for mobile */}
            <div className="absolute -bottom-2 -left-2 sm:-bottom-6 sm:-left-6 bg-white p-2 sm:p-6 rounded-lg sm:rounded-2xl shadow-xl border border-gray-50 max-w-[100px] sm:max-w-[240px]">
              <div className="flex items-center gap-1 sm:gap-4 mb-1 sm:mb-3">
                <div className="w-4 h-4 sm:w-10 sm:h-10 bg-piano-green rounded-full flex items-center justify-center text-white">
                  <svg className="w-2 h-2 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                </div>
                <div className="text-[6px] sm:text-sm font-bold text-piano-black leading-tight">1:1 맞춤형 레슨</div>
              </div>
              <p className="text-[5px] sm:text-xs text-gray-500 leading-normal hidden sm:block">
                개개인의 진도와 성향에 맞춘 최적화된 커리큘럼을 제공합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
