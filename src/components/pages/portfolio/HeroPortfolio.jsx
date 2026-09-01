
import Header from "../../Header/Header";
import { Link } from "react-router-dom";

function HeroPortfolio() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#baf7ee] to-white text-[#0a3d36] font-sans flex flex-col items-center">

      {/* Header */}
      <div className="w-full flex justify-center pt-8 px-6 z-50">
        <Header />
      </div>

      {/* Header Section */}
      <div  className="text-center max-w-xl px-6 pt-16 md:pt-24 mb-4 md:mb-8 flex flex-col items-center relative z-20">
        <div className="inline-block">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-1">
            DORNA MEDIA
          </h1>
          <div className="h-1 bg-[#f0a500] w-full mb-6"></div>
        </div>
        <p className="text-base md:text-lg font-medium leading-relaxed text-[#1a5249]">
          A creative agency specializing in advertising, graphic design,
          and media production in Afghanistan.
        </p>

        {/* Action Button */}
        <div className="mt-6 flex items-center justify-center gap-1">
          <Link to="/contact">
            <button className="bg-[#04433b] hover:bg-[#03342e] text-white font-semibold py-3 px-6 rounded-xl transition-colors shadow-lg flex items-center">
              Start Your Project
            </button>
          </Link>
          
          <Link to="/contact">
            <span className="bg-[#f0a500] text-white p-3.5 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://w3.org"
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
          </Link>
        </div>
      </div>

      {/* Portfolio Layout Container */}
      {/* در موبایل یک ستون عمودی شامل (باکس دو ستونه تصاویر + کارت سبز زیر آن) است */}
      <div className="w-full max-w-6xl px-6 pb-12 flex flex-col gap-4 -mt-4 md:-mt-12 md:grid md:grid-cols-5 md:items-end relative z-10">

        {/* Wrapper for the two columns on mobile - effectively disappears on desktop */}
        <div className="flex flex-row gap-4 w-full md:contents">

          {/* === LEFT COLUMN IN MOBILE === */}
          <div className="flex flex-col gap-4 w-1/2 md:w-auto md:contents">
            
            {/* Desktop Column 1 */}
            <div className="flex flex-col gap-4 md:order-1">
              {/* Card 1: پشت صحنه */}
              <div className="rounded-3xl overflow-hidden aspect-[4/6.2] md:aspect-[4/7] shadow-md">
                <picture>
                  <source media="(min-width: 768px)" srcSet="/Dorna-React/PortfolioImage/Back.webp" />
                  <img
                    src="/Dorna-React/PortfolioImage/Back.webp"
                    alt="Portfolio"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>

              {/* Card 2: فرکانس موفقیت */}
              <div className="rounded-3xl overflow-hidden aspect-[4/4] md:aspect-[4/4.5] shadow-md">
                <picture>
                  <source media="(min-width: 768px)" srcSet="/Dorna-React/PortfolioImage/Ferecans.webp" />
                  <img
                    src="/Dorna-React/PortfolioImage/Ferecans.webp"
                    alt="Portfolio"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>

            {/* Desktop Column 2 (Moved under Card 2 on Mobile Left Column) */}
            <div className="flex flex-col gap-4 md:order-2 md:h-full md:justify-end">
              {/* Card 4: بشپر خدمات (در ستون چپ موبایل قرار گرفت) */}
              <div className="rounded-3xl overflow-hidden aspect-[4/7.8] md:aspect-[4/7] shadow-md">
                <picture>
                  <source media="(min-width: 768px)" srcSet="/Dorna-React/PortfolioImage/Brand.webp" />
                  <img
                    src="/Dorna-React/PortfolioImage/SocialB.webp"
                    alt="Portfolio"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>

          </div>

          {/* === RIGHT COLUMN IN MOBILE === */}
          <div className="flex flex-col gap-4 w-1/2 md:w-auto md:contents">

            {/* Desktop Column 5 (Becomes Top Right in Mobile) */}
            <div className="flex flex-col gap-4 md:order-5">
              {/* Card 5: قدم بعدی خود را بردارید */}
              <div className="rounded-3xl overflow-hidden aspect-[4/4] md:aspect-[4/7] shadow-md">
                <picture>
                  <source media="(min-width: 768px)" srcSet="/Dorna-React/PortfolioImage/WhyWeb.webp" />
                  <img
                    src="/Dorna-React/PortfolioImage/Qadam.webp"
                    alt="Project"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>

              {/* Card 6: رضایت مشتری دارالحجاب */}
              <div className="rounded-3xl overflow-hidden aspect-[4/7.5] md:aspect-[4/4.5] shadow-md">
                <picture>
                  <source media="(min-width: 768px)" srcSet="/Dorna-React/PortfolioImage/Qadam.webp" />
                  <img
                    src="/Dorna-React/PortfolioImage/Brand.webp"
                    alt="Project"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>

            {/* Desktop Column 4 (Moved under Card 6 on Mobile Right Column) */}
            <div className="flex flex-col gap-4 md:order-4 md:h-full md:justify-end">
              {/* Card 3: چرا وبسایت (در ستون راست موبایل قرار گرفت) */}
              <div className="rounded-3xl overflow-hidden aspect-[4/6.5] md:aspect-[4/7] shadow-md">
                <picture>
                  <source media="(min-width: 768px)" srcSet="/Dorna-React/PortfolioImage/SocialB.webp" />
                  <img
                    src="/Dorna-React/PortfolioImage/WhyWeb.webp"
                    alt="Project"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>

          </div>

        </div>

        {/* Column 3 (Desktop Middle CTA) - Hidden on Mobile inside the grid flow */}
        <div className="hidden md:flex relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#04433b] shadow-md p-5 text-white flex flex-col justify-between md:order-3">
          <h3 className="relative z-10 text-base md:text-lg font-bold leading-snug">
            Do You Want To Grow Like Others
          </h3>
          <img
            src="/Dorna-React/PortfolioImage/Vector 10.svg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="relative z-10 w-full bg-white text-[#04433b] py-3 rounded-xl font-bold text-xs text-center">
            We're Here To Help
          </div>
        </div>

        {/* Mobile-Only CTA Card - Exactly Matching Figma Layout */}
        <div className="md:hidden w-full h-[115px] relative rounded-3xl overflow-hidden bg-[#04433b] shadow-md px-5 py-6 text-white flex flex-col items-center text-center gap-4 mt-2">
          
          {/* Top-Left Vector Asset */}
          <div className="absolute top-0 left-0 pointer-events-none select-none">
            <svg width="74" height="67" viewBox="0 0 74 67" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M43.5001 -68C69.4156 -50.5 84.5 52 -14 56.5" stroke="#FFC000" strokeOpacity="0.2" strokeWidth="21" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Bottom-Right Vector Asset */}
          <div className="absolute bottom-0 right-0 pointer-events-none select-none">
            <svg width="81" height="59" viewBox="0 0 81 59" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M103.001 10.5C40.001 10.5 15.0743 46 10.501 80.5" stroke="#FFC000" strokeOpacity="0.2" strokeWidth="21" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Content */}
          <h3 className="relative z-10 text-base font-bold leading-snug max-w-[90%]">
            Do You Want To Grow Like Others?
          </h3>
          
          <div className="relative z-10 bg-white text-[#04433b] py-2.5 px-6 rounded-2xl font-bold text-xs shadow-sm transition-transform active:scale-95">
            We're Here To Help
          </div>
          
        </div>


      </div>

    </div>
  );
}

export default HeroPortfolio;
