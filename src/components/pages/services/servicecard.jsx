import React from 'react';

export default function Services() {
  // ۱. تعریف اطلاعات تمام کارت‌ها با آدرس‌دهی دقیق و مستقیم از پوشه public
  const serviceItems = [
    {
      id: 1,
      title: 'Branding',
      desc: 'Innovative visual solutions that define your brand identity and create compelling connections with your audience.',
      icon: 'service/Branding.svg',
      isMain: true,
      assetImg: 'service/Asset.png'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      desc: 'Create a great user experience with attractive, and easy-to-use designs. Create a great user experience with attractive, and easy-to-use designs.',
      icon: 'service/figma.svg', 
      isMain: false
    },
    {
      id: 3,
      title: 'Commercial Ads',
      desc: 'Professional video production and commercial advertising solutions including Live Action, Motion Graphics, and Drone cinematography.',
      icon: 'service/commercial.svg',
      isMain: false
    },
    {
      id: 4,
      title: 'Motion Graphics', 
      desc: 'High-end motion design and animation services including 2D and 3D solutions for modern platforms.',
      icon: 'service/motion.svg',
      isMain: false
    },
    {
      id: 5,
      title: 'Photography',
      desc: 'Professional studio and on-site photography services with master touch-ups and high-resolution quality.',
      icon: 'service/Photography.svg', 
      isMain: false
    }
  ];

  const mainService = serviceItems.find(item => item.isMain);
  const subServices = serviceItems.filter(item => !item.isMain);

  return (
    <div className="bg-[#f0f2f5] min-h-screen py-12 px-4 md:px-8 font-sans">   
    
      <div className="max-w-6xl mx-auto">
        
        {/* بخش عنوان اصلی */}
        <div className="text-left md:text-center mb-10 max-w-[290px] md:max-w-none">
          <h2 className="text-[24px] md:text-3xl font-bold text-[#0c4e47] mb-2 leading-tight tracking-wide">
            Our Mission Is To Make Your Business Better
          </h2>
          <p className="text-[11px] md:text-xs text-gray-400 font-semibold tracking-wider uppercase">
            Scroll To See Our Services
          </p>
        </div>

        {/* شبکه اصلی کارت‌ها */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* کارت اصلی (Branding) */}
          {mainService && (
            <div className="lg:col-span-1 relative overflow-hidden rounded-[24px] md:rounded-[30px]
                bg-gradient-to-b from-[#0d6e68] to-[#12b8af]
                px-6 py-8 md:px-8 md:py-10 text-white 
                min-h-[420px] md:min-h-[550px] w-full
                flex flex-col justify-between
                shadow-[0_12px_35px_rgba(0,0,0,.06)]">
              
              <div className="absolute -top-32 -right-20 w-[260px] h-[260px] rounded-full bg-[#FFFFFF] opacity-10"/>
              <div className="absolute -top-16 -right-10 w-[180px] h-[180px] rounded-full bg-[#FFFFFF] opacity-10"/>
              
              <div className="relative z-10">
                <img src={mainService.icon} alt={mainService.title} className="mb-4 w-10 h-10 md:w-12 md:h-12 object-contain" />
                <h3 className="text-[24px] md:text-[40px] font-bold mb-3 tracking-wide">{mainService.title}</h3>
                <p className="text-[24px] md:text-[17px] leading-relaxed text-white/90 max-w-[280px] font-normal">
                  {mainService.desc}
                </p>
              </div>
              
              {mainService.assetImg && (
                <div className="absolute bottom-0 right-4 z-10 w-[75%] h-44 md:h-56 flex justify-end items-end pointer-events-none">
                  <img src={mainService.assetImg} alt={`${mainService.title} Mascot`} className="w-full h-full object-contain object-bottom" />
                </div>
              )}
            </div>
          )}

          {/* بخش کارت‌های فرعی */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {subServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-[#e9ebf0] rounded-[24px] p-6 md:p-8 flex flex-col justify-start relative overflow-hidden shadow-sm hover:scale-[1.01] transition-transform duration-300 min-h-[220px] md:min-h-[260px] w-full"
              >
                <div className="absolute -top-36 -right-16 w-[240px] h-[240px] rounded-full bg-[#FFFFFF] opacity-40"/>
                <div className="absolute -top-20 -right-8 w-[160px] h-[160px] rounded-full bg-[#FFFFFF] opacity-20"/>
                
                <div className="relative z-10 text-[#0c4e47] mb-4">
                  <img src={service.icon} alt={service.title} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                </div>
                <h3 className="relative z-10 text-[20px] md:text-[26px] font-bold mb-2 text-[#0c4e47]">
                  {service.title}
                </h3>
                <p className="relative z-10 text-[13px] md:text-sm text-gray-500 leading-relaxed max-w-[310px] md:max-w-none">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
