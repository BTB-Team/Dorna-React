import GoldenDisplay from "../../typography/GoldenDisplay";

export default function CoreValues() {
  const values = [
    {
      title: "Creativity & Innovation",
      description:
        "Providing innovative and creative solutions for advertising and public relations.",
    },
    {
      title: "Quality & Standards",
      description:
        "Commitment to providing high-quality services in line with international standards.",
    },
    {
      title: "Transparency & Integrity",
      description:
        "Establishing transparent and honest relationships with clients and partners.",
    },
    {
      title: "Trust & Partnership",
      description:
        "Building the foundation of trust and long-term collaborations with clients.",
    },
    {
      title: "Client Success",
      description:
        "Focusing on the needs and goals of our clients and helping them achieve success.",
    },
    {
      title: "New Technologies",
      description:
        "Leveraging modern tools and technologies to enhance campaign effectiveness.",
    },
    {
      title: "Expertise & Experience",
      description:
        "Utilizing a team of specialists with experience in various advertising fields.",
    },
    {
      title: "Flexibility & Adaptability",
      description: "Ability to adapt to rapid market changes and client needs.",
    },
    {
      title: "Analysis & Evaluation",
      description:
        "Conducting market research and data analysis to improve strategies.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-site mx-auto px-6">
        {/* Section Title */}
        <div className="flex items-center gap-6 mb-14">
          <GoldenDisplay text="Core Values" />
          <div className="flex-1 h-[2px] bg-accent opacity-80"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="
    relative
    overflow-hidden
    h-[170px]
    rounded-[20px]
    bg-white
    px-8
    py-7
    flex
    flex-col
    justify-center
    items-center
    text-center
  "
            >
              <div
                className="absolute inset-0 rounded-[20px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg,#F0F0F0 50%,#F7F7F7 70%,#FCFCFC 100%,#FFFFFF 30%)",
                }}
              />

              <div className="relative z-10">
                <h3 className=" text-[20px] font-semibold text-primary ">
                  {value.title}
                </h3>

                <p className="mt-3 text-[17px] leading-[28px] font-medium text-[#486868]">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
