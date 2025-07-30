import Head from 'next/head';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('about.title')} - Marie Mwape Kashimbo</title>
        <meta name="description" content={t('about.biography')} />
      </Head>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-earth-800 mb-4">
              {t('about.title')}
            </h1>
            <p className="text-xl text-primary-600 font-medium">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="w-full h-96 bg-earth-200 rounded-2xl flex items-center justify-center mb-6">
                <p className="text-earth-600 text-center">
                  Marie Mwape Kashimbo<br />
                  Professional Portrait<br />
                  <span className="text-sm">(Image placeholder)</span>
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-earth-800 mb-4">
                  Biography
                </h2>
                <p className="text-earth-700 leading-relaxed">
                  {t('about.biography')}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card">
              <h3 className="text-2xl font-serif font-semibold text-earth-800 mb-4">
                {t('about.values')}
              </h3>
              <p className="text-earth-700 leading-relaxed">
                {t('about.valuesText')}
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-serif font-semibold text-earth-800 mb-4">
                {t('about.journey')}
              </h3>
              <p className="text-earth-700 leading-relaxed">
                {t('about.journeyText')}
              </p>
            </div>
          </div>

          <div className="bg-primary-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-semibold text-earth-800 mb-4">
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">2020</div>
                <p className="text-earth-700">Founded FMMPS Foundation</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
                <p className="text-earth-700">Lives Impacted</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">2025</div>
                <p className="text-earth-700">Joined NOGEC Political Movement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}