"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Monitor, TrendingUp, Handshake, User } from "lucide-react";
import logo from "@/public/img/fxsignal-dark-logo.png";
import Image from "next/image";
import Button from "../navbutton/page";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import AuthModal from "@/components/auth/AuthModal";
import { useLogoutUserMutation, useSessiondataQuery } from "@/services/authSlice";
import { useDispatch } from "react-redux";
import AuthorPopup from "../authorpopup/AuthorPopup";
import SignalManagerPopup from "../signalmanage-popup/SignalManagerPopup";
import PartnerPopup from "../partnerpopup/PartnerPopup";

const RoleSelectionPopup = ({ isOpen, onClose, onRoleSelect }) => {
    const roles = [
        {
            icon: Monitor,
            title: "Join as an",
            subtitle: "Author",
        },
        {
            icon: TrendingUp,
            title: "Join as a Signal",
            subtitle: "Manager",
        },
        {
            icon: Handshake,
            title: "Join as a",
            subtitle: "Partner",
        },
        {
            icon: User,
            title: "Join as a",
            subtitle: "register",
        },
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-6 z-50">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
                    Choose Your Role
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {roles.map((role, index) => {
                        const IconComponent = role.icon;
                        return (
                            <div
                                key={index}
                                onClick={() => onRoleSelect(role.subtitle)}
                                className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-yellow-400 hover:shadow-md transition-all duration-300 cursor-pointer group"
                            >
                                <div className="w-16 h-16   bg-gradient-to-br from-heading-c1 to-heading-c2 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                                    <IconComponent className="w-8 h-8  text-light-yellow" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-700 font-medium text-sm mb-0">{role.title}</p>
                                    <p className="text-gray-900 font-semibold text-lg">{role.subtitle}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default function Page() {
    const [showModal, setShowModal] = useState(false);
    const [authView, setAuthView] = useState("login");
    const [showRolePopup, setShowRolePopup] = useState(false);
    const [showAuthorPopup, setShowAuthorPopup] = useState(false);
    const [showSignalManagerPopup, setShowSignalManagerPopup] = useState(false);
    const [showPartnerPopup, setShowPartnerPopup] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const pathname = usePathname();
    const [openIndex, setOpenIndex] = useState(null);
    const handleDropdownToggle = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    const aboutdropdown = [
        {
            icon: "/img/dropdown_about_1.png",
            name: "Overview",
            description: "Gateway to Expert Trading Signals",
            path: "/about",
        },
        {
            icon: "/img/dropdown_about_2.png",
            name: "Partner with us",
            description: "Grow with Us, Partner for Success",
            path: "/partner",
        },
        {
            icon: "/img/dropdown_about_3.png",
            name: "Brokers",
            description: "Trade with Top-Tier Brokers",
            path: "/topbrokers",
        },
    ];

    const pricingdropdown = [
        {
            icon: "/img/dropdown_pricing_1.png",
            name: "Signal Plans & Features",
            description: "Flexible plans with expert trading signals",
            path: "/pricing",
        },
        {
            icon: "/img/dropdown_pricing_2.png",
            name: "Refund Policy",
            description: "Transparent policy for risk-free subscription",
            path: "/pricing",
        },
    ];

    const marketDropdown = [
        {
            icon: "/img/dropdown_market_1.png",
            name: "Market Overview",
            description: "Stay updated with key market trends and insights",
            path: "/market-overview",
        },
        {
            icon: "/img/dropdown_market_2.png",
            name: "Forex Trading",
            description: "Trade major, minor, and exotic currency pairs",
            path: "/forex",
        },
        {
            icon: "/img/dropdown_market_3.png",
            name: "Stocks",
            description: "Trade top global stocks with expert analysis",
            path: "/stocks",
        },
        {
            icon: "/img/dropdown_market_4.png",
            name: "Indices",
            description: "Track and trade global market indices effectively",
            path: "/indices",
        },
        {
            icon: "/img/dropdown_market_5.png",
            name: "Rates & Charts",
            description: "Get real-time currency rates, and movements",
            path: "/rate-and-chart",
        },
        {
            icon: "/img/dropdown_market_6.png",
            name: "Cryptocurrency",
            description: "Get signals for Bitcoin, Ethereum, and more",
            path: "/crypto",
        },
        {
            icon: "/img/dropdown_market_7.png",
            name: "Commodities",
            description: "Access signals for gold, oil, and other commodities",
            path: "/commodities",
        },
    ];

    const toolsdropdown = [
        {
            icon: "/img/dropdown_tools_1.png",
            name: "Market Data",
            description: "Optimize your trades with accurate calculations",
            path: "/marketdata",
        },
        {
            icon: "/img/dropdown_tools_2.png",
            name: "Economic Calendar",
            description: "Stay ahead with key market events and reports",
            path: "/ecomomic-calanders",
        },
        {
            icon: "/img/dropdown_tools_3.png",
            name: "Currency Converter",
            description: "Identify trading opportunities with AI-driven analysis",
            path: "/currenty-converter",
        },
        {
            icon: "/img/dropdown_tools_4.png",
            name: "Heat Map & Cross Rates",
            description: "Minimize risks and maximize profits smartly",
            path: "/headmap-exchangerate",
        },
    ];

    const learnforexdropdown = [
        {
            icon: "/img/dropdown_learnforex_1.png",
            name: "Beginner's Guide to Forex",
            description: "Master market trends and price movements",
            path: "/learn-forex-beginer-guide",
        },
        {
            icon: "/img/dropdown_learnforex_2.png",
            name: "Trading Strategies",
            description: "Discover proven strategies for profitable trading",
            path: "/learnforex",
        },
        {
            icon: "/img/dropdown_learnforex_3.png",
            name: "Technical & Fundamental Analysis",
            description: "Identify trading opportunities with AI-driven analysis",
            path: "/technical-and-fundamental",
        },
        {
            icon: "/img/dropdown_learnforex_4.png",
            name: "Blog",
            description: "Get Trending Market Insights",
            path: "/blog",
        },
    ];

    const contactdropdown = [
        {
            icon: "/img/dropdown_contact_1.png",
            name: "Support & FAQs",
            description: "Find answers to common trading questions",
            path: "/contact",
        },
        {
            icon: "/img/dropdown_contact_2.png",
            name: "Partnership Enquiries",
            description: "Explore collaboration and IB opportunities",
            path: "/partner",
        },
    ];

    const menuItems = [
        { title: "About", data: aboutdropdown },
        { title: "Live Signals", data: null },
        { title: "Pricing", data: pricingdropdown },
        { title: "Market", data: marketDropdown },
        { title: "Tools", data: toolsdropdown },
        { title: "Learn Forex", data: learnforexdropdown },
        { title: "Contact Us", data: contactdropdown },
    ];

    const { data: sessionData, error, isLoading } = useSessiondataQuery();
    const [logoutUser] = useLogoutUserMutation();
    const dispatch = useDispatch(); // Added for potential future state management

    const handleLogout = async () => {
        try {
            await logoutUser().unwrap();
            setShowDropdown(false); // Hide dropdown after successful logout
            // Optionally reset any global state or redirect if needed
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    const handleRoleSelect = (role) => {
        setShowRolePopup(false);
        if (role === "Author") setShowAuthorPopup(true);
        if (role === "Manager") setShowSignalManagerPopup(true);
        if (role === "Partner") setShowPartnerPopup(true);
        if (role === "register") {
            setAuthView("register");
            setShowModal(true);
        }
    };

    const handleGetStartedClick = () => {
        setShowRolePopup(true);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdown = document.querySelector(".absolute.right-0.mt-2.w-40");
            if (dropdown && !dropdown.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [showDropdown, setShowDropdown] = useState(false);

    const isUserLoggedIn = sessionData?.user && error?.status !== 401;

    return (
        <>
            <nav
                className={`${pathname === "/"
                    ? "bg-transparent backdrop-blur-lg"
                    : "bg-black"
                    } shadow-md px-4 md:py-0 z-20 absolute w-full`}
            >
                {pathname === "/" && (
                    <span className="absolute inline-block w-full -z-10">
                        <span className="after:content-[''] after:hidden xl:after:block after:absolute after:top-0 after:right-0 after:w-[200px] after:h-[150px] after:bg-nav-ele after:blur-2xl after:block" />
                    </span>
                )}
                <div className="container flex items-center justify-between">
                    <Link href="/" className="text-light-yellow">
                        <Image src={logo} className="w-[100px]" alt="logo" />
                    </Link>

                    <ul className="hidden xl:flex gap-8 text-gray-700 text-lg font-medium">
                        {menuItems.map((item, index) => (
                            <li key={index} className="group relative inline-block">
                                {item.data ? (
                                    <>
                                        <div className="hover:text-yellow-100 cursor-pointer text-white relative">
                                            <span className="relative z-10">{item.title}</span>
                                            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]" />
                                        </div>
                                        <ul className="absolute left-0 top-[20px] mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg p-4" style={{ width: item.title === "Market" ? "600px" : "350px" }}>
                                            {item.title === "Market" ? (
                                                <div className="grid grid-cols-2 gap-2">
                                                    {marketDropdown.slice(0, 4).map((subItem, idx) => (
                                                        <li key={idx} className="py-2 px-2 cursor-pointer">
                                                            <Link href={subItem.path} className="flex items-center gap-3">
                                                                <div className="flex gap-3 items-center" onClick={() => setIsOpen(false)}>
                                                                    <div className="icon">
                                                                        <Image
                                                                            src={subItem.icon}
                                                                            alt={subItem.name}
                                                                            width={50}
                                                                            height={50}
                                                                            className="w-13 h-auto"
                                                                        />
                                                                    </div>
                                                                    <div className="navnames">
                                                                        <div className="name text-gray-600 font-bold text-xl">{subItem.name}</div>
                                                                        <div className="subname text-gray-400 text-sm">{subItem.description}</div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                    {marketDropdown.slice(4).map((subItem, idx) => (
                                                        <li key={idx + 4} className="py-2 px-2 cursor-pointer ">
                                                            <Link href={subItem.path} className="flex items-center gap-3">
                                                                <div className="flex gap-3 items-center" onClick={() => setIsOpen(false)}>
                                                                    <div className="icon">
                                                                        <Image
                                                                            src={subItem.icon}
                                                                            alt={subItem.name}
                                                                            width={50}
                                                                            height={50}
                                                                            className="w-13 h-auto"
                                                                        />
                                                                    </div>
                                                                    <div className="navnames">
                                                                        <div className="name text-gray-600 font-bold text-xl">{subItem.name}</div>
                                                                        <div className="subname text-gray-400 text-sm">{subItem.description}</div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </div>
                                            ) : (
                                                item.data.map((subItem, idx) => (
                                                    <li key={idx} className="py-2 px-2 cursor-pointer">
                                                        <div className="grid grid-cols-1">
                                                            <Link href={subItem.path} className="flex items-center gap-3">
                                                                <div className="flex gap-3 items-center" onClick={() => setIsOpen(false)}>
                                                                    <div className="icon">
                                                                        <Image
                                                                            src={subItem.icon}
                                                                            alt={subItem.name}
                                                                            width={50}
                                                                            height={50}
                                                                            className="w-13 h-auto"
                                                                        />
                                                                    </div>
                                                                    <div className="navnames">
                                                                        <div className="name text-gray-600 font-bold text-xl">{subItem.name}</div>
                                                                        <div className="subname text-gray-400 text-sm">{subItem.description}</div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </li>
                                                ))
                                            )}
                                        </ul>
                                    </>
                                ) : (
                                    <Link
                                        href={
                                            item.title === "Live Signals"
                                                ? "/livesignal"
                                                : "/contact"
                                        }
                                        onClick={() => setIsOpen(false)}
                                        className="hover:text-yellow-100 text-white relative group inline-block"
                                    >
                                        <span className="relative z-10">{item.title}</span>
                                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]" />
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="relative hidden xl:flex gap-4">
                        {isUserLoggedIn ? (
                            <>
                                <button
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="bg-light-yellow px-4 py-2 rounded-md text-black"
                                >
                                    Welcome {sessionData.user.fullname?.split(" ")[0]}
                                </button>
                                {showDropdown && (
                                    <div
                                        className="absolute right-0 mt-2 w-40 bg-white border shadow rounded z-50"
                                        onClick={(e) => e.stopPropagation()} // Prevent outside click from closing immediately
                                    >
                                        <button
                                            onClick={handleLogout}
                                            className="w-full px-4 cursor-pointer text-center py-2 text-red-600 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="hidden xl:flex gap-4">
                                <button
                                    onClick={() => {
                                        setAuthView("login");
                                        setShowModal(true);
                                    }}
                                >
                                    <Button href="" variant="outline" withicon>
                                        Login
                                    </Button>
                                </button>
                                <button onClick={handleGetStartedClick}>
                                    <Button href="" variant="primary" withicon>
                                        Get Started
                                    </Button>
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="xl:hidden text-white"
                        aria-label="Toggle menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            <div
                className={`md:w-[350px] w-[320px] block ${isOpen ? "translate-x-0" : "translate-x-[-100%]"
                    } transition-all overflow-y-scroll transition-5 bg-black fixed top-0 h-full z-20`}
            >
                <div className="mt-4 pb-4 px-4">
                    <div className="flex justify-between items-center mb-4">
                        <Link href="/" className="text-light-yellow">
                            <Image src={logo} className="w-[100px]" alt="logo" />
                        </Link>
                        <div className="">
                            <button
                                onClick={toggleMenu}
                                className="text-white"
                                aria-label="Toggle menu"
                            >
                                <X size={28} />
                            </button>
                        </div>
                    </div>
                    <div className="h-[400px] overflow-y-auto">
                        <ul className="flex flex-col gap-4 text-white text-lg font-medium">
                            {menuItems.map((item, index) => (
                                <li key={index} className="relative group">
                                    <button
                                        onClick={() => handleDropdownToggle(index)}
                                        className="flex justify-between items-center cursor-pointer w-full text-left text-white"
                                    >
                                        {item.title} {item.data && <FaChevronDown />}
                                    </button>

                                    {openIndex === index && item.data && (
                                        <ul className="top-full left-0 w-full bg-white overflow-hidden z-10 shadow-md rounded-2xl">
                                            {item.data.map((subItem, idx) => (
                                                <li key={idx} onClick={() => setIsOpen(false)}>
                                                    <Link
                                                        href={subItem.path}
                                                        className="flex items-center gap-3 px-2 py-2 hover:bg-gray-100"
                                                    >
                                                        <Image
                                                            src={subItem.icon}
                                                            alt={subItem.name}
                                                            width={40}
                                                            height={40}
                                                        />
                                                        <div>
                                                            <div className="font-semibold text-sm text-black">
                                                                {subItem.name}
                                                            </div>
                                                            <div className="text-xs text-gray-500">
                                                                {subItem.description}
                                                            </div>
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
                    <div className="mt-5 grid relative grid-cols-1 gap-3">
                        {isUserLoggedIn ? (
                            <>
                                <button
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="bg-light-yellow px-4 py-2 rounded-md text-black"
                                >
                                    Welcome {sessionData.user.fullname?.split(" ")[0]}
                                </button>
                                {showDropdown && (
                                    <div
                                        className="absolute right-0 bottom-[-100%] mt-2 w-40 bg-white border shadow rounded z-50"
                                        onClick={(e) => e.stopPropagation()} // Prevent outside click from closing immediately
                                    >
                                        <button
                                            onClick={handleLogout}
                                            className="w-full px-4 cursor-pointer text-center py-2 text-red-600 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    className="w-full"
                                    onClick={() => {
                                        setAuthView("login");
                                        setShowModal(true);
                                    }}
                                >
                                    <Button href="" variant="outline" withicon>
                                        Login
                                    </Button>
                                </button>
                                <button className="w-full" onClick={handleGetStartedClick}>
                                    <Button href="" variant="primary" withicon>
                                        Get Started
                                    </Button>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <RoleSelectionPopup
                isOpen={showRolePopup}
                onClose={() => setShowRolePopup(false)}
                onRoleSelect={handleRoleSelect}
            />

            <AuthorPopup
                isOpen={showAuthorPopup}
                onClose={() => setShowAuthorPopup(false)}
                onSubmit={(values) => console.log("Author form submitted:", values)}
            />

            <SignalManagerPopup
                isOpen={showSignalManagerPopup}
                onClose={() => setShowSignalManagerPopup(false)}
                onSubmit={(values) => console.log("Signal Manager form submitted:", values)}
            />

            <PartnerPopup
                isOpen={showPartnerPopup}
                onClose={() => setShowPartnerPopup(false)}
                onSubmit={(values) => console.log("Partner form submitted:", values)}
            />

            <AuthModal
                isOpen={showModal}
                defaultView={authView}
                onClose={() => setShowModal(false)}
            />
        </>
    );
}