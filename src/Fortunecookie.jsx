import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles, ArrowLeft, RefreshCw } from 'lucide-react';

export default function FortuneCookie() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [currentFortune, setCurrentFortune] = useState(null);

  const fortunes = [
    {
      id: 1,
      fortune: "Your love story will inspire generations to come. ❤️",
      luckyNumbers: [14, 2, 25, 7, 12, 31]
    },
    {
      id: 2,
      fortune: "A lifetime of happiness awaits you both. Every moment together will be magical. ✨",
      luckyNumbers: [2, 14, 6, 9, 20, 24]
    },
    {
      id: 3,
      fortune: "Your bond grows stronger with each passing day. You are soulmates. 💕",
      luckyNumbers: [7, 3, 14, 21, 28, 11]
    },
    {
      id: 4,
      fortune: "Adventures await! Your journey together will be filled with joy and laughter. 🌟",
      luckyNumbers: [5, 14, 18, 23, 27, 30]
    },
    {
      id: 5,
      fortune: "You have found your forever. Cherish each moment, for you are blessed. 💝",
      luckyNumbers: [1, 14, 8, 19, 25, 29]
    },
    {
      id: 6,
      fortune: "The stars have aligned for you two. Your love is written in destiny. 🌙",
      luckyNumbers: [4, 14, 10, 16, 22, 26]
    },
    {
      id: 7,
      fortune: "Together, you will create beautiful memories that last forever. 💖",
      luckyNumbers: [3, 14, 9, 15, 21, 27]
    },
    {
      id: 8,
      fortune: "Your love is a rare treasure. Guard it, nurture it, and watch it grow. 🌹",
      luckyNumbers: [6, 14, 12, 17, 23, 28]
    }
  ];

  const handleCookieClick = () => {
    if (!isOpen) {
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      setCurrentFortune(randomFortune);
      setIsOpen(true);
    }
  };

  const handleTryAgain = () => {
    setIsOpen(false);
    setCurrentFortune(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-300 opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 1.5 + 0.5})`,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 2}s`
            }}
            size={Math.random() * 30 + 15}
          />
        ))}
      </div>

      <div className="max-w-2xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Fortune Cookie 🥠
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Click the cookie to reveal your romantic destiny...
          </p>
        </div>

        {/* Cookie Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border-4 border-orange-200">
          
          {!isOpen ? (
            /* Closed Cookie */
            <div className="text-center animate-scale-in">
              <div
                onClick={handleCookieClick}
                className="inline-block cursor-pointer transform hover:scale-110 transition-all duration-300 animate-bounce-slow"
              >
                <div className="text-9xl sm:text-[12rem] filter drop-shadow-2xl">
                  🥠
                </div>
              </div>
              <p className="mt-8 text-xl text-gray-600 font-semibold animate-pulse">
                Click the fortune cookie! ✨
              </p>
            </div>
          ) : (
            /* Opened Cookie with Fortune */
            <div className="animate-scale-in">
              {/* Broken cookie pieces */}
              <div className="flex justify-center gap-8 mb-8">
                <div className="text-6xl sm:text-7xl transform -rotate-12 animate-slide-left">
                  🥠
                </div>
                <div className="text-6xl sm:text-7xl transform rotate-12 animate-slide-right">
                  🥠
                </div>
              </div>

              {/* Fortune paper */}
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-orange-300 mb-6">
                <div className="text-center mb-6">
                  <Heart className="inline-block text-red-500 animate-heartbeat" size={40} fill="currentColor" />
                </div>
                
                <p className="text-xl sm:text-2xl text-gray-800 font-serif text-center leading-relaxed mb-6">
                  "{currentFortune?.fortune}"
                </p>

                <div className="border-t-2 border-orange-200 pt-4">
                  <p className="text-center text-sm text-gray-600 mb-2">
                    Lucky Numbers
                  </p>
                  <div className="flex justify-center gap-3 flex-wrap">
                    {currentFortune?.luckyNumbers.map((num, index) => (
                      <span
                        key={index}
                        className="bg-red-500 text-white font-bold px-4 py-2 rounded-full shadow-md text-lg"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Try another fortune button */}
              <button
                onClick={handleTryAgain}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2"
              >
                <RefreshCw size={24} />
                Try Another Fortune
              </button>
            </div>
          )}
        </div>

        {/* Message */}
        {isOpen && (
          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-lg text-gray-700 italic">
              "The best fortune is the love we share" 💕
            </p>
          </div>
        )}

        {/* Back button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate('/timeline')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg px-8 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transform transition-all duration-300 flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            BACK TO TIMELINE
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
          75% { transform: scale(1.1); }
        }
        
        @keyframes slide-left {
          from { transform: translateX(50px) rotate(0deg); opacity: 0; }
          to { transform: translateX(0) rotate(-12deg); opacity: 1; }
        }
        
        @keyframes slide-right {
          from { transform: translateX(-50px) rotate(0deg); opacity: 0; }
          to { transform: translateX(0) rotate(12deg); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out backwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        
        .animate-slide-left {
          animation: slide-left 0.6s ease-out;
        }
        
        .animate-slide-right {
          animation: slide-right 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}