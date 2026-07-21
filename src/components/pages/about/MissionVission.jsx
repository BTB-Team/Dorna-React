// import GoldenHeading from '../../typography/GoldenHeading';
export default function MissionVision() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Vision Card */}
        <div
          className="relative bg-gray-50 p-8 rounded-2xl text-left overflow-hidden bg-no-repeat bg-top bg-cover"
          style={{ backgroundImage: "url('/images/about-images/dot-pattern.webp')" }}
        >
          <h3 className="relative text-2xl font-bold text-[#00514B] mb-4">
            Vision
          </h3>
          
          <p className="relative text-[#00514B] leading-relaxed">
            Our goal is to establish ourselves as the most reputable media
            and advertising company in Afghanistan at the earliest
            opportunity, helping companies and organizations grow and
            succeed through standard and creative services.
          </p>
        </div>

        {/* Mission Card */}
        <div
          className="relative bg-gray-50 p-8 rounded-2xl text-left overflow-hidden bg-no-repeat bg-top bg-cover"
          style={{ backgroundImage: "url('/images/about-images/dot-pattern.webp')" }}
        >
          <h3 className="relative text-2xl font-bold text-[#00514B] mb-4">
            Mission
          </h3>
          <p className="relative text-[#00514B] leading-relaxed">
            Our mission at Dorna Media is to focus on the unique needs of
            each client, aiming to create distinctive and effective
            advertisements that contribute to their growth and success.
          </p>
        </div>
      </div>
    </section>
  );
}