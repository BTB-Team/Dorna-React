import React from "react";

const LetInTouch = () => {
  return (
    <section className="relative w-full bg-[#f4f9f9] overflow-hidden py-20 md:py-28 text-center flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <svg
          className="absolute -left- -bottom-16 md:-left-28 md:-bottom-28 w-[260px] h-[260px] md:w-[450px] md:h-[450px] opacity-80"
          viewBox="0 0 200 200"
          fill="none"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle at 60% 70%, black 20%, transparent 70%)",
            maskImage:
              "radial-gradient(circle at 20% 30%, black 20%, transparent 70%)",
          }}
        >
          <circle
            cx="40"
            cy="10"
            r="130"
            stroke="#FDBF0F"
            strokeWidth="18"
            className="stroke-[28] "
          />
        </svg>
        <svg
          className="absolute -right-16 -top-12 md:-right-24 md:-top-20 w-[240px] h-[240px] md:w-[400px] md:h-[400px] opacity-80"
          viewBox="0 0 200 200"
          fill="none"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle at 30% 20%, black 20%, transparent 70%)",
            maskImage:
              "radial-gradient(circle at 30% 20%, black 20%, transparent 70%)",
          }}
        >
          <circle
            cx="160"
            cy="195"
            r="140"
            stroke="#FDBF0F"
            strokeWidth="18"
            className="stroke-[28]"
          />
        </svg>
      </div>
      {/* this section for the Let in touch text and description */}
      <div className="relative z-10 w-full max-w-[375px] md:max-w-2xl px-6 pt-20 mx-auto flex flex-col items-center">
        {/* fog only for mobile  */}
        <div className="absolute md:hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[180px] bg-white blur-3xl rounded-full -z-10"></div>
        {/* text section  */}
        <h2 className="text-2xl md:text-5xl font-bold text-[#00514b] mb-3 md:mb-4 tracking-tight leading-tight">
          Let's Get In Touch
        </h2>
        <p className="text-[#00514b] md:text-2xl px-3 items-center justify-center mb-4 md:mb-6 leading-[1.4]">
          We're ready to turn your ideas into powerful digital experiences.
          Let's start building your brand today.
        </p>
        <button className="bg-[#00514b] hover:bg-[#004d4d] text-white text-[11px] md:text-[20px] font-bold tracking-wide px-7 py-1 md:px-6 md:py-1 rounded-full transition-all duration-200 active:scale-[0.98] shadow-sm">
          Start Your Project
        </button>
      </div>
    </section>
  );
};

export default LetInTouch;
