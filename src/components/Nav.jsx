import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

function Nav() {
  // Step 1: Add useState to control the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Step 2: Toggle menu visibility when hamburger is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Desktop Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray cursor-pointer hover:text-orange-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (Mobile Navigation Toggle) */}
        <div>
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className="hidden max-lg:block cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Step 3: Mobile Navigation - Render conditionally */}
        {isMenuOpen && (
          <ul className="absolute top-16 right-0 bg-white shadow-lg flex flex-col gap-4 p-6 max-lg:flex">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray cursor-pointer hover:text-orange-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Nav;
