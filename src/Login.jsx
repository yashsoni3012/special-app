import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [revealedNotes, setRevealedNotes] = useState([]);
  const [showNotePopup, setShowNotePopup] = useState(null);

  // Romantic credentials
  const ROMANTIC_USERNAME = "mylove";
  const ROMANTIC_PASSWORD = "forever";

  // Secret love notes hidden in floating hearts
  const loveNotes = [
    "You make my heart smile every single day 💕",
    "I fall in love with you more every moment ✨",
    "You are my favorite notification 💌",
    "My favorite place is inside your hug 🤗",
    "You're the reason I believe in love 💖",
    "Every love song reminds me of you 🎵",
    "You're my happily ever after 👑",
    "Distance means nothing when you mean everything 🌟"
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.toLowerCase() === ROMANTIC_USERNAME && password.toLowerCase() === ROMANTIC_PASSWORD) {
      navigate('/proposal');
      setShowError(false);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const handleHeartClick = (index, e) => {
    e.stopPropagation();
    if (!revealedNotes.includes(index)) {
      setRevealedNotes([...revealedNotes, index]);
      setShowNotePopup({ index, message: loveNotes[index] });
      setTimeout(() => setShowNotePopup(null), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-red-50 p-4 overflow-hidden relative">
      {/* Floating hearts background with hidden love notes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            onClick={(e) => handleHeartClick(i, e)}
            className={`absolute transition-all duration-300 cursor-pointer ${
              revealedNotes.includes(i) 
                ? 'text-red-400 opacity-80 scale-110' 
                : 'text-pink-300 opacity-20 hover:opacity-40 hover:scale-125'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 1.5 + 0.5}) rotate(${Math.random() * 360}deg)`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out ${Math.random() * 5}s`
            }}
            size={Math.random() * 50 + 30}
            fill={revealedNotes.includes(i) ? 'currentColor' : 'none'}
          />
        ))}
      </div>

      {/* Love note popup */}
      {showNotePopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-popup">
          <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-2xl p-6 shadow-2xl border-4 border-pink-300 max-w-sm">
            <div className="text-center">
              <Heart className="mx-auto text-red-500 mb-3 animate-heartbeat" size={40} fill="currentColor" />
              <p className="text-lg font-semibold text-gray-800">
                {showNotePopup.message}
              </p>
              <p className="text-xs text-pink-600 mt-3">
                {revealedNotes.length}/8 love notes discovered! 💕
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Login card */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 w-full max-w-md relative z-10 border border-pink-200">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-red-400 rounded-full mb-4 shadow-lg">
            <Heart className="text-white" size={40} fill="white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
            Our Love Portal
          </h1>
          <p className="text-gray-600 text-sm">Enter the secret to my heart</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              💕 Your Sweet Name
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none transition-all"
              placeholder="mylove"
              autoComplete="off"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              🔐 Our Secret Promise
            </label>
            
            {/* Method 1: Using input type="text" with password mask (most reliable) */}
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none transition-all"
              placeholder="forever"
              autoComplete="off"
              style={{ 
                WebkitTextSecurity: password ? 'disc' : 'none',
                textSecurity: password ? 'disc' : 'none'
              }}
              required
            />
            
            {/* Alternative Method 2: Using password type with multiple attributes */}
            {/* <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none transition-all"
              placeholder="forever"
              autoComplete="new-password"
              readOnly
              onFocus={(e) => e.target.removeAttribute('readonly')}
              required
            /> */}
          </div>

          {showError && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm animate-shake">
              Oops! That's not quite right. Try again, my love! 💝
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-4 rounded-xl hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Unlock My Heart 💖
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Hint: Username is how I see you ✨</p>
          <p>Password is how long we'll be together 💕</p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        
        @keyframes popup {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          50% { transform: translate(-50%, -50%) scale(1.1); }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
          75% { transform: scale(1.1); }
        }
        
        .animate-shake {
          animation: shake 0.5s;
        }
        
        .animate-popup {
          animation: popup 0.4s ease-out;
        }
        
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}