"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-piano-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-piano-green/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-piano-green/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-piano-green/10 text-piano-green text-xs font-bold rounded-full mb-6 tracking-wider uppercase">
              COZY MUSIC STUDIO
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-piano-black leading-[1.3] mb-8 break-keep font-serif">
              일상 속 작은 숲, <br />
              <span className="text-piano-green text-4xl lg:text-6xl">피아노숲</span> <span className="text-xl lg:text-2xl font-sans font-medium text-gray-400">음악교습소</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
              맑은 공기와 평온함이 가득한 이곳에서 <br className="hidden sm:block" />
              당신의 음악적 감성을 더욱 깊고 풍성하게 가꾸어 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#programs" 
                className="px-8 py-4 bg-piano-green text-white font-bold rounded-xl text-center hover:bg-piano-green-light transition-all shadow-xl shadow-piano-green/20"
              >
                교육 프로그램 보기
              </Link>
              <Link 
                href="#location" 
                className="px-8 py-4 bg-white border-2 border-piano-green text-piano-green font-bold rounded-xl text-center hover:bg-piano-green/5 transition-all"
              >
                오시는 길
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="aspect-[4/5] bg-gray-100 rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white">
              {/* Replace with actual academy photo later */}
              <div className="absolute inset-0 bg-gradient-to-tr from-piano-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-serif italic text-4xl">
                Academy Interior <br /> Photo
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl max-w-[240px] border border-gray-50">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-piano-green rounded-full flex items-center justify-center text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                </div>
                <div className="text-sm font-bold text-piano-black leading-tight">1:1 맞춤형 밀착 레슨</div>
              </div>
              <p className="text-xs text-gray-500 leading-normal">
                개개인의 진도와 성향에 맞춘 최적화된 커리큘럼을 제공합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
