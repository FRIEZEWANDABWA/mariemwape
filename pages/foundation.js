import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { Heart, Users, Shield, Brain } from 'lucide-react';

export default function Foundation() {
  const { t } = useTranslation();

  const projects = [
    {
      icon: Heart,
      title: "Orphan Support",
      description: "Providing care, education, and support for orphaned children across Kisangani and surrounding areas."
    },
    {
      icon: Shield,
      title: "Disability Advocacy",
      description: "Supporting people with disabilities through accessibility programs and community integration initiatives."
    },
    {
      icon: Users,
      title: "Albino Protection",
      description: "Protecting and supporting albino individuals through awareness campaigns and direct assistance."
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Addressing mental health challenges through community programs and professional support services."
    }
  ];

  return (
    <>
      <Head>
        <title>{t('foundation.title')} - Marie Mwape Kashimbo</title>
        <meta name="description" content={t('foundation.overview')} />
      </Head>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-earth-800 mb-4">
              {t('foundation.title')}
            </h1>
            <p className="text-xl text-primary-600 font-medium mb-6">
              {t('foundation.subtitle')}
            </p>
            <p className="text-lg text-earth-700 max-w-4xl mx-auto leading-relaxed">
              {t('foundation.overview')}
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-earth-800 text-center mb-12">
              {t('foundation.projects')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="card text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <project.icon className="text-primary-600" size={32} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-earth-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-earth-600">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="card">
              <h3 className="text-2xl font-serif font-semibold text-earth-800 mb-6">
                {t('foundation.impact')}
              </h3>
              <p className="text-earth-700 leading-relaxed mb-6">
                {t('foundation.impactText')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-earth-50 rounded-lg">
                  <span className="font-medium text-earth-800">Children Supported</span>
                  <span className="text-2xl font-bold text-primary-600">500+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-earth-50 rounded-lg">
                  <span className="font-medium text-earth-800">Families Assisted</span>
                  <span className="text-2xl font-bold text-primary-600">200+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-earth-50 rounded-lg">
                  <span className="font-medium text-earth-800">Communities Reached</span>
                  <span className="text-2xl font-bold text-primary-600">15+</span>
                </div>
              </div>
            </div>

            <div>
              <div className="w-full h-64 bg-earth-200 rounded-2xl flex items-center justify-center mb-6">
                <p className="text-earth-600 text-center">
                  Foundation Activities<br />
                  Photo Gallery<br />
                  <span className="text-sm">(Image placeholder)</span>
                </p>
              </div>
              <div className="w-full h-64 bg-earth-200 rounded-2xl flex items-center justify-center">
                <p className="text-earth-600 text-center">
                  Community Impact<br />
                  Before & After<br />
                  <span className="text-sm">(Image placeholder)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-semibold text-earth-800 mb-4">
              Third Anniversary Celebration
            </h3>
            <p className="text-earth-700 mb-6 max-w-3xl mx-auto">
              In 2023, the FMMPS Foundation celebrated its third anniversary with remarkable achievements. 
              Through Marie's personal funding and community support, the foundation has transformed lives 
              and continues to expand its reach across the Tshopo province.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
                <p className="text-earth-700">Years of Service</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <p className="text-earth-700">Self-Funded Projects</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <p className="text-earth-700">Community Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}