import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Calendar, Award } from 'lucide-react';

export default function Media() {
  const { t } = useTranslation();

  const articles = [
    {
      title: "Third Anniversary of the FMMPS Foundation in Kisangani",
      source: "kwetufm.net",
      date: "2023",
      url: "https://kwetufm.net/sante/social-third-anniversary-of-the-fmmps-foundation-in-kisangani-town-thanks-to-her-own-funds-mrs-marie-mwape-is-changing-the-daily-life-of-a-pvh-by-giving-him-a-brand-new-three-ty/",
      excerpt: "Thanks to her own funds, Mrs. Marie Mwape is changing the daily life of vulnerable populations by providing essential support and services."
    },
    {
      title: "FMMPS Nominee at the 5th Edition of Actu Stars Awards",
      source: "times.cd",
      date: "November 20, 2022",
      url: "https://times.cd/index.php/2022/11/20/fmmps-nominee-a-la-5-eme-edition-du-prix-actu-stars-awards-marie-mwape-kashimbo-au-rescousse-de-boyomais-de-la-commune-de-lubunga/",
      excerpt: "Marie Mwape Kashimbo comes to the rescue of Boyoma residents in Lubunga commune, showcasing her dedication to community service."
    },
    {
      title: "Marie Mwape Kashimbo Joins NOGEC in Kisangani",
      source: "laclocheducongo.com",
      date: "July 2025",
      url: "https://www.laclocheducongo.com/2025/07/kisangani-marie-mwape-kashimbo-rejoint.html",
      excerpt: "Marie Mwape Kashimbo officially joins the National Organization for Good Governance and Change (NOGEC), marking her entry into formal politics."
    },
    {
      title: "Tshopo: Marie Mwape Explains Her Reasons",
      source: "laclocheducongo.com",
      date: "December 2024",
      url: "https://www.laclocheducongo.com/2024/12/tshopo-marie-mwape-donne-les-raisons.html",
      excerpt: "Marie Mwape provides insights into her motivations and vision for social change in the Tshopo province."
    }
  ];

  return (
    <>
      <Head>
        <title>{t('media.title')} - Marie Mwape Kashimbo</title>
        <meta name="description" content={t('media.recognitionText')} />
      </Head>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-earth-800 mb-4">
              {t('media.title')}
            </h1>
            <p className="text-xl text-primary-600 font-medium">
              {t('media.subtitle')}
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-earth-800 mb-8">
              {t('media.articles')}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <div key={index} className="card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center text-sm text-earth-600">
                      <Calendar size={16} className="mr-2" />
                      {article.date}
                    </div>
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {article.source}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold text-earth-800 mb-3">
                    {article.title}
                  </h3>
                  
                  <p className="text-earth-700 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read Full Article
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="card">
              <div className="flex items-center mb-6">
                <Award className="text-primary-600 mr-3" size={32} />
                <h3 className="text-2xl font-serif font-semibold text-earth-800">
                  {t('media.recognition')}
                </h3>
              </div>
              <p className="text-earth-700 leading-relaxed mb-6">
                {t('media.recognitionText')}
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-earth-800">Actu Stars Awards Nomination</h4>
                  <p className="text-earth-600 text-sm">5th Edition - 2022</p>
                  <p className="text-earth-700 mt-2">
                    Recognized for outstanding community service and philanthropic work in the Tshopo province.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-earth-800">Community Leadership Recognition</h4>
                  <p className="text-earth-600 text-sm">Ongoing</p>
                  <p className="text-earth-700 mt-2">
                    Continuous recognition from local communities for her dedication to supporting vulnerable populations.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="w-full h-64 bg-earth-200 rounded-2xl flex items-center justify-center mb-6">
                <p className="text-earth-600 text-center">
                  Media Coverage<br />
                  Photo Gallery<br />
                  <span className="text-sm">(Image placeholder)</span>
                </p>
              </div>
              
              <div className="w-full h-64 bg-earth-200 rounded-2xl flex items-center justify-center">
                <p className="text-earth-600 text-center">
                  Awards & Recognition<br />
                  Ceremony Photos<br />
                  <span className="text-sm">(Image placeholder)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-semibold text-earth-800 text-center mb-6">
              Media Highlights
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">4+</div>
                <p className="text-earth-700 font-medium">Major Media Features</p>
                <p className="text-earth-600 text-sm mt-1">Across leading Congolese publications</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
                <p className="text-earth-700 font-medium">News Outlets</p>
                <p className="text-earth-600 text-sm mt-1">kwetufm.net, times.cd, laclocheducongo.com</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">2022</div>
                <p className="text-earth-700 font-medium">First Major Recognition</p>
                <p className="text-earth-600 text-sm mt-1">Actu Stars Awards nomination</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}