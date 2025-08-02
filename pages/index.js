import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Heart, Users, Globe, Star, Award, Zap } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, number: '1000+', label: 'Lives Impacted' },
    { icon: Heart, number: '500+', label: 'Children Supported' },
    { icon: Globe, number: '15+', label: 'Communities Reached' },
    { icon: Award, number: '3+', label: 'Years of Service' },
  ];

  const features = [
    {
      icon: Heart,
      title: 'Compassionate Leadership',
      description: 'Leading with empathy and understanding for those facing challenges.',
      gradient: 'from-red-400 to-pink-500',
      image: '/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Strengthening communities through collective action and support.',
      gradient: 'from-blue-400 to-indigo-500',
      image: '/images/seth-doyle-zf9_yiAekJs-unsplash.jpg'
    },
    {
      icon: Zap,
      title: 'Transformative Change',
      description: 'Creating lasting impact through dedicated advocacy and action.',
      gradient: 'from-yellow-400 to-orange-500',
      image: '/images/bill-wegener-7MD4DR9jbP0-unsplash.jpg'
    }
  ];

  return (
    <>
      <Head>
        <title>{t('home.title')} - {t('home.subtitle')}</title>
        <meta name="description" content={t('home.heroText')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-full opacity-20 floating-element"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-30 floating-element" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full opacity-25 floating-element" style={{animationDelay: '4s'}}></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                <span className="text-gradient">{t('home.title')}</span>
              </h1>
              <p className="text-2xl md:text-3xl font-medium mb-6 bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
                {t('home.subtitle')}
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                {t('home.heroText')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-primary inline-flex items-center justify-center group">
                  {t('home.learnMore')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link href="/get-involved" className="btn-secondary inline-flex items-center justify-center">
                  {t('getInvolved.title')}
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary-200 via-accent-200 to-secondary-200 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"></div>
                <div className="absolute inset-4 bg-white rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/main prof pic.jpg"
                    alt="Marie Mwape Kashimbo"
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

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient">
              {t('home.mission')}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t('home.missionText')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card group animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-20`}></div>
                </div>
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient">
              Our Impact in Action
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Witness the transformation happening in communities across the Democratic Republic of Congo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow animate-slide-up">
              <Image
                src="/images/kisangani.jpg"
                alt="Kisangani Community"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Kisangani Community</h3>
                <p className="text-sm opacity-90">Our home base</p>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow animate-slide-up" style={{animationDelay: '0.1s'}}>
              <Image
                src="/images/annie-spratt-AlMuWOQZBBs-unsplash.jpg"
                alt="Community Outreach"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Community Outreach</h3>
                <p className="text-sm opacity-90">Reaching every corner</p>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow animate-slide-up" style={{animationDelay: '0.2s'}}>
              <Image
                src="/images/toby-wong-qJPKwiAmaBc-unsplash.jpg"
                alt="Youth Empowerment"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Youth Empowerment</h3>
                <p className="text-sm opacity-90">Building tomorrow's leaders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Join the Movement
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Together, we can create meaningful change and build a better future for all Congolese people. Your support makes the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/foundation" className="btn-secondary bg-white text-primary-600 hover:bg-gray-50">
                Learn About Our Work
              </Link>
              <Link href="/get-involved" className="btn-primary bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                Get Involved Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-700 mb-8 leading-relaxed">
              "Marie's dedication to our community has been transformational. Through her foundation, she has brought hope and tangible change to countless families."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/eva-blue-SfPOkp6-2eA-unsplash.jpg"
                  alt="Community Leader"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-800">Community Leader</p>
                <p className="text-gray-600">Kisangani, DRC</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}