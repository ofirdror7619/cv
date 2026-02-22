'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Military', href: '#military' },
  ];

  return (
    <nav className="shadow-md sticky top-0 z-50" style={{backgroundColor: '#1E293B'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <h1 className="text-lg sm:text-xl font-bold" style={{color: '#E2E8F0'}}>
            Ofir Dror
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors hover:opacity-80"
                style={{color: '#E2E8F0'}}
                onMouseEnter={(e) => e.target.style.color = '#38BDF8'}
                onMouseLeave={(e) => e.target.style.color = '#E2E8F0'}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-8 h-8" style={{color: '#E2E8F0'}} />
            ) : (
              <Menu className="w-8 h-8" style={{color: '#E2E8F0'}} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;