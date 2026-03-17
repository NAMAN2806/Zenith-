/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Classes } from './components/Classes';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { CourseDetail } from './components/CourseDetail';
import { BlogDetail } from './components/BlogDetail';
import { COURSES, BLOG_POSTS } from './constants';
import { Course, BlogPost } from './types';
import { motion, AnimatePresence } from 'motion/react';

type View = 'home' | 'course-detail' | 'blog-detail';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    setView('course-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    setView('blog-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (id: string) => {
    if (view !== 'home') {
      setView('home');
      // Wait for transition to finish before scrolling
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-[#fcfbf7] selection:bg-stone-200 selection:text-stone-900">
        <Navbar onHome={handleBackToHome} onNavigate={handleNavigate} />
        
        <main>
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero />
              <About />
              <Classes courses={COURSES} onSelectCourse={handleSelectCourse} />
              <Blog posts={BLOG_POSTS} onSelectPost={handleSelectPost} />
            </motion.div>
          )}

          {view === 'course-detail' && selectedCourse && (
            <CourseDetail 
              key="course-detail"
              course={selectedCourse} 
              onBack={handleBackToHome} 
            />
          )}

          {view === 'blog-detail' && selectedPost && (
            <BlogDetail 
              key="blog-detail"
              post={selectedPost} 
              onBack={handleBackToHome} 
            />
          )}
        </main>

        <Footer onHome={handleBackToHome} onNavigate={handleNavigate} />
        
        {/* Simple Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-white border border-stone-100 rounded-full shadow-xl flex items-center justify-center text-stone-900 hover:bg-stone-50 transition-colors z-40"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </motion.button>
      </div>
    </AnimatePresence>
  );
}

