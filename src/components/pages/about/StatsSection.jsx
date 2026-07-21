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
    <section className="relative bg-[#F7F7F7] py-24 overflow-hidden">
      {/* Background Wave */}
      <img
        src="/images/AboutImages/Vector7.webp"
        alt=""
        className="absolute left-[-48px] top-[180px] w-[1536px] h-[510px] max-w-none pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Left Decoration */}
          {/* <img
            src="/images/AboutImages/Vector6.webp"
            alt=""
            className="
    absolute
    left-[-360px]
    bottom-[-95px]
    w-[900px]
    max-w-none
    pointer-events-none
    select-none
    z-0
  "
          /> */}

          {/* Right Decoration */}
          <img
            src="/images/AboutImages/Vector7.webp"
            alt=""
            className="
    absolute
    right-[-220px]
    top-[-35px]
    w-[760px]
    max-w-none
    pointer-events-none
    select-none
    z-0
  "
          />
        </div>

        {/* White Card */}
        <div className="relative mx-auto mt-12 h-[401px] w-[1048px] rounded-[30px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          <div className="grid h-full grid-cols-1 md:grid-cols-3">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center ${
                  index !== 2 ? "md:border-r border-[#F3D888]" : ""
                }`}
              >
                <h3 className="text-[96px] font-extrabold leading-none text-[#A8C5C5]">
                  {item.number}
                </h3>

                <p className="mt-4 text-[26px] font-semibold text-[#0B5B5B]">
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
