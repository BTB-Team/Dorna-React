import { Link } from "react-router-dom";
import arrowWhite from "../assets/TT.svg";
import arrowBlack from "../assets/TB.svg";

const services = [
  { id: "01", title: "Branding Design" },
  { id: "02", title: "Social Media Marketing" },
  { id: "03", title: "Creative Production" },
  { id: "04", title: "Website Development" },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-[1440px] h-[404px] md:h-[890px] bg-[#F7FCFC]">
      <div className="flex flex-col items-center pt-10 md:pt-[108px]">
        <h2 className="font-title bg-gradient-to-r from-primary to-[#00B7A9] bg-clip-text text-[28px] leading-none text-transparent md:text-[40px]">
          Our Services
        </h2>

        <p className="mt-3 w-[196px] text-center text-[13px] leading-[23px] text-black md:w-[719px] md:text-[24px] md:leading-none">
          We Create Meaningful Digital Solutions For Modern Brands
        </p>
      </div>

      <div className="mt-5 md:mt-[60px] flex justify-center">
        <div className="w-[343px] md:w-[1200px]">
          {services.map((service) => (
            <Link
              key={service.id}
              to="/portfolio"
              className="block"
            >
              <div
                className="
                  group
                  flex
                  h-[50px]
                  md:h-[130px]
                  cursor-pointer
                  items-center
                  justify-between
                  px-4
                  md:px-6
                  border-b
                  border-primary
                  bg-white
                  transition-all
                  duration-300
                  hover:bg-gradient-to-r
                  hover:from-primary
                  hover:to-[#00B7A9]
                "
              >
                <div className="flex items-center">
                  <span
                    className="
                      font-title
                      text-[20px]
                      md:text-[36px]
                      leading-none
                      text-black
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {service.id}
                  </span>

                  <h3
                    className="
                      ml-4
                      md:ml-[32px]
                      font-title
                      text-[20px]
                      md:text-[36px]
                      leading-none
                      text-black
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {service.title}
                  </h3>
                </div>

                <div>
                  <img
                    src={arrowBlack}
                    alt=""
                    className="
                      block
                      w-6
                      h-6
                      md:w-10
                      md:h-10
                      group-hover:hidden
                    "
                  />

                  <img
                    src={arrowWhite}
                    alt=""
                    className="
                      hidden
                      w-6
                      h-6
                      md:w-10
                      md:h-10
                      group-hover:block
                    "
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}