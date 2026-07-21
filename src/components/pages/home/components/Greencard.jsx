import { Link } from "react-router-dom";
import Photo6 from "../assets/Photo6.png";

export default function Greencard() {
  return (
    <>
      {/* Desktop */}
      <section className="hidden py-24 md:block">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto flex h-[457px] w-[1200px] overflow-hidden rounded-[30px] bg-gradient-to-b from-primary to-[#00B7A9]">
            {/* Left */}
            <div className="flex flex-col justify-center pl-[31px]">
              <Link to="/services">
              <button className="flex h-[40px] w-[124px] items-center justify-center rounded-full border border-white text-[13px] font-medium text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
                What We Do
              </button>
              </Link>

              <h2 className="mt-8 w-[427px] text-[36px] font-medium leading-[132%] text-white">
                We design meaningful
                <br />
                not just quick
                <br />
                impressions
              </h2>

              <p className="mt-4 w-[424px] text-[17px] font-medium leading-[23px] tracking-[-0.05em] text-justify text-white">
                Our team transforms ideas into compelling visual experiences that
                connect brands with their audiences. From strategy and branding
                to content creation and production, we deliver impactful
                solutions.
              </p>
            </div>

            {/* Right */}
            <div className="ml-auto h-[457px] w-[704px]">
              <img
                src={Photo6}
                alt="CTA"
                className="h-full w-full rounded-r-[30px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="py-10 md:hidden">
        <div className="mx-auto w-[343px] overflow-hidden rounded-[30px] bg-gradient-to-b from-primary to-[#00B7A9]">
          <div className="px-5 pt-6">
            <button className="flex h-[40px] w-[124px] items-center justify-center rounded-full border border-white text-[13px] font-medium text-white">
              What We Do
            </button>

            <h2 className="mt-6 text-[21px] font-medium leading-[132%] text-white">
              We design meaningful
              <br />
              not just quick
              <br />
              impressions
            </h2>

            <p className="mt-4 text-[13px] leading-[20px] text-white">
              Our team transforms ideas into compelling visual experiences that
              connect brands with their audiences. From strategy and branding to
              content creation and production, we deliver impactful solutions.
            </p>
          </div>

          <img
            src={Photo6}
            alt="CTA"
            className="mt-6 h-[277px] w-full rounded-b-[30px] object-cover"
          />
        </div>
      </section>
    </>
  );
}