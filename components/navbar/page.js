'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // ✅ Import icons

import logo from '@/public/img/fxsignal-dark-logo.png'
import Image from 'next/image';
import Button from '../navbutton/page';

export default function Page() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="bg-gray-500 backdrop-blur-sm shadow-md px-4 md:px-12 py-0 absolute w-full">
                <div className="max-w-8xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className=" text-light-yellow">
                        <Image src={logo} className='w-[100px]' />
                    </Link>

                    {/* Middle Links */}
                    <ul className="hidden  md:flex gap-8 text-gray-700 text-lg font-medium">
                        <li><Link href="/" className="hover:text-yellow-100 text-white relative  group inline-block ">  <span className="relative z-10">About</span>
                            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]"
                            /></Link>
                        </li>
                        <li><Link href="/about" className="hover:text-yellow-100 text-white relative  group inline-block "> <span className="relative z-10">Live Signals</span>
                            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]"
                            /></Link>
                        </li>
                        <li><Link href="/services" className="hover:text-yellow-100 text-white relative  group inline-block "> <span className="relative z-10">Pricing</span>
                            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]"
                            /></Link>
                        </li>
                        <li><Link href="/contact" className="hover:text-yellow-100 text-white relative group inline-block  "> <span className="relative z-10">Market</span>
                            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]"
                            /></Link>
                        </li>
                        <li><Link href="/contact" className="hover:text-yellow-100 text-white relative group inline-block  "> <span className="relative z-10">Tools</span>
                            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]"
                            /></Link>
                        </li>
                        <li><Link href="/contact" className="hover:text-yellow-100 text-white relative  group inline-block "> <span className="relative z-10">Learn Forex</span>
                            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]"
                            /></Link>
                        </li>
                        <li><Link href="/contact" className="hover:text-yellow-100 text-white relative group inline-block  "> <span className="relative z-10">Contact Us</span>
                            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]"
                            /></Link>
                        </li>
                    </ul>

                  


                    {/* Auth Buttons */}
                    <div className="hidden md:flex gap-4">
                        <Button href="/Login" variant="outline" withicon={true}>Login</Button>
                        <Button href="/Get Started" variant="primary" withicon={true}>Get Started</Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={toggleMenu} className="md:hidden" aria-label="Toggle menu">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 space-y-4">
                        <ul className="flex flex-col items-center gap-4 text-gray-700 text-lg font-medium">
                            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                            <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
                            <li><Link href="/services" onClick={toggleMenu}>Services</Link></li>
                            <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
                        </ul>
                        <div className="flex justify-center gap-4 mt-2">
                            <Link href="/login" className="px-4 py-2 border border-light-yellow text-light-yellow rounded hover:bg-blue-50 transition">Login</Link>
                            <Link href="/signup" className="px-4 py-2 bg-light-yellow text-white rounded hover:bg-blue-700 transition">Sign Up</Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
