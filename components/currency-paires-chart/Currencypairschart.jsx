'use client';

import { useEffect, useRef, useState } from 'react';

const symbols = [
    { label: 'EUR/USD', value: 'FX:EURUSD' },
    { label: 'USD/JPY', value: 'FX:USDJPY' },
    { label: 'GBP/USD', value: 'FX:GBPUSD' },
    { label: 'USD/CHF', value: 'FX:USDCHF' },
    { label: 'USD/CAD', value: 'FX:USDCAD' },
    { label: 'AUD/USD', value: 'FX:AUDUSD' },
    { label: 'NZD/USD', value: 'FX:NZDUSD' },
];


const Currencypairschart = () => {
    const [selectedSymbol, setSelectedSymbol] = useState('FX:EURUSD');
    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbol: selectedSymbol,
            width: "100%",
            height: "400",
            locale: "en",
            dateRange: "ALL",
            colorTheme: "dark",
            isTransparent: false,
            autosize: true,
        });

        if (containerRef.current) {
            containerRef.current.innerHTML = ''; // Clear previous chart
            containerRef.current.appendChild(script);
        }
    }, [selectedSymbol]);

    return (
        <div className="w-full  mx-auto ">
            <div className="flex flex-wrap gap-2 mb-6">
                {symbols.map((item) => (
                    <button
                        key={item.value}
                        className={`px-4 py-1 text-sm font-semibold rounded-full ${selectedSymbol === item.value ? 'bg-[#eeead6] text-black ' : 'bg-white border text-black'
                            }`}
                        onClick={() => setSelectedSymbol(item.value)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <div ref={containerRef} />
        </div>
    );
}

export default Currencypairschart

