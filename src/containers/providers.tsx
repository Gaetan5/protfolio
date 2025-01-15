import ActiveSectionContextProvider from "./active-section";
import React from "react";

type ProvidersProps = {
    children: React.ReactNode;
};

export default function Provider({children}: ProvidersProps) {
    return(
        <ActiveSectionContextProvider>
            {children}
        </ActiveSectionContextProvider>
    )
}