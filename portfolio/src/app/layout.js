import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./ui/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jay Vance Portfolio",
  description: "Software Engineer Jay Vance's portfolio",
};

export default function RootLayout({ children }) {
  return (
  <>
    <html>
      <body className={inter.className}>
        <Nav />
        <div>
          {children}
        </div>
      </body>
    </html>
  </>
  );
}
