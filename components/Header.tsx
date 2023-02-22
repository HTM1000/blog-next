import Image from "next/image";
import Link from "next/link";
import React from "react";
import htmLogo from "../public/logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Image 
          className="rounded-full object-cover"
          height={50}
          width={50}
          src={htmLogo}
          alt="logo"
        />
        <h1>Henrique Moraca</h1>
      </div>

      <div>
        <Link 
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#ef4444] flex items-center rounded-full text-center"
        >
          Entre na Universidade de Codigos
        </Link>
      </div>
    </header>
  )
}