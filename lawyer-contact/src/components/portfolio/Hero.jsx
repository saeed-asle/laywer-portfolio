import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Scale, ChevronDown, Award, TrendingUp, Target, Sparkles } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: t.hero.stats.years, label: t.hero.stats.yearsLabel, icon: Award },
    { value: t.hero.stats.cases, label: t.hero.stats.casesLabel, icon: Target },
    { value: t.hero.stats.rate, label: t.hero.stats.rateLabel, icon: TrendingUp }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0f1820] to-[#1a1f2e]">
        <ThreeBackground />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1a]/50 to-[#0a0f1a]" style={{ zIndex: 2 }} />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-20 left-20 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(201, 162, 39, 0.15) 0%, transparent 70%)',
          zIndex: 2
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-start order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/30 mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-[#c9a227]" />
              <span className="text-[#c9a227] text-sm font-semibold tracking-wider uppercase">
                {t.hero.greeting}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none"
            >
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                {t.hero.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-1 w-24 bg-gradient-to-r from-[#c9a227] to-transparent mb-8 mx-auto lg:mx-0"
            />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-2xl md:text-3xl font-light text-white/90 mb-6 leading-relaxed"
            >
              {t.hero.tagline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg text-white/60 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToContact}
                className="group relative px-10 py-5 bg-gradient-to-r from-[#c9a227] via-[#d4af37] to-[#c9a227] 
                         text-white font-bold text-lg rounded-2xl overflow-hidden
                         shadow-2xl shadow-[#c9a227]/30 hover:shadow-[#c9a227]/50 
                         transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t.hero.cta}
                  <Scale className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#a8861e] via-[#c9a227] to-[#a8861e] 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-16 grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="text-center lg:text-start"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <stat.icon className="w-5 h-5 text-[#c9a227]" />
                    <div className="text-4xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-white/50 text-sm font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#c9a227]/20 to-transparent rounded-[3rem] blur-xl" />
                
                {/* Image */}
                <div className="relative h-full rounded-[3rem] overflow-hidden border-4 border-[#c9a227]/30 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=faces"
                    alt="Attorney Amit Rosenberg"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60" />
                  
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#a8861e] flex items-center justify-center">
                        <Scale className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Top Rated</div>
                        <div className="text-white/70 text-sm">Legal Expert 2024</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-8 -right-8 w-32 h-32 border-4 border-[#c9a227]/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-8 -left-8 w-24 h-24 border-4 border-[#c9a227]/20 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-6 h-6 text-[#c9a227]" />
        </motion.div>
      </motion.div>
    </section>
  );
}