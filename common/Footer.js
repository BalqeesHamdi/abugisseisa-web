'use client';

import React from 'react'
import { usePathname } from 'next/navigation';
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className={pathname == "/" ?'fixed bottom-0 z-20 text-white py-6 w-full backdrop-blur border-t-2 bg-black-50':'text-white py-6 w-full backdrop-blur border-t-2 bg-[#080808]'}>
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-between mx-auto max-w-screen-2xl">
      <p>All rights reserved © 2024</p>
      <div className="contact_info">
        <p>Dubai World Trade Center,
          Sheikh Rashid Tower, 8th Floor,
          UAE</p>
        <div></div>
        <p>+971503074918</p>
        <div></div>
        <p>info@abugisseisaconsultancy.com</p>
        <div></div>
        <p>License Number: 2429727.01</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer