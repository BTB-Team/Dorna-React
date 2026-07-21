export default function StatsSection() {
  const stats = [
    {
      number: "100+",
      label: "Best Projects",
    },
    {
      number: "50+",
      label: "Best Clients",
    },
    {
      number: "5+",
      label: "Year Experience",
    },
  ];

  return (
    <section className="relative bg-[#ffffff] py-24 overflow-hidden">
      {/* Background Wave */}
      <img
        src="/images/AboutImages/Vector7.webp"
        alt=""
        className="absolute left-[-48px] top-[180px] w-[1536px] h-[510px] max-w-none pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Right Decoration */}
        {/* <img
          src="/images/AboutImages/Vector7.webp"
          alt=""
          className="absolute right-[-220px] top-[-35px] w-[760px] max-w-none pointer-events-none select-none z-0"
        /> */}

        {/* White Card */}
        <div className="relative mx-auto mt-12 w-[1048px] bg-white overflow-hidden">
          {/* Heading */}
          <div className="px-16 pt-12">
            <h2 className="text-[36px] font-semibold leading-[44px] text-primary">
              Every Number Holds a Story
            </h2>

            <p className="mt-5 max-w-[760px] text-[22px] font-normal leading-[30px] text-[#686767] text-left">
              Each number represents a story captured, a vision brought to life,
              and an impact that lasts beyond the frame.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 pt-12 pb-12">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center px-8  ${
                  index !== 2 ? "md:border-r border-[#e4ca7d]" : ""
                }`}
              >
                <h3 className="text-[120px] font-extrabold leading-none text-[#a0c0c0]">
                  {item.number}
                </h3>

                <p className="mt-4 text-center text-[26px] font-semibold text-[#0B5B5B]">
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
