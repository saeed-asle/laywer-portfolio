import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { GraduationCap, Trophy, Award } from 'lucide-react';

// Import motion from framer-motion is already done above

export default function About() {
  const { t } = useLanguage();

  const icons = [GraduationCap, Trophy, Award];

  return (
    <section id="about" className="relative py-32 md:py-40 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fafbfc] to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c9a227]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1e3a5f]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/20 mb-6"
          >
            <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
              About
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#0a0f1a] mb-6">
            {t.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=700&h=900&fit=crop"
                  alt="Attorney"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/60 via-transparent to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/0 to-[#c9a227]/0 
                              group-hover:from-[#c9a227]/10 group-hover:to-transparent transition-all duration-700" />
              </div>
              
              {/* Animated decorative frame */}
              <div className="absolute -inset-4 border-2 border-[#c9a227]/30 rounded-[3rem] -z-10 
                            group-hover:border-[#c9a227]/50 transition-all duration-500" />
              
              {/* Floating geometric shapes */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#c9a227]/20 to-transparent 
                         rounded-3xl -z-20 backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-[#1e3a5f]/20 to-transparent 
                         rounded-3xl -z-20 backdrop-blur-sm"
              />
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6 mb-10">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.intro}
              </p>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#c9a227]/5 to-transparent border-l-4 border-[#c9a227]">
                <p className="text-lg font-medium text-[#0a0f1a] leading-relaxed">
                  {t.about.highlight}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expertise cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {t.about.expertise.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl bg-white shadow-xl shadow-gray-100/50 
                              border border-gray-100 hover:border-[#c9a227]/30 
                              hover:shadow-2xl hover:shadow-[#c9a227]/10 
                              transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] 
                                flex items-center justify-center mb-6
                                group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0a0f1a] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Hover accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c9a227] to-transparent 
                                rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}