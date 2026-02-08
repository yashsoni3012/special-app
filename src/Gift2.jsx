import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';

export default function Gift2() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/questions', { state: { from: 'gift2' } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-200 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 2 + 1})`,
              animation: `float ${Math.random() * 20 + 15}s infinite ease-in-out ${Math.random() * 5}s`
            }}
            size={Math.random() * 80 + 40}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl p-6 sm:p-12 w-full max-w-3xl shadow-2xl relative z-10 border-4 border-white/50 animate-fade-in">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
          A Letter For You 🥺
        </h1>

        {/* Letter Card */}
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 sm:p-10 mb-8 shadow-lg animate-slide-in">
          <div className="space-y-6 text-gray-800">
            {/* Greeting */}
            <p className="font-serif text-lg sm:text-xl italic">My Baby,</p>

            {/* Letter body */}
            <p className="font-serif text-base sm:text-lg leading-relaxed">
              Thank you for being my person. I want to hold your hand through every season of life. You are my home. You are my everything, and I love you so so much. Be the same as you are and no sorry for irritating you. No one can replace you from my heart, ur always be my no.1.
            </p>

            {/* Signature */}
            <p className="font-serif text-lg sm:text-xl italic flex items-center gap-2">
              Forever yours. <Heart className="text-red-500 inline-block" size={20} fill="currentColor" />
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <button
            onClick={handleBack}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg px-8 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transform transition-all duration-300 flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            BACK
          </button>
        </div>
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
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}