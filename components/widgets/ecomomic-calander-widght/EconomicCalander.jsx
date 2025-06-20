"use client";
import React, { useEffect } from 'react'

const EconomicCalander = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
        script.async = true;
        script.type = 'text/javascript';

        script.textContent = JSON.stringify({
            colorTheme: 'dark',
            isTransparent: false,
            width: "100%",
            height: "550",
            locale: 'en',
            importanceFilter: '-1,0,1',
            countryFilter: 'ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu',
        });

        const container = document.getElementById('tradingview-economic-calendar');
        if (container) {
            container.innerHTML = '';
            container.appendChild(script);
        }
    }, []);
    return (
        <div>
            <div className="tradingview-widget-container h-[550px] rounded-3xl overflow-hidden">
                <div id="tradingview-economic-calendar" className="tradingview-widget-container__widget h-[550px]" />
            </div>


        </div>
    )
}

export default EconomicCalander
