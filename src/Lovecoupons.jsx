import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Gift, ArrowLeft, Sparkles, Check } from 'lucide-react';

export default function LoveCoupons() {
  const navigate = useNavigate();
  const [redeemedCoupons, setRedeemedCoupons] = useState([]);
  const [flippedCoupon, setFlippedCoupon] = useState(null);

  const coupons = [
    {
      id: 1,
      title: "One Free Hug",
      description: "Redeemable anytime, anywhere. No questions asked!",
      icon: "🤗",
      color: "from-pink-400 to-rose-400",
      validUntil: "Forever"
    },
    {
      id: 2,
      title: "Movie Night of Your Choice",
      description: "Pick any movie, I'll watch it with you (even if it's romantic!)",
      icon: "🎬",
      color: "from-purple-400 to-pink-400",
      validUntil: "Forever"
    },
    {
      id: 3,
      title: "Breakfast in Bed",
      description: "I'll cook your favorite breakfast and serve it to you in bed!",
      icon: "🍳",
      color: "from-orange-400 to-red-400",
      validUntil: "Forever"
    },
    {
      id: 4,
      title: "One Day Trip",
      description: "Choose any place you want to visit, and we'll go together!",
      icon: "✈️",
      color: "from-blue-400 to-purple-400",
      validUntil: "Forever"
    },
    {
      id: 5,
      title: "Massage Session",
      description: "30-minute relaxing massage, your favorite music included!",
      icon: "💆",
      color: "from-green-400 to-teal-400",
      validUntil: "Forever"
    },
    {
      id: 6,
      title: "Shopping Spree",
      description: "One guilt-free shopping day - buy whatever makes you happy!",
      icon: "🛍️",
      color: "from-red-400 to-pink-400",
      validUntil: "Forever"
    },
    {
      id: 7,
      title: "Dinner Date",
      description: "Fancy restaurant of your choice, all dressed up!",
      icon: "🍽️",
      color: "from-yellow-400 to-orange-400",
      validUntil: "Forever"
    },
    {
      id: 8,
      title: "Your Favorite Dessert",
      description: "I'll bake/buy your favorite dessert whenever you want!",
      icon: "🍰",
      color: "from-pink-500 to-purple-500",
      validUntil: "Forever"
    },
    {
      id: 9,
      title: "Photo Shoot Date",
      description: "I'll be your personal photographer for the day!",
      icon: "📸",
      color: "from-indigo-400 to-pink-400",
      validUntil: "Forever"
    },
    {
      id: 10,
      title: "Unlimited Kisses",
      description: "Valid 24/7, no expiration date. Redeem as many as you want!",
      icon: "💋",
      color: "from-red-500 to-pink-500",
      validUntil: "Forever"
    },
    {
      id: 11,
      title: "Picnic Under The Stars",
      description: "Romantic picnic with your favorite snacks and drinks!",
      icon: "🌙",
      color: "from-purple-500 to-blue-500",
      validUntil: "Forever"
    },
    {
      id: 12,
      title: "I'll Do Your Chores",
      description: "One day of doing all the chores you don't want to do!",
      icon: "🧹",
      color: "from-teal-400 to-green-400",
      validUntil: "Forever"
    }
  ];

  const handleCouponClick = (couponId) => {
    setFlippedCoupon(flippedCoupon === couponId ? null : couponId);
  };

  const handleRedeem = (couponId) => {
    if (!redeemedCoupons.includes(couponId)) {
      setRedeemedCoupons([...redeemedCoupons, couponId]);
    }
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
              animation: `float ${Math.random() * 20 + 15}s infinite ease-in-out ${Math.random() * 5}s`
            }}
            size={Math.random() * 60 + 30}
          />
        ))}
        {[...Array(15)].map((_, i) => (
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <Gift className="text-red-500 animate-bounce" size={60} />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-pink-600 via-red-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Love Coupons For You 💝
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-2">
            12 special vouchers just for you!
          </p>
          <p className="text-sm text-gray-600">
            Click to flip • Tap "Redeem" when you want to use them!
          </p>
          <div className="mt-4 inline-block bg-purple-100 px-6 py-2 rounded-full">
            <p className="text-purple-700 font-semibold">
              Redeemed: {redeemedCoupons.length}/12 💕
            </p>
          </div>
        </div>

        {/* Coupons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {coupons.map((coupon, index) => {
            const isFlipped = flippedCoupon === coupon.id;
            const isRedeemed = redeemedCoupons.includes(coupon.id);

            return (
              <div
                key={coupon.id}
                className="perspective animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`relative h-64 transition-transform duration-500 transform-style-3d cursor-pointer ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => handleCouponClick(coupon.id)}
                >
                  {/* Front of coupon */}
                  <div className={`absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br ${coupon.color} p-6 shadow-xl hover:shadow-2xl transition-all`}>
                    <div className="flex flex-col items-center justify-center h-full text-white">
                      {isRedeemed && (
                        <div className="absolute top-3 right-3 bg-white rounded-full p-1">
                          <Check className="text-green-500" size={20} />
                        </div>
                      )}
                      <div className="text-6xl mb-4">{coupon.icon}</div>
                      <h3 className="text-xl font-bold text-center mb-2">
                        {coupon.title}
                      </h3>
                      <p className="text-sm text-center opacity-90">
                        Click to see details
                      </p>
                    </div>
                  </div>

                  {/* Back of coupon */}
                  <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-white p-6 shadow-xl border-4 ${
                    isRedeemed ? 'border-green-400' : 'border-pink-300'
                  }`}>
                    <div className="flex flex-col h-full">
                      <div className="text-4xl mb-3 text-center">{coupon.icon}</div>
                      <h3 className="text-lg font-bold text-gray-800 text-center mb-3">
                        {coupon.title}
                      </h3>
                      <p className="text-sm text-gray-600 text-center mb-4 flex-grow">
                        {coupon.description}
                      </p>
                      <div className="text-xs text-gray-500 text-center mb-3">
                        Valid Until: <span className="font-semibold text-pink-600">{coupon.validUntil}</span>
                      </div>
                      {!isRedeemed ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRedeem(coupon.id);
                          }}
                          className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg"
                        >
                          Redeem Now!
                        </button>
                      ) : (
                        <div className="bg-green-100 text-green-700 font-bold py-2 px-4 rounded-full text-center border-2 border-green-400">
                          ✓ Redeemed!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer message */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border-4 border-pink-200 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <Heart className="mx-auto text-red-500 mb-4 animate-pulse" size={50} fill="currentColor" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            These Are All Yours! 💕
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
            Use them whenever you want - they never expire! You deserve all the love, care, and happiness in the world. Each coupon is a promise I'm making to you. 💖
          </p>

          {/* Continue button */}
          <button
            onClick={() => navigate('/final')}
            className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white font-bold text-xl px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transform transition-all duration-300 animate-pulse"
          >
            Continue to Final Message 💝
          </button>
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

      <style jsx>{`
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
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out backwards;
        }
        
        .animate-slide-in {
          animation: slide-in 0.6s ease-out backwards;
        }
        
        .perspective {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}