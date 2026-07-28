import { Link } from "react-router-dom";

export default function StatsSection() {
  const stats = [
    { number: "100+", label: "Best Projects" },
    { number: "50+", label: "Best Clients" },
    { number: "5+", label: "Year Experience" },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">

      {/* Desktop / Tablet Vector */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="561"
        viewBox="0 0 1440 561"
        fill="none"
        className="
          absolute
          left-0
          w-full
          h-auto
          md:top-[270px]
          lg:top-[160px]
          pointer-events-none
          select-none
        "
      >
        <path
          d="M-48 316.107C-48 316.107 315.5 142.607 270.5 445.107C226.082 743.692 950 188.107 1181.5 356.107C1525.16 605.5 1379.5 54.1067 1488 24.6067"
          stroke="#FFC000"
          strokeWidth="51"
        />
      </svg>


      {/* Mobile / Tablet Vector */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1540"
        height="561"
        viewBox="0 0 1440 561"
        fill="none"
        className="
          absolute
          left-[-130px]
          bottom-[-60px]
          w-[900px]
          md:w-[1200px]
          max-w-none
          block
          lg:hidden
          pointer-events-none
          select-none
          lg:hidden
          md:hidden
        "
      >
        <path
          d="M-48 316.107C-48 316.107 315.5 142.607 270.5 445.107C226.082 743.692 950 188.107 1181.5 356.107C1525.16 605.5 1379.5 54.1067 1488 24.6067"
          stroke="#FFC000"
          strokeWidth="90"
          strokeLinecap="round"
        />
      </svg>


      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">

        {/* White Card */}
        <div
          className="
            relative
            mx-auto
            mt-8
            sm:mt-10
            lg:mt-12
            w-full
            max-w-[1048px]
            rounded-[20px]
            border border-[#E6E6E6]
            bg-white
            shadow-sm
            overflow-hidden
          "
        >

          {/* Heading + CTA */}
          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-start
              lg:items-center
              justify-between
              gap-6
              px-6
              sm:px-8
              md:px-10
              lg:px-16
              pt-8
              sm:pt-10
            "
          >

            <div className="text-left">

              <h2
                className="
                  text-[22px]
                  sm:text-[26px]
                  md:text-[32px]
                  lg:text-[36px]
                  font-semibold
                  leading-tight
                  text-primary
                "
              >
                Every Number Holds a Story
              </h2>


              <p
                className="
                  mt-4
                  sm:mt-5
                  max-w-[760px]
                  text-[14px]
                  sm:text-[16px]
                  md:text-[18px]
                  lg:text-[22px]
                  leading-6
                  sm:leading-7
                  text-[#686767]
                "
              >
                Each number represents a story captured, a vision brought to
                life, and an impact that lasts beyond the frame.
              </p>

            </div>


            <Link
              to="/contact"
              className="
                hidden
                lg:flex
                h-[72px]
                w-[332px]
                items-center
                justify-center
                rounded-[20px]
                bg-[#FFC000]
                text-[24px]
                font-semibold
                text-[#0B5B5B]
                hover:bg-[#e6ad00]
                transition-colors
              "
            >
              Elevate Your Brand
              <span className="ml-3 text-[28px]">
                →
              </span>
            </Link>

          </div>


          {/* Stats */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-8
              sm:gap-0
              pt-8
              sm:pt-10
              pb-10
              sm:pb-14
              lg:pb-20
            "
          >

            {stats.map((item, index) => (

              <div
                key={index}
                className={`
                  flex
                  flex-col
                  items-start
                  sm:items-center
                  justify-center
                  px-6
                  sm:px-4
                  md:px-6
                  py-2
                  ${
                    index !== 2
                      ? "sm:border-r border-[#e4ca7d]"
                      : ""
                  }
                `}
              >

                <h3
                  className="
                    text-[82px]
                    sm:text-[75px]
                    md:text-[90px]
                    lg:text-[120px]
                    font-extrabold
                    leading-none
                    text-[#91B1B1]
                    sm:text-center
                  "
                >
                  {item.number}
                </h3>


                <p
                  className="
                    mt-2
                    sm:mt-3
                    text-[18px]
                    sm:text-[20px]
                    md:text-[22px]
                    lg:text-[26px]
                    font-semibold
                    text-[#0B5B5B]
                    text-left
                    sm:text-center
                  "
                >
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}