import React from "react";
import Link from "next/link";

import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#ef4444] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#ef4444] mr-2" />
          Vamos para o site
        </Link>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#ef4444]">
          <h1 className="font-bold text-white">
            Quer desafios e soluções de codificação enviados para sua caixa de entrada diariamente? 👉🏻
          </h1>
          <Link href="https://www.papareact.com/universityofcode" className="text-[#ef4444] font-bold ml-2">
            www.papareact.com/universityofcode
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}