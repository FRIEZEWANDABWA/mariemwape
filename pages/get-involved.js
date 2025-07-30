import { useState } from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { Heart, Users, Mail, Phone, Send } from 'lucide-react';

export default function GetInvolved() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'volunteer'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', message: '', type: 'volunteer' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>{t('getInvolved.title')} - Marie Mwape Kashimbo</title>
        <meta name="description" content={t('getInvolved.subtitle')} />
      </Head>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-earth-800 mb-4">
              {t('getInvolved.title')}
            </h1>
            <p className="text-xl text-primary-600 font-medium">
              {t('getInvolved.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-earth-800 mb-3">
                {t('getInvolved.volunteer')}
              </h3>
              <p className="text-earth-600 mb-6">
                {t('getInvolved.volunteerText')}
              </p>
              <button 
                onClick={() => setFormData({...formData, type: 'volunteer'})}
                className="btn-primary w-full"
              >
                Become a Volunteer
              </button>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-earth-800 mb-3">
                {t('getInvolved.donate')}
              </h3>
              <p className="text-earth-600 mb-6">
                {t('getInvolved.donateText')}
              </p>
              <button className="btn-primary w-full">
                {t('getInvolved.donateNow')}
              </button>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-earth-800 mb-3">
                {t('getInvolved.contact')}
              </h3>
              <p className="text-earth-600 mb-6">
                {t('getInvolved.contactText')}
              </p>
              <button 
                onClick={() => setFormData({...formData, type: 'contact'})}
                className="btn-secondary w-full"
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="text-2xl font-serif font-semibold text-earth-800 mb-6">
                Contact Form
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-earth-700 mb-2">
                    I'm interested in:
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="volunteer">Volunteering</option>
                    <option value="donation">Making a Donation</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="contact">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-2">
                    {t('getInvolved.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-2">
                    {t('getInvolved.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-2">
                    {t('getInvolved.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center">
                  <Send className="mr-2" size={20} />
                  {t('getInvolved.send')}
                </button>
              </form>
            </div>

            <div>
              <div className="card mb-8">
                <h3 className="text-xl font-serif font-semibold text-earth-800 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-primary-600 mr-3" size={20} />
                    <div>
                      <p className="font-medium text-earth-800">Email</p>
                      <p className="text-earth-600">contact@mariemwape.org</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-primary-600 mr-3" size={20} />
                    <div>
                      <p className="font-medium text-earth-800">WhatsApp</p>
                      <p className="text-earth-600">+243 XXX XXX XXX</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-serif font-semibold text-earth-800 mb-4">
                  Donation Options
                </h3>
                <p className="text-earth-700 mb-6">
                  Support our mission through secure online donations. Every contribution helps us expand our reach and impact.
                </p>
                
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    PayPal Donation
                  </button>
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    Flutterwave
                  </button>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    Mobile Money
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-earth-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-semibold text-earth-800 mb-4">
              Join Our Community
            </h3>
            <p className="text-lg text-earth-700 mb-6 max-w-3xl mx-auto">
              Stay updated with our latest activities, success stories, and opportunities to make a difference. 
              Together, we can create lasting change in our communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}