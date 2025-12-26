import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Send, CheckCircle, Clock, Zap } from 'lucide-react';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: "saaedasle1@gmail.com",
      },
      "YOUR_PUBLIC_KEY"
    );

    setIsSuccess(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setIsSuccess(false), 5000);
  } catch (err) {
    console.error(err);
    alert("Failed to send message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    { icon: MapPin, label: t.contact.address, value: t.contact.addressText },
    { icon: Phone, label: t.contact.phoneLabel, value: t.contact.phoneText },
    { icon: Zap, label: t.contact.emergencyLabel, value: t.contact.emergencyText },
    { icon: Mail, label: t.contact.emailLabel, value: t.contact.emailText },
    { icon: Clock, label: t.contact.hours, value: t.contact.hoursText }
  ];

  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-[#0a0f1a] to-[#0f1820]">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(201, 162, 39, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

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
              Contact
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 
                          shadow-2xl shadow-black/20 hover:bg-white/8 transition-all duration-500">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#c9a227] to-[#a8861e] 
                                flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#c9a227]/30">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">{t.contact.success}</h3>
                  <p className="text-white/60">We'll get back to you within 24 hours</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">
                        {t.contact.name}
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-14 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/40
                                 focus:bg-white/15 focus:border-[#c9a227] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white/90 mb-2">
                        {t.contact.phone}
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-14 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/40
                                 focus:bg-white/15 focus:border-[#c9a227] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      {t.contact.email}
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-14 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/40
                               focus:bg-white/15 focus:border-[#c9a227] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      {t.contact.subject}
                    </label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="h-14 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/40
                               focus:bg-white/15 focus:border-[#c9a227] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/90 mb-2">
                      {t.contact.message}
                    </label>
                    <Textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/40
                               focus:bg-white/15 focus:border-[#c9a227] transition-all resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 rounded-xl bg-gradient-to-r from-[#c9a227] via-[#d4af37] to-[#c9a227] 
                             hover:from-[#a8861e] hover:to-[#c9a227] text-white font-bold text-lg
                             shadow-2xl shadow-[#c9a227]/30 hover:shadow-[#c9a227]/50
                             transition-all duration-500 hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        {t.contact.sending}
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        <Send className="w-5 h-5" />
                        {t.contact.send}
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-sm 
                              border border-white/10 hover:bg-white/10 hover:border-[#c9a227]/30 
                              transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c9a227] to-[#a8861e] 
                                flex items-center justify-center flex-shrink-0
                                group-hover:scale-110 group-hover:rotate-6 transition-all duration-300
                                shadow-lg shadow-[#c9a227]/30">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white/50 font-medium mb-1 uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="text-lg font-semibold text-white leading-relaxed">
                      {info.value}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0361956765783!2d34.77089!3d32.06463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDAzJzUyLjciTiAzNMKwNDYnMTUuMiJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}