import {React, useContext} from "react";
import Link from "next/link";
import { NavbarContext } from "../contexts/navBarContext";

// const paths = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Portfolio', href: '/portfolio'},
// ];

export default function Nav(){

    const { navbarSelection, setNavbarSelection } = useContext(NavbarContext)

    const getPaths = (navbarSelection) => {
        switch(navbarSelection){
            case 'Development':
                return [ 
                    { name: 'Home', href: '/' },
                    { name: 'About', href: '/about' },
                    { name: 'Portfolio', href: '/portfolio'},
                ];
            case 'Performance':
                return [
                    { name: 'Home', href: '/' },
                ];
            default:
                return [
                    { name: 'Performance', href: '/performance'},
                    { name: 'Development', href: '/development'}
                ];
            }    
        }

    const handleContextChange = (path) => {
        switch(path){
            case 'Home':
                setNavbarSelection('');
            case 'Performance':
                setNavbarSelection('Performance');
            case 'Development':
                setNavbarSelection('Development');
            default:
                return
        }
    }

    let navOptions = getPaths().map((path) => {
        return(
            <Link className='p-1 mx-1 border-2 rounded-full border-customDSage bg-slate-50 text-slate-500 hover:bg-customSage hover:text-white hover:underline hover:border-customSage'
                key={path.name}
                href={path.href}
                onClick={handleContextChange(path.name)}
                >
                {path.name}
            </Link>
        )
    })



    return(
        <div className='flex flex-row bg-customSage py-5'>
            {navOptions}    
        </div>
        
    )

}

/*
Need to add Links to Instagram / Social Media on Right side of NavBar
Need to Include Resume for click to download on Right side of NavBar as well
*/