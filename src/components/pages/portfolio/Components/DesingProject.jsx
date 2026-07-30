import img1 from "../assets/Abar cargo post design.webp";
import img2 from "../assets/Santech post design.webp";
import img3 from "../assets/cham cham post design.webp";
import img4 from "../assets/dorna post design.webp";
import img5 from "../assets/Madinah post design.webp";
import img6 from "../assets/momand post design.webp";
import img7 from "../assets/rahyar afghan business card.webp";
import img8 from "../assets/Tanin business card.webp";
import img9 from "../assets/cham cham business card.webp";
import React, { useState, useEffect } from "react";

// DesingProject Data
const projectDataِDesing = [
  {
    id: 1,
    title: "Abar Cargo Shipping Company",
    description:
      "Vorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aspernatur rem asperiores explicabo sunt iure numquam, magni quam laudantium dolorem sapiente neque eum officiis.",
    image: img1,
  },
  {
    id: 2,
    title: "Santech Company",
    description:
      "Vorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aspernatur rem asperiores explicabo sunt iure numquam, magni quam laudantium dolorem sapiente neque eum officiis.",
    image: img2,
  },
  {
    id: 3,
    title: "Cham Cham",
    description:
      "Vorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aspernatur rem asperiores explicabo sunt iure numquam, magni quam laudantium dolorem sapiente neque eum officiis.",
    image: img3,
  },
  {
    id: 4,
    title: "Drna Media",
    description:
      "Vorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aspernatur rem asperiores explicabo sunt iure numquam, magni quam laudantium dolorem sapiente neque eum officiis.",
    image: img4,
  },
  {
    id: 5,
    title: "Madinah Compony",
    description:
      "Vorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aspernatur rem asperiores explicabo sunt iure numquam, magni quam laudantium dolorem sapiente neque eum officiis.",
    image: img5,
  },
  {
    id: 6,
    title: "Momand",
    description:
      "Vorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aspernatur rem asperiores explicabo sunt iure numquam, magni quam laudantium dolorem sapiente neque eum officiis.",
    image: img6,
  },
  {
    id: 7,
    title: "Rahyar Afghan",
    description:
      "Vorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aspernatur rem asperiores explicabo sunt iure numquam, magni quam laudantium dolorem sapiente neque eum officiis.",
    image: img7,
  },
  {
    id: 8,
    title: "Tanin Private School",
    description:
      "Vorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aspernatur rem asperiores explicabo sunt iure numquam, magni quam laudantium dolorem sapiente neque eum officiis.",
    image: img8,
  },
  {
    id: 9,
    title: "Cham Cham",
    description:
      "Vorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aspernatur rem asperiores explicabo sunt iure numquam, magni quam laudantium dolorem sapiente neque eum officiis.",
    image: img9,
  },
];
// Mobile Show
const MobileProjects = [1, 4, 7, 2, 5];

// Dseing Project
const DesingProject = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const visibleProjects = isMobile
    ? showMore
      ? projectDataِDesing
      : MobileProjects.map((id) =>
          projectDataِDesing.find((item) => item.id === id),
        )
    : projectDataِDesing;

  return (
    <section id="design-project" className="relative w-full px-6 md:px-12 lg:px-[120px] pt-12">
      <div className="flex flex-col items-center justify-center">
        <h2 className=" relative text-xl md:text-3xl font-bold text-primary z-10 select-none py-3 px-8 mb-12">
          Our Desing Projects
          <span className=" absolute bottom-1 left-0 w-full h-[40%] bg-accent -z-10 block"></span>
        </h2>
      </div>
      {/* DesingProject Grid Card  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="relative h-72 rounded-3xl overflow-hidden group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white/20 backdrop-blur-md border-t border-white/30 flex flex-col justify-center p-5 translate-y-full group-hover:translate-y-0 transition-all duration-500 rounded-3xl">
              <h2 className="text-sm font-bold text-primary">
                {project.title}
              </h2>
              <p className="text-sm text-gray-500 leading-none">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* effect for mobile    */}
      {isMobile && (
        <div className="relative w-full flex flex-col items-center bg-white">
          {!showMore && (
            <div
              className="absolute left-0 right-0 w-full pointer-events-none select-none z-10"
              style={{
                top: "-200px",
                height: "320px",
                background:
                  "linear-gradient(to top, #ffffff 0%, #ffffff 70%, rgba(255,255,255,0.9) 85%, transparent 100%)",
              }}
            />
          )}
          <div className="relative z-20 w-full flex justify-center pt-6 pb-16 bg-white">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-12 py-3 bg-[#00514b]  duration-300 text-white font-medium text-xl rounded-2xl shadow-sm min-w-[160px] transition-all"
            >
              {showMore ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DesingProject;
