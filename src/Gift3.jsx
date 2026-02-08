import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';

// Import your photos here
import photo1 from '../src/assets/Img1.jpeg';
import photo2 from '../src/assets/Img2.jpeg';
import photo3 from '../src/assets/Img3.jpeg';
import photo4 from '../src/assets/Img4.jpeg';
import photo5 from '../src/assets/Img5.jpeg';
import photo6 from '../src/assets/Img6.jpeg';

export default function Gift3() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/questions', { state: { from: 'gift3' } });
  };

  // Photo data - replace the src with your imported images
  const photos = [
    {
      id: 1,
      // src: photo1,
      src: photo1, // Replace with your photo
      caption: 'Sweet Hello'
    },
    {
      id: 2,
      // src: photo2,
      src: photo2, // Replace with your photo
      caption: 'Lovely Poute'
    },
    {
      id: 3,
      // src: photo3,
      src: photo3, // Replace with your photo
      caption: 'Perfect Day'
    },
    {
      id: 4,
      // src: photo4,
      src: photo4, // Replace with your photo
      caption: 'Only Us'
    },
    {
      id: 5,
      // src: photo5,
      src: photo5, // Replace with your photo
      caption: 'My Home'
    },
    {
      id: 6,
      // src: photo6,
      src: photo6, // Replace with your photo
      caption: 'Forever Us'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-200 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 1.5 + 0.8})`,
              animation: `float ${Math.random() * 20 + 15}s infinite ease-in-out ${Math.random() * 5}s`
            }}
            size={Math.random() * 60 + 30}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl p-6 sm:p-12 w-full max-w-6xl shadow-2xl relative z-10 border-4 border-white/50 animate-fade-in">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
          Look at this cutie 😭
        </h1>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {photos.map((photo, index) => {
            // Alternate rotation angles for natural look
            const rotations = [-3, 2, -2, 3, -2, 2];
            const rotation = rotations[index % rotations.length];
            
            return (
              <div
                key={photo.id}
                className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 shadow-lg hover:shadow-xl transform hover:scale-105 hover:rotate-0 transition-all duration-300 animate-slide-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `rotate(${rotation}deg)`
                }}
              >
                {/* Photo frame */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md mb-4 aspect-[4/3]">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Caption */}
                <p className="text-center font-serif text-lg sm:text-xl text-gray-800 italic">
                  {photo.caption}
                </p>
              </div>
            );
          })}
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.5s ease-out backwards;
        }
      `}</style>
    </div>
  );
}