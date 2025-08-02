import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Heart, Users, Globe, Star, Award, Zap, Download, UserPlus, Calendar, Trophy, Building } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, number: '1000+', label: t('stats.livesImpacted') },
    { icon: Heart, number: '500+', label: t('stats.childrenSupported') },
    { icon: Globe, number: '15+', label: t('stats.communitiesReached') },
    { icon: Award, number: '3+', label: t('stats.yearsOfService') },
  ];

  const achievements = [
    {
      year: '2021',
      title: t('achievements.foundedFmmps'),
      description: t('achievements.foundedDescription'),
      icon: Building,
      color: 'from-primary-400 to-accent-400'
    },
    {
      year: '2022',
      title: t('achievements.actuStars'),
      description: t('achievements.actuDescription'),
      icon: Trophy,
      color: 'from-accent-400 to-primary-400'
    },
    {
      year: '2025',
      title: t('achievements.joinedNogec'),
      description: t('achievements.nogecDescription'),
      icon: Users,
      color: 'from-primary-500 to-accent-500'
    },
    {
      year: 'En cours',
      title: t('achievements.aidPrograms'),
      description: t('achievements.aidDescription'),
      icon: Heart,
      color: 'from-accent-500 to-primary-500'
    }
  ];

  const foundationPillars = [
    {
      icon: Heart,
      title: t('pillars.foodDistribution'),
      description: t('pillars.foodDescription'),
      image: '/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg'
    },
    {
      icon: Building,
      title: t('pillars.infrastructureAdvocacy'),
      description: t('pillars.infrastructureDescription'),
      image: '/images/bill-wegener-7MD4DR9jbP0-unsplash.jpg'
    },
    {
      icon: Users,
      title: t('pillars.communityEvents'),
      description: t('pillars.eventsDescription'),
      image: '/images/seth-doyle-zf9_yiAekJs-unsplash.jpg'
    }
  ];

  return (
    <>
      <Head>
        <title>Marie Mwape Kashimbo • Philanthrope & Leader Communautaire | FMMPS</title>
        <meta name="description" content="Découvrez la mission de Marie Mwape d'autonomiser les communautés à travers le Congo par sa fondation FMMPS • animée par la compassion et l'action." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Marie Mwape Kashimbo • Philanthrope & Leader Communautaire" />
        <meta property="og:description" content="Découvrez la mission de Marie Mwape d'autonomiser les communautés à travers le Congo par sa fondation FMMPS • animée par la compassion et l'action." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mariemwape.netlify.app/" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-dark-900 dark:text-white">
                {t('home.heroTitle')}
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-6 text-primary-600 dark:text-primary-400">
                {t('home.heroSubtitle')}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t('home.heroText')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center group">
                  {t('home.learnMore')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link href="/get-involved" className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-primary-700 dark:text-primary-400 font-semibold py-4 px-8 rounded-full border-2 border-primary-600 dark:border-primary-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center">
                  {t('getInvolved.title')}
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary-200 via-accent-200 to-primary-300 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"></div>
                <div className="absolute inset-4 bg-white rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/main prof pic.jpg"
                    alt="Marie Mwape Kashimbo • Défenseure du Progrès Social"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              {t('home.aboutMamanBolingo')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Marie Mwape Kashimbo • Maman Bolingo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {t('home.aboutText')}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('home.aboutText2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              {t('home.keyAchievements')}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t('home.achievementsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <achievement.icon className="text-white" size={32} />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-2">
                  {achievement.year}
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              {t('home.foundationImpact')}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t('home.foundationSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foundationPillars.map((pillar, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 group animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <pillar.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <p className="text-white/90 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
            {t('home.joinMovement')}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            {t('home.joinText')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center">
              <Download className="mr-2" size={20} />
              {t('home.downloadPdf')}
            </button>
            <Link href="/get-involved" className="bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center">
              <UserPlus className="mr-2" size={20} />
              {t('home.joinCause')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-accent-500 fill-current" size={24} />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            "Le dévouement de Marie à notre communauté a été transformateur. Grâce à sa fondation, elle a apporté espoir et changement tangible à d'innombrables familles."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/images/eva-blue-SfPOkp6-2eA-unsplash.jpg"
                alt="Leader Communautaire"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800 dark:text-gray-200">Leader Communautaire</p>
              <p className="text-gray-600 dark:text-gray-400">Kisangani, RDC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Marie Mwape Kashimbo",
            "alternateName": "Maman Bolingo",
            "description": "Philanthrope congolaise, leader communautaire et figure politique émergente",
            "url": "https://mariemwape.netlify.app",
            "sameAs": [
              "https://www.facebook.com/mariemwape",
              "https://www.linkedin.com/in/mariemwape"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Fondation FMMPS",
              "foundingDate": "2021",
              "description": "Fondation soutenant les communautés vulnérables dans la province de Tshopo, RDC"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kisangani",
              "addressCountry": "République Démocratique du Congo"
            }
          })
        }}
      />
    </>
  );
}