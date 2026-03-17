import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Heart, Zap, Award, Users, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    // This is a section, so we only update if it's prominently in view
    // For simplicity in this SPA, we'll let the intersection observer in App handle it or just set it here
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.title = "About Zenith Academy | Our Mission & Philosophy";
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) {
            metaDesc.setAttribute('content', "Learn about Zenith Academy's legacy of transformation. Discover our mission to empower individuals through intentional coaching and modern psychological insights.");
          }
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const values = [
    {
      icon: <Target className="text-stone-900" size={24} />,
      title: 'Our Mission',
      description: 'To empower individuals with the tools and mindset needed to achieve their highest aspirations and lead a life of purpose.',
    },
    {
      icon: <Heart className="text-stone-900" size={24} />,
      title: 'Our Values',
      description: 'Integrity, empathy, and continuous growth are at the core of everything we do at Zenith Academy.',
    },
    {
      icon: <Zap className="text-stone-900" size={24} />,
      title: 'Our Philosophy',
      description: 'We believe that every person has untapped potential that can be unlocked through intentional action and expert guidance.',
    },
  ];

  const stats = [
    { icon: <Users size={20} />, label: 'Students Empowered', value: '10k+' },
    { icon: <Award size={20} />, label: 'Expert Coaches', value: '50+' },
    { icon: <Globe size={20} />, label: 'Global Community', value: '25+' },
  ];

  return (
    <section id="about" className="py-32 bg-white overflow-hidden relative">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.02] select-none">
        <h2 className="text-[20vw] font-serif font-black whitespace-nowrap leading-none transform -rotate-12 translate-x-[-10%] translate-y-[20%]">
          ZENITH ACADEMY ZENITH ACADEMY
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold text-stone-400 uppercase tracking-[0.3em] mb-6 block">
              The Zenith Story
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif font-light text-stone-900 mb-10 leading-[1.1]">
              A Legacy of <br />
              <span className="italic font-normal text-stone-500">Transformation</span> & Growth.
            </h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed max-w-xl">
              <p>
                Founded in 2015, Zenith Academy has been at the forefront of personal and professional development. We don't just teach skills; we foster a complete shift in perspective that allows our students to see opportunities where others see obstacles.
              </p>
              <p>
                Our approach combines ancient wisdom with modern psychological insights, creating a unique coaching experience that is both profound and practical.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-stone-100">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="flex items-center text-stone-400 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-serif font-bold text-stone-900">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              style={{ y: y1 }}
              className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
                alt="Academy Life"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-20 -left-20 w-2/3 aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-white z-30 hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=600"
                alt="Team Meeting"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-stone-100 rounded-full flex items-center justify-center animate-pulse z-10">
              <div className="w-24 h-24 bg-stone-200 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-stone-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-10 rounded-[40px] bg-stone-50 border border-stone-100 hover:bg-stone-900 hover:text-white transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-8 group-hover:bg-white/10 group-hover:text-white transition-colors">
                {value.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{value.title}</h3>
              <p className="text-stone-600 group-hover:text-stone-400 leading-relaxed transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
