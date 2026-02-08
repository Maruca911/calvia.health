import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Activity, Menu, X, ArrowRight } from 'lucide-react';
import { useScrollHeader } from '../../hooks/useScrollHeader';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = useScrollHeader();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ];

  const isTransparentHeader = isHome && !isScrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparentHeader
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="container-narrow section-padding !py-0">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
            <div className="relative">
              <Heart className={`w-7 h-7 transition-colors ${isTransparentHeader ? 'text-white' : 'text-dark-teal'}`} />
              <Activity className={`w-4 h-4 absolute -top-1 -right-1 transition-colors ${isTransparentHeader ? 'text-white/70' : 'text-sky-blue'}`} />
            </div>
            <span className={`font-heading font-bold text-xl transition-colors ${isTransparentHeader ? 'text-white' : 'text-dark-teal'}`}>
              Calvia Health
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-body-sm font-medium transition-colors ${
                  isTransparentHeader
                    ? 'text-white/80 hover:text-white'
                    : 'text-text-grey hover:text-dark-teal'
                } ${location.pathname === link.href ? (isTransparentHeader ? 'text-white' : 'text-dark-teal') : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/get-matched"
              className={`font-semibold px-5 py-2 rounded-lg text-body-sm transition-all duration-300 inline-flex items-center gap-1.5 ${
                isTransparentHeader
                  ? 'bg-white text-dark-teal hover:bg-gray-50'
                  : 'bg-dark-teal text-white hover:bg-dark-teal-light'
              }`}
            >
              Get Matched <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors ${isTransparentHeader ? 'text-white' : 'text-dark-teal'}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-subtle-grey/30 animate-fade-in shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 px-3 rounded-lg font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-dark-teal bg-dark-teal/5'
                    : 'text-text-grey hover:text-dark-teal hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/get-matched"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-dark-teal text-white font-semibold py-2.5 rounded-lg hover:bg-dark-teal-light transition-colors"
              >
                Get Matched Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
