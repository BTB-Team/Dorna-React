// import React from 'react';

import DisplayGreen from "./typography/DisplayGreen";
import GradientHeading from "./typography/GradientHeading";
import HeadingGreen from "./typography/HeadingGreen";
import GoldenDisplay from "./typography/GoldenDisplay";
import GoldenHeading from "./typography/GoldenHeading";
import TitleGreen from "./typography/TitleGreen";

export default function SampleCard() {
  return (
    <>
        {/* نمونه فونت دیسپلی برای بنر ها*/}
        <DisplayGreen text='Dorna Media'/>

       {/* نمونه عناوین بزرک سبز رنگ  */}
        <HeadingGreen text="Enterprise-grade Branding, Design & Production"/>
        
        {/* نمونه عناوین گریدینت  */}
        <GradientHeading text="our services"/>

        {/* نمونه های عناوین سبز کوجک  */}
        <TitleGreen text="slkdj sjslk sldkjsd ldjd "/>

        {/* نمونه عناوین طلایی رنگ */}
        <GoldenDisplay text="out story"/>
        <br />

        {/* نمونه عناوین طلایی کوچک تر  */}
        <GoldenHeading text="the crane (Doran)" />
      <div className="flex items-center justify-center min-h-screen p-md-custom">
      <div className="w-full text-white capitalize shadow-xl h-90 rounded-lg-custom bg-brand-gradient p-lg-custom">
        نمونه کارت گریدینت

      </div>
    </div>
    </>
  );
}
