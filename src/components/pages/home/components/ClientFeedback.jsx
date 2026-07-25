import {motion} from "framer-motion";
import GradientHeading from "../../../typography/GradientHeading";
import {cards} from "../../../data/clientFeedback";

export default function ClientFeedback() {
  return (
    <section className="overflow-hidden pb-5 bg-white ">
      <div className="mx-auto max-w-[1440px]">
        <GradientHeading text="Clients Feedback" />
        <motion.div
          className="flex gap-5 mt-10 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {[...cards, ...cards].map((card, index) => (
            <div
              key={index}
              className="w-[360px] h-[239px] shrink-0 rounded-[30px] bg-white p-3.5    shadow-[0_4px_14px_rgba(148,148,148,0.29)]"
            >
              <div className="flex items-center gap-2">
                {/* Avatar Placeholder */}
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-[43px] border w-[43px] shrink-0 rounded-full object-contain"
                />
                <div>
                  <h3 className="text-[12px] font-medium text-[#202020] leading-none">
                    {card.name}
                  </h3>
                  <p className="mt-1 text-[10px] font-medium leading-none  text-[#8F8F8F]">
                    {card.role}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[12px] leading-[160%]  text-black font-medium">
                {card.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
