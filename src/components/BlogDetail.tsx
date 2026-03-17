import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { BlogPost } from '../types';
import { ArrowLeft, Calendar, User, Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';

interface BlogDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({ post, onBack }) => {
  useEffect(() => {
    // Dynamically update meta tags for SEO
    document.title = post.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', post.metaDescription);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = post.metaDescription;
      document.head.appendChild(newMeta);
    }

    return () => {
      // Reset meta tags on unmount
      document.title = 'Zenith Coaching Academy';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'An informational website for Zenith Coaching Academy, featuring course details, philosophy, and insightful blogs.');
      }
    };
  }, [post]);

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    // Simple feedback could be added here if needed
  };

  return (
    <motion.article
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
        Back to Blog
      </button>

      <div className="flex items-center space-x-4 text-xs text-stone-400 mb-6 uppercase tracking-widest font-semibold">
        <span className="px-3 py-1 bg-stone-900 text-white rounded-full">
          {post.category}
        </span>
        <div className="flex items-center">
          <Calendar size={12} className="mr-1.5" />
          {post.date}
        </div>
        <div className="flex items-center">
          <User size={12} className="mr-1.5" />
          {post.author}
        </div>
      </div>

      <h1 className="text-5xl lg:text-6xl font-serif font-light text-stone-900 mb-12 leading-tight">
        {post.title}
      </h1>

      <div className="rounded-[40px] overflow-hidden mb-16 aspect-[16/9] shadow-2xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="prose prose-stone lg:prose-xl max-w-none">
        <p className="text-2xl text-stone-600 leading-relaxed mb-12 font-serif italic border-l-4 border-stone-200 pl-8">
          {post.excerpt}
        </p>
        <div className="text-stone-800 leading-relaxed space-y-8 text-lg">
          {post.content.split('\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      <div className="mt-24 pt-12 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-900 font-bold">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-bold text-stone-900">{post.author}</p>
            <p className="text-xs text-stone-400 uppercase tracking-widest">Academy Instructor</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-4">
          <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Share this article</p>
          <div className="flex items-center space-x-3">
            <button 
              onClick={shareOnTwitter}
              className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all shadow-sm"
              title="Share on Twitter"
            >
              <Twitter size={18} />
            </button>
            <button 
              onClick={shareOnFacebook}
              className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all shadow-sm"
              title="Share on Facebook"
            >
              <Facebook size={18} />
            </button>
            <button 
              onClick={shareOnLinkedIn}
              className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all shadow-sm"
              title="Share on LinkedIn"
            >
              <Linkedin size={18} />
            </button>
            <button 
              onClick={copyToClipboard}
              className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all shadow-sm"
              title="Copy Link"
            >
              <LinkIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
