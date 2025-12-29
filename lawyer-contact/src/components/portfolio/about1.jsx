import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Building2, Users, Trophy, TrendingUp, Globe, Lightbulb } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const features = [
    { icon: Users, title: t.about.expertise[0].title, desc: t.about.expertise[0].desc, color: 'from-blue-500 to-blue-600' },
    { icon: TrendingUp, title: t.about.expertise[1].title, desc: t.about.expertise[1].desc, color: 'from-green-500 to-green-600' },
    { icon: Trophy, title: t.about.expertise[2].title, desc: t.about.expertise[2].desc, color: 'from-amber-500 to-amber-600' }
  ];

  const firmValues = [
    { icon: Building2, label: 'Corporate Excellence', value: 'הקמה 1999' },
    { icon: Globe, label: 'International Reach', value: '5 מדינות' },
    { icon: Lightbulb, label: 'Innovation First', value: 'טכנולוגיה מתקדמת' }
  ];

  return (
    <section id="about" className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#c9a227]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#1e3a5f]/5 to-transparent rounded-full blur-3xl" />

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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e3a5f]/5 border border-[#1e3a5f]/10 mb-6"
          >
            <Building2 className="w-5 h-5 text-[#1e3a5f]" />
            <span className="text-[#1e3a5f] font-bold text-sm tracking-wider uppercase">
              About The Firm
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0f1a] mb-6 leading-tight">
            {t.about.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-20">
          {/* Left - Office Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              {/* Main office image */}
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                  alt="Law Firm Office"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/60 via-transparent to-transparent" />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-8 p-6 rounded-3xl bg-white shadow-2xl border border-gray-100 max-w-xs"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] flex items-center justify-center">
                    <Trophy className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#1e3a5f]">25+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Excellence</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  Established 1999 | Trusted by Fortune 500 Companies
                </div>
              </motion.div>

              {/* Decorative geometric shapes */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#c9a227]/20 to-transparent rounded-3xl -z-10"
              />
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-tr from-[#1e3a5f]/10 to-transparent rounded-3xl -z-10"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.intro}
              </p>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1e3a5f]/5 via-[#c9a227]/5 to-transparent border-l-4 border-[#c9a227]">
                <p className="text-lg font-semibold text-[#0a0f1a] leading-relaxed">
                  {t.about.highlight}
                </p>
              </div>
            </div>

            {/* Firm Values */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {firmValues.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-4 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-[#c9a227]" />
                  <div className="text-sm font-bold text-[#1e3a5f] mb-1">{item.value}</div>
                  <div className="text-xs text-gray-500">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl 
                            border border-gray-100 hover:border-[#c9a227]/30 
                            transition-all duration-500 hover:-translate-y-3">
                {/* Icon with gradient */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} 
                              flex items-center justify-center mb-6 shadow-lg
                              group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#0a0f1a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c9a227] via-[#d4af37] to-[#c9a227] 
                              rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8f] to-[#1e3a5f] relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          <div className="relative text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to work with the best?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join leading companies that trust us with their legal needs
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-gradient-to-r from-[#c9a227] to-[#d4af37] 
                       text-white font-bold text-lg rounded-2xl
                       hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#c9a227]/30"
            >
              Schedule a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

    // about: {
    //   title: 'המשרד המוביל לפתרונות משפטיים מתקדמים',
    //   subtitle: 'צוות אליטה של 15 עורכי דין מובילים | תשתית טכנולוגית חדשנית | גישה אישית עם יכולות ארגון גדול',
    //   intro: 'משרד רוזנברג ושות\' הוקם ב-1999 ומהווה כיום אחד ממשרדי עורכי הדין המובילים בישראל. אנו מתמחים בייעוץ ובייצוג משפטי מורכב לחברות ציבוריות, קרנות השקעה, חברות הייטק וארגונים בינלאומיים. המשרד שלנו משלב מומחיות עמוקה בתחומי התמחות ספציפיים עם יכולת להתמודד עם אתגרים משפטיים רב-תחומיים.',
    //   highlight: 'אנו גאים בתיק לקוחות יוקרתי הכולל 8 חברות מתוך ה-TA-35, יותר מ-40 חברות הייטק ומספר קרנות השקעה בינלאומיות. המשרד זכה בשנים האחרונות בפרסים יוקרתיים כולל "משרד השנה לדיני מסחר" ו"עסקת השנה" מטעם המדריך המשפטי BDI.',
    //   expertise: [
    //     { title: 'צוות מקצועי מוביל', desc: '15 עורכי דין בעלי ניסיון עשיר | 4 שותפים בכירים | 8 חברי צוות תמיכה מקצועיים | התמחות בתחומי עומק ספציפיים' },
    //     { title: 'הישגים עסקיים מרשימים', desc: 'ליווי עסקאות בהיקף כולל של מעל 5 מיליארד ₪ בשנה האחרונה | ייצוג בעשרות הליכי ליטיגציה מורכבים | ייעוץ קבוע ל-120+ לקוחות ארגוניים' },
    //     { title: 'הכרה ופרסים מקצועיים', desc: 'דירוג A+ במדריך המשפטי BDI | משרד השנה לדיני מסחר 2024 | המלצה ב-Legal 500 ו-Chambers & Partners' }
    //   ]
    // },

    //     about: {
    //   title: 'المكتب الرائد للحلول القانونية المتقدمة',
    //   subtitle: 'فريق نخبة من 15 محاميًا رائدًا | بنية تحتية تكنولوجية مبتكرة | نهج شخصي بقدرات منظمة كبيرة',
    //   intro: 'تم تأسيس مكتب روزنبرغ وشركاه في عام 1999 ويعد اليوم أحد مكاتب المحاماة الرائدة في إسرائيل. نحن متخصصون في الاستشارات والتمثيل القانوني المعقد للشركات العامة وصناديق الاستثمار وشركات التكنولوجيا الفائقة والمنظمات الدولية. يجمع مكتبنا بين الخبرة العميقة في مجالات التخصص المحددة والقدرة على مواجهة التحديات القانونية متعددة التخصصات.',
    //   highlight: 'نحن فخورون بمحفظة عملاء مرموقة تضم 8 شركات من TA-35، وأكثر من 40 شركة تقنية فائقة وعدة صناديق استثمار دولية. حصل المكتب في السنوات الأخيرة على جوائز مرموقة بما في ذلك "مكتب العام للقانون التجاري" و"صفقة العام" من دليل BDI القانوني.',
    //   expertise: [
    //     { title: 'فريق محترف رائد', desc: '15 محاميًا ذوي خبرة غنية | 4 شركاء كبار | 8 أعضاء فريق دعم محترفين | تخصص في مجالات عمق محددة' },
    //     { title: 'إنجازات تجارية مبهرة', desc: 'مرافقة صفقات بحجم إجمالي يزيد عن 5 مليار شيكل في العام الماضي | تمثيل في عشرات إجراءات التقاضي المعقدة | استشارات منتظمة لأكثر من 120 عميل مؤسسي' },
    //     { title: 'اعتراف وجوائز مهنية', desc: 'تصنيف A+ في دليل BDI القانوني | مكتب العام للقانون التجاري 2024 | توصية في Legal 500 و Chambers & Partners' }
    //   ]
    // },