'use client';

import { useState, useEffect, useRef } from 'react';
import { Sparkles, Heart, Star, Cake, Gift, PartyPopper } from 'lucide-react';

export default function BirthdayPage() {
  const [confetti, setConfetti] = useState([]);
  const [isCakeCut, setIsCakeCut] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const cakeRef = useRef(null);

  useEffect(() => {
    const confettiArray = [];
    for (let i = 0; i < 80; i++) {
      confettiArray.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 3,
        animationDuration: 2.5 + Math.random() * 2,
        size: Math.random() * 8 + 3,
        color: ['#60A5FA', '#3B82F6', '#2563EB', '#1D4ED8', '#34D399', '#FBBF24', '#F472B6'][Math.floor(Math.random() * 7)],
      });
    }
    setConfetti(confettiArray);
  }, []);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientY);
  const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientY);

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50 && !isCakeCut) setIsCakeCut(true);
  };

  const handleMouseSwipe = (e) => {
    if (!isCakeCut && e.buttons === 1) setIsCakeCut(true);
  };

  const carouselImages = ['u.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg', 'seven.jpg'];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes wiggle-slow { 0%, 100% { transform: rotate(-5deg) scale(1); } 50% { transform: rotate(5deg) scale(1.05); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes heartbeat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
        @keyframes pulse-glow { 0%, 100% { opacity: 0.8; } 50% { opacity: 0.5; } }
        @keyframes letter-bounce { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-15px) scale(1.15); } }
        @keyframes shimmer { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        @keyframes flame { 0%, 100% { transform: scale(1) translateY(0); } 50% { transform: scale(1.1) translateY(-5px); } }
        @keyframes twinkle { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes scroll-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes rotateIn { from { transform: rotate(-180deg) scale(0); opacity: 0; } to { transform: rotate(0) scale(1); opacity: 1; } }
        @keyframes carousel-mobile { 
          0% { transform: translateX(0); }
          100% { transform: translateX(-1400px); }
        }
        @keyframes carousel-desktop { 
          0% { transform: translateX(0); }
          100% { transform: translateX(-3500px); }
        }

        @media (max-width: 640px) {
          .carousel-mobile { animation: carousel-mobile 16s linear infinite !important; }
        }

        @media (min-width: 641px) {
          .carousel-desktop { animation: carousel-desktop 24s linear infinite !important; }
        }

        .animate-fall { animation: fall 4s linear infinite; }
        .animate-fadeIn { animation: fadeIn 1.5s ease-in; }
        .animate-slideUp { animation: slideUp 1s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-wiggle-slow { animation: wiggle-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 4s linear infinite; }
        .animate-heartbeat { animation: heartbeat 1.2s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-letter-bounce { animation: letter-bounce 1.5s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
        .animate-flame { animation: flame 1.2s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 1.5s ease-in-out infinite; }
        .animate-scroll-left { animation: scroll-left 20s linear infinite; }
        .animate-scroll-right { animation: scroll-right 20s linear infinite; }
        .animate-bounce-custom { animation: bounce 2s ease-in-out infinite; }
        .animate-rotateIn { animation: rotateIn 1s ease-out; }
        .carousel-mobile { animation: carousel-mobile 8s linear infinite; }
        .carousel-desktop { animation: carousel-desktop 12s linear infinite; }

        .drop-shadow-glow { filter: drop-shadow(0 0 8px currentColor) drop-shadow(0 0 16px currentColor); }

        .will-change-transform { will-change: transform; }

        * { backface-visibility: hidden; }

        @media (max-width: 640px) {
          .carousel-mobile { animation: carousel-mobile 6s linear infinite; }
        }
      `}} />
      
      <div className="overflow-x-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400">
          <div className="absolute inset-0 opacity-100">
            <div className="absolute inset-0 bg-cover bg-center blur-[2px]" id = "hero-section" />
          </div>

          {confetti.map((item) => (
            <div
              key={item.id}
              className="absolute animate-fall pointer-events-none will-change-transform"
              style={{
                left: `${item.left}%`,
                animationDelay: `${item.animationDelay}s`,
                animationDuration: `${item.animationDuration}s`,
              }}
            >
              <div
                style={{
                  width: item.size,
                  height: item.size,
                  backgroundColor: item.color,
                  borderRadius: '50%',
                }}
              />
            </div>
          ))}

          <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
            {/* Decorative Icons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 sm:mb-12">
              <div className="animate-bounce-custom will-change-transform">
                <Sparkles className="w-12 sm:w-16 text-yellow-300 drop-shadow-glow animate-spin-slow" />
              </div>
              <div className="animate-bounce-custom will-change-transform" style={{ animationDelay: '0.2s' }}>
                <Gift className="w-12 sm:w-16 text-pink-200 drop-shadow-glow animate-wiggle-slow" />
              </div>
              <div className="animate-bounce-custom will-change-transform" style={{ animationDelay: '0.4s' }}>
                <Heart className="w-12 sm:w-16 text-red-300 drop-shadow-glow animate-heartbeat" fill="currentColor" />
              </div>
            </div>

            {/* Main Heading */}
            <div className="relative mb-6 sm:mb-10">
              <div className="absolute -inset-3 sm:-inset-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur-3xl opacity-60 animate-pulse-glow" />
              
              <h1 className="relative text-5xl sm:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl">
                <span className="inline-block animate-letter-bounce will-change-transform" style={{ animationDelay: '0s' }}>H</span>
                <span className="inline-block animate-letter-bounce will-change-transform" style={{ animationDelay: '0.1s' }}>a</span>
                <span className="inline-block animate-letter-bounce will-change-transform" style={{ animationDelay: '0.2s' }}>p</span>
                <span className="inline-block animate-letter-bounce will-change-transform" style={{ animationDelay: '0.3s' }}>p</span>
                <span className="inline-block animate-letter-bounce will-change-transform" style={{ animationDelay: '0.4s' }}>y</span>
                <span className="inline-block mx-2 sm:mx-4" />
                <span className="inline-block animate-letter-bounce will-change-transform" style={{ animationDelay: '0.5s' }}>B</span>
                <span className="inline-block animate-letter-bounce will-change-transform" style={{ animationDelay: '0.6s' }}>i</span>
                <span className="inline-block animate-letter-bounce will-change-transform" style={{ animationDelay: '0.7s' }}>r</span>
                <span className="inline-block animate-letter-bounce will-change-transform" style={{ animationDelay: '0.8s' }}>t</span>
                <span className="inline-block animate-letter-bounce will-change-transform" style={{ animationDelay: '0.9s' }}>h</span>
                <span className="inline-block animate-letter-bounce will-change-transform" style={{ animationDelay: '1s' }}>d</span>
                <span className="inline-block animate-letter-bounce will-change-transform" style={{ animationDelay: '1.1s' }}>a</span>
                <span className="inline-block animate-letter-bounce will-change-transform" style={{ animationDelay: '1.2s' }}>y</span>
                <span className="inline-block animate-letter-bounce will-change-transform" style={{ animationDelay: '1.3s' }}>!</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-50 animate-pulse" />
              <p className="relative text-2xl sm:text-3xl font-bold text-white drop-shadow-xl bg-gradient-to-r from-blue-900/40 to-cyan-900/40 backdrop-blur-md rounded-2xl px-6 sm:px-10 py-3 sm:py-4 border border-white/20">
                To the most amazing person in the world
              </p>
            </div>

            {/* Floating Hearts */}
            <div className="flex justify-center gap-4 sm:gap-6">
              <Heart className="w-12 sm:w-16 text-red-400 fill-red-400 drop-shadow-glow animate-float will-change-transform" />
              <Heart className="w-14 sm:w-20 text-pink-400 fill-pink-400 drop-shadow-glow animate-float will-change-transform" style={{ animationDelay: '0.3s' }} />
              <Heart className="w-12 sm:w-16 text-rose-400 fill-rose-400 drop-shadow-glow animate-float will-change-transform" style={{ animationDelay: '0.6s' }} />
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 animate-bounce-custom">
              <div className="text-white text-3xl drop-shadow-lg">↓</div>
            </div>
          </div>
        </section>

        {/* CAKE SECTION */}
        <section className="relative min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 py-12 overflow-hidden">
          <div className="absolute top-0 left-0 w-full overflow-hidden py-4">
            <div className="flex animate-scroll-left whitespace-nowrap">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="inline-flex items-center mx-3">
                  <Heart className="w-6 h-6 text-blue-400 fill-blue-400 mx-1" />
                  <Star className="w-6 h-6 text-cyan-400 fill-cyan-400 mx-1" />
                  <Sparkles className="w-6 h-6 text-teal-400 mx-1" />
                </div>
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 flex items-center justify-center min-h-screen">
            <div className="text-center w-full max-w-2xl">
              <div
                ref={cakeRef}
                className="relative inline-block cursor-pointer w-full"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseSwipe}
              >
                <div className={`transition-all duration-700 will-change-transform ${isCakeCut ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
                  <div className="relative flex justify-center">
                    <div className="relative">
                      {/* Cake top */}
                      <div className="w-48 h-56 sm:w-56 sm:h-64 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500 rounded-t-full mx-auto relative animate-wiggle-slow shadow-2xl will-change-transform">
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-yellow-400 animate-flame shadow-lg" />
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-5 h-6 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full animate-flame" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-200/20 to-transparent animate-shimmer" />
                      </div>
                      {/* Cake base */}
                      <div className="w-52 h-20 sm:w-60 sm:h-24 bg-gradient-to-b from-blue-500 to-blue-600 mx-auto shadow-2xl" />
                      
                      {/* Decorative stars */}
                      <div className="absolute -top-4 -left-4 animate-spin-slow will-change-transform">
                        <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" />
                      </div>
                      <div className="absolute -top-4 -right-4 animate-spin-slow will-change-transform" style={{ animationDirection: 'reverse' }}>
                        <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-8 text-lg sm:text-xl font-semibold text-blue-600 animate-pulse px-4">
                    Swipe down or click to open the box !!!!!!!!
                  </p>
                </div>

                {/* Cake content */}
                <div className={`transition-all duration-700 will-change-transform ${isCakeCut ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute top-0 left-1/2 transform -translate-x-1/2'}`}>
                  <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl p-8 max-w-xl mx-auto animate-slideUp border-4 border-blue-200">
                    <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 mb-6 animate-bounce-custom">
                      Happy Birthday My Love!
                    </h2>

                    <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 border-blue-300 animate-rotateIn will-change-transform">
                      <img
                        src="main.jpg"
                        alt="Birthday"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-inner border-2 border-blue-200 mb-4">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">
                        "On this special day, I want you to know how much you mean to me.
                        You bring sunshine to my cloudiest days and make every moment we spend together magical.
                        Here's to celebrating you today and always! I love you more than words can say."
                      </p>
                    </div>

                    <div className="flex justify-center gap-3 flex-wrap">
                      {[...Array(5)].map((_, i) => (
                        <Heart
                          key={i}
                          className="w-6 h-6 text-pink-500 fill-pink-500 animate-heartbeat will-change-transform"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden py-4">
            <div className="flex animate-scroll-right whitespace-nowrap">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="inline-flex items-center mx-3">
                  <Cake className="w-6 h-6 text-blue-500 mx-1" />
                  <Heart className="w-6 h-6 text-pink-400 fill-pink-400 mx-1" />
                  <PartyPopper className="w-6 h-6 text-green-400 mx-1" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEMORIES SECTION */}
        <section className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-cyan-50 to-blue-50 py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl sm:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 mb-12 animate-fadeIn">
              My Beautiful Moments
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto ">
              {[
                'aa.jpg',
                't.jpg',
                'u.jpg',
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fadeIn border-4 border-blue-200 will-change-transform"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <img
                    src={src}
                    alt={`Memory ${i + 1}`}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Heart className="w-12 h-12 text-white fill-white animate-pulse" />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto animate-fadeIn border-4 border-blue-200">
              <div className="flex items-start gap-4 mb-6">
                <Heart className="w-12 h-12 text-pink-500 fill-pink-500 flex-shrink-0 animate-pulse will-change-transform" />
                <div className="w-full">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">A Letter For You</h3>

                  <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                    <p>
                      My dearest love, on this incredibly special day, I want to take a moment to tell you just how much you mean to me.
                      From the first moment we met, you've brought an incredible amount of joy, laughter, and love into my life.
                    </p>
                    <p>
                      Every day with you feels like a celebration. Your smile lights up my world, your laugh is my favorite sound,
                      and your presence makes everything better.
                    </p>
                    <p>
                      You inspire me to be a better person. Your kindness, strength, and beautiful heart remind me every day how lucky I am.
                    </p>
                    <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-lg">
                      Happy Birthday, my love! I love you more than words could ever express!
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {[...Array(7)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-twinkle will-change-transform"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE CAROUSEL SECTION */}
        <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 py-8 overflow-hidden">
          <div className="container mx-auto px-4 mb-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 animate-fadeIn">
              Gallery of Love
            </h2>
          </div>
          
          <div className="w-full overflow-hidden">
            <div className="carousel-mobile sm:carousel-desktop flex gap-2 sm:gap-4 px-2 sm:px-4 will-change-transform">
              {[...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages].map((img, idx) => (
                <div key={idx} className="flex-shrink-0">
                  <img
                    src={img}
                    alt={`Gallery ${(idx % carouselImages.length) + 1}`}
                    className="h-36 w-36 sm:h-56 sm:w-56 lg:h-64 lg:w-64 object-cover rounded-lg sm:rounded-2xl shadow-lg border-2 sm:border-4 border-blue-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL MESSAGE SECTION */}
        <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-12 flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 mb-8 animate-fadeIn">
                Thank You For Being In My Life
              </h2>

              <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 sm:p-10 mb-8 border-4 border-blue-300 animate-slideUp">
                <p className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-500 font-bold mb-6">
                  You are my greatest blessing
                </p>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                  With every passing day, I fall more in love with you. Your presence in my life has changed everything for the better.
                  Thank you for being the incredible person you are, for loving me unconditionally, and for making every moment special.
                  Today we celebrate not just another year, but another year of amazing memories we've created together.
                </p>
                <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  🎂 Happy Birthday to My Love! 🎂
                </p>
              </div>

              <div className="flex justify-center gap-3 flex-wrap mb-8">
                {[...Array(9)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-8 h-8 text-red-500 fill-red-500 animate-heartbeat will-change-transform"
                    style={{ animationDelay: `${i * 0.12}s` }}
                  />
                ))}
              </div>

              <div className="flex justify-center gap-4 flex-wrap">
                {[...Array(7)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="w-8 h-8 text-yellow-400 animate-bounce-custom will-change-transform"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}