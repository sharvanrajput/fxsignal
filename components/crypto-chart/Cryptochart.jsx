
'use client';

import { useEffect, useRef, useState } from 'react';

const coins = [
    { label: 'BTC', symbol: 'COINBASE:BTCUSD' },
    { label: 'ETH', symbol: 'COINBASE:ETHUSD' },
    { label: 'SHIBA', symbol: 'BINANCE:SHIBUSDT' },
    { label: 'Ripple', symbol: 'BINANCE:XRPUSDT' },
    { label: 'DEFI', symbol: 'BINANCE:DEFIUSDT' },
    { label: 'SOLANA', symbol: 'BINANCE:SOLUSDT' },
];

const Cryptochart = () => {

    const [activeSymbol, setActiveSymbol] = useState(coins[0].symbol);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!window.TradingView) return;

        if (containerRef.current) {
            containerRef.current.innerHTML = ''; // Remove previous widget
        }

        new window.TradingView.widget({
            container_id: containerRef.current.id,
            autosize: true,
            symbol: activeSymbol,
            interval: 'D',
            timezone: 'Etc/UTC',
            theme: 'dark',
            style: '1',
            locale: 'en',
            enable_publishing: false,
            hide_top_toolbar: false,
            save_image: false,
            studies: [],
        });
    }, [activeSymbol]);

    useEffect(() => {
        // Load script only once
        if (window.TradingView) return;
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        document.head.appendChild(script);
    }, [activeSymbol]);
    return (
        <div className=" mx-auto">
            <div className="flex flex-wrap gap-2  mb-5">
                {coins.map((coin) => (
                    <button
                        key={coin.symbol}
                        onClick={() => setActiveSymbol(coin.symbol)}
                        className={`px-4 py-1 text-sm font-semibold rounded-full  ${activeSymbol === coin.symbol
                                ? 'bg-[#eeead6] text-black '
                                : 'bg-white border text-black'
                            }`}
                    >
                        {coin.label}
                    </button>
                ))}
            </div>

            <div id="tv-chart" ref={containerRef} className="h-[500px] w-full rounded-xl overflow-hidden" />
        </div>
    );
}

export default Cryptochart

