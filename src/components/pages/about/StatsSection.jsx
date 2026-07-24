import { Link } from "react-router-dom";

export default function StatsSection() {
  const stats = [
    { number: "100+", label: "Best Projects" },
    { number: "50+", label: "Best Clients" },
    { number: "5+", label: "Year Experience" },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Top Vector */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="561"
        viewBox="0 0 1440 561"
        fill="none"
        className="absolute top-35 left-0 w-full h-auto "
      >
        <path
          d="M-48 316.107C-48 316.107 315.5 142.607 270.5 445.107C226.082 743.692 950 188.107 1181.5 356.107C1525.16 605.5 1379.5 54.1067 1488 24.6067"
          stroke="#FFC000"
          strokeWidth="51"
        />
      </svg>

      {/* Bottom Vector  */}
      <svg
        xmlns="http://w3.org"
        width="1540"
        height="561"
        viewBox="0 0 1440 561"
        fill="none"
        className="absolute left-[-40px] bottom-[40px] w-[calc(100%+40px)]   left-0 w-full h-auto block lg:hidden"
      >
        <path
          d="M-48 316.107C-48 316.107 315.5 142.607 270.5 445.107C226.082 743.692 950 188.107 1181.5 356.107C1525.16 605.5 1379.5 54.1067 1488 24.6067"
          stroke="#FFC000"
          strokeWidth="80"
          strokeLinecap="round"
         
        />
      </svg>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        {/* White Card */}
        <div className="relative mx-auto mt-12 w-full max-w-[1048px] bg-white border border-[#E6E6E6] rounded-[20px] overflow-hidden shadow-sm">
          
          {/* Heading + CTA */}
          <div className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 pt-10 gap-6">
            <div className="text-center lg:text-left">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold leading-tight text-primary">
                Every Number Holds a Story
              </h2>
              <p className="mt-4 sm:mt-5 max-w-[760px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-7 text-[#686767]">
                Each number represents a story captured, a vision brought to life,
                and an impact that lasts beyond the frame.
              </p>
            </div>

         <Link
  to="/contact"
  className="
    hidden
    lg:flex
    h-[72px]
    w-[332px]
    items-center
    justify-center
    rounded-[20px]
    bg-[#FFC000]
    text-[24px]
    font-semibold
    text-[#0B5B5B]
    hover:bg-[#e6ad00]
    transition-colors
  "
>
  Elevate Your Brand
  <span className="ml-3 text-[28px]">→</span>
</Link>
          </div>

          {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 pt-10 pb-20">
  {stats.map((item, index) => (
    <div
      key={index}
      className={`flex flex-col items-start md:items-center justify-center px-6 sm:px-8 ${
        index !== 2 ? "md:border-r border-[#e4ca7d]" : ""
      }`}
    >
      <h3
        className="
          text-[96px] sm:text-[120px] md:text-[140px]
          font-extrabold
          text-left md:text-center
          leading-none text-[#91B1B1]
        "
      >
        {item.number}
      </h3>
      <p
        className="
          mt-3
          text-left md:text-center 
          text-[26px] md:text-[24px] lg:text-[26px] lg:text-center
          font-semibold text-[#0B5B5B]
        "
      >
        {item.label}
      </p>
    </div>
  ))}

          </div>
        </div>
      </div>
    </section>
  );
}
