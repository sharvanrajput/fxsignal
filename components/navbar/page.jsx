

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import logo from '@/public/img/fxsignal-dark-logo.png';
import Image from 'next/image';
import Button from '../navbutton/page';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';

export default function Page() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const pathname = usePathname();
    const [openIndex, setOpenIndex] = useState(null);
    const handleDropdownToggle = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    const aboutdropdown = [
        {
            icon: '/img/dropdown_about_1.png',
            name: 'Overview',
            description: 'Gateway to Expert Trading Signals',
            path: '/about'
        },
        {
            icon: '/img/dropdown_about_2.png',
            name: 'Partner with us',
            description: 'Grow with Us, Partner for Success',
            path: '/partner'
        },
        {
            icon: '/img/dropdown_about_3.png',
            name: 'Brokers',
            description: 'Trade with Top-Tier Brokers',
            path: '/topbrokers'
        }
    ];

    const pricingdropdown = [
        {
            icon: '/img/dropdown_pricing_1.png',
            name: 'Signal Plans & Features',
            description: 'Flexible plans with expert trading signals',
            path: '/pricing'
        },
        {
            icon: '/img/dropdown_pricing_2.png',
            name: 'Refund Policy',
            description: 'Transparent policy for risk-free subscription',
            path: '/pricing'
        }
    ];

    const marketDropdown = [
        {
            icon: '/img/dropdown_market_1.png',
            name: 'Market Overview',
            description: 'Stay updated with key market trends and insights',
            path: '/market/overview'
        },
        {
            icon: '/img/dropdown_market_2.png',
            name: 'Forex Trading',
            description: 'Trade major, minor, and exotic currency pairs',
            path: '/market/forex'
        },
        {
            icon: '/img/dropdown_market_3.png',
            name: 'Stocks',
            description: 'Trade top global stocks with expert analysis',
            path: '/market/stocks'
        },
        {
            icon: '/img/dropdown_market_4.png',
            name: 'Indices',
            description: 'Track and trade global market indices effectively',
            path: '/market/indices'
        },
        {
            icon: '/img/dropdown_market_5.png',
            name: 'Rates & Charts',
            description: 'Get real-time currency rates, and movements',
            path: '/market/rates'
        },
        {
            icon: '/img/dropdown_market_6.png',
            name: 'Cryptocurrency',
            description: 'Get signals for Bitcoin, Ethereum, and more',
            path: '/market/crypto'
        },
        {
            icon: '/img/dropdown_market_7.png',
            name: 'Commodities',
            description: 'Access signals for gold, oil, and other commodities',
            path: '/market/commodities'
        }
    ];

    const toolsdropdown = [
        {
            icon: '/img/dropdown_tools_1.png',
            name: 'Market Data',
            description: 'Optimize your trades with accurate calculations',
            path: '/marketdata'
        },
        {
            icon: '/img/dropdown_tools_2.png',
            name: 'Economic Calendar',
            description: 'Stay ahead with key market events and reports',
            path: '/ecomomic-calanders'
        },
        {
            icon: '/img/dropdown_tools_3.png',
            name: 'Currency Converter',
            description: 'Identify trading opportunities with AI-driven analysis',
            path: '/currenty-converter'
        },
        {
            icon: '/img/dropdown_tools_4.png',
            name: 'Heat Map & Cross Rates',
            description: 'Minimize risks and maximize profits smartly',
            path: '/headmap-exchangerate'
        }
    ];

    const learnforexdropdown = [
        {
            icon: '/img/dropdown_learnforex_1.png',
            name: 'Beginner’s Guide to Forex',
            description: 'Master market trends and price movements',
            path: '/learn-forex-beginer-guide'
        },
        {
            icon: '/img/dropdown_learnforex_2.png',
            name: 'Trading Strategies',
            description: 'Discover proven strategies for profitable trading',
            path: '/learnforex'
        },
        {
            icon: '/img/dropdown_learnforex_3.png',
            name: 'Technical & Fundamental Analysis',
            description: 'Identify trading opportunities with AI-driven analysis',
            path: '/learnforex'
        },
        {
            icon: '/img/dropdown_learnforex_4.png',
            name: 'Blog',
            description: 'Get Trending Market Insights',
            path: '/learnforex'
        }
    ];

    const contactdropdown = [
        {
            icon: '/img/dropdown_contact_1.png',
            name: 'Support & FAQs',
            description: 'Find answers to common trading questions',
            path: '/contact'
        },
        {
            icon: '/img/dropdown_contact_2.png',
            name: 'Partnership Enquiries',
            description: 'Explore collaboration and IB opportunities',
            path: '/contact'
        }
    ];

    const menuItems = [
        {
            title: 'About',
            data: aboutdropdown
        },
        {
            title: 'Live Signals',
            data: null
        },
        {
            title: 'Pricing',
            data: pricingdropdown
        },
        {
            title: 'Market',
            data: marketDropdown
        },
        {
            title: 'Tools',
            data: toolsdropdown
        },
        {
            title: 'Learn Forex',
            data: learnforexdropdown
        },
        {
            title: 'Contact Us',
            data: contactdropdown
        }
    ];

    return <>
        <nav className={` ${pathname == "/" ? "  bg-transparent backdrop-blur-lg" : "bg-black"}  shadow-md px-4 md: py-0 z-20 absolute w-full`}>
            {pathname == "/" && <span className=" absolute  inline-block w-full -z-10">
                <span className="after:content-[''] after:hidden xl:after:block after:absolute after:top-0 after:right-0 after:w-[200px] after:h-[150px] after:bg-nav-ele after:blur-2xl after:block" />
            </span>}
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className=" text-light-yellow">
                    <Image src={logo} className='w-[100px]' alt='logo' />
                </Link>

                {/* Middle Links */}
                <ul className="hidden  xl:flex gap-8 text-gray-700 text-lg font-medium">
                    <li className='group relative inline-block'><div className="hover:text-yellow-100 cursor-pointer text-white  relative   ">  <span className="relative z-10">About</span>
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]"
                        /></div>
                        <ul className="absolute left-0 top-[20px] mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg p-4 w-[350px]">
                            {
                                aboutdropdown.map((item, index) => (
                                    <li key={index} className="py-2 px-2  cursor-pointer">
                                        <Link href={item.path} className="flex items-center gap-3">

                                            <div className="flex gap-3 items-center">
                                                <div className="icon ">
                                                    <Image src={item.icon} alt={item.name} width={50} height={50} className="w-13 h-auto" />
                                                </div>
                                                <div className="navnames">
                                                    <div className="name text-gray-600 text-bold text-xl">{item.name}</div>
                                                    <div className="subname text-gray-400 text-sm ">{item.description}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }

                        </ul>
                    </li>
                    <li className='group relative inline-block'><Link href="/livesignal" className="hover:text-yellow-100 text-white relative  group inline-block "> <span className="relative z-10">Live Signals</span>
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]"
                        /></Link>

                    </li>
                    <li className='group relative inline-block'>
                        <div className="hover:text-yellow-100 text-white relative  group inline-block "> <span className="relative z-10">Pricing</span>
                            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]"
                            /></div>

                        <ul className="absolute left-0 top-[20px] mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg p-4 w-[380px]">
                            {
                                pricingdropdown.map((item, index) => (
                                    <li key={index} className="py-2 px-2  cursor-pointer">
                                        <Link href={item.path} className="flex items-center gap-3">

                                            <div className="flex gap-3 items-center">
                                                <div className="icon ">
                                                    <Image src={item.icon} alt={item.name} width={50} height={50} className="w-13 h-auto" />
                                                </div>
                                                <div className="navnames">
                                                    <div className="name text-gray-600 text-bold text-xl">{item.name}</div>
                                                    <div className="subname text-gray-400 text-sm ">{item.description}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }

                        </ul>
                    </li>
                    <li className="group relative inline-block">
                        <span className="text-white hover:text-yellow-100 cursor-pointer inline-block relative">
                            Market
                            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]" />
                        </span>

                        <div className="absolute left-0 translate-x-[-35%] top-[15px] mt-3 hidden group-hover:block bg-white shadow-lg rounded-xl p-6 w-[720px] z-50">
                            <div className="grid grid-cols-2 gap-4">
                                {marketDropdown.map((item, index) => (
                                    <Link key={index} href={item.path} className="flex gap-3 p-3 rounded-lg">
                                        <div className="shrink-0">
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width={50} height={50} className="w-13 h-auto"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-xl font-bold text-gray-600">{item.name}</div>
                                            <div className="text-sm text-gray-400">{item.description}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li className='group relative inline-block'> <Link href="/contact" className="hover:text-yellow-100 text-white relative group inline-block  "> <span className="relative z-10">Tools</span>
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]"
                        /></Link>
                        <ul className="absolute left-0 top-[20px] mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg p-4 w-[380px]">
                            {
                                toolsdropdown.map((item, index) => (
                                    <li key={index} className="py-2 px-2  cursor-pointer">
                                        <Link href={item.path} className="flex items-center gap-3">

                                            <div className="flex gap-3 items-center">
                                                <div className="icon ">
                                                    <Image src={item.icon} alt={item.name} width={50} height={50} className="w-13 h-auto" />
                                                </div>
                                                <div className="navnames">
                                                    <div className="name text-gray-600 text-bold text-xl">{item.name}</div>
                                                    <div className="subname text-gray-400 text-sm ">{item.description}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }

                        </ul>

                    </li>
                    <li className='group relative inline-block'><div  className="hover:text-yellow-100 text-white relative  group inline-block "> <span className="relative z-10">Learn Forex</span>
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]"
                        /></div>
                        <ul className="absolute left-0 top-[20px] mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg p-4 w-[380px]">
                            {
                                learnforexdropdown.map((item, index) => (
                                    <li key={index} className="py-2 px-2  cursor-pointer">
                                        <Link href={item.path} className="flex items-center gap-3">

                                            <div className="flex gap-3 items-center">
                                                <div className="icon ">
                                                    <Image src={item.icon} alt={item.name} width={50} height={50} className="w-13 h-auto" />
                                                </div>
                                                <div className="navnames">
                                                    <div className="name text-gray-600 text-bold text-xl">{item.name}</div>
                                                    <div className="subname text-gray-400 text-sm ">{item.description}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }

                        </ul>

                    </li>
                    <li className='group relative inline-block'><Link href="/contact" className="hover:text-yellow-100 text-white relative group inline-block  "> <span className="relative z-10">Contact Us</span>
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]"
                        /></Link>
                        <ul className="absolute left-0 top-[20px] mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg p-4 w-[380px]">
                            {
                                contactdropdown.map((item, index) => (
                                    <li key={index} className="py-2 px-2  cursor-pointer">
                                        <Link href={item.path} className="flex items-center gap-3">

                                            <div className="flex gap-3 items-center">
                                                <div className="icon ">
                                                    <Image src={item.icon} alt={item.name} width={50} height={50} className="w-13 h-auto" />
                                                </div>
                                                <div className="navnames">
                                                    <div className="name text-gray-600 text-bold text-xl">{item.name}</div>
                                                    <div className="subname text-gray-400 text-sm ">{item.description}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }

                        </ul>
                    </li>
                </ul>




                {/* Auth Buttons */}
                <div className="hidden xl:flex gap-4">
                    <Button href="/Login" variant="outline" withicon={true}>Login</Button>
                    <Button href="/Get Started" variant="primary" withicon={true}>Get Started</Button>
                </div>

                {/* Mobile Toggle */}
                <button onClick={toggleMenu} className="xl:hidden text-white" aria-label="Toggle menu">
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu */}



        </nav >

        <div className={`md:w-[350px] w-[300px] block ${isOpen ? 'translate-x-0' : ' translate-x-[-100%]'} transition-all transition-5 bg-black fixed top-0 h-full z-20`}>

            <div className="  mt-4   pb-4 px-4">
                <div className="flex justify-between items-center mb-4">
                    <Link href="/" className=" text-light-yellow">
                        <Image src={logo} className='w-[100px]' alt='logo' />
                    </Link>
                    <div className="">
                        <button onClick={toggleMenu} className=" text-white" aria-label="Toggle menu">
                            <X size={28} />
                        </button>
                    </div>
                </div>
                <div className="h[400px] overflow-y-auto">


                    <ul className="flex flex-col gap-4 text-white text-lg font-medium">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative group">
                                <button
                                    onClick={() => handleDropdownToggle(index)}
                                    className="flex justify-between items-center w-full text-left text-white"
                                >
                                    {item.title} {item.data && <FaChevronDown />}
                                </button>

                                {openIndex === index && item.data && (
                                    <ul className=" top-full left-0 w-full bg-white overflow-hidden z-10 shadow-md rounded-2xl">
                                        {Object.values(item.data).map((subItem, idx) => (
                                            <li key={idx}>
                                                <Link href={subItem.path} className="flex items-center gap-3 p-3 hover:bg-gray-100">
                                                    <Image src={subItem.icon} alt={subItem.name} width={40} height={40} />
                                                    <div>
                                                        <div className="font-semibold text-black">{subItem.name}</div>
                                                        <div className="text-sm text-gray-500">{subItem.description}</div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-5 grid grid-cols-1 relative sm:grid-cols-2 gap-3">
                    <Button
                        href="/Login"
                        variant="outline"
                        className="!w-[100%] "
                        withicon={false}
                    >
                        Login
                    </Button>

                    <Button
                        href="/Get Started"
                        variant="primary"
                        className="!w-[100%] "
                        withicon={false}
                    >
                        Get Started
                    </Button>
                </div>

            </div>
        </div>
    </>

}
