import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Send, CheckCircle, Clock, Printer, Loader2 } from 'lucide-react';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t } = useLanguage();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    { icon: Phone, label: t.contact.phoneLabel, value: t.contact.phoneText },
    { icon: Mail, label: t.contact.emailLabel, value: t.contact.emailText },
    { icon: MapPin, label: t.contact.address, value: t.contact.addressText },
    { icon: Clock, label: t.contact.hours, value: t.contact.hoursText },
    { icon: Printer, label: t.contact.faxLabel, value: t.contact.faxText },
  ];

  return (
    <section
      id="contact"
  className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-[#0a0f1a] to-[#0f1820]"
      dir={t.dir}
      ref={ref}
    >
      {/* Decorative elements (same vibe as ContactSection) */}
{/* Background effects */}
<div className="absolute inset-0 opacity-20">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(201, 162, 39, 0.3) 1px, transparent 0)`,
      backgroundSize: '40px 40px',
    }}
  />
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a962] text-sm tracking-widest uppercase font-medium">
            {t.contact.sectionLabel ?? "Contact"}
          </span>

          <h2 className="text-4xl md:text-5xl font-light text-white mt-4 mb-6">
            {t.contact.title}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#c9a962] to-[#b8944f] mx-auto rounded-full" />

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg font-light">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#c9a962]/20 transition-colors">
                  <info.icon className="w-5 h-5 text-[#c9a962]" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                  <p className="text-white font-light break-words">{info.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Map (same placeholder style, or keep your iframe if you want) */}
            <motion.div
              className="mt-8 rounded-2xl overflow-hidden h-48 bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
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

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-white/10"
            >
              {isSuccess ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">
                    {t.contact.success}
                  </h3>
                  <p className="text-gray-400">
                    {t.contact.successMessage ?? "Thanks! We’ll get back to you soon."}
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">{t.contact.name}</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a962] h-12 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">{t.contact.phone}</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a962] h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">{t.contact.email}</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a962] h-12 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">{t.contact.subject}</label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a962] h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-8">
                    <label className="text-sm text-gray-400">{t.contact.message}</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a962] min-h-[150px] rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-[#c9a962] to-[#b8944f] hover:from-[#b8944f] hover:to-[#a78540] text-[#1a1f3c] font-medium rounded-xl text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a962]/30"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5 ml-2" />
                        {t.contact.send}
                      </>
                    )}
                  </Button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
