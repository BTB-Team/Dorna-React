import CharmCircleTick from "../about/assets/charm_circle-tick.png";
export default function TrustedPartner() {
  const reasons = [
    {
      title: "Proven Success Story",
      description:
        "Transformed a company facing 3.5 million Afghanis in losses into profitability within just 2 years, demonstrating our ability to deliver measurable results.",
    },
    {
      title: "International Quality Standards",
      description:
        "Every campaign follows ISO-quality processes and global advertising best practices.",
    },
    {
      title: "Multi-Department Expertise",
      description:
        "Our integrated team spans 6 specialized departments from Creative to Data Analytics.",
    },
    {
      title: "Customized Solutions",
      description:
        "We start every project with in-depth consultations to develop tailored strategies for your goals.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-8 lg:mb-14">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3">
            {/* Title + Line */}
            <div className="flex items-center gap-3 sm:gap-5 lg:gap-6 flex-1">
              <h2
                className="
                  text-[18px]
                  sm:text-[22px]
                  md:text-[28px]
                  lg:text-[38px]
                  xl:text-[40px]
                  font-display
                  text-accent
                  leading-tight
                  whitespace-nowrap
                "
              >
                Why We Are a
                <span className="block lg:inline lg:ml-2">
                  Trusted Partner
                </span>
              </h2>

              <div className="flex-1 h-[2px] sm:h-[3px] bg-accent -mt-3 lg:mt-5 md:mt-5"></div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="
                rounded-[20px]
                p-4
                sm:p-5
                md:p-6
                lg:p-7
              "
              style={{
                background:
                  "linear-gradient(90deg,#F0F0F0 40%,#F7F7F7 70%,#FCFCFC 100%)",
              }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <img
                  src={CharmCircleTick}
                  alt=""
                  className="
                    w-5
                    h-5
                    sm:w-6
                    sm:h-6
                    md:w-7
                    md:h-7
                    lg:w-[30px]
                    lg:h-[30px]
                    shrink-0
                    mt-1
                  "
                />

                <div>
                  <h3
                    className="
                      text-[16px]
                      sm:text-[18px]
                      md:text-[20px]
                      lg:text-[22px]
                      xl:text-[24px]
                      font-heading
                      text-[#0B5B5B]
                      mb-2
                      sm:mb-3
                      leading-snug
                    "
                  >
                    {reason.title}
                  </h3>

                  <p
                    className="
                      text-[13px]
                      sm:text-[14px]
                      md:text-[15px]
                      lg:text-[17px]
                      xl:text-[18px]
                      leading-5
                      sm:leading-6
                      lg:leading-7
                      font-medium
                      text-[#3e7979]
                      font-[Montserrat-body]
                    "
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}