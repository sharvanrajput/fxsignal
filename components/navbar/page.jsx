'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // ✅ Import icons

import logo from '@/public/img/fxsignal-dark-logo.png'
import Image from 'next/image';
import Button from '../navbutton/page';
import { usePathname } from 'next/navigation';

export default function Page() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const pathname = usePathname()
    

    return (
        <>
            <nav className={` ${pathname == "/" ? " bg-gray-700 bg-transparent backdrop-blur-lg" : "bg-black" }  shadow-md px-4 md: py-0 z-20 absolute w-full`}>
               { pathname == "/" && <span className=" absolute  inline-block w-full -z-10">
                    <span className="after:content-[''] after:hidden xl:after:block after:absolute after:top-0 after:right-0 after:w-[200px] after:h-[150px] after:bg-nav-ele after:blur-2xl after:block" />
                </span> }
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className=" text-light-yellow">
                        <Image src={logo} className='w-[100px]' alt='logo' />
                    </Link>

                    {/* Middle Links */}
                    <ul className="hidden  xl:flex gap-8 text-gray-700 text-lg font-medium">
                        <li><Link href="/about" className="hover:text-yellow-100 text-white relative  group inline-block ">  <span className="relative z-10">About</span>
                            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-light-yellow transition-all duration-300 group-hover:w-[30px]"
                            /></Link>
                        </li>
                        <li><Link href="/" className="hover:text-yellow-100 text-white relative  group inline-block "> <span className="relative z-10">Live Signals</span>
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
                    <div className="hidden xl:flex gap-4">
                        <Button href="/Login" variant="outline" withicon={true}>Login</Button>
                        <Button href="/Get Started" variant="primary" withicon={true}>Get Started</Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={toggleMenu} className="xl:hidden text-white" aria-label="Toggle menu">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="xl:hidden mt-4 space-y-4">
                        <ul className="flex flex-col  gap-4 text-white text-lg font-medium">
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
                        <div className="flex  gap-4 mt-2">
                            <Button href="/Login" variant="outline" className='w-[50%]' withicon={false}>Login</Button>
                            <Button href="/Get Started" variant="primary" className='w-[50%]' withicon={false}>Get Started</Button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
