import React from "react";

export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">HTM Blog Diario</h1>
        <h2 className="mt-5 md:mt-0">Bem vindo a <span className="underline decoration-4 decoration-[#ef4444]">todos os desenvolvedores</span> ao blog favorito na devosfera</h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Novos recursos de produtos | O mais recente em tecnologia | Depuração semanal
        pesadelos & mais
      </p>
    </div>
  );
}