import React from 'react';
import { motion } from 'motion/react';
import { BlogPost } from '../types';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogProps {
  onSelectPost: (post: BlogPost) => void;
  posts: BlogPost[];
}

export const Blog: React.FC<BlogProps> = ({ onSelectPost, posts }) => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4 block">
              Insights & Articles
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-stone-900 leading-tight">
              The <span className="italic font-normal">Zenith</span> Journal.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
              onClick={() => onSelectPost(post)}
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-xs text-stone-400 mb-4 uppercase tracking-widest font-semibold">
                <div className="flex items-center">
                  <Calendar size={12} className="mr-1.5" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User size={12} className="mr-1.5" />
                  {post.author}
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4 group-hover:text-stone-700 transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <button className="flex items-center text-stone-900 font-bold text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                Read Article
                <ArrowRight size={14} className="ml-2" />
              </button>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="border border-stone-300 text-stone-900 px-10 py-4 rounded-full text-sm font-medium hover:bg-stone-50 transition-all">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};
