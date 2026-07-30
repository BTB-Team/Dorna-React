import GoldenHeading from "../../typography/GoldenHeading";
import BrandStoryImage from "../about/assets/dorna-crane.webp";
import rectangle77 from "../about/assets/Rectangle-77.svg";

export default function BrandStory() {
  return (
    <>
      <section className="relative w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[500px]">
          {/* Text */}
          <div className="relative bg-white flex items-center py-10 md:py-0">
            <div className=" text-justify w-full px-6 sm:px-10 md:ml-[120px] md:px-16">
              <p className="text-[#00514B] font-bold text-[18px] md:text-[24px] mb-1 font-[Montserrat-semibold]">
                Brand Story:
              </p>
              <GoldenHeading
                text="the crane (Dorna)"
                align="left"
                className="font-[Montserrat-bold] "
              />
              <img src={rectangle77} alt="" className="mb-4 w-16" />
              <p className="text-[#00514B] leading-relaxed mb-4 text-sm md:text-base w-full text-left font-[Montserrat-body]">
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

          {/* Image */}
          <div className="relative w-full aspect-[343/382] md:aspect-auto md:h-auto overflow-hidden rounded-[30px] md:rounded-none">
            <img
              src={BrandStoryImage}
              alt="Crane Symbolism"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 md:bg-gradient-to-r from-white via-white/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-yellow-100 py-6 md:py-8 px-6 md:px-16 mt-8 md:mt-12">
        <p className="max-w-4xl mx-auto text-[#00514B] leading-relaxed text-sm sm:text-base md:text-[20px] text-left font-[Montserrat-body]">
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
