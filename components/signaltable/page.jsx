"use client";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { FaSearch, FaFilter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaSortDown } from "react-icons/fa";

const tabs = ["All", "Forex", "Crypto", "Stocks", "Commodities", "Indices"];


const signals = [
  { asset: "EUR/USD", entry: "1.0875", tp1: "1.0900", tp2: "1.0920", sl: "1.0850", status: "Open", time: "23-03-2025", access: "FREE" },
  { asset: "EUR/USD", entry: "1.0875", tp1: "1.0900", tp2: "1.0920", sl: "1.0850", status: "Closed", time: "11-03-2025", access: "FREE" },
  { asset: "EUR/USD", entry: "1.0875", tp1: "1.0900", tp2: "1.0920", sl: "1.0850", status: "Open", time: "27-03-2025", access: "FREE" },
  { asset: "EUR/USD", entry: "1.0875", tp1: "1.0900", tp2: "1.0920", sl: "1.0850", status: "Open", time: "27-03-2025", access: "FREE" },
  { asset: "LOCKED", entry: "LOCKED", tp1: "LOCKED", tp2: "LOCKED", sl: "LOCKED", status: "Open", time: "30-03-2025", access: "PREMIUM" },
  { asset: "LOCKED", entry: "LOCKED", tp1: "LOCKED", tp2: "LOCKED", sl: "LOCKED", status: "Pending", time: "31-03-2025", access: "PREMIUM" },
  { asset: "LOCKED", entry: "LOCKED", tp1: "LOCKED", tp2: "LOCKED", sl: "LOCKED", status: "Pending", time: "31-03-2025", access: "PREMIUM" },
  { asset: "LOCKED", entry: "LOCKED", tp1: "LOCKED", tp2: "LOCKED", sl: "LOCKED", status: "Closed", time: "29-03-2025", access: "PREMIUM" }
];

const statusColor = {
  Open: "text-green-600 bg-green-100",
  Closed: "text-red-500 bg-red-100",
  Pending: "text-yellow-700 bg-yellow-100",
};
const signaltable = () => {
  const [page, setPage] = useState(1);
  return (
    <>


      <section className="bg-white pt-35 pb-10 rounded-xl shadow-md">
        <div className="container">

          <h1 className="text-4xl font-bold mb-2">Live Signals Overview</h1>
          <p className="text-para-dark mb-6">Stay ahead of the market with real-time Forex, Crypto, Commodities, and Indices trading signals.</p>

          <div className=" overflow-x-auto px-4 ">
            <div className="lg:w-full w-[1024px]">

              <div className="flex items-center mb-5 justify-between flex-wrap gap-4">
                {/* Left: Today dropdown */}
                <div className="text-sky-500 font-semibold flex items-center text-lg cursor-pointer">
                  <button className="flex items-center gap-1 px-4 py-2   rounded-md ">

                    Today
                    <FaSortDown className="ml-1" />
                  </button>
                </div>

                {/* Right: Category Tabs */}
                <div className="flex flex-wrap gap-3">
                  {tabs.map((tab, i) => {
                    const isActive = tab === "All";
                    return (
                      <button
                        key={i}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                ${isActive
                            ? "bg-[#2b2300] text-white"
                            : "border border-gray-200 text-gray-700 bg-white"
                          }`}
                      >
                        {tab}
                        {tab === "All" ? (
                          <FaGlobe size={14} />
                        ) : (
                          <FaArrowTrendUp size={14} className="text-yellow-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-between items-center bg-[#fffff3] p-4 mb-5 rounded-lg w-full">
                {/* Search */}
                <div className="flex items-center border border-[#cfc7a9] px-4 py-2 rounded-md text-[#7a6c3d] w-full max-w-md">
                  <FaSearch className="mr-2" />
                  <input
                    type="text"
                    placeholder="Search...."
                    className="bg-transparent outline-none w-full placeholder-[#7a6c3d]"
                  />
                </div>

                {/* Filter Button */}
                <button className="flex items-center bg-[#ffe680] text-[#7a6c3d] px-4 py-2 ml-4 rounded-md font-medium shadow-sm">
                  <FaFilter className="mr-2" />
                  Filter
                </button>
              </div>


              <table className="w-full text-left border-collapse">
                <thead className="bg-topbrocker-head text-light-yellow   overflow-hidden">
                  <tr>
                    <th className="px-4 text-center py-3 rounded-tl-2xl">ASSET</th>
                    <th className="px-4 text-center py-3">ENTRY PRICE</th>
                    <th className="px-4 text-center py-3">TP1</th>
                    <th className="px-4 text-center py-3">TP2</th>
                    <th className="px-4 text-center py-3">SL</th>
                    <th className="px-4 text-center py-3">STATUS</th>
                    <th className="px-4 text-center py-3">TIME UPDATED</th>
                    <th className="px-4 text-center py-3 rounded-tr-2xl">ACCESS</th>
                  </tr>
                </thead>
                <tbody>
                  {signals.map((s, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-200 text-sm text-gray-800"
                    >
                      {s.asset === "LOCKED" ? (
                        <>
                          {[...Array(5)].map((_, idx) => (
                            <td key={idx} className="px-4  py-3 text-yellow-500 text-center">
                              <FaLock className="mx-auto" />
                            </td>
                          ))}
                        </>
                      ) : (
                        <>
                          <td className="px-4 text-center py-3">{s.asset}</td>
                          <td className="px-4 text-center py-3">{s.entry}</td>
                          <td className="px-4 text-center py-3">{s.tp1}</td>
                          <td className="px-4 text-center py-3">{s.tp2}</td>
                          <td className="px-4 text-center py-3">{s.sl}</td>
                        </>
                      )}
                      <td className={` text-center  ${statusColor[s.status]} rounded-full text-xs w-20 text-center`}>
                        {s.status}
                      </td>
                      <td className="px-4 text-center py-3">{s.time}</td>
                      <td className="px-4 text-center py-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${s.access === "FREE" ? "bg-gray-200 text-gray-800" : "bg-yellow-300 text-white"}`}
                        >
                          {s.access}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between mt-8">
                <div></div>
                <div className="flex items-center justify-end gap-4">
                  <button className="flex items-center gap-1 bg-[#EBE8DE] px-4 py-2  rounded-md text-sm">
                    ← Previous
                  </button>
                  <div className="flex gap-1">
                    {[1, 2, 3, "...", 8, 9, 10].map((num) => (
                      <button
                        key={num}
                        className={`w-8 h-8 rounded-md text-sm ${num === page ? "bg-yellow-400 text-white" : "bg-gray-100"}`}
                        onClick={() => setPage(num)}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  <button className="flex items-center bg-[#EBE8DE] gap-1 px-4 py-2  rounded-md text-sm">
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default signaltable
