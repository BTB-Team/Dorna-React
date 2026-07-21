import GoldenDisplay from '../../typography/GoldenDisplay';
import CeoImage from '/images/about-images/ceo-image.webp';
import TeamImage from '/images/about-images/team-image.webp';

export default function OurStory() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-16 text-center overflow-hidden">
      {/* concentric circle background */}
    <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
  <div className="w-[1192px] h-[1192px] rounded-full border border-gray-200 flex items-center justify-center">
    <div className="w-[962px] h-[962px] rounded-full border border-gray-200 flex items-center justify-center">
      <div className="w-[778px] h-[778px] rounded-full border border-gray-200" />
    </div>
  </div>
</div>

      {/* content sits above the circles */}
      <div className="relative z-10">
        <GoldenDisplay text="out story"/>

        <p className="text-[#00514B] max-w-xl mx-auto mb-4 md:text-xl leading-relaxed font-semibold text-3xl font-[Montserrat]">
          A creative agency specializing in advertising, graphic design, and
          media production in Afghanistan.
        </p>

        <div className="max-w-lg mx-auto mb-12 text-justify">
          <p className="text-[#00514B] font-medium tracking-tight text-lg font-[Montserrat]">
            Our team transforms ideas into compelling visual experiences that
            connect brands with their audiences. From strategy and branding
            to content creation and production, we deliver impactful
            solutions.
          </p>
        </div>

        {/* Images */}
        <div className="flex flex-row justify-center items-end gap-6 mt-20">
          <img
            src={TeamImage}
            alt="Team Left"
            className="w-[361px] h-[185px] md:h-48 object-cover rounded-2xl "
          />
          <img
            src={CeoImage}
            alt="CEO Portrait"
            className="w-[438px] h-[296px] object-cover rounded-[30px]"
          />
          <img
            src={TeamImage}
            alt="Team Right"
            className="w-[361px] h-[185px] md:h-48 object-cover rounded-2xl"
          />
        </div>



      </div>
    </section>
  );
}