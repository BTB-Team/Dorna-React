import React from "react";
import Servicecard from "./servicecard";
import DeliveryProcess from "./delivery";
import CTASection from "../home/components/CTASection";

export function Services(){
    return(
        <>
            <Servicecard /> 
            <DeliveryProcess />
            <CTASection />
        </>
    )
}
