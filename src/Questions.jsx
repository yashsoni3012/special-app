import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Questions() {
  const navigate = useNavigate();
  const location = useLocation();
  const [visitedGifts, setVisitedGifts] = useState(() => {
    // Load visited gifts from localStorage
    const saved = localStorage.getItem('visitedGifts');
    return saved ? JSON.parse(saved) : { gift1: false, gift2: false, gift3: false };
  });

  // Check if returning from a gift page
  useEffect(() => {
    const fromGift = location.state?.from;
    if (fromGift && visitedGifts[fromGift] === false) {
      const newVisited = { ...visitedGifts, [fromGift]: true };
      setVisitedGifts(newVisited);
      localStorage.setItem('visitedGifts', JSON.stringify(newVisited));
    }
  }, [location]);

  const allGiftsVisited = visitedGifts.gift1 && visitedGifts.gift2 && visitedGifts.gift3;

  const handleGift1Click = () => {
    navigate('/gift1');
  };

  const handleGift2Click = () => {
    navigate('/gift2');
  };

  const handleGift3Click = () => {
    navigate('/gift3');
  };

  const handleFinallyClick = () => {
    // Reset visited gifts when going to celebration
    localStorage.removeItem('visitedGifts');
    navigate('/celebration');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-200 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 2 + 1})`,
              animation: `float ${Math.random() * 15 + 10}s infinite ease-in-out ${Math.random() * 5}s`
            }}
            size={Math.random() * 80 + 40}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8 sm:p-12 w-full max-w-4xl shadow-2xl relative z-10 border-4 border-white/50 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-800">
          Something for You
        </h1>

        {/* Gift cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {/* Gift 1 */}
          <div 
            onClick={handleGift1Click}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-pink-200 hover:border-pink-400 relative"
          >
            {visitedGifts.gift1 && (
              <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                ✓
              </div>
            )}
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full flex items-center justify-center shadow-md relative">
                <Heart className="text-white animate-pulse" size={50} fill="white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-ping" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-800">Gift 1</h3>
          </div>

          {/* Gift 2 */}
          <div 
            onClick={handleGift2Click}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-pink-200 hover:border-pink-400 relative"
          >
            {visitedGifts.gift2 && (
              <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                ✓
              </div>
            )}
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center shadow-md">
                <div className="text-5xl animate-bounce">😊</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-800">Gift 2</h3>
          </div>

          {/* Gift 3 */}
          <div 
            onClick={handleGift3Click}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-pink-200 hover:border-pink-400 relative"
          >
            {visitedGifts.gift3 && (
              <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                ✓
              </div>
            )}
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-red-300 to-red-400 rounded-full flex items-center justify-center shadow-md">
                <div className="text-5xl animate-wiggle">🐱</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-800">Gift 3</h3>
          </div>
        </div>

        {/* Finally button - only show when all gifts are visited */}
        {allGiftsVisited ? (
          <div className="flex justify-center animate-scale-in">
            <button
              onClick={handleFinallyClick}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-xl px-12 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transform transition-all duration-300 hover:from-red-600 hover:to-pink-600 relative overflow-hidden group"
            >
              <span className="relative z-10">FINALLY... 💕</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-pink-600 font-semibold text-lg mb-2">
              Open all gifts to continue! 🎁
            </p>
            <p className="text-gray-600 text-sm">
              {visitedGifts.gift1 ? '✓' : '○'} Gift 1 
              {' • '}
              {visitedGifts.gift2 ? '✓' : '○'} Gift 2
              {' • '}
              {visitedGifts.gift3 ? '✓' : '○'} Gift 3
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}