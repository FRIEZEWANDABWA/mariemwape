import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! I\'m Marie\'s AI assistant. I can help you learn about her foundation FMMPS, her political journey, or how to get involved. What would you like to know?'
    }
  ]);
  const [input, setInput] = useState('');
  const { t } = useTranslation();

  const responses = {
    'foundation': 'The FMMPS Foundation, founded in 2021, focuses on three main pillars: Food & Essentials Distribution, Infrastructure Advocacy, and Community Events. Marie has helped over 1000+ people across Tshopo province.',
    'political': 'Marie joined NOGEC (National Organization for Good Governance and Change) in July 2025 to amplify her advocacy work through formal politics, focusing on social welfare and healthcare reform.',
    'volunteer': 'You can get involved by visiting our "Get Involved" section where you can volunteer, donate, or contact us directly. We always need passionate people to help our cause!',
    'about': 'Marie Mwape Kashimbo, known as "Maman Bolingo," is a Congolese philanthropist and community leader who has dedicated her life to supporting vulnerable populations in DRC.',
    'contact': 'You can reach Marie through our contact form, email at contact@mariemwape.org, or through our social media channels. We\'d love to hear from you!'
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    // Simple keyword matching for responses
    const lowerInput = input.toLowerCase();
    let response = 'Thank you for your question! For more detailed information, please visit the relevant sections of our website or contact us directly.';

    if (lowerInput.includes('foundation') || lowerInput.includes('fmmps')) {
      response = responses.foundation;
    } else if (lowerInput.includes('political') || lowerInput.includes('nogec')) {
      response = responses.political;
    } else if (lowerInput.includes('volunteer') || lowerInput.includes('help') || lowerInput.includes('involved')) {
      response = responses.volunteer;
    } else if (lowerInput.includes('about') || lowerInput.includes('marie') || lowerInput.includes('who')) {
      response = responses.about;
    } else if (lowerInput.includes('contact') || lowerInput.includes('reach')) {
      response = responses.contact;
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 1000);

    setInput('');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-primary-500 to-accent-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse-slow"
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
                <h3 className="font-semibold">Marie's AI Assistant</h3>
                <p className="text-sm opacity-90">Ask me anything!</p>
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
                placeholder="Ask about Marie's work..."
                className="flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
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