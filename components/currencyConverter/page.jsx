'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaExchangeAlt } from 'react-icons/fa';
import convertoricon from '@/public/img/Converter-icon.png';

const Page = () => {
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);

  const key = 'f6739f0b5cc73db8f4f4bdf7'; // Replace with your real API key

  const fetchCurrencies = async () => {
    try {
      const res = await fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/USD`);
      const data = await res.json();
      if (data?.conversion_rates) {
        setCurrencies(Object.keys(data.conversion_rates));
      }
    } catch (err) {
      console.error('Failed to fetch currencies', err);
    }
  };

  const fetchConversion = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/${key}/pair/${fromCurrency}/${toCurrency}/${amount}`
      );
      const data = await res.json();
      if (data?.conversion_result) {
        setConverted(data.conversion_result.toFixed(5));
      } else {
        setConverted(0);
        alert('Conversion failed.');
      }
    } catch (err) {
      console.error('Conversion error:', err);
      alert('Failed to convert currency.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency && amount) {
      fetchConversion();
    }
  }, [amount, fromCurrency, toCurrency]);

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Currency Converter</h2>
        <Image src={convertoricon} width={28} height={28} alt="converter icon" />
      </div>

      <div className="grid grid-cols-20 gap-4  mb-7">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="border rounded-md col-span-9 px-4 py-4 w-full"
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur}>{cur}</option>
          ))}
        </select>
          <div className="div col-span-2"></div>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="border rounded-md col-span-9 px-4 py-4 w-full"
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur}>{cur}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-20 items-center gap-4 mb-7">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className=" col-span-9 px-4 py-4 bg-yellow-50 rounded-md border text-center"
        />

        <button
          onClick={handleSwitch}
          className="col-span-2 flex justify-center text-yellow-500 text-xl"
        >
          <FaExchangeAlt />
        </button>

        <input
          type="text"
          value={converted}
          readOnly
          className=" col-span-9 px-4 py-4 bg-yellow-50 rounded-md border text-center"
        />
      </div>
      <div className="grid grid-cols-20 mb-7">


        <div className="grid grid-cols-10  col-span-9 gap-2 text-center text-xs text-gray-500 mb-4">
          <span className={`py-1 px-3 col-span-2 rounded-full  cursor-pointer ${fromCurrency === 'EUR' ? 'bg-gray-200' : ''}`}>EUR</span>
          <span className={`py-1 px-3 col-span-2 rounded-full  cursor-pointer ${fromCurrency === 'GBP' ? 'bg-gray-200' : ''}`}>GBP</span>
          <span className={`py-1 px-3 col-span-2 rounded-full  cursor-pointer ${fromCurrency === 'BTC' ? 'bg-gray-200' : ''}`}>BTC</span>
        </div>
        <div className='col-span-2'> </div>

        <div className="grid grid-cols-10 col-span-9  gap-2 text-center text-xs text-gray-500 mb-4">
          <span className={`py-1 px-3 col-span-2 rounded-full  cursor-pointer ${toCurrency === 'USD' ? 'bg-gray-200' : ''}`}>USD</span>
          <span className={`py-1 px-3 col-span-2 rounded-full  cursor-pointer ${toCurrency === 'GBP' ? 'bg-gray-200' : ''}`}>GBP</span>
          <span className={`py-1 px-3 col-span-2 rounded-full  cursor-pointer ${toCurrency === 'ETH' ? 'bg-gray-200' : ''}`}>ETH</span>
        </div>
      </div>

      <button
        onClick={fetchConversion}
        className="w-full py-3 mb-7 bg-yellow-300 hover:bg-yellow-400 text-black font-semibold rounded-md transition duration-200"
        disabled={loading}
      >
        {loading ? 'Converting...' : 'Convert'}
      </button>
    </div>
  );
};

export default Page;
