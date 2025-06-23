'use client';

import { useEffect } from 'react';

const Exchangerate = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
    script.async = true;
    script.type = 'text/javascript';

    script.textContent = JSON.stringify({
      width: "100%",
      height: "500",
      currencies: [
        "EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"
      ],
      isTransparent: false,
      colorTheme: "dark",
      locale: "en",
      backgroundColor: "#000000"
    });

    const container = document.getElementById('tv-crossrates-widget');
    if (container) {
      container.innerHTML = ''; // Clear existing
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container h-[500px] rounded-2xl overflow-hidden ">
      <div id="tv-crossrates-widget" className="tradingview-widget-container__widget" />
    </div>
  );
};

export default Exchangerate;
