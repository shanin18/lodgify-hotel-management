"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SiHiltonhotelsandresorts } from "react-icons/si";

const Navbar = () => {
  const [showItems, setShowItems] = useState(false);
  const pathName = usePathname();

  const toggleItems = () => {
    setShowItems(!showItems);
  };
  return (
    <nav className="text-gray-400 body-font border-b">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-900">
        <Link
          href="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <SiHiltonhotelsandresorts className="text-4xl " />
          <span className="ml-3 text-xl ">Lodgify</span>
        </Link>
        <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/"
            className={`mr-5 hover:text-green-500 font-medium ${
              pathName === "/" && "text-green-500"
            }`}
          >
            Home
          </Link>
          <Link
            href="/hotels"
            className={`mr-5 hover:text-green-500 font-medium ${
              pathName === "/hotels" && "text-green-500"
            }`}
          >
            Hotels
          </Link>
          {pathName.includes("details") && (
            <Link
              href="/details"
              className={`mr-5 hover:text-green-500 font-medium ${
                pathName.includes("details") && "text-green-500"
              }`}
            >
              Details
            </Link>
          )}

          <Link
            href="/contact-us"
            className={`mr-5 hover:text-green-500 font-medium ${
              pathName === "/contact-us" && "text-green-500"
            }`}
          >
            Contact Us
          </Link>
          <Link
            href="/login"
            className={`mr-5 hover:text-green-500 font-medium ${
              pathName === "/login" || pathName === "/signup" ? "text-green-500" : ""
            }`}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
