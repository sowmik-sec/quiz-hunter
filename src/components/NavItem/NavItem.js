import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ route }) => {
  return (
    <li className="md:mr-12">
      <Link to={`${route.path}`}>{route.name}</Link>
    </li>
  );
};

export default NavItem;
