import type { FC } from "react";
import Link from "next/link";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: FC<NavLinkProps> = ({ href, children }) => (
  <li className="h-full">
    <Link href={href}>
      <a className="h-full flex items-center p-2 hover:bg-blue-600 transition-all duration-300">
        {children}
      </a>
    </Link>
  </li>
);
