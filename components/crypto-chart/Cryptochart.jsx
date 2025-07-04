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
  const scriptLoaded = useRef(false);

  const createWidget = (symbol) => {
    if (!window.TradingView || !containerRef.current) return;

    containerRef.current.innerHTML = ''; // Clear previous chart

    new window.TradingView.widget({
      container_id: containerRef.current.id,
      autosize: true,
      symbol: symbol,
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
  };

  useEffect(() => {
    if (scriptLoaded.current && window.TradingView) {
      createWidget(activeSymbol);
    }
  }, [activeSymbol]);

  useEffect(() => {
    if (window.TradingView) {
      scriptLoaded.current = true;
      createWidget(activeSymbol);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      scriptLoaded.current = true;
      createWidget(activeSymbol);
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="mx-auto">
      <div className="flex flex-wrap gap-2 mb-5">
        {coins.map((coin) => (
          <button
            key={coin.symbol}
            onClick={() => setActiveSymbol(coin.symbol)}
            className={`px-4 py-1 text-sm font-semibold rounded-full ${
              activeSymbol === coin.symbol
                ? 'bg-[#eeead6] text-black'
                : 'bg-white border text-black'
            }`}
          >
            {coin.label}
          </button>
        ))}
      </div>

      <div
        id="tv-chart"
        ref={containerRef}
        className="h-[400px] w-full rounded-xl overflow-hidden"
      />
    </div>
  );
};

export default Cryptochart;
