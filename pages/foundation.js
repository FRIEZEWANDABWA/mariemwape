import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Heart, Users, Shield, Brain } from 'lucide-react';

export default function Foundation() {
  const { t } = useTranslation();

  const projects = [
    {
      icon: Heart,
      title: "Orphan Support",
      description: "Providing care, education, and support for orphaned children across Kisangani and surrounding areas.",
      image: "/images/annie-spratt-AlMuWOQZBBs-unsplash.jpg"
    },
    {
      icon: Shield,
      title: "Disability Advocacy",
      description: "Supporting people with disabilities through accessibility programs and community integration initiatives.",
      image: "/images/bill-wegener-7MD4DR9jbP0-unsplash.jpg"
    },
    {
      icon: Users,
      title: "Albino Protection",
      description: "Protecting and supporting albino individuals through awareness campaigns and direct assistance.",
      image: "/images/albino.jpg"
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Addressing mental health challenges through community programs and professional support services.",
      image: "/images/seth-doyle-zf9_yiAekJs-unsplash.jpg"
    }
  ];

  return (
    <>
      <Head>
        <title>{t('foundation.title')} - Marie Mwape Kashimbo</title>
        <meta name="description" content={t('foundation.overview')} />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gradient">
              {t('foundation.title')}
            </h1>
            <p className="text-2xl text-primary-600 font-medium mb-6">
              {t('foundation.subtitle')}
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {t('foundation.overview')}
            </p>
          </div>

          {/* Foundation Hero Image */}
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl mb-16 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <Image
              src="/images/foundation.jpg"
              alt="FMMPS Foundation Activities"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-serif font-bold mb-2">FMMPS Foundation in Action</h3>
              <p className="text-lg opacity-90">Transforming lives through compassionate service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient">
              {t('foundation.projects')}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our comprehensive approach to supporting vulnerable populations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <project.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient">
                {t('foundation.impact')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t('foundation.impactText')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-4">
                      <Heart className="text-white" size={24} />
                    </div>
                    <span className="font-semibold text-gray-800 text-lg">Children Supported</span>
                  </div>
                  <span className="text-3xl font-bold text-gradient">500+</span>
                </div>
                
                <div className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full flex items-center justify-center mr-4">
                      <Users className="text-white" size={24} />
                    </div>
                    <span className="font-semibold text-gray-800 text-lg">Families Assisted</span>
                  </div>
                  <span className="text-3xl font-bold text-gradient">200+</span>
                </div>
                
                <div className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full flex items-center justify-center mr-4">
                      <Shield className="text-white" size={24} />
                    </div>
                    <span className="font-semibold text-gray-800 text-lg">Communities Reached</span>
                  </div>
                  <span className="text-3xl font-bold text-gradient">15+</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src="/images/foundation2.jpg"
                  alt="Foundation Impact"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">Community Impact</h3>
                  <p className="text-sm opacity-90">Transforming lives daily</p>
                </div>
              </div>
              
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src="/images/annie-spratt-wtk4VH8EU20-unsplash.jpg"
                  alt="Foundation Activities"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">Foundation Activities</h3>
                  <p className="text-sm opacity-90">Direct community engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gradient">
              Foundation Gallery
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Moments that capture the heart of our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow animate-slide-up">
              <Image
                src="/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg"
                alt="Community Care"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Community Care</h3>
                <p className="text-sm opacity-90">Compassionate support</p>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow animate-slide-up" style={{animationDelay: '0.1s'}}>
              <Image
                src="/images/doug-linstedt-jEEYZsaxbH4-unsplash.jpg"
                alt="Youth Programs"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Youth Programs</h3>
                <p className="text-sm opacity-90">Building futures</p>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow animate-slide-up" style={{animationDelay: '0.2s'}}>
              <Image
                src="/images/madalena-veloso-zeNeAUwoJvs-unsplash.jpg"
                alt="Educational Support"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Educational Support</h3>
                <p className="text-sm opacity-90">Knowledge empowerment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anniversary Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full floating-element"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full floating-element" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Third Anniversary Celebration
            </h2>
            <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              In 2023, the FMMPS Foundation celebrated its third anniversary with remarkable achievements. 
              Through Marie's personal funding and community support, the foundation has transformed lives 
              and continues to expand its reach across the Tshopo province.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">3</div>
                <p className="text-lg opacity-90">Years of Service</p>
              </div>
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-lg opacity-90">Self-Funded Projects</p>
              </div>
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-lg opacity-90">Community Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}