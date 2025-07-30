import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { Calendar, Award, Users, Heart, Target, Zap } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const timeline = [
    {
      year: '2020',
      title: 'Founded FMMPS Foundation',
      description: 'Established the foundation to support vulnerable populations in DRC',
      icon: Heart,
      color: 'from-red-400 to-pink-500'
    },
    {
      year: '2022',
      title: 'Actu Stars Awards Nomination',
      description: 'Recognized for outstanding community service and impact',
      icon: Award,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      year: '2023',
      title: 'Third Anniversary Milestone',
      description: 'Celebrated three years of transformative community work',
      icon: Calendar,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      year: '2025',
      title: 'Joined NOGEC',
      description: 'Entered formal politics to amplify advocacy efforts',
      icon: Target,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Deep empathy drives every action we take for our community',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building stronger bonds through collective action and support',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Zap,
      title: 'Impact',
      description: 'Creating measurable, lasting change in people\'s lives',
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <>
      <Head>
        <title>{t('about.title')} - Marie Mwape Kashimbo</title>
        <meta name="description" content={t('about.biography')} />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gradient">
              {t('about.title')}
            </h1>
            <p className="text-2xl text-primary-600 font-medium">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary-200 via-accent-200 to-secondary-200 rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"></div>
                <div className="absolute inset-4 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Heart className="text-white" size={60} />
                    </div>
                    <p className="text-gray-600 font-medium text-lg">Marie Mwape Kashimbo</p>
                    <p className="text-sm text-gray-500">Professional Portrait</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="card-gradient">
                <h2 className="text-3xl font-serif font-semibold mb-4 text-gray-800">
                  Biography
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('about.biography')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient">
              Core Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide every decision and action in our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient">
              Journey Timeline
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Key milestones in Marie's path of service and leadership
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-slide-up`} style={{animationDelay: `${index * 0.2}s`}}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mr-4`}>
                          <item.icon className="text-white" size={24} />
                        </div>
                        <div className="text-3xl font-bold text-gradient">{item.year}</div>
                      </div>
                      <h3 className="text-xl font-serif font-semibold mb-3 text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-white shadow-lg`}></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full floating-element"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full floating-element" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Key Achievements
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Milestones that mark our journey of impact and transformation
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">2020</div>
                <p className="text-lg opacity-90">Founded FMMPS Foundation</p>
              </div>
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <p className="text-lg opacity-90">Lives Impacted</p>
              </div>
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">2025</div>
                <p className="text-lg opacity-90">Joined NOGEC Political Movement</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}