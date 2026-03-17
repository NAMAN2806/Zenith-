import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-stone-50">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-100 -skew-x-12 transform origin-top-right -z-10" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-stone-200/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 bg-stone-200 text-stone-600 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
            Elevate Your Potential
          </span>
          <h1 className="text-6xl lg:text-8xl font-serif font-light leading-[0.9] text-stone-900 mb-8">
            Master the Art of <br />
            <span className="italic font-normal">Intentional</span> Living.
          </h1>
          <p className="text-lg text-stone-600 max-w-lg mb-10 leading-relaxed">
            Zenith Academy provides world-class coaching programs designed to help you unlock your true potential and lead a life of purpose, clarity, and impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-stone-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-stone-800 transition-all flex items-center justify-center group"
            >
              Explore Courses
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button className="border border-stone-300 text-stone-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-stone-100 transition-all">
              Our Philosophy
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
              alt="Coaching Session"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] border border-stone-100">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
                <span className="text-stone-900 font-bold">98%</span>
              </div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Success Rate</span>
            </div>
            <p className="text-sm text-stone-600 leading-snug">
              Our students report a significant increase in clarity and productivity within 3 months.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
