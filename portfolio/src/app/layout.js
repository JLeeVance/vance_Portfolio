'use client'

import { NavbarProvider } from "./contexts/navBarContext";
import "./globals.css";
import Nav from "./ui/nav";

export default function RootLayout({ children }) {
  return (
  <>
    <html lang='en'>
      <body>
        <NavbarProvider>
          <Nav />
          <div>
            {children}
          </div>
        </NavbarProvider>
      </body>
    </html>
  </>
  );
}
