import React from 'react';

export default function DeliveryProcess() {
  const steps = [
    { num: '01.', title: 'Listen', desc: 'Understanding your unique business goals.' },
    { num: '02.', title: 'Strategy', desc: 'Designing the perfect path to success.' },
    { num: '03.', title: 'Produce', desc: 'Creating high-impact brand content.' },
    { num: '04.', title: 'Launch', desc: 'Executing campaigns across platforms.' },
    { num: '05.', title: 'Optimize', desc: 'Measuring and refining for best ROI.' },
  ];

  return (
    <section className="bg-white min-h-[400px] py-16 px-4 md:px-6 font-[Montserrat-semiBold] relative overflow-hidden flex items-center">
      <div className="max-w-5xl mx-auto w-full relative">
        
        {/* بخش هدر و عنوان اصلی */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00514B] mb-2 tracking-wide">
            Our Delivery Process
          </h2>
          <p className="text-[11px] md:text-xs text-gray-800 tracking-wide">
            A Systematic Approach To Ensuring Your Project's Success.
          </p>
        </div>

        <div className="relative w-full py-4">
          
          {/* بخش امواج پس‌زمینه */}
          <div className="absolute inset-0 pointer-events-none z-0">
            
            {/* خط افقی مخصوص دسکتاپ و تبلت */}
            <div className="hidden md:flex absolute inset-x-0 -left-16 -right-16 top-1/2 -translate-y-1/2 items-center justify-center">
              <img src="service/vector.svg" alt="Desktop Vector Line" className="w-full object-contain" />
            </div>

            {/* خط مارپیچ عمودی مخصوص موبایل */}
            <div className="block md:hidden absolute inset-0 w-full h-full">
              <img 
                src="service/Vectorm.svg" 
                alt="Mobile Vertical Vector Line" 
                className="w-full h-full object-contain" 
              />
            </div>
            
          </div>

          {/* کانتینر اصلی کارت‌ها با چینش زیگزاگی در موبایل */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-0 md:gap-3 max-w-[360px] mx-auto md:max-w-none">
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0;
              
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-[16px] p-5 shadow-[0_12px_28px_rgba(0,0,0,0.06)] border border-gray-100/50 flex flex-col justify-between min-h-[155px] transition-transform duration-300 hover:-translate-y-1 w-[90%]
                    ${isEven ? 'col-start-2 justify-self-end ml-[-25px]' : 'col-start-1 justify-self-start mr-[-25px]'}
                    md:col-auto md:w-full md:mx-0 md:justify-self-auto
                  `}
                >
                  <div className="w-full">
                    {/* شماره مرحله */}
                    <span className="text-[11px] font-bold text-[#FFC000] tracking-wider block mb-1">
                      {step.num}
                    </span>
                    {/* عنوان */}
                    <h3 className="text-base font-bold text-[#00514B] mb-2">
                      {step.title}
                    </h3>
                    {/* توضیحات */}
                    <p className="text-[11px] text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
