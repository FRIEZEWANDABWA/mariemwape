import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import ChatWidget from './ChatWidget';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.foundation'), href: '/foundation' },
    { name: t('nav.political'), href: '/political' },
    { name: t('nav.media'), href: '/media' },
    { name: t('nav.getInvolved'), href: '/get-involved' },
  ];

  const switchLanguage = () => {
    const currentLang = localStorage.getItem('language') || 'fr';
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    localStorage.setItem('language', newLang);
    window.location.reload();
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl font-serif font-bold text-gradient hover:scale-105 transition-transform">
              Marie Mwape Kashimbo
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdown(!langDropdown)}
                  className="flex items-center space-x-2 nav-link"
                >
                  <Globe size={18} />
                  <span>EN/FR</span>
                  <ChevronDown size={16} />
                </button>
                
                {langDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[120px]">
                    <button
                      onClick={() => {
                        switchLanguage();
                        setLangDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        switchLanguage();
                        setLangDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      Français
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={switchLanguage}
                className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <Globe size={20} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="container-custom py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-4 text-gradient">
                Marie Mwape Kashimbo
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('footer.mission')}
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-white font-bold">F</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-white font-bold">T</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-white font-bold">L</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>Kisangani, DRC</p>
                <p>contact@mariemwape.org</p>
                <p>+243 XXX XXX XXX</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}