// SocialMediaReels.js
import { useRef, useState } from 'react';

// ۱. فراخوانی فایل داده‌های ریلز
import { reelsData } from './ReelsData'; 

// ۲. فراخوانی کامپوننت کارت ریلز
import ReelCard from './ReelCard';

export default function SocialMediaReels() {
  const scrollContainerRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.querySelector(".reel-card");
      
      const cardWidth = firstCard
        ? firstCard.getBoundingClientRect().width + 24
        : 385;

      const isRTL = window.getComputedStyle(container).direction === 'rtl';
      let scrollAmount = direction === "right" ? cardWidth : -cardWidth;
      
      if (isRTL) {
        scrollAmount = -scrollAmount;
      }

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white py-12 px-6 md:px-16 overflow-hidden font-sans">
      
      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto flex justify-between items-center mb-10">
        <h2 className="text-[#04433b] text-xl md:text-2xl font-extrabold">
          Social Media Reels
        </h2>

        <div className="flex gap-3">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-[#04433b] text-white flex items-center justify-center hover:bg-[#03342e] transition-colors shadow-md group"
            aria-label="Scroll Left"
          >
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-[#04433b] text-white flex items-center justify-center hover:bg-[#03342e] transition-colors shadow-md group"
            aria-label="Scroll Right"
          >
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards Slider */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {reelsData.map((reel) => (
            <ReelCard 
              key={reel.id} 
              reel={reel} 
              onClick={() => setActiveVideo(reel)} 
            />
          ))}
        </div>
      </div>

      {/* Background Bottom Wave */}
      <img
        src="/PortfolioImage/Vector 6.svg"
        alt=""
        className="absolute -bottom-12 left-0 w-full h-auto z-0 pointer-events-none"
      />

      {/* Video Modal (Popup) */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-lg aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white font-bold flex items-center justify-center transition-colors text-xl"
            >
              ✕
            </button>

            {/* strictly has sound, non-autoplayed until explicit user action */}
            <video
              autoPlay
              controls
              playsInline
              className="w-full h-full object-contain"
            >
              <source src={activeVideo.videoWebm} type="video/webm" />
              <source src={activeVideo.videoMp4} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
