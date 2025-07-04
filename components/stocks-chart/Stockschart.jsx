

'use client';

import { useEffect, useRef, useState } from 'react';

// Define stock tabs
const stocks = [
    { label: 'TESLA', symbol: 'NASDAQ:TSLA' },
    { label: 'APPLE', symbol: 'NASDAQ:AAPL' },
    { label: 'COIN', symbol: 'NASDAQ:COIN' },
    { label: 'GOOGLE', symbol: 'NASDAQ:GOOGL' },
    { label: 'FACEBOOK', symbol: 'NASDAQ:META' },
    { label: 'AMAZON', symbol: 'NASDAQ:AMZN' },
    { label: 'NETFLIX', symbol: 'NASDAQ:NFLX' },
];


const StockChartTabs = () => {

    const [activeSymbol, setActiveSymbol] = useState(stocks[0].symbol);
    const containerRef = useRef(null);

    useEffect(() => {
        // Load TradingView script only once
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
        containerRef.current.innerHTML = ''; // Clear previous chart

        new window.TradingView.widget({
            container_id: containerRef.current.id,
            symbol: symbol,
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
        <div className="max-w-5xl mx-auto ">
            <div className="flex flex-wrap gap-2  mb-5">
                {stocks.map((stock) => (
                    <button
                        key={stock.symbol}
                        onClick={() => setActiveSymbol(stock.symbol)}
                        className={`px-4 py-1 font-semibold rounded-full ${activeSymbol === stock.symbol
                            ? 'bg-[#eeead6] text-black '
                            : 'bg-white border text-black'
                            }`}
                    >
                        {stock.label}
                    </button>
                ))}
            </div>

            <div
                id="stock_chart_container"
                ref={containerRef}
                className="w-full h-[500px] rounded-xl overflow-hidden"
            />
        </div>
    );
}

export default StockChartTabs
