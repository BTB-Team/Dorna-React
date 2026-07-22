const teamImage1 = '/images/about-images/team-image1.webp';
import DisplayGreen from '../../typography/DisplayGreen';

function YellowStroke() {
  return (
  <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="10 30 1390 591"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M-197 516.107C-48 316.107 315.5 142.607 270.5 445.107C226.082 843.932 950 198.107 1181.5 356.107C1525.16 605.5 1379.5 54.1067 1488 94.8097"
        stroke="#FFC000"
        strokeWidth="51"
      />
    </svg>

  );
}

export default function TeamHighlight() {
  return (
    <>
    <section className=" bg-white relative flex w-full h-full max-w-[1995px] mx-auto items-center justify-center py-16 sm:py-24 overflow-hidden">
          <YellowStroke />
          <DisplayGreen/>
           <div className="relative z-10 flex w-full max-w-[940px] flex-col overflow-hidden rounded-[16px] bg-[#006e67] shadow-[0_24px_50px_rgba(0,73,68,0.12)] sm:flex-row">
        <div className="h-[350px]  w-full shrink-0 sm:w-[62%]">
          <img
            src={teamImage1}
            alt="Creative team collaborating around a table"
            className="h-full w-full object-cover overflow-hidden rounded-lg"
          />
        </div>
        <div className="flex flex-1 items-center sm:px-5 sm:py-5">
          <p className="max-w-[310px] md:text-lg  font-semibold md:leading-7 tracking-[0.06em] text-white sm:text-[15px] sm:leading-3 px-4 py-4">
            Behind every successful project is a team driven by creativity,
            expertise, and collaboration. Together, we transform ideas into
            impactful experiences and deliver results that make a difference.
          </p>
        </div>
      </div>
          <DisplayGreen/>
     
    </section>
    </>
  );
}