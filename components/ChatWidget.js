import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { t } = useTranslation();

  const handleSend = () => {
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-primary-500 to-accent-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse-slow"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-40 border border-gray-200 animate-slide-up">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white p-4 rounded-t-2xl">
            <h3 className="font-semibold">{t('getInvolved.contact')}</h3>
            <p className="text-sm opacity-90">We're here to help!</p>
          </div>

          <div className="p-4 h-64 overflow-y-auto">
            <div className="mb-4">
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                <p className="text-sm">Hello! How can we assist you today?</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                <p className="text-sm">Feel free to ask about our foundation, volunteer opportunities, or how to get involved!</p>
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}