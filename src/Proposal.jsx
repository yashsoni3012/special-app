import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Proposal() {
  const navigate = useNavigate();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noClickCount, setNoClickCount] = useState(0);

  const handleNoClick = (e) => {
    e.preventDefault();
    setNoClickCount(prev => prev + 1);
    const randomX = Math.random() * (window.innerWidth - 200) - 100;
    const randomY = Math.random() * (window.innerHeight - 100) - 50;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    navigate('/questions');
  };

  const getNoButtonText = () => {
    const messages = [
      "NO",
      "Are you sure?",
      "Really?",
      "Think again!",
      "Last chance!",
      "You don't mean that!",
      "Click YES instead!",
      "Please? 🥺",
      "Pretty please? 💕"
    ];
    return messages[Math.min(noClickCount, messages.length - 1)];
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-pink-200 opacity-30"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `drift ${Math.random() * 20 + 15}s infinite ease-in-out ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main content card */}
      <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8 sm:p-16 w-full max-w-3xl shadow-2xl relative z-10 border-4 border-white/50">
        {/* Cute character */}
        <div className="flex justify-center mb-8 animate-float">
          <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full shadow-lg relative">
            {/* Bear ears */}
            <div className="absolute -top-3 left-6 w-8 h-8 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full border-4 border-pink-100" />
            <div className="absolute -top-3 right-6 w-8 h-8 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full border-4 border-pink-100" />
            
            {/* Face */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                {/* Eyes */}
                <div className="flex justify-center gap-6 mb-2">
                  <div className="w-3 h-1 bg-gray-700 rounded-full" />
                  <div className="w-3 h-1 bg-gray-700 rounded-full" />
                </div>
                {/* Mouth */}
                <div className="w-8 h-4 border-b-2 border-gray-700 rounded-b-full mx-auto" />
              </div>
            </div>
            
            {/* Blush */}
            <div className="absolute bottom-8 left-4 w-6 h-6 bg-pink-300 rounded-full opacity-60" />
            <div className="absolute bottom-8 right-4 w-6 h-6 bg-pink-300 rounded-full opacity-60" />
          </div>
        </div>

        {/* Question */}
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-4 text-gray-800">
          Will you be mine <span className="inline-block animate-bounce">🥺</span>?
        </h1>

        {/* Message */}
        <p className="text-center text-gray-700 text-lg sm:text-xl mb-12 px-4 leading-relaxed">
          Life is an incredible journey, and I want to spend every single second of it with you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative">
          <button
            onClick={handleYesClick}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-2xl px-16 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transform transition-all duration-300 hover:from-red-600 hover:to-pink-600"
          >
            YES
          </button>

          <button
            onClick={handleNoClick}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-2xl px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:from-blue-600 hover:to-indigo-600 relative"
            style={{
              position: noClickCount > 0 ? 'fixed' : 'relative',
              left: noClickCount > 0 ? `${noButtonPosition.x}px` : 'auto',
              top: noClickCount > 0 ? `${noButtonPosition.y}px` : 'auto',
              transition: 'all 0.3s ease-out'
            }}
          >
            {getNoButtonText()}
          </button>
        </div>

        {noClickCount > 0 && (
          <p className="text-center mt-8 text-pink-600 font-semibold animate-pulse">
            The "NO" button is shy! Catch it if you can... or just click YES! 💕
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -30px); }
          66% { transform: translate(-20px, 20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}