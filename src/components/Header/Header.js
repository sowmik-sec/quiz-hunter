import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "../NavItem/NavItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 2, name: "Topics", path: "/topics" },
    { id: 3, name: "Statistics", path: "/statistics" },
    { id: 4, name: "Blog", path: "/blog" },
  ];
  return (
    <nav className="bg-purple-200 p-3 w-full flex justify-between">
      <div>
        <Link>Quiz Hunter</Link>
      </div>
      <div>
        <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        <ul
          className={`bg-purple-200 w-full md:flex md:justify-center absolute md:static duration-500 ease-in ${
            open ? "top-8 right-0" : "top-[-120px]"
          }`}
        >
          {routes.map((route) => (
            <NavItem key={route.id} route={route} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
