import React from "react";
import Servicecard from "./servicecard";
import DeliveryProcess from "./delivery";
import CTASection from "../home/components/CTASection";
import Header from "../../header/Header";

export function Services(){
    return(
        <>
           
              <Header />
          
            <main className="pt-28"> 

                {/* بقیه کامپوننت‌ها */}
          
                <h2>helloword</h2>
            <Servicecard  /> 
            <DeliveryProcess />
            <CTASection />
              </main>
        </>
    )
}
