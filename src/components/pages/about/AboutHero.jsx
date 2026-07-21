const HeroImage = "/images/about-images/hero-image.webp";
const UnderlineSvg = "/images/about-images/rectangle-73.svg";

export default function AboutHero() {
  return (
    <section className="relative w-full h-screen text-white">
      <img
        src={HeroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl font-extrabold text-white loading-loose tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Crafting Digital{" "}
          <span className="relative inline-block">
            Excellence
            <img
              src={UnderlineSvg}
              alt=""
              className="absolute left-0 top-full w-full"
            />
          </span>
          <br /> with Creative Ingenuity
        </h1>

        <p className="absolute bottom-10 text-sm text-white/80">
          Scroll to see more...
        </p>
      </div>
    </section>
  );
}