// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Heart, Sparkles, Gift } from 'lucide-react';

// // Import your celebration photos - Update these paths to match your actual images
// // Create an 'assets' folder in your src directory and add your images there
// import photo1 from '../src/assets/sliderImg1.jpg';
// import photo2 from '../src/assets/sliderImg2.jpg';
// import photo3 from '../src/assets/sliderImg3.jpg';
// import photo4 from '../src/assets/sliderImg4.jpg';

// export default function Celebration() {
//   const navigate = useNavigate();
//   const [showSurprise, setShowSurprise] = useState(false);
//   const slideContainerRef = useRef(null);
//   const [hasCompleted, setHasCompleted] = useState(false);

//   // Use your imported photos
//   const celebrationPhotos = [
//     photo1,
//     photo2,
//     photo3,
//     photo4
//   ];

//   // Photo descriptions to display on each image
//   const photoDescriptions = [
//     "Our Beautiful Moments",
//     "Together Forever",
//     "Happy Valentine's Day",
//     "I Love You 💕"
//   ];

//   // Double the array for seamless continuous sliding
//   const doubledPhotos = [...celebrationPhotos, ...celebrationPhotos];
//   const doubledDescriptions = [...photoDescriptions, ...photoDescriptions];

//   useEffect(() => {
//     const slideDuration = 12000; // 12 seconds for one complete cycle (adjust for speed)
//     const container = slideContainerRef.current;
    
//     if (container) {
//       // Reset to starting position
//       container.style.transition = 'none';
//       container.style.transform = 'translateY(0)';
      
//       // Force reflow
//       container.offsetHeight;
      
//       // Start the animation
//       container.style.transition = `transform ${slideDuration}ms linear`;
//       container.style.transform = 'translateY(-50%)';
      
//       // When animation completes, show surprise button
//       const timer = setTimeout(() => {
//         if (!hasCompleted) {
//           setHasCompleted(true);
//           setShowSurprise(true);
//         }
//       }, slideDuration);
      
//       return () => clearTimeout(timer);
//     }
//   }, [hasCompleted]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 p-4 overflow-hidden relative">
//       {/* Celebration effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(50)].map((_, i) => (
//           <Heart
//             key={i}
//             className="absolute text-red-500"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `-10%`,
//               animation: `fall ${Math.random() * 3 + 2}s linear infinite ${Math.random() * 5}s`,
//               fontSize: `${Math.random() * 30 + 20}px`
//             }}
//             fill="currentColor"
//           />
//         ))}
//         {[...Array(30)].map((_, i) => (
//           <Sparkles
//             key={`sparkle-${i}`}
//             className="absolute text-yellow-300"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `twinkle ${Math.random() * 2 + 1}s ease-in-out infinite ${Math.random() * 2}s`
//             }}
//             size={Math.random() * 30 + 15}
//           />
//         ))}
//       </div>

//       <div className="text-center relative z-10 w-full max-w-3xl animate-scale-in">
//         <div className="bg-gradient-to-br from-pink-200 to-rose-200 backdrop-blur-md rounded-3xl p-6 sm:p-12 shadow-2xl border-4 border-white/50">
          
//           {/* Title */}
//           <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-8 sm:mb-12 animate-fade-in">
//             You are my forever 🧿❤️!
//           </h1>

//           {/* Continuous Vertical Slideshow Container */}
//           <div className="mb-8 sm:mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
//             <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4 shadow-xl overflow-hidden">
//               <div 
//                 className="relative bg-white rounded-xl overflow-hidden" 
//                 style={{ height: '1300px' }}
//               >
//                 {/* Continuous sliding container */}
//                 <div 
//                   ref={slideContainerRef}
//                   className="h-full"
//                   style={{
//                     willChange: 'transform'
//                   }}
//                 >
//                   {doubledPhotos.map((photo, index) => (
//                     <div
//                       key={index}
//                       className="relative h-1/2"
//                       style={{ height: `${100 / doubledPhotos.length * 2}%` }}
//                     >
//                       <img
//                         src={photo}
//                         alt={`Memory ${index + 1}`}
//                         className="w-full h-full object-cover object-center"
//                       />
//                       {/* Text overlay on each photo */}
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
//                         <p className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center">
//                           {doubledDescriptions[index]}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Speed indicator */}
//               <div className="mt-4 flex items-center justify-center gap-2">
//                 <span className="text-sm text-gray-600 font-medium">Our Memories Scroll</span>
//                 <div className="w-32 h-2 bg-pink-200 rounded-full overflow-hidden">
//                   <div 
//                     className="h-full bg-gradient-to-r from-pink-500 to-rose-600 rounded-full"
//                     style={{
//                       animation: 'progress 12s linear infinite'
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Message */}
//           <div className="text-gray-800 space-y-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
//             <p className="text-lg sm:text-xl md:text-2xl font-semibold">
//               I love you more than words can say. ❤️
//             </p>
//             <p className="text-base sm:text-lg leading-relaxed px-4">
//               No matter where life takes us, my heart will always choose you. Thank you for being my peace, my smile, my love. This Valentine's Day and every day after, I'm grateful to call you mine.
//             </p>
//           </div>

//           {/* Hearts decoration */}
//           <div className="flex justify-center gap-4 mt-8 text-4xl animate-bounce-in" style={{ animationDelay: '0.9s' }}>
//             <span className="animate-pulse" style={{ animationDelay: '0s' }}>💖</span>
//             <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>💝</span>
//             <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>💗</span>
//             <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>💓</span>
//             <span className="animate-pulse" style={{ animationDelay: '0.8s' }}>💕</span>
//           </div>

//           {/* Hidden surprise button */}
//           {showSurprise && (
//             <div className="mt-12 text-center animate-scale-in">
//               <p className="text-pink-600 font-semibold mb-4 text-lg animate-pulse">
//                 ✨ Wait... there's one more surprise for you! ✨
//               </p>
//               <button
//                 onClick={() => navigate('/timeline')}
//                 className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold text-xl px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-300 flex items-center gap-3 mx-auto"
//               >
//                 <Gift className="animate-bounce" size={28} />
//                 Our Love Story
//                 <Heart size={28} fill="white" className="animate-heartbeat" />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <style>{`
//         @keyframes fall {
//           to {
//             transform: translateY(100vh) rotate(360deg);
//           }
//         }
        
//         @keyframes twinkle {
//           0%, 100% { opacity: 0; transform: scale(0); }
//           50% { opacity: 1; transform: scale(1); }
//         }
        
//         @keyframes scale-in {
//           from { transform: scale(0.8); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
        
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         @keyframes slide-up {
//           from { transform: translateY(30px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
        
//         @keyframes bounce-in {
//           0% { transform: scale(0); opacity: 0; }
//           50% { transform: scale(1.2); }
//           100% { transform: scale(1); opacity: 1; }
//         }
        
//         @keyframes heartbeat {
//           0%, 100% { transform: scale(1); }
//           25% { transform: scale(1.2); }
//           50% { transform: scale(1); }
//           75% { transform: scale(1.1); }
//         }
        
//         @keyframes progress {
//           0% { width: 0%; }
//           100% { width: 100%; }
//         }
        
//         .animate-scale-in {
//           animation: scale-in 0.6s ease-out;
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out backwards;
//         }
        
//         .animate-slide-up {
//           animation: slide-up 0.8s ease-out backwards;
//         }
        
//         .animate-bounce-in {
//           animation: bounce-in 0.8s ease-out backwards;
//         }
        
//         .animate-heartbeat {
//           animation: heartbeat 1.5s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles, Gift, ArrowLeft } from 'lucide-react';

// Import your celebration photos - Update these paths to match your actual images
// Create an 'assets' folder in your src directory and add your images there
import photo1 from '../src/assets/sliderImg1.jpg';
import photo2 from '../src/assets/sliderImg2.jpg';
import photo3 from '../src/assets/sliderImg3.jpg';
import photo4 from '../src/assets/sliderImg4.jpg';

export default function Celebration() {
  const navigate = useNavigate();
  const [showSurprise, setShowSurprise] = useState(false);
  const slideContainerRef = useRef(null);
  const [hasCompleted, setHasCompleted] = useState(false);

  // Use your imported photos
  const celebrationPhotos = [
    photo1,
    photo2,
    photo3,
    photo4
  ];

  // Photo descriptions to display on each image
  const photoDescriptions = [
    "Our Beautiful Moments",
    "Together Forever",
    "Happy Valentine's Day",
    "I Love You 💕"
  ];

  // Double the array for seamless continuous sliding
  const doubledPhotos = [...celebrationPhotos, ...celebrationPhotos];
  const doubledDescriptions = [...photoDescriptions, ...photoDescriptions];

  useEffect(() => {
    const slideDuration = 12000; // 12 seconds for one complete cycle (adjust for speed)
    const container = slideContainerRef.current;
    
    if (container) {
      // Reset to starting position
      container.style.transition = 'none';
      container.style.transform = 'translateY(0)';
      
      // Force reflow
      container.offsetHeight;
      
      // Start the animation
      container.style.transition = `transform ${slideDuration}ms linear`;
      container.style.transform = 'translateY(-50%)';
      
      // When animation completes, show surprise button
      const timer = setTimeout(() => {
        if (!hasCompleted) {
          setHasCompleted(true);
          setShowSurprise(true);
        }
      }, slideDuration);
      
      return () => clearTimeout(timer);
    }
  }, [hasCompleted]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 p-4 overflow-hidden relative">
      {/* Heart-shaped Back Button */}
      <button
        onClick={() => navigate('/proposal')}
        className="fixed top-6 left-6 z-50 group"
        aria-label="Back to proposal"
      >
        <div className="relative">
          {/* Heart background */}
          <Heart
            size={56}
            className="text-pink-500 group-hover:text-pink-600 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
            fill="currentColor"
          />
          {/* Arrow icon inside heart */}
          <ArrowLeft
            size={24}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:text-pink-100 transition-colors duration-300"
            strokeWidth={3}
          />
        </div>
        {/* Tooltip on hover */}
        <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-white text-pink-600 px-3 py-1 rounded-full text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Back to Proposal
        </span>
      </button>

      {/* Celebration effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-red-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
              animation: `fall ${Math.random() * 3 + 2}s linear infinite ${Math.random() * 5}s`,
              fontSize: `${Math.random() * 30 + 20}px`
            }}
            fill="currentColor"
          />
        ))}
        {[...Array(30)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute text-yellow-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 2 + 1}s ease-in-out infinite ${Math.random() * 2}s`
            }}
            size={Math.random() * 30 + 15}
          />
        ))}
      </div>

      <div className="text-center relative z-10 w-full max-w-3xl animate-scale-in">
        <div className="bg-gradient-to-br from-pink-200 to-rose-200 backdrop-blur-md rounded-3xl p-6 sm:p-12 shadow-2xl border-4 border-white/50">
          
          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-8 sm:mb-12 animate-fade-in">
            You are my forever 🧿❤️!
          </h1>

          {/* Continuous Vertical Slideshow Container */}
          <div className="mb-8 sm:mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4 shadow-xl overflow-hidden">
              <div 
                className="relative bg-white rounded-xl overflow-hidden" 
                style={{ height: '1300px' }}
              >
                {/* Continuous sliding container */}
                <div 
                  ref={slideContainerRef}
                  className="h-full"
                  style={{
                    willChange: 'transform'
                  }}
                >
                  {doubledPhotos.map((photo, index) => (
                    <div
                      key={index}
                      className="relative h-1/2"
                      style={{ height: `${100 / doubledPhotos.length * 2}%` }}
                    >
                      <img
                        src={photo}
                        alt={`Memory ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Text overlay on each photo */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                        <p className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center">
                          {doubledDescriptions[index]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speed indicator */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="text-sm text-gray-600 font-medium">Our Memories Scroll</span>
                <div className="w-32 h-2 bg-pink-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-pink-500 to-rose-600 rounded-full"
                    style={{
                      animation: 'progress 12s linear infinite'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="text-gray-800 space-y-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold">
              I love you more than words can say. ❤️
            </p>
            <p className="text-base sm:text-lg leading-relaxed px-4">
              No matter where life takes us, my heart will always choose you. Thank you for being my peace, my smile, my love. This Valentine's Day and every day after, I'm grateful to call you mine.
            </p>
          </div>

          {/* Hearts decoration */}
          <div className="flex justify-center gap-4 mt-8 text-4xl animate-bounce-in" style={{ animationDelay: '0.9s' }}>
            <span className="animate-pulse" style={{ animationDelay: '0s' }}>💖</span>
            <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>💝</span>
            <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>💗</span>
            <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>💓</span>
            <span className="animate-pulse" style={{ animationDelay: '0.8s' }}>💕</span>
          </div>

          {/* Hidden surprise button */}
          {showSurprise && (
            <div className="mt-12 text-center animate-scale-in">
              <p className="text-pink-600 font-semibold mb-4 text-lg animate-pulse">
                ✨ Wait... there's one more surprise for you! ✨
              </p>
              <button
                onClick={() => navigate('/timeline')}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold text-xl px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <Gift className="animate-bounce" size={28} />
                Our Love Story
                <Heart size={28} fill="white" className="animate-heartbeat" />
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes scale-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes bounce-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
          75% { transform: scale(1.1); }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out backwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out backwards;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out backwards;
        }
        
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}