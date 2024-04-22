import React, { useRef, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="relative w-full bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/">
            <div className="inline-flex items-center space-x-2">
              <div className="w-8">
                <img src={logo} alt="" />
              </div>
              <span className="font-bold text-white">Meme Viewer</span>
            </div>
          </Link>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `${
                        isActive ? "bg-white text-black" : "text-white"
                      } text-sm font-semibold py-2 px-3 rounded-full  transition-all duration-300`
                    }
                    onClick={handleNavLinkClick}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block transition-all duration-700">
            <button
              type="button"
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-green-500 hover:text-white hover:rounded-full transition-all duration-300 "
            >
              Post Your Meme
            </button>
          </div>
          <div className="lg:hidden">
            <Menu
              onClick={toggleMenu}
              className="h-8 w-8 cursor-pointer text-white items-center p-1 justify-center rounded-md hover:bg-gray-400 hover:text-white transition-all duration-200"
            />
          </div>
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden"
            >
              <div className="divide-y-2 divide-gray-50 rounded-lg text-white bg-black shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <Link to="/">
                      <div className="inline-flex items-center space-x-2">
                        <div className="w-10">
                          <img src={logo} alt="" />
                        </div>
                        <span className="font-bold">Meme Viewer</span>
                      </div>
                    </Link>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="h-8 w-8 cursor-pointer text-white items-center p-1 justify-center rounded-md hover:bg-gray-400 hover:text-white transition-all duration-200"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-400"
                          onClick={handleNavLinkClick}
                        >
                          <span className="ml-3 font-medium text-white">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <button
                    type="button"
                    className="mt-10 w-full rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Post Your Meme
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
