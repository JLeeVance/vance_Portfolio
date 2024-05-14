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
            <Link
                key={path.name}
                href={path.href}>
                {path.name}
            </Link>
        )
    })


    return(
        <>
            {navOptions}    
        </>
        
    )

}