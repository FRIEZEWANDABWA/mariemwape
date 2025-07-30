import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { Calendar, Target, Users, Scale } from 'lucide-react';

export default function Political() {
  const { t } = useTranslation();

  const policyAreas = [
    {
      icon: Users,
      title: "Social Welfare",
      description: "Comprehensive social protection programs for vulnerable populations including orphans, disabled individuals, and elderly citizens."
    },
    {
      icon: Scale,
      title: "Healthcare Reform",
      description: "Accessible healthcare systems with focus on mental health services and support for people with disabilities."
    },
    {
      icon: Target,
      title: "Education Access",
      description: "Quality education opportunities for all children, with special programs for marginalized communities."
    },
    {
      icon: Calendar,
      title: "Good Governance",
      description: "Transparent, accountable governance structures that prioritize citizen welfare and human dignity."
    }
  ];

  return (
    <>
      <Head>
        <title>{t('political.title')} - Marie Mwape Kashimbo</title>
        <meta name="description" content={t('political.advocacyText')} />
      </Head>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-earth-800 mb-4">
              {t('political.title')}
            </h1>
            <p className="text-xl text-primary-600 font-medium">
              {t('political.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="card">
              <div className="flex items-center mb-4">
                <Calendar className="text-primary-600 mr-3" size={32} />
                <h2 className="text-2xl font-serif font-semibold text-earth-800">
                  {t('political.nogec')}
                </h2>
              </div>
              <p className="text-earth-700 leading-relaxed mb-4">
                {t('political.nogecText')}
              </p>
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-sm text-primary-800 font-medium">
                  NOGEC - National Organization for Good Governance and Change
                </p>
                <p className="text-sm text-primary-700 mt-1">
                  Joined: July 2025
                </p>
              </div>
            </div>

            <div>
              <div className="w-full h-80 bg-earth-200 rounded-2xl flex items-center justify-center">
                <p className="text-earth-600 text-center">
                  Marie at NOGEC<br />
                  Political Rally<br />
                  <span className="text-sm">(Image placeholder)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-earth-800 text-center mb-4">
              {t('political.advocacy')}
            </h2>
            <p className="text-lg text-earth-700 text-center mb-12 max-w-4xl mx-auto">
              {t('political.advocacyText')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {policyAreas.map((area, index) => (
                <div key={index} className="card text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="text-primary-600" size={32} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-earth-800 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-earth-600">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="card mb-16">
            <h3 className="text-2xl font-serif font-semibold text-earth-800 mb-6">
              {t('political.goals')}
            </h3>
            <p className="text-earth-700 leading-relaxed mb-6">
              {t('political.goalsText')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-earth-800">Short-term Goals (2025-2026)</h4>
                <ul className="space-y-2 text-earth-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Establish policy framework for vulnerable population protection
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Advocate for increased healthcare funding in Tshopo province
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Build coalition for social welfare reform
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-earth-800">Long-term Vision (2027+)</h4>
                <ul className="space-y-2 text-earth-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Comprehensive social protection system nationwide
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Universal healthcare access with mental health focus
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Transparent governance structures at all levels
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-earth-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-semibold text-earth-800 mb-4">
              "From Philanthropy to Politics"
            </h3>
            <p className="text-lg text-earth-700 max-w-3xl mx-auto italic">
              "My journey from founding the FMMPS Foundation to joining NOGEC represents a natural evolution 
              of my commitment to serve. Through politics, I can amplify the voices of those I've worked with 
              for years and create systemic change that reaches beyond individual assistance."
            </p>
            <p className="text-primary-600 font-medium mt-4">- Marie Mwape Kashimbo</p>
          </div>
        </div>
      </div>
    </>
  );
}