import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.foundation'), href: '/foundation' },
    { name: t('nav.political'), href: '/political' },
    { name: t('nav.media'), href: '/media' },
    { name: t('nav.getInvolved'), href: '/get-involved' },
  ];

  const switchLanguage = () => {
    // Simple language toggle for static site
    const currentLang = localStorage.getItem('language') || 'fr';
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    localStorage.setItem('language', newLang);
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm border-b border-earth-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-serif font-bold text-primary-600">
                Marie Mwape Kashimbo
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-earth-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={switchLanguage}
                className="flex items-center space-x-1 text-earth-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                <Globe size={16} />
                <span>EN/FR</span>
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={switchLanguage}
                className="mr-2 p-2 text-earth-700 hover:text-primary-600"
              >
                <Globe size={20} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-earth-700 hover:text-primary-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-earth-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-earth-700 hover:text-primary-600 hover:bg-earth-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="bg-earth-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-serif font-semibold mb-4">Marie Mwape Kashimbo</h3>
            <p className="text-earth-300 mb-4">{t('footer.mission')}</p>
            <p className="text-earth-400 text-sm">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}