import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {assets} from "../../src/assets/assets"
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { useAppContext } from '../context/AppContext';

const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<g clip-path="url(#clip0_16_60)">
<path d="M10.6667 2C11.0031 1.99989 11.327 2.12694 11.5737 2.35566C11.8204 2.58439 11.9714 2.8979 11.9967 3.23333L12 3.33333V6.66667H13C13.2486 6.66668 13.4883 6.75928 13.6723 6.92641C13.8563 7.09355 13.9715 7.32323 13.9953 7.57067L14 7.66667V12.6667C14 13.1768 13.8051 13.6677 13.4551 14.0388C13.1052 14.41 12.6266 14.6334 12.1173 14.6633L12 14.6667H3.33333C2.99695 14.6668 2.67296 14.5397 2.4263 14.311C2.17965 14.0823 2.02856 13.7688 2.00333 13.4333L2 13.3333V3.33333C1.99989 2.99695 2.12694 2.67296 2.35566 2.4263C2.58439 2.17965 2.8979 2.02856 3.23333 2.00333L3.33333 2H10.6667ZM12.6667 8H12V13.3333C12.1768 13.3333 12.3464 13.2631 12.4714 13.1381C12.5964 13.013 12.6667 12.8435 12.6667 12.6667V8ZM10.6667 3.33333H3.33333V13.3333H10.6667V3.33333ZM7.33333 8.66667C7.50325 8.66686 7.66669 8.73192 7.79025 8.84857C7.9138 8.96521 7.98816 9.12464 7.99811 9.29426C8.00807 9.46389 7.95288 9.63092 7.84382 9.76122C7.73476 9.89152 7.58006 9.97526 7.41133 9.99533L7.33333 10H5.33333C5.16341 9.99981 4.99998 9.93475 4.87642 9.8181C4.75286 9.70145 4.67851 9.54203 4.66855 9.3724C4.65859 9.20278 4.71378 9.03575 4.82284 8.90545C4.9319 8.77514 5.0866 8.6914 5.25533 8.67133L5.33333 8.66667H7.33333ZM8.66667 5.33333C8.84348 5.33333 9.01305 5.40357 9.13807 5.5286C9.2631 5.65362 9.33333 5.82319 9.33333 6C9.33333 6.17681 9.2631 6.34638 9.13807 6.4714C9.01305 6.59643 8.84348 6.66667 8.66667 6.66667H5.33333C5.15652 6.66667 4.98695 6.59643 4.86193 6.4714C4.7369 6.34638 4.66667 6.17681 4.66667 6C4.66667 5.82319 4.7369 5.65362 4.86193 5.5286C4.98695 5.40357 5.15652 5.33333 5.33333 5.33333H8.66667Z" fill="#100436"/>
</g>
<defs>
<clipPath id="clip0_16_60">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
)
const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/' },
        { name: 'About', path: '/' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const {openSignIn} = useClerk();

    const location = useLocation();

    const { user, navigate, isOwner, setShowHotelReg } = useAppContext();

    useEffect(() => {

        if(location.pathname !== "/"){
            setIsScrolled(true);
            return;
        }else{
            setIsScrolled(false)
        }
        setIsScrolled(prev => location.pathname !== "/" ? true : prev);
        
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <Link to="/">
                <img src={assets.logo} alt="logo" className={`h-9 ${isScrolled && " opacity-80"}`} />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-[#091440c7]"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-[#091440c7]"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                    {
                        user && (
                        <button  className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-[#091440c7]'} transition-all`}
                        onClick = { () => isOwner ? navigate("/owner") : setShowHotelReg(true)}
                        >
                        { isOwner ? "Dashboard" : "List Your Hotel"}
                    </button>
                        )
                    }
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <img src ={assets.searchIcon} alt="search" className={`${isScrolled && "invert"} h-7 transition-all duration-500`} />
                     
                     {
                        user ? (
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Action  label="My Bookings" labelIcon={<BookIcon/>} onClick={() => navigate("/my-booking")}/>
                                </UserButton.MenuItems>
                            </UserButton>
                        ) : (
                             <button onClick={openSignIn} className="bg-[#212b44bf] text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                        Login
                    </button>
                        )
                     }
                   
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    {
                        user && 
                         <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Action  label="My Bookings" labelIcon={BookIcon} onClick={() => navigate("/my-booking")}/>
                                </UserButton.MenuItems>
                            </UserButton>
                    }
                    <img onClick={() => setIsMenuOpen(!isMenuOpen)}
                    src ={assets.menuIcon} alt="search" className={`${isScrolled && "invert"} h-7`} />
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <img src ={assets.closeIcon} alt="close icon" className= "h-6.5" />
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                   {
                    user && 
                     <button 
                     onClick = { () => isOwner ? navigate("/owner") : setShowHotelReg(true)}
                     className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                        { isOwner ? "Dashboard" : "List Your Hotel"}
                    </button>
                   }

                   { !user && 
                    <button onClick={openSignIn} className="bg-[#212b44bf] text-white px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </button>}
                </div>
            </nav>
        </>
    );
}
export default Navbar;