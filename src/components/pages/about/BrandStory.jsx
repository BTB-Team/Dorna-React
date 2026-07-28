import GoldenHeading from "../../typography/GoldenHeading";
import BrandStoryImage from "/images/about-images/dorna-crane.webp";
import rectangle77 from "/images/about-images/Rectangle-77.svg";

export default function BrandStory() {
  return (
    <>
      <section className="relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[500px]">
          {/* Left Side - Text */}
          <div className="relative bg-white flex items-center py-10 md:py-0">
            <div className="w-full px-6 sm:px-10 md:max-w-md md:px-16">
              <p className="text-[#00514B] font-bold text-[18px] md:text-[24px] mb-1">
                Brand Story:
              </p>
              <GoldenHeading text="the crane (Dorna)" align="left" />
              <img src={rectangle77} alt="" className="mb-4 w-16" />
              <p className="text-[#00514B] leading-relaxed mb-4 text-sm md:text-base w-full text-left">
                In many cultures, the crane (Dorna) symbolizes loyalty,
                happiness, luck, longevity, and peace. The crane is a migratory
                bird with a body similar to a stork, known for its beautiful
                appearance and shining eyes. In Turkish culture, the crane
                represents &quot;a beautiful young girl&quot;. Cranes are
                passionate birds capable of flying for hours and covering
                kilometers. They fly in a V-shape during migration, supporting
                the leader of the group.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-auto overflow-hidden rounded-2xl md:rounded-none">
            <img
              src={BrandStoryImage}
              alt="Crane Symbolism"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 md:bg-gradient-to-r from-white via-white/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-yellow-100 py-8 px-6 mt-12 md:px-16">
        <p className="max-w-4xl mx-auto text-[#00514B] leading-relaxed text-base md:text-[20px] text-center md:text-left">
          Just as cranes remain loyal to each other and fly together for long
          distances, we too will accompany you, focusing on steady and
          continuous progress toward your goals. Like dorna (cranes) that seek
          luck and happiness with flexibility and courage, we too, by creating
          opportunities for you, strive for blessings and prosperity in your
          business.
        </p>
      </section>
    </>
  );
}
