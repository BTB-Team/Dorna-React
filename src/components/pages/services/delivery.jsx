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

          {/* کانتینر اصلی کارت‌ها: تنظیم فواصل عمودی یکنواخت در موبایل (space-y-6) */}
          <div className="relative z-10 flex flex-col space-y-6 max-w-[320px] mx-auto md:space-y-0 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-3 md:max-w-none">
            {steps.map((step, index) => {
              // تشخیص زوج یا فرد بودن
              const isEven = index % 2 !== 0;
              
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-[16px] p-5 shadow-[0_12px_28px_rgba(0,0,0,0.06)] border border-gray-100/50 flex flex-col justify-between min-h-[145px] transition-transform duration-300 hover:-translate-y-1 relative
                    w-[52%] md:w-full
                    ${isEven ? 'self-end' : 'self-start'}
                    md:col-auto md:mx-0 md:self-auto
                  `}
                >
                  {/* خط زرد لبه کارت */}
                  <div className="absolute top-5 left-0 w-[4px] h-8 bg-[#FFC000] rounded-r" />

                  <div className="w-full pl-2">
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
