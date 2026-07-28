const HeroImage = "/images/about-images/hero-image.webp";
const UnderlineSvg = "/images/about-images/rectangle-73.svg";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[100dvh] text-white">
      <img
        src={HeroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 md:bg-black/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight">
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

        <p className="absolute bottom-6 md:bottom-10 text-sm text-white/80">
          Scroll to see more...
        </p>
      </div>
    </section>
  );
}