import * as React from "react";

import Link from "next/link";

const links = [
  { href: "/", label: "Route 1" },
  { href: "/", label: "Route 2" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="layout flex h-14 items-center justify-between">
        <Link href="/" className="font-bold hover:text-gray-600">
          Home
        </Link>
        <nav>
          <ul className="flex items-center justify-between space-x-4">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href} className="hover:text-gray-600">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

