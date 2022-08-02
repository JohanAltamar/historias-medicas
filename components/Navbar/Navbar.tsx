import React, { FC } from "react";
import Link from "next/link";
// Components
import { NavLink } from "./NavLink";

export const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-gray-100 font-bold text-xl flex justify-between items-center h-14 px-4 sticky top-0 shadow-lg">
      <Link href="/">
        <h1 className="h-full flex items-center py-2 cursor-pointer">
          Historias Médicas
        </h1>
      </Link>
      <ul className="h-full flex">
        <NavLink href="/general">General</NavLink>
        <NavLink href="/cyd">CyD</NavLink>
        <NavLink href="/conceptos">Conceptos</NavLink>
      </ul>
    </nav>
  );
};
