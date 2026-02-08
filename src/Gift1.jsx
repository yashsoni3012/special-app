import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Gift1() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Who is the absolute 'Boss' in this relationship 😏?",
      options: [
        { text: "Obviously You", isCorrect: true },
        { text: "Me", isCorrect: false },
        { text: "My Mom", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "What fights a lot in this relationship 😅?",
      options: [
        { text: "Always You", isCorrect: false },
        { text: "No One", isCorrect: false },
        { text: "Me", isCorrect: true }
      ]
    },
    {
      id: 3,
      question: "Where do I plan to spend the rest of my life 😍?",
      options: [
        { text: "Paris", isCorrect: false },
        { text: "In Your Heart", isCorrect: true },
        { text: "On Mars", isCorrect: false }
      ]
    }
  ];

  const handleAnswerClick = (optionIndex) => {
    const question = questions[currentQuestion - 1];
    const selectedOption = question.options[optionIndex];
    
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: optionIndex
    });

    if (selectedOption.isCorrect) {
      setShowFeedback(true);
      
      // Auto advance to next question after showing feedback
      setTimeout(() => {
        setShowFeedback(false);
        if (currentQuestion < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          // Quiz completed, show final message
          setCurrentQuestion(4); // Final screen
        }
      }, 1500);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 1 && currentQuestion <= questions.length) {
      setCurrentQuestion(currentQuestion - 1);
      setShowFeedback(false);
    } else {
      navigate('/questions', { state: { from: 'gift1' } });
    }
  };

  const currentQ = questions[currentQuestion - 1];
  const selectedAnswer = selectedAnswers[currentQuestion];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-pink-200 opacity-20"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 15}s infinite ease-in-out ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl p-6 sm:p-12 w-full max-w-2xl shadow-2xl relative z-10 border-4 border-white/50 animate-fade-in">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
          Quiz for you 😘
        </h1>

        {/* Question Card */}
        {currentQuestion <= questions.length ? (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-6 animate-slide-in">
            <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-6">
              {currentQ.question}
            </h2>

            {/* Options */}
            <div className="space-y-4">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = option.isCorrect;
                const showCorrect = isSelected && isCorrect && showFeedback;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== undefined}
                    className={`w-full py-4 px-6 rounded-xl font-medium text-base sm:text-lg transition-all duration-300 transform hover:scale-105 ${
                      showCorrect
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg scale-105'
                        : isSelected
                        ? 'bg-white text-gray-800 border-2 border-pink-300'
                        : 'bg-white text-gray-800 hover:bg-pink-50 border-2 border-transparent'
                    }`}
                  >
                    {option.text}
                  </button>
                );
              })}
            </div>

            {/* Feedback Message */}
            {showFeedback && currentQuestion === 3 && (
              <p className="text-center mt-6 text-pink-600 font-semibold text-lg animate-bounce">
                Correct! You're so smart! 😍
              </p>
            )}
          </div>
        ) : (
          // Final Success Screen
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 mb-6 animate-scale-in text-center">
            <div className="text-6xl mb-6 animate-bounce">🎉</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Yay! You passed the test!
            </h2>
            <p className="text-xl sm:text-2xl text-pink-600 font-semibold">
              You really love me! 💕💝
            </p>
          </div>
        )}

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
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}