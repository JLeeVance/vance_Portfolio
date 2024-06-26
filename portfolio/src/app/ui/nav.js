import {React, useContext} from "react";
import Link from "next/link";
import { NavbarContext } from "../contexts/navBarContext";

export default function Nav(){

    const { navbarSelection, setNavbarSelection } = useContext(NavbarContext)

    const getPaths = (navbarSelection) => {
        switch(navbarSelection){
            case 'Development':
                return [ 
                    { name: 'Portfolio', href: '/development/portfolio'},
                    { name: 'Contact', href: '/development/contact'},
                    { name: 'Home', href: '/' },
                ];
            case 'Performance':
                return [
                    { name: 'Home', href: '/' },
                ];
            default:
                return []
            };    
        };

    const handleContextChange = (path) => {
        switch(path){
            case 'Home':
                setNavbarSelection('');
                break;
            case 'Performance':
                setNavbarSelection('Performance');
                break;
            case 'Development':
                setNavbarSelection('Development');
                break;
            default:
                return
        }
    }

    let navOptions = getPaths(navbarSelection).map((path) => {
        return(
            <Link className='flex items-center justify-center p-3 mx-1 border-2 h-100 rounded-full border-customDSage bg-slate-50 text-slate-500 hover:bg-customSage hover:text-white hover:underline hover:border-customSage'
                key={path.name}
                href={path.href}
                onClick={() => {handleContextChange(path.name)}}
                >
                {path.name}
            </Link>
        );
    });

    return(
        <div className='flex flex-row bg-customSage py-5 h-[100px]'>
            {navOptions}    
        </div>
    );
};

/*
Need to add Links to Instagram / Social Media on Right side of NavBar
Need to Include Resume for click to download on Right side of NavBar as well
*/