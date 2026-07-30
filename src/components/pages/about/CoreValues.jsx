import GoldenHeading from "../../typography/GoldenHeading";

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
      description:
        "Ability to adapt to rapid market changes and client needs.",
    },
    {
      title: "Analysis & Evaluation",
      description:
        "Conducting market research and data analysis to improve strategies.",
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24 mb-[-70px]">
      <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-6 mb-8 lg:mb-14 fot-[Montserrat-semibold]">
          <GoldenHeading text="Core Values" />

          <div className="flex-1 h-[2px] bg-accent opacity-80"></div>
        </div>

        {/* Cards */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
  {values.map((value, index) => (
    <div
      key={index}
      className="
        relative
        overflow-hidden
        rounded-[18px]
        lg:rounded-[20px]

        min-h-[170px]
        sm:min-h-[190px]
        md:min-h-[220px]
        lg:min-h-[230px]

        px-5
        py-5
        sm:px-6
        sm:py-6
        md:px-6
        md:py-7
        lg:px-8
        lg:py-7

        flex
        flex-col
        justify-center
        text-center
      "
    >
      {/* Card Background */}
      <div
        className="
          absolute
          inset-0
          rounded-[18px]
          lg:rounded-[20px]
          pointer-events-none
        "
        style={{
          background:
            "linear-gradient(90deg,#E6E6E6 0%,#F0F0F0 0%,#F8F8F8 75%,#FFFFFF 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">

        <h3
          className="
            font-heading
            text-primary
            text-[18px]
            sm:text-[20px]
            md:text-[20px]
            lg:text-[22px]
            xl:text-[24px]

            leading-snug
            mb-3
          "
        >
          {value.title}
        </h3>


        <p
          className="
            mx-auto
            max-w-[280px]

            text-[13px]
            sm:text-[14px]
            md:text-[14px]
            lg:text-[16px]
            xl:text-[17px]

            leading-6
            lg:leading-7

            font-medium
            text-[#3e7979]
          "
        >
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