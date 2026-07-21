import { IoCheckmarkCircleOutline } from "react-icons/io5";

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
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <div className="flex items-center gap-5 mb-14">
          <h2 className="text-[38px] font-bold text-[#F4B400] whitespace-nowrap">
            Why We Are a Trusted Partner
          </h2>

          <div className="flex-1 h-[2px] bg-[#F4B400]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 rounded-[20px]"
              style={{
                background:
                  "linear-gradient(90deg,#F0F0F0 50%,#F7F7F7 70%,#FCFCFC 100%,#FFFFFF 30%)",
              }}
            >
              <div className="flex items-start gap-3">
                <IoCheckmarkCircleOutline
                  className="text-[#F4B400] mt-1"
                  size={45}
                />

                <div>
                  <h3 className="text-[22px] font-semibold text-[#0B5B5B] mb-3">
                    {reason.title}
                  </h3>

                  <p className="text-[#0B5B5B] leading-8 text-[19px]">
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
