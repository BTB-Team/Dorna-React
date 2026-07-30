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
      image: "/Dorna-React/PortfolioImage/Commerical.png",
    },
    {
      id: 2,
      title: "Ghazanfar Bank commercial video",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: "/Dorna-React/PortfolioImage/Bank.png",
    },
    {
      id: 3,
      title: "Milko commercial video",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: "/Dorna-React/PortfolioImage/Commerical.png",
    },
    {
      id: 4,
      title: "SnowPharma commercial video",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      image: "/Dorna-React/PortfolioImage/Commerical.png",
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.querySelector(".project-card");

      // محاسبه دقیق عرض کارت برای اسکرول دقیق‌تر در حالت ریسپانسیو
      const cardWidth = firstCard
        ? firstCard.getBoundingClientRect().width + 24
        : 385;

      const scrollAmount =
        direction === "right" ? cardWidth * 2 : -cardWidth * 2;

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="featured-projects" className="relative w-full min-h-[500px] bg-white overflow-hidden py-16 font-sans">

     {/*فلعه موج*/}
     <div className="absolute top-[45%] left-0 right-0 -translate-y-1/2 z-0 opacity-90">
       <img src="/Dorna-React/PortfolioImage/Vector 6.svg" alt="" />
      </div>


      {/* Header */}
      <div className="relative z-10  px-6 md:px-12 lg:px-16 flex justify-between items-center mb-10">
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
              xmlns="http://w3.org"
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
              xmlns="http://w3.org"
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
      <div className="relative z-10 w-full">
        <div
          ref={scrollContainerRef}
          className="
          flex gap-6 overflow-x-auto pb-8 
          px-6 md:px-12 lg:px-16
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
              flex-shrink-0
              h-[380px]
              bg-gradient-to-b from-white to-[#eef6f5]
              rounded-[24px]
              shadow-[0_8px_30px_rgb(0,0,0,0.06)]
              overflow-hidden
              snap-start
              border border-gray-100/50
              flex flex-col

              /* کلاس‌های ریسپانسیو جدید برای ابعاد تبلت و موبایل */
              w-[85vw] 
              sm:w-[340px] 
              md:w-[calc(50vw-36px)] 
              lg:w-[361px]
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

    </section>
  );
}
