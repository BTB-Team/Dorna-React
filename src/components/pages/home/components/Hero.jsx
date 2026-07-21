import heroBird from "../assets/hero-bird.png";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pt-[29px] md:p-[22px_36px]">
      <div className="relative mx-auto flex h-[615px] w-[343px] flex-col overflow-hidden rounded-[57px] bg-gradient-to-b from-primary/0 to-[#00B7A9] px-6 pt-0 md:h-[882px] md:w-full md:px-24 md:pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[96%] h-[572px] w-[572px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 sm:h-[700px] sm:w-[700px] md:h-[994px] md:w-[994px]" />
          <div className="absolute left-1/2 top-[96%] h-[438px] w-[438px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 sm:h-[540px] sm:w-[540px] md:h-[762px] md:w-[762px]" />
        </div>

        <div className="relative mx-auto mt-[125px] md:mt-0 max-w-[1048px] translate-y-6 text-center md:mt-0">
         <h1 className="mx-auto w-[309px] font-display text-[21px] font-extrabold leading-[39px] text-primary md:w-auto md:text-heading md:leading-[78px]">
            Enterprise-grade Branding, Design &amp; Production.
          </h1>
          <p className="hidden md:block mx-auto mt-[4px] max-w-[1046px] text-center text-[18px] font-medium leading-[40px] text-secondary md:text-xl md:leading-[2.2]">
            We partner with ambitious brands to create impactful campaigns,
            compelling content, and distinctive brand experiences that drive
            measurable growth.
          </p>
        </div>

       <div className="absolute bottom-0 left-1/2 w-[325px] -translate-x-1/2 md:relative md:bottom-auto md:left-auto md:w-full md:max-w-[530px] md:translate-x-0 md:mx-auto md:mt-20">
  <img
    src={heroBird}
    alt="Hero Bird"
    className="h-auto"
  />
</div>
      </div>
    </section>
    
  );
}