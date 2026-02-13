import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, LogOut, X, Sparkles } from 'lucide-react';

export default function FinalClosure() {
  const navigate = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  const handleStay = () => {
    setShowLogoutPopup(false);
  };

  const handleConfirmLogout = () => {
    // Navigate back to login page
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-pink-100 to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-red-300 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 2 + 0.5})`,
              animation: `float ${Math.random() * 20 + 15}s infinite ease-in-out ${Math.random() * 5}s`
            }}
            size={Math.random() * 70 + 30}
          />
        ))}
        {[...Array(30)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute text-yellow-300 opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 2}s`
            }}
            size={Math.random() * 30 + 15}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-4xl w-full relative z-10">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-16 shadow-2xl border-4 border-pink-300 animate-scale-in">
          
          {/* Final message */}
          <div className="text-center mb-12">
            <div className="inline-block mb-8 animate-heartbeat">
              <Heart className="text-red-500" size={100} fill="currentColor" />
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-pink-600 via-red-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Happy Valentine's Day! 💝
            </h1>

            <div className="space-y-6 text-lg sm:text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto">
              <p className="font-serif italic">
                "This website is just a small token of my infinite love for you."
              </p>

              <p>
                Every page, every animation, every word was crafted with you in my heart. I hope this Valentine's Day reminds you how incredibly special you are to me. 💕
              </p>

              <p>
                You are my sunshine on cloudy days, my strength when I feel weak, and my happiness in every moment. Thank you for being the most amazing person in my life.
              </p>

              <p className="font-bold text-2xl text-red-600">
                I love you more than words can ever express. ❤️
              </p>

              <p className="text-sm text-gray-600 mt-8">
                And remember... this is not goodbye, it's just "see you soon" 💕
              </p>
            </div>
          </div>

          {/* Decorative hearts */}
          <div className="flex justify-center gap-4 mb-12 text-5xl">
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>💖</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💝</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💗</span>
            <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>💓</span>
            <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>💕</span>
            <span className="animate-bounce" style={{ animationDelay: '1s' }}>💞</span>
          </div>

          {/* Quote */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 mb-12 border-2 border-pink-200">
            <p className="text-center text-xl sm:text-2xl font-serif italic text-gray-800">
              "In all the world, there is no heart for me like yours.<br />
              In all the world, there is no love for you like mine."
            </p>
            <p className="text-center text-sm text-gray-600 mt-4">
              - Maya Angelou
            </p>
          </div>

          {/* Logout button */}
          <div className="flex justify-center">
            <button
              onClick={handleLogoutClick}
              className="bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transform transition-all duration-300 flex items-center gap-3"
            >
              <LogOut size={24} />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Logout popup */}
      {showLogoutPopup && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in" />

          {/* Popup */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 sm:p-12 max-w-lg w-full shadow-2xl border-4 border-pink-300 animate-popup relative">
              
              {/* Floating hearts around popup */}
              <div className="absolute -top-4 -left-4 text-4xl animate-bounce">💕</div>
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>💖</div>
              <div className="absolute -bottom-4 -left-4 text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>💝</div>
              <div className="absolute -bottom-4 -right-4 text-4xl animate-bounce" style={{ animationDelay: '0.6s' }}>💗</div>

              <div className="text-center">
                <div className="mb-6">
                  <Heart className="mx-auto text-red-500 animate-heartbeat" size={80} fill="currentColor" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                  Wait! 🥺
                </h2>

                <p className="text-xl sm:text-2xl text-gray-800 font-semibold mb-4">
                  You can logout from this website...
                </p>

                <p className="text-2xl sm:text-3xl bg-gradient-to-r from-pink-600 via-red-600 to-purple-600 bg-clip-text text-transparent font-bold mb-6">
                  But you will NEVER logout from my heart! 💕
                </p>

                <p className="text-lg text-gray-700 mb-8 italic">
                  You are forever logged in there! ❤️
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleStay}
                    className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-lg px-8 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transform transition-all duration-300"
                  >
                    Stay Here 💖
                  </button>
                  <button
                    onClick={handleConfirmLogout}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300"
                  >
                    Logout Anyway
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
          75% { transform: scale(1.1); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes popup {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out;
        }
        
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-popup {
          animation: popup 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}