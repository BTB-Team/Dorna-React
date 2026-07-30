import Header from "../../Header/Header";

function HeroPortfolio() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#baf7ee] to-white text-[#0a3d36] font-sans p-6 md:p-12 pt-0 flex flex-col items-center">

      {/* Header */}
      <div className="absolute top-8 left-0 right-0 z-50 flex justify-center">
        <Header />
      </div>

      {/* Header Section */}
      <div className="relative top-24 text-center max-w-xl mt-2 mb-0">
        <div className="inline-block mt-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-1">
            DORNA MEDIA
          </h1>
          <div className="h-1 bg-[#f0a500] w-full mb-6"></div>
        </div>
        <p className="text-base md:text-lg font-medium leading-relaxed px-4 text-[#1a5249]">
          A creative agency specializing in advertising, graphic design,
          and media production in Afghanistan.
        </p>

        {/* Action Button */}
        <div className="mt-6 flex items-center justify-center">

          <button
            className="
              bg-[#04433b]
              hover:bg-[#03342e]
              text-white
              font-semibold
              py-3
              px-6
              rounded-xl
              transition-colors
              shadow-lg
              flex
              items-center
            "
          >
            Start Your Project
          </button>

          <span
            className="
              bg-[#f0a500]
              text-white
              p-3.5
              rounded-xl
              ml-1
              flex
              items-center
              justify-center
              shadow-lg
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform -rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>

        </div>
      </div>

      {/* Portfolio Grid */}
      {/* این قسمت دیگر با Header جابه‌جا نمی‌شود */}
      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-end mt-4">

        {/* Column 1 */}
        <div className="flex flex-col gap-4">

          <div className="rounded-2xl overflow-hidden aspect-[4/7] shadow-md">
            <img
              src="/PortfolioImage/Theet.png"
              alt="Portfolio"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[4/4.5] shadow-md">
            <img
              src="/PortfolioImage/Ferecans.png"
              alt="Portfolio"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Column 2 */}
        <div className="rounded-2xl overflow-hidden aspect-[4/7] shadow-md">
          <img
            src="/PortfolioImage/Brand.png"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Column 3 - CTA */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#04433b] shadow-md p-5 text-white flex flex-col justify-between">

          <h3 className="relative z-10 text-base md:text-lg font-bold leading-snug">
            Do You Want To Grow Like Others
          </h3>

          <img
            src="/PortfolioImage/Vector 10.svg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          <div className="relative z-10 w-full bg-white text-[#04433b] py-3 rounded-xl font-bold text-xs text-center">
            We're Here To Help
          </div>

        </div>

        {/* Column 4 */}
        <div className="rounded-2xl overflow-hidden aspect-[4/7] shadow-md">
          <img
            src="/PortfolioImage/SocialMediaB.png"
            alt="Project"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Column 5 */}
        <div className="flex flex-col gap-4">

          <div className="rounded-2xl overflow-hidden aspect-[4/7] shadow-md">
            <img
              src="/PortfolioImage/WhyWebsite.png"
              alt="Project"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[4/4.5] shadow-md">
            <img
              src="/PortfolioImage/Qadam.png"
              alt="Project"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>

    </div>
  );
}

export default HeroPortfolio;