import Image from "next/image";
import React from "react";
import htmLogo from "../public/logo.png"

export default function Logo(props: any) {
  const { renderDefault, title } = props;
  
  return (
    <div className="flex items-center space-x-2">
      <Image 
        className="rounded-full object-cover"
        height={50}
        width={50}
        src={htmLogo}
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div> 
  )
}