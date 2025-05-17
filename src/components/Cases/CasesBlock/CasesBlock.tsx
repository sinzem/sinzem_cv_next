"use client";

import { ReactElement, useEffect, useState } from 'react';

import CasesBlockDesktop from './CasesBlockDesktop';
import CasesBlockMobile from './CasesBlockMobile';

const CasesBlock = (): ReactElement => {

    const [deviceType, setDeviceType] = useState<"desktop" | "mobile" | null>(null);

    useEffect(() => {
        const updateDeviceType = () => {
            const width = window.innerWidth;
            if (width < 1199.5) {
              setDeviceType("mobile")
            }  else {
              setDeviceType("desktop")
            }
        }
        updateDeviceType();
      
        window.addEventListener("resize", updateDeviceType);
      
        return () => window.removeEventListener("resize", updateDeviceType);
    }, [])
    

    return (
        <>
            {deviceType === "desktop" &&
                <CasesBlockDesktop />
            }
            {deviceType === "mobile" &&
                <CasesBlockMobile />
            }
        </>
    );
};

export default CasesBlock;