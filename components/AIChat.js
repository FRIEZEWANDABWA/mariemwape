import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { t } = useTranslation();

  // Auto-open chat after 5 seconds on first visit
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAutoOpened) {
        setIsOpen(true);
        setHasAutoOpened(true);
        setMessages([{
          type: 'bot',
          text: t('chat.greeting')
        }]);
        
        // Auto-minimize after 10 seconds if no interaction
        setTimeout(() => {
          setIsOpen(false);
        }, 10000);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasAutoOpened, t]);

  // Update greeting when language changes
  useEffect(() => {
    if (messages.length > 0) {
      setMessages([{
        type: 'bot',
        text: t('chat.greeting')
      }]);
    }
  }, [t]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    // Simple keyword matching for responses
    const lowerInput = input.toLowerCase();
    let response = t('chat.responses.default');

    if (lowerInput.includes('foundation') || lowerInput.includes('fmmps') || lowerInput.includes('fondation')) {
      response = t('chat.responses.foundation');
    } else if (lowerInput.includes('political') || lowerInput.includes('nogec') || lowerInput.includes('politique')) {
      response = t('chat.responses.political');
    } else if (lowerInput.includes('volunteer') || lowerInput.includes('help') || lowerInput.includes('involved') || lowerInput.includes('bénévol') || lowerInput.includes('aide') || lowerInput.includes('impliqu')) {
      response = t('chat.responses.volunteer');
    } else if (lowerInput.includes('about') || lowerInput.includes('marie') || lowerInput.includes('who') || lowerInput.includes('propos') || lowerInput.includes('qui')) {
      response = t('chat.responses.about');
    } else if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('contacter')) {
      response = t('chat.responses.contact');
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 1000);

    setInput('');
  };

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([{
        type: 'bot',
        text: t('chat.greeting')
      }]);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => isOpen ? setIsOpen(false) : openChat()}
          className="bg-gradient-to-r from-primary-500 to-accent-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse-slow"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? <X size={24} /> : <Bot size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-40 border border-gray-200 dark:border-gray-700 animate-slide-up">
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white p-4 rounded-t-2xl">
            <div className="flex items-center">
              <Bot className="mr-2" size={20} />
              <div>
                <h3 className="font-semibold">{t('chat.title')}</h3>
                <p className="text-sm opacity-90">{t('chat.subtitle')}</p>
              </div>
            </div>
          </div>

          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-3 rounded-lg max-w-xs ${
                  message.type === 'user' 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('chat.placeholder')}
                className="flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors"
                aria-label="Send message"
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