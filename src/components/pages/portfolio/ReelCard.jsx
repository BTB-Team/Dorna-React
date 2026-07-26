// ReelCard.js
import React, { useRef } from 'react';

export default function ReelCard({ reel, onClick }) {
  const videoRef = useRef(null);

  // پخش ویدیو هنگام ورود موس روی کارت
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay prevented:", err);
      });
    }
  };

  // متوقف کردن و بازگرداندن ویدیو به ابتدا هنگام خروج موس
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="reel-card relative w-[300px] sm:w-[361px] h-[530px] sm:h-[642px] flex-shrink-0 rounded-3xl overflow-hidden shadow-lg group cursor-pointer bg-black snap-start transform transition-transform duration-300 active:scale-95"
    >
      {/* Background preview - Controlled via JS Event Listeners */}
      <video
        ref={videoRef}
        preload="metadata"
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
      >
        <source src={reel.videoWebm} type="video/webm" />
        <source src={reel.videoMp4} type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#042F24]/90 via-transparent to-black/40 pointer-events-none"></div>

      {/* Brand */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <span className="text-yellow-500 font-extrabold tracking-widest text-sm">
          {reel.brand}
        </span>
      </div>

      {/* Text */}
      <div className="absolute bottom-8 left-0 right-0 text-center px-4 pointer-events-none">
        {reel.subtitle && (
          <p className="text-gray-300 text-sm mb-1">
            {reel.subtitle}
          </p>
        )}
        <h3 className="text-white text-xl font-bold mb-3">
          {reel.title}
        </h3>
        <div className="w-20 h-[2px] bg-yellow-500 mx-auto"></div>
      </div>
    </div>
  );
}
