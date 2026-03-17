import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onHome: () => void;
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onHome, onNavigate }) => {
  return (
    <footer id="contact" className="bg-stone-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <button 
              onClick={onHome}
              className="text-2xl font-serif font-bold tracking-tight text-white mb-8 block cursor-pointer"
            >
              ZENITH<span className="text-stone-500">ACADEMY</span>
            </button>
            <p className="text-stone-400 text-sm leading-relaxed mb-8">
              Empowering individuals to lead lives of purpose, clarity, and impact through intentional coaching and curated curriculum.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">About Us</button></li>
              <li><button onClick={() => onNavigate('classes')} className="hover:text-white transition-colors cursor-pointer">Our Classes</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors cursor-pointer">The Journal</button></li>
              <li><button onClick={() => onNavigate('classes')} className="hover:text-white transition-colors cursor-pointer">Admissions</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Contact Us</h4>
            <ul className="space-y-4 text-sm text-stone-400">
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-stone-500" />
                hello@zenithacademy.com
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-stone-500" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-3 text-stone-500" />
                123 Wisdom Way, San Francisco, CA
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Newsletter</h4>
            <p className="text-stone-400 text-sm mb-6">
              Subscribe to receive weekly insights and academy updates.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-stone-800 border-none rounded-full py-4 px-6 text-sm text-white placeholder-stone-500 focus:ring-2 focus:ring-stone-700 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-white text-stone-900 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 font-medium uppercase tracking-widest">
          <p>© 2026 Zenith Coaching Academy. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
