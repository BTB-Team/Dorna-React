// SocialMediaReels.jsx

import { useRef, useState } from "react";

// Reels Data
import { reelsData } from "./ReelsData";

// Reel Card
import ReelCard from "./ReelCard";

export default function SocialMediaReels() {
  const scrollContainerRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  // =========================
  // FAST CUSTOM SCROLL
  // =========================
  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const firstCard = container.querySelector(".reel-card");

    // Card width + gap
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width + 24
      : 385;

    const start = container.scrollLeft;

    const target =
      direction === "right"
        ? start + cardWidth
        : start - cardWidth;

    // Faster scroll
    const duration = 100;

    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const ease = 1 - Math.pow(1 - progress, 3);

      container.scrollLeft =
        start + (target - start) * ease;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <section  id="social-media"
      className=" relative w-full min-h-[1000px] pb-20  bg-white overflow-hidden font-sans">
      {/* =========================
          HEADER
      ========================= */}
      <div
        className="
          relative
          z-10
           
          max-auto
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
          pt-10
          sm:pt-12
          md:pt-14
          pb-6
        "
      >
        <div
          className="
            w-full
            flex
            items-center
            justify-between
          "
        >
          {/* TITLE */}
          <h2
            className="
              text-[#04433b]
              text-lg
              sm:text-xl
              md:text-2xl
              lg:text-3xl
              font-extrabold
            "
          >
            Social Media Reels
          </h2>

          {/* NAVIGATION BUTTONS */}
          <div className="flex gap-3">
            {/* LEFT BUTTON */}
            <button
              type="button"
              onClick={() => scroll("left")}
              className="
                w-10
                h-10
                rounded-full
                bg-[#04433b]
                text-white
                flex
                items-center
                justify-center
                hover:bg-[#03342e]
                active:scale-95
                transition-all
                duration-150
                shadow-md
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>

            {/* RIGHT BUTTON */}
            <button
              type="button"
              onClick={() => scroll("right")}
              className="
                w-10
                h-10
                rounded-full
                bg-[#04433b]
                text-white
                flex
                items-center
                justify-center
                hover:bg-[#03342e]
                active:scale-95
                transition-all
                duration-150
                shadow-md
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
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
      </div>

      {/* =========================
          CARDS SLIDER
      ========================= */}

{/* =========================
    CARDS SLIDER
========================= */}
<div className="relative z-10 w-full flex justify-center">
  <div
    ref={scrollContainerRef}
    className="
      flex
      justify-center
      gap-6
      overflow-x-auto
      overflow-y-hidden
      w-full
      px-0
      pb-8
      snap-x
      snap-mandatory
      scroll-smooth
      [&::-webkit-scrollbar]:hidden
      [-ms-overflow-style:none]
      [scrollbar-width:none]
    "
  >
    {reelsData.map((reel) => (
      <div
        key={reel.id}
        className="
          reel-card
          flex-shrink-0
          snap-start
          w-[361px]
          h-[642px]
          min-w-[361px]
          max-w-[361px]
        "
      >
        <ReelCard
          reel={reel}
          onClick={() => setActiveVideo(reel)}
        />
      </div>
    ))}
  </div>
</div>
      {/* =========================
          BACKGROUND WAVE
      ========================= */}
  <img
  src="/Dorna-React/PortfolioImage/Vector 6.svg"
  alt=""
  className="
    absolute
    bottom-0
    left-0
    w-full
    h-auto
    translate-y-[150px]
    object-cover
    object-bottom
    z-0
    pointer-events-none
  "
/>
      

      {/* =========================
          VIDEO MODAL
      ========================= */}
      {activeVideo && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/80
            backdrop-blur-sm
            p-4
          "
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="
              relative
              w-full
              max-w-[420px]
              h-[90vh]
              bg-black
              rounded-3xl
              overflow-hidden
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="
                absolute
                top-4
                right-4
                z-10
                w-10
                h-10
                rounded-full
                bg-black/40
                hover:bg-black/70
                text-white
                font-bold
                flex
                items-center
                justify-center
              "
            >
              ✕
            </button>

            <video
              
              controls
              playsInline
              className="
                w-full
                h-full
                object-contain
                bg-black
              "
            >
              <source
                src={activeVideo.videoWebm}
                type="video/webm"
              />
              <source
                src={activeVideo.videoMp4}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}