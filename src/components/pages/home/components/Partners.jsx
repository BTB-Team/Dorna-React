import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import wave from "../assets/wave.svg";
import vector from "../assets/Vector-6-mobile.svg";
import img141 from "../assets/Rectangle 141.png";
import img142 from "../assets/Rectangle 142.png";
import img143 from "../assets/Rectangle 143.png";
import img144 from "../assets/Rectangle 144.png";
import img145 from "../assets/Rectangle 145.png";
import img146 from "../assets/Rectangle 146.png";

export default function Partners() {
  return (
    <>
   <section className="relative hidden md:block mx-auto max-w-[1440px] px-6 md:px-10 py-20 overflow-hidden">
  {/* هدر بخش */}
  <div className="flex items-center justify-between max-w-[1200px] mx-auto mb-0">
    <h2 className="font-heading text-[32px] font-semibold text-primary">
      Built for the way you actually flip
    </h2>

    <Link to="/portfolio">
  <button
    className="
  h-[44px]
  rounded-full
  bg-primary
  px-8
  text-white
  font-semibold
  transition-all
  duration-300
  ease-out
  hover:-translate-y-1
  hover:shadow-xl
"
  >
    See All Our Works
  </button>
</Link>
  </div>


  {/* بخش اصلی کارت‌ها و موج */}
  <div className="relative flex items-center w-full h-[450px]">

    {/* تصویر موج پشت کارت‌ها */}
    <img
      src={wave}
      alt="wave"
      className="absolute left-[-150.5px] top-[250px] w-[1680px] h-auto max-w-none z-0 pointer-events-none"
    />


    {/* کارت‌های متحرک */}
    <motion.div
      className="relative z-10 flex gap-[20px] w-max items-center"
      animate={{
        x: ["0%", "-50%"],
      }}
      transition={{
        duration: 50,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[
        img146,
        img141,
        img142,
        img143,
        img144,
        img145,
        img146,
        img141,
        img142,
        img143,
        img144,
        img145,
      ].map((image, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[285px] h-[350px] overflow-hidden rounded-[30px] shadow-lg bg-white"
        >
          <img
            src={image}
            alt={`Project ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </motion.div>

  </div>
</section>
  


{/* Mobile */}
      <section className="relative overflow-hidden py-10 md:hidden">
  <div className="mx-auto w-[375px] px-4">

    {/* Header */}
    <div className="mb-4 flex items-center justify-between">
      <h2 className="w-[220px] text-[13px] font-semibold leading-none text-primary">
        Built for the way you actually flip
      </h2>

      <Link to="/portfolio">
  <button
    className="
  flex
  h-[23px]
  w-[101px]
  items-center
  justify-center
  rounded-[30.5px]
  bg-primary
  text-[8px]
  font-semibold
  text-white
  transition-all
  duration-300
  ease-out
  hover:-translate-y-1
  hover:shadow-lg
"
  >
    See All Our Works
  </button>
</Link>
    </div>


    {/* Cards */}
    <div className="relative h-[240px]">

      {/* Wave */}
      <img
        src={vector}
        alt="wave-mobile"
        className="
          pointer-events-none
          absolute
          left-[-175px]
          top-[145px]
          w-[662px]
          h-[142px]
          max-w-none
        "
      />


      {/* Moving Cards */}
      <div className="relative z-10 overflow-hidden">

        <motion.div
          className="flex gap-[12px] w-max items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >

          {[
            img146,
            img141,
            img142,
            img143,
            img144,
            img145,
            img146,
            img141,
            img142,
            img143,
            img144,
            img145,
          ].map((image, index) => (
            <div
              key={index}
              className="h-[202px] w-[165px] flex-shrink-0 overflow-hidden rounded-[8px] bg-white"
            >
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}

        </motion.div>

      </div>

    </div>
  </div>
</section>
    </>
  );
}