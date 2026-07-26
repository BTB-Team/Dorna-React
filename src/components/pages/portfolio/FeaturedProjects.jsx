// FeaturedProjects.jsx
import { useRef } from "react";

export default function FeaturedProjects() {
  const scrollContainerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "SnowPharma commercial video",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: "/PortfolioImage/Commerical.png",
    },
    {
      id: 2,
      title: "Ghazanfar Bank commercial video",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: "/PortfolioImage/Bank.png",
    },
    {
      id: 3,
      title: "Milko commercial video",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: "/PortfolioImage/Commerical.png",
    },
    {
      id: 4,
      title: "SnowPharma commercial video",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: "/PortfolioImage/Commerical.png",
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.querySelector(".project-card");

      const cardWidth = firstCard
        ? firstCard.getBoundingClientRect().width + 24
        : 385;

      const scrollAmount =
        direction === "right" ? cardWidth : -cardWidth;

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full min-h-[500px] bg-white overflow-hidden py-16 px-4 md:px-16 font-sans">

      {/* Background Yellow Wave */}
      <div className="absolute top-1/3 left-0 right-0 -translate-y-1/2 z-0 opacity-90">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0,90 Q160,30 320,90 T640,90 Q800,165 960,90 T1280,90 T1440,90"
            stroke="#fcae04"
            strokeWidth={30}
            strokeLinecap="round"
          />
        </svg>
      </div>


      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto flex justify-between items-center mb-10">

        <h2 className="text-[#04433b] text-xl md:text-2xl font-extrabold">
          Featured Commercial Projects
        </h2>


        <div className="flex gap-3">

          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-[#04433b] text-white flex items-center justify-center transition-all hover:bg-[#03342e] active:scale-95 shadow-md"
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>


          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-[#04433b] text-white flex items-center justify-center transition-all hover:bg-[#03342e] active:scale-95 shadow-md"
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>

        </div>
      </div>



      {/* Cards Slider */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <div
          ref={scrollContainerRef}
          className="
          flex gap-6 overflow-x-auto pb-8 
          snap-x scroll-smooth
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          "
        >

          {projects.map((project) => (

            <div
              key={project.id}
              className="
              project-card
              w-[300px] sm:w-[361px]
              h-[380px]
              flex-shrink-0
              bg-gradient-to-b from-white to-[#eef6f5]
              rounded-[24px]
              shadow-[0_8px_30px_rgb(0,0,0,0.06)]
              overflow-hidden
              snap-start
              border border-gray-100/50
              flex flex-col
              "
            >

              {/* Image */}
              <div className="w-full h-[220px] overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

              </div>



              {/* Text */}
              <div className="p-5 flex-1 flex flex-col">

                <h3 className="text-[#04433b] font-bold text-sm tracking-wide line-clamp-1">
                  {project.title}
                </h3>


                <p className="text-gray-500/90 text-xs mt-2 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}