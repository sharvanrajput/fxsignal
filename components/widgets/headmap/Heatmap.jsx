'use client';

import { useEffect } from 'react';

const Heatmap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
    script.async = true;
    script.type = 'text/javascript';

    script.textContent = JSON.stringify({
      width: "100%",
      height: "500",
      currencies: [
        "EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"
      ],
      isTransparent: false,
      colorTheme: "dark",
      locale: "en",
      backgroundColor: "#1D222D"
    });

    const container = document.getElementById('tv-heatmap-widget');
    if (container) {
      container.innerHTML = ''; // Clear existing
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container h-[500px] rounded-2xl overflow-hidden ">
      <div id="tv-heatmap-widget" className="tradingview-widget-container__widget" />
    </div>
  );
};

export default Heatmap;
