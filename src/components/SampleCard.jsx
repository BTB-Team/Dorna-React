import React from 'react';

export default function SampleCard() {
  return (
    <div className="flex min-h-screen items-center justify-center p-md-custom">
      {/* کارت اصلی با ماکسیمم عرض سایت شما */}
      <div className="w-full max-w-[400px] rounded-lg-custom bg-brand-gradient p-lg-custom shadow-xl text-white">
        
        {/* فونت اختصاصی Milky Matcha */}
        <h1 className="font-milky text-title font-extraBold text-accent mb-sm-custom">
          Milky Matcha
        </h1>

        {/* فونت ثانویه Poppins */}
        <h2 className="font-secondary text-subtitle font-medium mb-md-custom">
          Tailwind Test Card
        </h2>

        {/* فونت اصلی Montserrat و رنگ سکندری با افکت بک‌گراند اختصاصی */}
        <p className="font-primary text-secondary bg-bg-gradient-custom p-md-custom rounded-sm-custom mb-lg-custom leading-normal-custom tracking-normal-custom">
          اگر این کارت را با پس‌زمینه گرادینت سبز، فونت‌های درست و فاصله‌های تنظیم‌شده می‌بینید، یعنی کانفیگ تلویند شما کاملاً درست کار می‌کند.
        </p>

        {/* دکمه با افکت هاور اختصاصی شما */}
        <button className="w-full py-md-custom rounded-md-custom bg-accent text-black font-primary font-bold transition-all duration-300 hover:bg-hover-gradient hover:text-white border border-transparent hover:border-white88">
          تایید و ادامه
        </button>

      </div>
    </div>
  );
}
