'use client';

import React, { useEffect, useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import convertoricon from '@/public/img/Converter-icon.png';
import Image from 'next/image';

const Page = () => {
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);

  const key = 'f6739f0b5cc73db8f4f4bdf7';

  // Get all currency codes from base conversion
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
        console.log(data?.conversion_result)
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
    <div className="bg-[#f9f9f9] rounded-tl-3xl rounded-tr-3xl py-10 px-5 w-full mx-auto shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-heading-c1 to-heading-c2 bg-clip-text text-transparent">
          Currency Converter
        </h2>
        <div className="rounded-full">
          <Image src={convertoricon} width={40} height={40} alt="converter icon" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-3">
        <select
          className="bg-white p-3 rounded-lg border"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>

        <select
          className="bg-white p-3 rounded-lg border"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-5 gap-3 mb-3 items-center">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="col-span-2 p-3 bg-yellow-50 border rounded-lg text-center"
        />

        <div
          onClick={handleSwitch}
          className="text-yellow-500 col-span-1 text-xl cursor-pointer"
        >
          <FaExchangeAlt className="mx-auto" />
        </div>

        <input
          type="text"
          value={converted}
          readOnly
          className="col-span-2 p-3 bg-yellow-50 border rounded-lg text-center"
        />
      </div>

      <button
        onClick={fetchConversion}
        className="bg-yellow-300 text-black font-semibold w-full py-3 rounded-xl mt-4"
        disabled={loading}
      >
        {loading ? 'Converting...' : 'Convert'}
      </button>
    </div>
  );
};

export default Page;
