// app/components/Button.jsx


import Link from 'next/link';
import { RxArrowTopRight } from "react-icons/rx";



export default function Button({ href, children, withicon, variant = 'primary' }) {
    const baseStyles = ' rounded transition font-medium ';

    const variants = {
        primary: 'bg-light-yellow text-black px-3 lg:px-5 py-2 lg:w-auto    flex items-center group overflow-hidden  rounded-sm ',
        outline: 'border border-light-yellow px-3 lg:px-5 py-2 lg:w-auto    flex items-center group  overflow-hidden rounded-sm text-light-yellow ',
    };

    if (withicon) {
        return (
            <Link href={href} className={`${baseStyles, variants[variant]}`}>
                <span className='group-hover:translate-x-[0] translate-x-[10px] duration-300 ease-in-out'>  {children}</span> <RxArrowTopRight className='ms-2 group-hover:translate-x-[0] translate-x-[50px] duration-300 ease-in-out ' />
            </Link>

        );
    } else {
        return (
            <Link href={href} className={`${baseStyles, variants[variant]}`}>
                {children}
            </Link>
        )
    }

}
