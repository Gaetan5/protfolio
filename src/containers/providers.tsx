import ActiveSectionContextProvider from "./active-section";
//import React, { ProviderProps } from "react";

type ProviderProps = {
    children: React.ReactNode;
};

export default function Provider({children}: ProviderProps) {
    return(
        <ActiveSectionContextProvider>
            {children}
        </ActiveSectionContextProvider>
    )
}