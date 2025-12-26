import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Briefcase, Building2, Scale, Users, Handshake, Lightbulb, ArrowRight } from 'lucide-react';

const iconMap = {
  briefcase: Briefcase,
  building: Building2,
  scale: Scale,
  users: Users,
  handshake: Handshake,
  lightbulb: Lightbulb
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-32 md:py-40 overflow-hidden bg-[#0a0f1a]">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 48%, rgba(201, 162, 39, 0.3) 48%, rgba(201, 162, 39, 0.3) 52%, transparent 52%),
            linear-gradient(-30deg, transparent 48%, rgba(201, 162, 39, 0.3) 48%, rgba(201, 162, 39, 0.3) 52%, transparent 52%)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl" />

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
            className="inline-block px-6 py-2 rounded-full bg-[#c9a227]/20 border border-[#c9a227]/30 mb-6"
          >
            <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">
              Services
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t.services.title}
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.areas.map((service, index) => {
            const Icon = iconMap[service.icon] || Briefcase;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-3xl bg-white/5 backdrop-blur-md 
                              border border-white/10 hover:border-[#c9a227]/50
                              hover:bg-white/10 transition-all duration-500
                              hover:shadow-2xl hover:shadow-[#c9a227]/20
                              hover:-translate-y-2">
                  {/* Decorative corner with animation */}
                  <motion.div 
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#c9a227]/20 to-transparent 
                                rounded-tr-3xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.2, rotate: 45 }}
                  />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#a8861e] 
                                  flex items-center justify-center
                                  group-hover:scale-110 group-hover:rotate-6 transition-all duration-300
                                  shadow-lg shadow-[#c9a227]/30">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#c9a227] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Arrow indicator */}
                  <div className="flex items-center gap-2 text-[#c9a227] opacity-0 group-hover:opacity-100 
                                transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="text-sm font-semibold tracking-wider uppercase">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}