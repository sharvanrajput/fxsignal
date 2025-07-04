
'use client';

import { useEffect, useRef, useState } from 'react';

// Indices list with TradingView symbols
const indices = [
    { label: 'DOW', symbol: 'BLACKBULL:US30' },
    { label: 'S & P 100', symbol: 'SP:SP100' },
    { label: 'DAX', symbol: 'INDEX:DAX' },
    { label: 'FTSE', symbol: 'FOREXCOM:UKXGBP' },
    { label: 'NIKKEI225', symbol: 'SPREADEX:NIKKEI' },
];

const IndicesChart = () => {
    const [activeSymbol, setActiveSymbol] = useState(indices[0].symbol);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!window.TradingView) {
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/tv.js';
            script.async = true;
            script.onload = () => createWidget(activeSymbol);
            document.head.appendChild(script);
        } else {
            createWidget(activeSymbol);
        }
    }, []);

    useEffect(() => {
        if (window.TradingView) {
            createWidget(activeSymbol);
        }
    }, [activeSymbol]);

    const createWidget = (symbol) => {
        if (!containerRef.current) return;
        containerRef.current.innerHTML = '';

        new window.TradingView.widget({
            container_id: containerRef.current.id,
            symbol,
            autosize: true,
            interval: 'D',
            timezone: 'Etc/UTC',
            theme: 'dark',
            style: '1',
            locale: 'en',
            enable_publishing: false,
            allow_symbol_change: false,
            hide_top_toolbar: false,
        });
    };
    return (
        <div className=" mx-auto">
            <div className="flex flex-wrap gap-2 mb-5">
                {indices.map((item) => (
                    <button
                        key={item.symbol}
                        onClick={() => setActiveSymbol(item.symbol)}
                        className={`px-4 py-1 text-sm font-semibold rounded-full ${activeSymbol === item.symbol
                            ? 'bg-[#eeead6] text-black '
                            : 'bg-white border text-black'
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <div
                id="index_chart"
                ref={containerRef}
                className="w-full h-[400px] rounded-lg overflow-hidden"
            />
        </div>
    );
}

export default IndicesChart

