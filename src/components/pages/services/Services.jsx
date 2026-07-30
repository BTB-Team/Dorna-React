import React from "react";
import ServiCecard from "./ServiCeCard";
import DeliveryProcess from "./Delivery";
import CTASection from "../home/components/CTASection";
import Header from "../../header/Header";

export function Services(){
    return(
        <>
           
              <Header />
          
            <main className="pt-28"> 
          
            <ServiCecard /> 
            <DeliveryProcess />
            <CTASection />
            </main>
        </>
    )
}
