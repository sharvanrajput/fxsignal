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

  const handleQuickSelect = (currency, type) => {
    if (type === 'from') {
      setFromCurrency(currency);
    } else {
      setToCurrency(currency);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 sm:p-6 mx-auto max-w-4xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Currency Converter</h2>
        <Image src={convertoricon} width={28} height={28} alt="converter icon" />
      </div>

      {/* Currency Selection Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-20 gap-4 mb-7">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="border rounded-md md:col-span-9 px-4 py-4 w-full"
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur}>{cur}</option>
          ))}
        </select>
        <div className="hidden md:block md:col-span-2"></div>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="border rounded-md md:col-span-9 px-4 py-4 w-full"
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur}>{cur}</option>
          ))}
        </select>
      </div>

      {/* Amount Input and Conversion Result */}
      <div className="grid grid-cols-1 md:grid-cols-20 items-center gap-4 mb-7">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="md:col-span-9 px-4 py-4 bg-yellow-50 rounded-md border text-center"
        />

        <button
          onClick={handleSwitch}
          className="md:col-span-2 flex justify-center text-yellow-500 text-xl py-4"
        >
          <FaExchangeAlt />
        </button>

        <input
          type="text"
          value={converted}
          readOnly
          className="md:col-span-9 px-4 py-4 bg-yellow-50 rounded-md border text-center"
        />
      </div>

      {/* Quick Currency Selection */}
      <div className="grid grid-cols-1 md:grid-cols-20 gap-4 mb-7">
        {/* From Currency Quick Select */}
        <div className="md:col-span-9">
          <div className="text-xs text-gray-600 mb-2">From Currency:</div>
          <div className="flex flex-wrap gap-2">
            {['EUR', 'GBP', 'INR'].map((currency) => (
              <span
                key={currency}
                onClick={() => handleQuickSelect(currency, 'from')}
                className={`py-1 px-3 rounded-full cursor-pointer text-xs transition-colors ${
                  fromCurrency === currency 
                    ? 'bg-yellow-200 text-yellow-800' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {currency}
              </span>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div className="hidden md:block md:col-span-2"></div>

        {/* To Currency Quick Select */}
        <div className="md:col-span-9">
          <div className="text-xs text-gray-600 mb-2">To Currency:</div>
          <div className="flex flex-wrap gap-2">
            {['USD', 'GBP', 'CNY'].map((currency) => (
              <span
                key={currency}
                onClick={() => handleQuickSelect(currency, 'to')}
                className={`py-1 px-3 rounded-full cursor-pointer text-xs transition-colors ${
                  toCurrency === currency 
                    ? 'bg-yellow-200 text-yellow-800' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {currency}
              </span>
            ))}
          </div>
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