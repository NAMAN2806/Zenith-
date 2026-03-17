import React from 'react';
import { motion } from 'motion/react';
import { Course } from '../types';
import { ArrowLeft, Clock, BarChart } from 'lucide-react';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-24 max-w-4xl mx-auto px-6"
    >
      <button
        onClick={onBack}
        className="flex items-center text-stone-500 hover:text-stone-900 transition-colors mb-8 group"
      >
        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Courses
      </button>

      <div className="rounded-[40px] overflow-hidden mb-12 aspect-[16/9] shadow-2xl">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <span className="px-4 py-1.5 bg-stone-100 text-stone-600 rounded-full text-xs font-bold uppercase tracking-widest">
          {course.level}
        </span>
        <div className="flex items-center text-stone-400 text-sm">
          <Clock size={16} className="mr-2" />
          {course.duration}
        </div>
        <div className="flex items-center text-stone-400 text-sm">
          <BarChart size={16} className="mr-2" />
          {course.level} Level
        </div>
      </div>

      <h1 className="text-5xl lg:text-6xl font-serif font-light text-stone-900 mb-8 leading-tight">
        {course.title}
      </h1>

      <div className="prose prose-stone lg:prose-xl max-w-none">
        <p className="text-xl text-stone-600 leading-relaxed mb-8 italic">
          {course.description}
        </p>
        <div className="text-stone-800 leading-relaxed space-y-6">
          {course.content.split('\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      <div className="mt-16 p-12 bg-stone-900 rounded-[40px] text-white text-center">
        <h2 className="text-3xl font-serif mb-6">Ready to start your journey?</h2>
        <p className="text-stone-400 mb-8 max-w-md mx-auto">
          Join hundreds of students who have transformed their lives through our {course.title} program.
        </p>
        <button className="bg-white text-stone-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors">
          Enroll in Course
        </button>
      </div>
    </motion.div>
  );
};
