import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

const NavbarProvider = ({children}) => {
    const [ navbarSelection, setNavbarSelection ] = useState('');

    return (
        <NavbarContext.Provider value={{ navbarSelection, setNavbarSelection }}>
            {children}
        </NavbarContext.Provider>
    );
};

export { NavbarContext, NavbarProvider }
