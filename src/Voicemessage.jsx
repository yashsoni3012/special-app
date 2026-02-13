import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Play, Pause, Volume2, ArrowLeft, Sparkles } from 'lucide-react';

// Import your voice message audio file
import voiceMessage from './assets/myVoice.mp4';

export default function VoiceMessage() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Replace with your actual voice message audio file
  const audioSrc = voiceMessage; // Add your voice message path here

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 1.5 + 0.5})`,
              animation: `float ${Math.random() * 20 + 15}s infinite ease-in-out ${Math.random() * 5}s`
            }}
            size={Math.random() * 60 + 30}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute text-purple-300 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 2}s`
            }}
            size={Math.random() * 25 + 15}
          />
        ))}
      </div>

      <div className="max-w-2xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-6">
            <Volume2 className="text-purple-600 animate-pulse" size={60} />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
            A Message For You 💕
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Press play to hear my voice...
          </p>
        </div>

        {/* Audio Player Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border-4 border-purple-200 animate-scale-in">
          
          {/* Animated waveform visual */}
          <div className="flex justify-center items-center gap-1 mb-8 h-32">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={`w-1 sm:w-2 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full transition-all duration-300 ${
                  isPlaying ? 'animate-wave' : ''
                }`}
                style={{
                  height: `${Math.random() * 100 + 20}%`,
                  animationDelay: `${i * 0.05}s`
                }}
              />
            ))}
          </div>

          {/* Audio element */}
          <audio
            ref={audioRef}
            src={audioSrc}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
          />

          {/* Progress bar */}
          <div className="mb-6">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Play/Pause button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={togglePlay}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transform transition-all duration-300"
            >
              {isPlaying ? (
                <Pause size={40} fill="white" />
              ) : (
                <Play size={40} fill="white" className="ml-1" />
              )}
            </button>
          </div>

          {/* Message text */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
            <Heart className="mx-auto text-red-500 mb-4" size={40} fill="currentColor" />
            <p className="text-center text-lg sm:text-xl text-gray-800 italic leading-relaxed">
              "Words can't fully express how much you mean to me, but I hope you can hear it in my voice... I love you more than anything in this world." 💕
            </p>
          </div>

          {/* Instructions */}
          {!audioSrc && (
            <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-xl">
              <p className="text-sm text-gray-700 text-center">
                <strong>To add your voice message:</strong><br />
                1. Record your message (use your phone or Voice Memos)<br />
                2. Add the audio file to <code className="bg-yellow-200 px-2 py-1 rounded">src/assets/voice-message.mp3</code><br />
                3. Uncomment the import line and update audioSrc
              </p>
            </div>
          )}
        </div>

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

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes wave {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }
        
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }
        
        /* Custom slider styles */
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(236, 72, 153, 0.4);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(236, 72, 153, 0.4);
        }
      `}</style>
    </div>
  );
}