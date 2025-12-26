import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0f1a] to-[#050810] text-white py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#a8861e] 
                            flex items-center justify-center shadow-lg shadow-[#c9a227]/30">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">{t.hero.name}</span>
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              {language === 'he' ? 'מצוינות משפטית ומקצועיות ללא פשרות' : 'التميز القانوني والمهنية بلا تنازلات'}
            </p>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#c9a227]/20 border border-white/10 
                         flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#c9a227]/20 border border-white/10 
                         flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#c9a227]/20 border border-white/10 
                         flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">
              {language === 'he' ? 'קישורים מהירים' : 'روابط سريعة'}
            </h3>
            <ul className="space-y-3">
              {['home', 'about', 'services', 'testimonials', 'contact'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="text-white/60 hover:text-[#c9a227] transition-colors duration-300 text-sm 
                             hover:translate-x-1 inline-block"
                  >
                    {t.nav[section]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">
              {language === 'he' ? 'יצירת קשר' : 'اتصل بنا'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-[#c9a227] flex-shrink-0 mt-0.5" />
                <span className="text-white/60">{t.contact.addressText}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                <span className="text-white/60">{t.contact.phoneText}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                <span className="text-white/60">{t.contact.emailText}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <div>
              © {currentYear} {t.hero.name}. {language === 'he' ? 'כל הזכויות שמורות' : 'جميع الحقوق محفوظة'}
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#c9a227] transition-colors">
                {language === 'he' ? 'מדיניות פרטיות' : 'سياسة الخصوصية'}
              </a>
              <a href="#" className="hover:text-[#c9a227] transition-colors">
                {language === 'he' ? 'תנאי שימוש' : 'شروط الاستخدام'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}