import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Heart, Users, Globe } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('home.title')} - {t('home.subtitle')}</title>
        <meta name="description" content={t('home.heroText')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth-800 mb-6">
                {t('home.title')}
              </h1>
              <p className="text-xl text-primary-700 font-medium mb-6">
                {t('home.subtitle')}
              </p>
              <p className="text-lg text-earth-700 mb-8 leading-relaxed">
                {t('home.heroText')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-primary inline-flex items-center justify-center">
                  {t('home.learnMore')}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link href="/get-involved" className="btn-secondary inline-flex items-center justify-center">
                  {t('getInvolved.title')}
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-earth-200 rounded-2xl flex items-center justify-center">
                <p className="text-earth-600 text-center px-4">
                  Marie Mwape Kashimbo Portrait<br />
                  <span className="text-sm">(Image placeholder)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-earth-800 mb-4">
              {t('home.mission')}
            </h2>
            <p className="text-lg text-earth-600 max-w-3xl mx-auto">
              {t('home.missionText')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-earth-800 mb-3">
                Compassion
              </h3>
              <p className="text-earth-600">
                Driven by deep empathy for those facing challenges and hardships in our communities.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-earth-800 mb-3">
                Community
              </h3>
              <p className="text-earth-600">
                Building stronger communities through collective action and mutual support.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-earth-800 mb-3">
                Change
              </h3>
              <p className="text-earth-600">
                Creating lasting transformation through dedicated advocacy and action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-earth-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-earth-800 mb-6">
            Join the Movement
          </h2>
          <p className="text-lg text-earth-600 mb-8">
            Together, we can create meaningful change and build a better future for all Congolese people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/foundation" className="btn-primary">
              Learn About Our Work
            </Link>
            <Link href="/get-involved" className="btn-secondary">
              Get Involved Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}