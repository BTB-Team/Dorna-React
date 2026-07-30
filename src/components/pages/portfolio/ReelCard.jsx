// ReelCard.js
import React, { useRef } from "react";

export default function ReelCard({ reel, onClick }) {
  const videoRef = useRef(null);

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Play prevented:", err);
      });
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="
        reel-card
        relative
        w-[361px]
        h-[642px]
        overflow-hidden
        rounded-[32px]
        bg-black
        shadow-xl
        cursor-pointer
        group
        snap-start
        flex-shrink-0
      "
    >
      {/* Video */}
      <video
        ref={videoRef}
        poster={reel.poster}
        preload="metadata"
        muted
        loop
        playsInline
        controls={false}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          ease-out
          group-hover:scale-110
          pointer-events-none
        "
      >
        <source src={reel.videoMp4} type="video/mp4" />
        <source src={reel.videoWebm} type="video/webm" />
      </video>

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#042F24]/90
          via-transparent
          to-black/40
          pointer-events-none
        "
      />

      {/* Brand */}
      <div
        className="
          absolute
          top-7
          left-1/2
          -translate-x-1/2
          text-center
          pointer-events-none
        "
      >
        <span
          className="
            text-yellow-500
            font-extrabold
            tracking-[0.25em]
            text-sm
          "
        >
          {reel.brand}
        </span>
      </div>

      {/* Bottom Content */}
      <div
        className="
          absolute
          bottom-10
          left-0
          right-0
          px-6
          text-center
          pointer-events-none
        "
      >
        {reel.subtitle && (
          <p className="text-gray-300 text-sm mb-2">
            {reel.subtitle}
          </p>
        )}

        <h3 className="text-white text-[28px] font-bold leading-tight">
          {reel.title}
        </h3>

        <div className="w-20 h-[2px] bg-yellow-500 mx-auto mt-5"></div>
      </div>
    </div>
  );
}