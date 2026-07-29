import Header from "../../../header/Header";
import heroBird from "../assets/hero-bird.png";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-[1440px] px-4 pt-[27px] md:p-[22px_36px]">
      
        
        <Header />
<div
  className="
  relative mx-auto flex flex-col overflow-hidden rounded-[57px]
  bg-gradient-to-b from-primary/0 to-[#00B7A9]

  h-[615px] w-[340px] px-6 pt-0

  md:h-[760px] md:w-full md:px-12 md:pt-20

  lg:h-[882px] lg:px-24 lg:pt-28
  "
>
  
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[96%] h-[572px] w-[572px] -translate-x-1/2 -translate-y-1/2
           rounded-full bg-white/10 md:h-[850px] md:w-[850px] lg:h-[994px] lg:w-[994px]" />

          <div className="absolute left-1/2 top-[96%] h-[438px] w-[438px] -translate-x-1/2 -translate-y-1/2
           rounded-full bg-white/20 md:h-[650px] md:w-[650px] lg:h-[762px] lg:w-[762px]" />
        </div>

        <div className="relative mx-auto mt-[125px] md:mt-0 lg:mt-0 max-w-[1048px] translate-y-6 md:translate-y-4 lg:translate-y-6 text-center">
          <h1 className="mx-auto w-[309px] font-display text-[21px] font-extrabold leading-[39px] text-primary
           md:w-auto md:text-heading md:leading-[78px]">
            Enterprise-grade Branding, Design &amp; Production.
          </h1>

          <p className="hidden lg:block mx-auto mt-[4px] max-w-[1046px] text-center text-[18px] font-medium 
leading-[40px] text-secondary lg:text-xl lg:leading-[2.2]">
            We partner with ambitious brands to create impactful campaigns,
            compelling content, and distinctive brand experiences that drive
            measurable growth.
          </p>
        </div>

        <div className="absolute bottom-0 left-1/2 w-[325px] -translate-x-1/2
 md:absolute md:bottom-0 md:left-1/2 md:w-[430px] md:-translate-x-1/2
 lg:w-[530px]">
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