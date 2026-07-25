import growthTitle from "../assets/Growth-title.svg";
import ellipse from "../assets/Ellipse 7.svg";

const stats = [
  {
    title: "Strategy",
    text: "understanding your market, audience, and positioning.",
  },
  {
    title: "Branding",
    text: "building a powerful and memorable identity.",
  },
  {
    title: "Campaigns",
    text: "creating impactful content that connects and converts.",
  },
  {
    title: "Growth",
    text: "scaling your brand with data-driven improvements.",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-[1440px] h-[1202px] px-6 md:h-[557px] md:px-10">
      <div className="flex justify-center pt-[26px] md:pt-6">
  <img
    src={growthTitle}
    alt="From Vision To Growth"
    className="w-[179px] h-[69px] md:w-[368px] md:h-[134px]"
  />
</div>

<div className="mt-10 md:mt-20 flex justify-center">
  <div className="flex flex-col -space-y-[29px] md:flex-row md:-space-x-4">
    {stats.map((item, index) => (
      <div
  key={index}
  style={{
    zIndex: stats.length - index,
  }}
  className="relative flex h-[280px] w-[283px] items-center justify-center rounded-full"
>
  <img
  src={ellipse}
  alt=""
  className={`absolute inset-0 h-full w-full ${
    index % 2 !== 0 ? "rotate-180" : ""
  }`}
/>

  <div className="relative flex flex-col items-center justify-center translate-y-0 text-center">
    <h3 className="w-[138px] text-[32px] font-[500] tracking-[0.8px] text-primary">
      {item.title}
    </h3>

    <p
  className={`mt-3 text-[20px] font-[400] tracking-[0.8px] leading-6 text-primary ${
    index === 3 ? "w-[200px]" : "w-[210px]"
  }`}
>
      {item.text}
    </p>
  </div>
</div>
    ))}
  </div>
</div>
    </section>
  );
}