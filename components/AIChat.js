import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation();

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

  const sendToChatbase = async (message) => {
    try {
      const response = await fetch('https://www.chatbase.co/api/v1/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer NiGv2avnF7dALhzD9xnfg'
        },
        body: JSON.stringify({
          message: message,
          chatbotId: 'NiGv2avnF7dALhzD9xnfg',
          stream: false
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.text || data.message;
      }
    } catch (error) {
      console.error('Chatbase API error:', error);
    }
    return null;
  };

  const getFallbackResponse = (lowerInput) => {
    if (lowerInput.includes('foundation') || lowerInput.includes('fmmps') || lowerInput.includes('fondation')) {
      return t('chat.responses.foundation');
    } else if (lowerInput.includes('political') || lowerInput.includes('nogec') || lowerInput.includes('politique')) {
      return t('chat.responses.political');
    } else if (lowerInput.includes('volunteer') || lowerInput.includes('help') || lowerInput.includes('involved') || lowerInput.includes('bénévol') || lowerInput.includes('aide') || lowerInput.includes('impliqu')) {
      return t('chat.responses.volunteer');
    } else if (lowerInput.includes('about') || lowerInput.includes('marie') || lowerInput.includes('who') || lowerInput.includes('propos') || lowerInput.includes('qui')) {
      return t('chat.responses.about');
    } else if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('contacter')) {
      return t('chat.responses.contact');
    }
    return t('chat.responses.default');
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Try Chatbase first
    let response = await sendToChatbase(input);
    
    // If Chatbase fails, use fallback responses
    if (!response) {
      const lowerInput = input.toLowerCase();
      response = getFallbackResponse(lowerInput);
    }

    // Translate response if needed (basic translation for common responses)
    if (i18n.language === 'fr' && response) {
      // Simple translation mapping for common English responses
      const translations = {
        'Hello': 'Bonjour',
        'Hi': 'Salut',
        'Thank you': 'Merci',
        'You\'re welcome': 'De rien',
        'How can I help': 'Comment puis-je vous aider',
        'FMMPS Foundation': 'Fondation FMMPS',
        'Marie Mwape': 'Marie Mwape',
        'volunteer': 'bénévole',
        'contact': 'contacter'
      };
      
      Object.keys(translations).forEach(en => {
        response = response.replace(new RegExp(en, 'gi'), translations[en]);
      });
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
      setIsLoading(false);
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
            {isLoading && (
              <div className="text-left mb-4">
                <div className="inline-block p-3 rounded-lg max-w-xs bg-gray-100 dark:bg-gray-700">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('chat.placeholder')}
                className="flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors disabled:opacity-50"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hidden iframe for Chatbase integration */}
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/NiGv2avnF7dALhzD9xnfg"
        style={{ display: 'none' }}
        title="Chatbase Integration"
      />
    </>
  );
}