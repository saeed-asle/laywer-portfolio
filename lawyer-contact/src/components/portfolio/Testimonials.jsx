import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="relative py-32 md:py-40 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8f9fa] to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a227]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />

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
              Testimonials
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#0a0f1a] mb-6">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.testimonials.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-10 rounded-3xl bg-white shadow-xl shadow-gray-100/50 
                            border border-gray-100 hover:border-[#c9a227]/30
                            hover:shadow-2xl hover:shadow-[#c9a227]/10 
                            transition-all duration-500 hover:-translate-y-2">
                {/* Decorative quote */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a227] to-[#a8861e] 
                              flex items-center justify-center shadow-xl shadow-[#c9a227]/30
                              group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#c9a227] text-[#c9a227]" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-gray-700 leading-relaxed text-lg mb-8 relative z-10">
                  "{item.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] 
                                flex items-center justify-center text-white text-xl font-bold
                                shadow-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#0a0f1a] text-lg">{item.name}</div>
                    <div className="text-gray-500 text-sm">{item.role}</div>
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c9a227] via-[#d4af37] to-[#c9a227] 
                              rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}