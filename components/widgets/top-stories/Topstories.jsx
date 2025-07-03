"use client"
import { useEffect, useRef } from "react";



const Topstories = () => {
    const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      displayMode: "regular",
      feedMode: "all_symbols",
      colorTheme: "dark",
      isTransparent: false,
      locale: "en",
      width: "100%",
      height: 486,
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = ''; // Clear previous script if any
      containerRef.current.appendChild(script);
    }
  }, []);
    return (
        <>
            <div className="tradingview-widget-container h-[486px] w-full">
                <div ref={containerRef} className="tradingview-widget-container__widget" />
               
            </div>

        </>
    )
}

export default Topstories
