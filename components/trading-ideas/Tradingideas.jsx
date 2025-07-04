"use client"

import { apiUrl, useGetBlogsQuery } from '@/services/blogSlice';
import Image from 'next/image';
import { MdOutlineDateRange } from "react-icons/md";
import { Globe, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { useTradeIdeaQuery } from '@/services/tradeIdeasSlice';

const categories = [
    { name: 'All', icon: <Globe size={16} /> },
    { name: 'Forex', icon: <TrendingUp size={16} /> },
    { name: 'Stocks', icon: <TrendingUp size={16} /> },
    { name: 'Commodities', icon: <TrendingUp size={16} /> },
    { name: 'Crypto', icon: <TrendingUp size={16} /> },
];

const Tradingideas = () => {
    const [active, setActive] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

    const { data, isLoading, isError } = useTradeIdeaQuery();
    console.log(data)
    if (isLoading) return <div className='loading'></div>;
    if (isError) return <p>Something went wrong.</p>;

    const blogList = data?.trade || [];

    const filteredBlog = blogList.filter(trade =>
        active === "All" ? true : trade.trade_type === active
    );

    const blogsPerPage = 6;
    const totalPages = Math.ceil(filteredBlog.length / blogsPerPage);

    const paginate = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const paginatedBlogs = filteredBlog.slice(
        (currentPage - 1) * blogsPerPage,
        currentPage * blogsPerPage
    );

    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    return (
        <section className="Allblog pb-20">
            <div className="container">
                <h2 className="text-4xl text-heading-c1 font-bold inline-block relative z-10">Trading Ideas</h2>
                <p className="text-para-dark mb-6 mt-2 text-lg">Expert-Backed weekly reports on major currency pairs, commodities, and indices.</p>

                {/* Category Buttons */}
                <div className="flex gap-4 flex-wrap pb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => {
                                setActive(cat.name);
                                setCurrentPage(1);
                            }}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${active === cat.name
                                ? 'bg-[#2B2303] text-white border-[#2B2303]'
                                : 'bg-white text-gray-600 border-gray-300 hover:border-yellow-400'
                                }`}
                        >
                            <span className="text-sm font-semibold">{cat.name}</span>
                            <span className="text-yellow-400">{cat.icon}</span>
                        </button>
                    ))}
                </div>

                {/* Blog Cards */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    {paginatedBlogs.map((trade) => (
                        <div key={trade.id} className="bg-white rounded-2xl shadow-md overflow-hidden h-full">
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src={`${apiUrl}/uploads/trade/${trade.trade_image}`}
                                    alt={trade.trade_image}
                                    fill
                                    className="object-cover"
                                />
                                <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold text-black px-2 py-1 rounded">
                                    {trade.trade_type}
                                </span>
                                <Image
                                    src="/img/fxsignal-dark-logo.png"
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    className="absolute top-2 right-2"
                                />
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between text-xs text-gray-500 mb-2">
                                    <div className="flex items-center gap-1">
                                        <MdOutlineDateRange className="text-light-yellow text-base" />
                                        <span className="text-para-dark">{trade.date.split("T")[0]}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MdOutlineDateRange className="text-light-yellow text-base" />
                                        <span className="text-para-dark">{trade.author}</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2 mb-4">
                                    {trade.title}
                                </h3>

                                <Link
                                    href={`/trade-ideas/${trade.title.toLowerCase().split(" ").join("-")}`}
                                    className="inline-flex items-center gap-2 bg-light-yellow text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition"
                                >
                                    Read More <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mt-10">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 rounded-md text-sm flex items-center gap-1 ${currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-yellow-100'
                            }`}
                    >
                        ← Previous
                    </button>

                    {getPageNumbers().map((num, index) =>
                        num === '...' ? (
                            <span key={index} className="px-2 py-1 text-gray-400">...</span>
                        ) : (
                            <button
                                key={index}
                                onClick={() => paginate(num)}
                                className={`w-8 h-8 rounded-md text-sm font-semibold ${currentPage === num ? 'bg-yellow-300 text-black' : 'text-gray-700 hover:bg-yellow-100'
                                    }`}
                            >
                                {num}
                            </button>
                        )
                    )}

                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 rounded-md text-sm flex items-center gap-1 ${currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-yellow-100'
                            }`}
                    >
                        Next →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Tradingideas;