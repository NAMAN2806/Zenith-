import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Course } from '../types';
import { Clock, BarChart, ArrowUpRight } from 'lucide-react';

interface ClassesProps {
  onSelectCourse: (course: Course) => void;
  courses: Course[];
}

export const Classes: React.FC<ClassesProps> = ({ onSelectCourse, courses }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.title = "Our Classes | Professional Coaching Curriculum | Zenith Academy";
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) {
            metaDesc.setAttribute('content', "Explore our curated coaching courses. From Leadership Mastery to Personal Growth, our curriculum is designed for meaningful success and professional impact.");
          }
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('classes');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="classes" className="py-32 bg-stone-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-stone-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold text-stone-400 uppercase tracking-[0.4em] mb-6 block">
              The Curriculum
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif font-light text-stone-900 leading-[1.1]">
              Curated Courses for <br />
              <span className="italic font-normal text-stone-500">Meaningful</span> Success.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 md:mt-0"
          >
            <p className="text-stone-600 max-w-sm leading-relaxed text-lg">
              Each course is designed to provide a deep dive into specific areas of growth, combining theory with actionable practice.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              onClick={() => onSelectCourse(course)}
              className="group cursor-pointer relative"
            >
              <div className="relative aspect-[16/10] rounded-[48px] overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-700">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <div className="max-w-[80%]">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                          {course.level}
                        </span>
                        <div className="flex items-center text-[10px] text-white/70 uppercase tracking-widest font-bold">
                          <Clock size={12} className="mr-1.5" />
                          {course.duration}
                        </div>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-2 leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-white/70 text-sm line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        {course.description}
                      </p>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-stone-900 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <p className="text-stone-400 text-sm uppercase tracking-[0.2em] font-bold mb-8">Not sure where to start?</p>
          <button className="px-12 py-5 bg-stone-900 text-white rounded-full font-bold uppercase tracking-widest hover:bg-stone-800 hover:scale-105 transition-all shadow-xl">
            Take the Assessment
          </button>
        </motion.div>
      </div>
    </section>
  );
};
