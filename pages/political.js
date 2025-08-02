import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Calendar, Target, Users, Scale } from 'lucide-react';

export default function Political() {
  const { t } = useTranslation();

  const policyAreas = [
    {
      icon: Users,
      title: "Social Welfare",
      description: "Comprehensive social protection programs for vulnerable populations including orphans, disabled individuals, and elderly citizens.",
      image: "/images/annie-spratt-WwSX_X4GrAA-unsplash.jpg"
    },
    {
      icon: Scale,
      title: "Healthcare Reform",
      description: "Accessible healthcare systems with focus on mental health services and support for people with disabilities.",
      image: "/images/seth-doyle-zf9_yiAekJs-unsplash.jpg"
    },
    {
      icon: Target,
      title: "Education Access",
      description: "Quality education opportunities for all children, with special programs for marginalized communities.",
      image: "/images/annie-spratt-AlMuWOQZBBs-unsplash.jpg"
    },
    {
      icon: Calendar,
      title: "Good Governance",
      description: "Transparent, accountable governance structures that prioritize citizen welfare and human dignity.",
      image: "/images/doug-linstedt-jEEYZsaxbH4-unsplash.jpg"
    }
  ];

  return (
    <>
      <Head>
        <title>{t('political.title')} - Marie Mwape Kashimbo</title>
        <meta name="description" content={t('political.advocacyText')} />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gradient">
              {t('political.title')}
            </h1>
            <p className="text-2xl text-primary-600 font-medium">
              {t('political.subtitle')}
            </p>
          </div>

          {/* Political Hero Image */}
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl mb-16 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <Image
              src="/images/political.jpg"
              alt="Marie Mwape Political Journey"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-serif font-bold mb-2">From Philanthropy to Politics</h3>
              <p className="text-lg opacity-90">Amplifying voices through governance</p>
            </div>
          </div>
        </div>
      </section>

      {/* NOGEC Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="flex items-center mb-6">
                <Calendar className="text-primary-600 mr-4" size={40} />
                <h2 className="text-4xl font-serif font-bold text-gradient">
                  {t('political.nogec')}
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('political.nogecText')}
              </p>
              <div className="bg-primary-50 p-6 rounded-2xl border-l-4 border-primary-600">
                <p className="text-lg font-semibold text-primary-800 mb-2">
                  NOGEC - National Organization for Good Governance and Change
                </p>
                <p className="text-primary-700">
                  Joined: July 2025
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src="/images/political1.jpg"
                  alt="NOGEC Political Rally"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">Political Engagement</h3>
                  <p className="text-sm opacity-90">Community rallies</p>
                </div>
              </div>
              
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src="/images/political3.jpg"
                  alt="Political Leadership"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">Leadership Role</h3>
                  <p className="text-sm opacity-90">Advocating for change</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Areas Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient">
              {t('political.advocacy')}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t('political.advocacyText')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policyAreas.map((area, index) => (
              <div key={index} className="card group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <area.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="card mb-16 animate-slide-up">
            <h2 className="text-4xl font-serif font-bold mb-6 text-gradient text-center">
              {t('political.goals')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              {t('political.goalsText')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Short-term Goals (2025-2026)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700">Establish policy framework for vulnerable population protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700">Advocate for increased healthcare funding in Tshopo province</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700">Build coalition for social welfare reform</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Long-term Vision (2027+)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-accent-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700">Comprehensive social protection system nationwide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-accent-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700">Universal healthcare access with mental health focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-accent-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700">Transparent governance structures at all levels</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full floating-element"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full floating-element" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              "From Philanthropy to Politics"
            </h2>
            <blockquote className="text-xl md:text-2xl font-serif italic max-w-4xl mx-auto leading-relaxed mb-8 opacity-95">
              "My journey from founding the FMMPS Foundation to joining NOGEC represents a natural evolution 
              of my commitment to serve. Through politics, I can amplify the voices of those I've worked with 
              for years and create systemic change that reaches beyond individual assistance."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white/30">
                <Image
                  src="/images/profile 2.jpg"
                  alt="Marie Mwape Kashimbo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-lg">Marie Mwape Kashimbo</p>
                <p className="opacity-90">Founder, FMMPS Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}