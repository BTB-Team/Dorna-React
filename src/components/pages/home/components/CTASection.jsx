import {Link} from "react-router-dom";

export default function CTASection() {
  return (
    <section className="w-full  px-4 md:px-6 pb-12 pt-3 bg-white">
      <div className=" relative overflow-hidden  w-[90%]  max-w-[1200px] h-[362px] mx-auto rounded-[30px] bg-primary flex  items-center px-14 max-md:w-full max-md:h-[770px] max-md:flex-col max-md:justify-start max-md:px-6 max-md:pt-14 max-md:text-center ">
        {/* ================= Circles ================= */}
        <div className=" absolute  inset-0 z-10 overflow-hidden pointer-events-none ">
          {/* Circle 1 */}
          <div className=" absolute rounded-full bg-[#66711D] left-1/2 -translate-x-1/2 bottom-[-410px] w-[820px] h-[820px] md:left-auto md:translate-x-0 md:top-1/2 md:bottom-auto  md:right-[-300px] md:-translate-y-1/2 md:w-[682px]  md:h-[682px]  " />
          {/* Circle 2 */}
          <div className="absolute rounded-full bg-[#E5AA00] left-1/2 -translate-x-1/2 bottom-[-290px] w-[620px] h-[620px]  md:left-auto md:translate-x-0 md:top-1/2 md:bottom-auto  md:right-[-225px] md:-translate-y-1/2 md:w-[535px] md:h-[535px] " />
          {/* Circle 3 */}
          <div className="  absolute rounded-full bg-[#FFC000] left-1/2 -translate-x-1/2 bottom-[-210px] w-[460px] h-[460px] md:left-auto md:translate-x-0 md:top-1/2 md:bottom-auto md:right-[-145px] md:-translate-y-1/2 md:w-[380px] md:h-[380px] " />
        </div>
        {/* ================= Content ================= */}
        <div className="relative z-30 max-w-[635px]">
          <h2 className=" text-white font-extrabold text-[40px] leading-none max-md:text-[24px] ">
            {" "}
            Let’s Get In Touch{" "}
          </h2>
          <p className="mt-8 text-white text-[20px] leading-[38px] font-normal text-justify [text-align-last:center] md:[text-align-last:left]  md:text-left max-md:text-[16px] max-md:leading-[32px] ">
            We’re ready to turn your ideas into powerful digital experiences.
            Let’s start building your brand today
          </p>
          <Link
            to="/contact"
            className=" inline-flex items-center justify-center mt-8 w-[191px] h-[49px] rounded-full bg-white leading-[100%] text-primary font-extrabold text-base transition-all duration-300 hover:-translate-y-1 max-md:w-[156px] max-md:h-[37px]  max-md:text-[13px]"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
