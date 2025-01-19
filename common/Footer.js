import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <div className='fixed bottom-0 z-20 text-white py-6 w-full backdrop-blur border-t-2 bg-primary-light-50'>
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