"use client";

import { motion } from 'framer-motion';
import { Music, Heart, Star } from 'lucide-react';

const programs = [
  {
    title: "유아부",
    description: ["음악적 상상력을 키우는 감성 중심 교육.", "놀이처럼 즐거운 첫 피아노 경험을 제공합니다."],
    icon: <Music className="w-4 h-4 sm:w-6 sm:h-6" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "초/중/고등부",
    description: ["기초부터 꼼꼼하게,", "학업 스트레스를 해소하고 자신만의 연주를 완성합니다."],
    icon: <Star className="w-4 h-4 sm:w-6 sm:h-6" />,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "성인 취미부",
    description: ["바쁜 일상 속 나를 위한 시간.", "좋아하는 곡을 쉽고 재미있게 배우는 맞춤형 레슨."],
    icon: <Heart className="w-4 h-4 sm:w-6 sm:h-6" />,
    color: "bg-pink-50 text-pink-600"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-12 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl font-bold text-piano-black mb-3 sm:mb-4"
          >
            피아노숲의 <span className="text-piano-green">교육 프로그램</span>
          </motion.h2>
          <p className="text-xs sm:text-base text-gray-500 max-w-2xl mx-auto">
            각 연령대와 목표에 최적화된 맞춤형 교육 과정을 통해 음악의 즐거움을 발견하세요.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 sm:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-3 sm:p-8 rounded-xl sm:rounded-[32px] border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className={`w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 ${program.color}`}>
                {program.icon}
              </div>
              <h3 className="text-[10px] sm:text-xl font-bold text-piano-black mb-1 sm:mb-4 break-keep">{program.title}</h3>
              <p className="text-[8px] sm:text-sm text-gray-600 leading-tight sm:leading-relaxed hidden sm:block">
                {program.description.map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
