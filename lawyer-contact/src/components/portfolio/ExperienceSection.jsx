import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy } from 'lucide-react';
import { useLanguage } from '../LanguageContext'; 

export default function ExperienceSection() {
  const { t } = useLanguage();
  const content = t.experience;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const iconMap = {
    briefcase: Briefcase,
    graduation: GraduationCap,
    trophy: Trophy,
  };

  return (
    <section 
      id="experience" 
        className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-[#0a0f1a] to-[#0f1820]"

    //   className="py-24 md:py-32 bg-gradient-to-br from-[#1a1f3c] via-[#2d3142] to-[#1a1f3c] relative overflow-hidden"
      dir="rtl"
      ref={ref}
    >
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="absolute h-px bg-gradient-to-r from-transparent via-[#c9a962] to-transparent"
            style={{ 
              top: `${20 + i * 15}%`, 
              left: '10%', 
              right: '10%',
              transform: `rotate(${-2 + i}deg)`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a962] text-sm tracking-widest uppercase font-medium">
            {content.sectionLabel}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6">
            {content.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#c9a962] to-[#b8944f] mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute right-1/2 md:right-1/2 transform translate-x-1/2 h-full w-px bg-gradient-to-b from-[#c9a962] via-[#c9a962]/50 to-transparent" />

          <div className="space-y-12">
            {content.timeline.map((item, idx) => {
              const Icon = iconMap[item.icon] || Briefcase;
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div 
                      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#c9a962]/30 transition-all duration-500 hover:bg-white/10 group"
                      whileHover={{ y: -5 }}
                    >
                      <span className="text-[#c9a962] text-sm font-medium">{item.year}</span>
                      <h3 className="text-xl md:text-2xl font-medium text-white mt-2 mb-3 group-hover:text-[#c9a962] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                      {item.achievements && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, aIdx) => (
                              <li key={aIdx} className="flex items-center gap-2 text-sm text-gray-300">
                                <div className="w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Center icon */}
                  <div className="relative z-10 flex items-center justify-center">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-[#c9a962] to-[#b8944f] rounded-full flex items-center justify-center shadow-lg shadow-[#c9a962]/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Spacer for layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}