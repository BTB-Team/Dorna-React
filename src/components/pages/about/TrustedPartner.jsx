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
    <section className="bg-white py-20 md:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="mb-8 lg:mb-14">
          {/* Small screen*/}
          <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-3">
            {/* Title + line */}
            <div className="flex items-center gap-3 sm:gap-5 lg:gap-6 flex-1">
              <h2
                className="
                  text-[20px]
                  sm:text-[28px]
                  text-accent
                  leading-tight
                  font-[Montserrat-bold]
                "
              >
                Why We Are a
                <span className="block lg:inline lg:ml-2 ">
                  Trusted Partner
                </span>
              </h2>
              <div className="flex-1 h-[3px] bg-accent -mt-5"></div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="rounded-[20px] p-5 sm:p-6"
              style={{
                background:
                  "linear-gradient(90deg,#F0F0F0 40%,#F7F7F7 70%,#FCFCFC 100%)",
              }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <img
                  src={CharmCircleTick}
                  alt=""
                  className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] shrink-0"
                />

                <div>
                  <h3
                    className="
                      text-[20px]
                      sm:text-[21px]
                      lg:text-[22px]
                      text-[#0B5B5B]
                      mb-3
                      font-[Montserrat-semibold]
                    "
                  >
                    {reason.title}
                  </h3>

                  <p
                    className="
                      text-[15px]
                      sm:text-[16px]
                      lg:text-[17px]
                      leading-7
                      lg:leading-[28px]
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
