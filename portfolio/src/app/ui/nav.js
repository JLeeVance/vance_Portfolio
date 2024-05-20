import React from "react";
import Link from "next/link";


const paths = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio'},
];

export default function Nav(){

    let navOptions = paths.map((path) => {
        return(
            <Link class='p-1 mx-1 border-2 rounded-full border-lime-900/50 bg-slate-50 text-slate-500 hover:bg-lime-900/50 hover:text-white hover:underline hover:border-lime-900'
                key={path.name}
                href={path.href}>
                {path.name}
            </Link>
        )
    })


    return(
        <div class='flex flex-row bg-lime-900 py-5'>
            {navOptions}    
        </div>
        
    )

}

/*
Need to add Links to Instagram / Social Media on Right side of NavBar
Need to Include Resume for click to download on Right side of NavBar as well
*/