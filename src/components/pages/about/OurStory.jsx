import GoldenDisplay from "../../typography/GoldenDisplay";
import CeoImage from "/images/about-images/ceo.png";
import TeamImage from "/images/about-images/team-image.webp";

export default function OurStory() {
  return (
    <section className="relative bg-white py-12 md:py-20 px-6 md:px-16 text-center overflow-hidden">
      {/* concentric circle background */}
       <div className="pointer-events-none absolute left-1/2 top-1/4 md:top-1/3 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[420px] h-[420px] md:w-[1192px] md:h-[1192px] rounded-full border border-gray-200 flex items-center justify-center">
          <div className="w-[340px] h-[340px] md:w-[962px] md:h-[962px] rounded-full border border-gray-200 flex items-center justify-center">
            <div className="w-[275px] h-[275px] md:w-[778px] md:h-[778px] rounded-full border border-gray-200" />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="order-1 text-3xl sm:text-4xl md:text-6xl [&_h1]:text-[length:inherit] [&_h2]:text-[length:inherit]">
          <GoldenDisplay text="our story." />
        </div>

        <p className="order-2 text-[#00514B] max-w-xl mx-auto leading-relaxed font-semibold text-base sm:text-lg md:text-xl mt-4">
          A creative agency specializing in advertising, graphic design, and
          media production in Afghanistan.
        </p>

        {/* Images */}
        <div className="order-3 md:order-4 flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-6 mt-10 md:mt-20 px-4">
          <img
            src={TeamImage}
            alt="Team Left"
            className="order-2 md:order-1 w-full max-w-[361px] h-[220px] md:h-48 object-cover rounded-2xl"
          />
          <img
            src={CeoImage}
            alt="CEO Portrait"
            className="order-1 md:order-2 w-full max-w-[438px] h-[296px] object-cover rounded-[30px]"
          />
          <img
            src={TeamImage}
            alt="Team Right"
            className="order-3 w-full max-w-[361px] h-[220px] md:h-48 object-cover rounded-2xl"
          />
        </div>

        <div className="order-4 md:order-3 max-w-lg mx-auto mb-8 md:mb-12 text-justify">
          <p className="text-[#00514B] font-medium tracking-tight text-base sm:text-lg md:text-3 mt-6 font-[Montserrat-body]">
            Our team transforms ideas into compelling visual experiences that
            connect brands with their audiences. From strategy and branding to
            content creation and production, we deliver impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
