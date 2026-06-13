"use client";

import { motion } from 'framer-motion';
import { Music, Heart, Star, Users } from 'lucide-react';

const programs = [
  {
    title: "유아/초등부",
    description: "음악적 상상력을 키우는 감성 중심 교육. 놀이처럼 즐거운 첫 피아노 경험을 제공합니다.",
    icon: <Music className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "중고등부",
    description: "기초부터 심화 테크닉까지, 학업 스트레스를 해소하고 자신만의 연주를 완성합니다.",
    icon: <Star className="w-6 h-6" />,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "성인 취미부",
    description: "바쁜 일상 속 나를 위한 시간. 좋아하는 곡을 쉽고 재미있게 배우는 맞춤형 레슨.",
    icon: <Heart className="w-6 h-6" />,
    color: "bg-pink-50 text-pink-600"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-piano-black mb-4"
          >
            피아노숲의 <span className="text-piano-green">교육 프로그램</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            각 연령대와 목표에 최적화된 맞춤형 교육 과정을 통해 음악의 즐거움을 발견하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${program.color}`}>
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-piano-black mb-4">{program.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
