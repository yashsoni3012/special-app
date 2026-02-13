import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Calendar, MapPin, Sparkles, ArrowLeft } from "lucide-react";

export default function LoveTimeline() {
  const navigate = useNavigate();
  const [activeEvent, setActiveEvent] = useState(null);

  const timelineEvents = [
    {
      id: 1,
      date: "February 2025",
      title: "First Meeting",
      description:
        "The day our story began. I still remember the first time I saw you in that red outfit...",
      icon: "👋",
      color: "from-pink-400 to-rose-400",
      details:
        "You looked absolutely stunning in that red dress — so lovely, adorable, and incredibly attractive. I was completely mesmerized by your beauty and charm. That moment when I saw you, I felt an instant connection, as if the universe had conspired to bring us together. I couldn't take my eyes off you, and I knew right then that you were someone special. Your smile, your laughter, and the way you carried yourself left a lasting impression on me. It was the beginning of a beautiful journey that I cherish every day.",
    },
    {
      id: 2,
      date: "March 2025",
      title: "First Date",
      description:
        "Our first official date. You looked absolutely beautiful...",
      icon: "🌹",
      color: "from-red-400 to-pink-400",
      details:
        "I still remember that day so clearly. I waited for you for a long time in Parimal Garden (not a taunt 😅), and when you finally arrived, everything suddenly felt perfect. We walked around the garden together, exploring little corners and talking about everything and nothing. Then we sat on that bench, close to each other, and I softly tried to take you into my arms. After that, we went to Prithvi Cafe, and for the first time, I held your hand. That moment felt so warm, so gentle, and so special — a feeling I can still remember even today.",
    },
    {
      id: 3,
      date: "April 2025",
      title: "Became Official",
      description:
        "The day you said yes and made me the happiest person alive!",
      icon: "💑",
      color: "from-purple-400 to-pink-400",
      details:
        "Soon, we became official, and the most special moment of all came on 3rd May, your birthday. We went to the theatre together, and I brought a few little things for you, like scrunchies, just so you could wear one on your hand with mine. It was such a simple but meaningful moment for me. I had also written a love letter for you that day — a little emotional, a little funny, but full of everything I felt for you. That day was so beautiful and full of smiles. And for the very first time, I gathered the courage to say “I love you” to you face to face. It’s a memory I’ll always hold close to my heart, along with so many other little moments from that day.",
    },
    {
      id: 4,
      date: "3 May 2025",
      title: "First Kiss",
      description:
        "Our first adventure together. So many beautiful memories...",
      icon: "✈️",
      color: "from-blue-400 to-purple-400",
      details: `That moment is still so close to my heart. When we were about to kiss for the first time, it felt like time had slowed down just for us. We were nervous, smiling, and it took us almost ten minutes to finally gather the courage. But when my lips finally touched yours, I felt something I can’t fully describe — it was soft, magical, and full of love.
      
      In that moment, it felt like......

      “I was floating in the air,
      Lost in love without a care,
      Lost in your eyes, standing there,
      Our hearts speaking more than words could share......”

      That first kiss was truly, truly special to me… a memory filled with warmth, closeness, and a feeling I’ll never forget.
      
      `,
    },
    {
      id: 5,
      date: "May 2026",
      title: "First Anniversary",
      description:
        "Celebrating one year of love, laughter, and endless memories.",
      icon: "🎉",
      color: "from-yellow-400 to-orange-400",
      details: "Our first anniversary is almost here, and I can’t explain how excited and happy I feel just thinking about it. It’s going to be a celebration of us, of all the love, laughter, and beautiful memories we created together in this one year. Every little moment we spent, every smile, every hug, every kiss, every makeouts 😍😉 and every small fight that brought us closer — it all means so much to me.❤️",
    },
    {
      id: 6,
      date: "14 February 2024",
      title: "This Valentine's Day",
      description: "Creating this special gift for you, my forever love.",
      icon: "💝",
      color: "from-red-500 to-pink-500",
      details:
        "I promise to keep loving you, supporting you, annoying you, and standing by your side through every phase of life. This is just a small way of showing how much you mean to me… and how I want us to keep making memories like this forever. ❤️`",
    },
  ];

  const handleEventClick = (eventId) => {
    setActiveEvent(activeEvent === eventId ? null : eventId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 p-4 sm:p-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-200 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 1.5 + 0.5})`,
              animation: `float ${Math.random() * 20 + 15}s infinite ease-in-out ${Math.random() * 5}s`,
            }}
            size={Math.random() * 60 + 30}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute text-yellow-300 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
            size={Math.random() * 25 + 15}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <Heart
              className="text-red-500 animate-heartbeat"
              size={60}
              fill="currentColor"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-red-600 bg-clip-text text-transparent mb-4">
            Our Love Story
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Every moment with you is a memory I treasure 💕
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-red-300 transform sm:-translate-x-1/2" />

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative animate-slide-in ${
                  index % 2 === 0 ? "sm:ml-0" : "sm:ml-auto"
                } sm:w-1/2`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-8 sm:left-auto ${
                    index % 2 === 0 ? "sm:-right-6" : "sm:-left-6"
                  } top-6 w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-2xl shadow-lg z-10 transform sm:translate-x-0 -translate-x-1/2 sm:translate-x-0`}
                >
                  {event.icon}
                </div>

                {/* Event card */}
                <div
                  onClick={() => handleEventClick(event.id)}
                  className={`ml-20 sm:ml-0 ${
                    index % 2 === 0 ? "sm:mr-12" : "sm:ml-12"
                  } bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                >
                  {/* Date */}
                  <div className="flex items-center gap-2 text-pink-600 font-semibold mb-2">
                    <Calendar size={18} />
                    <span className="text-sm">{event.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Expandable details */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeEvent === event.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 border-t border-pink-200">
                      <p className="text-gray-700 italic leading-relaxed">
                        {event.details}
                      </p>
                    </div>
                  </div>

                  {/* Click hint */}
                  <div className="text-center mt-4">
                    <span className="text-xs text-pink-500 font-medium">
                      {activeEvent === event.id
                        ? "Click to collapse ▲"
                        : "Click to read more ▼"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer message */}
        <div
          className="mt-16 text-center bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 sm:p-12 shadow-xl animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <Heart
            className="mx-auto text-red-500 mb-4 animate-pulse"
            size={50}
            fill="currentColor"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            And This Is Just The Beginning...
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every day with you adds a new chapter to our beautiful story. I
            can't wait to create countless more memories together. You are my
            past, my present, and my forever future.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-3xl mb-8">
            <span className="animate-bounce" style={{ animationDelay: "0s" }}>
              💖
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>
              ✨
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              💕
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>
              🌟
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
              💝
            </span>
          </div>

          {/* Special features buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/voice-message")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg px-6 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transform transition-all duration-300 flex items-center justify-center gap-2"
            >
              🎤 Hear My Voice
            </button>
            <button
              onClick={() => navigate("/love-coupons")}
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-lg px-6 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transform transition-all duration-300 flex items-center justify-center gap-2"
            >
              🎁 Love Coupons
            </button>
          </div>
        </div>

        {/* Back button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/celebration")}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-lg px-8 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transform transition-all duration-300 flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            BACK TO CELEBRATION
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.2);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out backwards;
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out backwards;
        }
      `}</style>
    </div>
  );
}
