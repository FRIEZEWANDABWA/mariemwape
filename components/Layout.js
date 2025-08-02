import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import AIChat from './AIChat';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState('fr');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'fr';
    setCurrentLang(savedLang);
    i18n.changeLanguage(savedLang);
  }, [i18n]);

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

  const switchLanguage = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
    setLangDropdown(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-2xl font-serif font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
              Marie Mwape Kashimbo
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-dark-900 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary-600 after:to-accent-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="relative">
                <button
                  onClick={() => setLangDropdown(!langDropdown)}
                  className="flex items-center space-x-2 text-dark-900 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                >
                  <Globe size={18} />
                  <span>{currentLang === 'fr' ? 'FR' : 'EN'}</span>
                  <ChevronDown size={16} />
                </button>
                
                {langDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 min-w-[120px]">
                    <button
                      onClick={() => switchLanguage('fr')}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${currentLang === 'fr' ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      Français
                    </button>
                    <button
                      onClick={() => switchLanguage('en')}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${currentLang === 'en' ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      English
                    </button>
                  </div>
                )}
              </div>

              <ThemeToggle />
            </div>

            <div className="lg:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="p-2 text-dark-900 dark:text-gray-200 hover:text-primary-600 transition-colors relative"
              >
                <Globe size={20} />
                {langDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 min-w-[120px]">
                    <button
                      onClick={() => switchLanguage('fr')}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${currentLang === 'fr' ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      Français
                    </button>
                    <button
                      onClick={() => switchLanguage('en')}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${currentLang === 'en' ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      English
                    </button>
                  </div>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-dark-900 dark:text-gray-200 hover:text-primary-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-dark-900 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {children}
      </main>

      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Marie Mwape Kashimbo
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('footer.mission')}
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-white font-bold">F</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-white font-bold">T</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-white font-bold">L</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-primary-400">{t('footer.quickLinks')}</h4>
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

            <div>
              <h4 className="font-semibold mb-4 text-primary-400">{t('getInvolved.contact')}</h4>
              <div className="space-y-2 text-gray-300">
                <p>Kisangani, RDC</p>
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

      <AIChat />
    </div>
  );
}