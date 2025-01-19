'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();

  const [showDropdown, setShowDropdown] = useState('');
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setShowDropdown(''), setNav(false);
  }, [pathname]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="p-4 backdrop-blur  text-white absolute top-0 left-0 w-full z-20 bg-transparent text-white px-4 py-8 flex justify-between items-center border-b-2">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Back to homepage"
        >
          <Image
            width={800}
            height={800}
            src="/img/new_logo.png"
            className="mr-2 h-auto w-7/12"
            alt=""
          />

        </Link>
        <ul
          className={
            nav
              ? 'fixed bottom-0 left-0 top-0 z-50 w-64 flex-col items-center divide-y divide-black/10  px-3 duration-500 ease-in-out sm:static sm:flex sm:w-auto sm:flex-row sm:space-x-3 sm:divide-y-0 sm:p-0'
              : 'fixed bottom-0 left-[-100%] top-0 z-50 w-64 flex-col items-center divide-y divide-black/10  px-3 duration-500 ease-in-out sm:static sm:flex sm:w-auto sm:flex-row sm:space-x-3 sm:divide-y-0 sm:p-0'
          }
        >
          <li className="flex-col">
            <Link
              href="/"
              className={classNames('flex items-center p-4', pathname === '/' ? 'active' : '')}
            >
              Home
            </Link>
          </li>
          <li className="flex-col">
            <Link
              href={"/about"}
              className={classNames('flex items-center p-4', pathname === '/about' ? 'active' : '')}
            >
              About
            </Link>
          </li>
          <li className="flex-col">
            <p
              onMouseEnter={() => setShowDropdown('read')}
              onClick={() => setShowDropdown('read')}
              className="flex items-center p-4"
            >
              Initiatives
            </p>
          </li>

          <li className="flex-col">
            <Link
              href={"/Services"}
              className="flex items-center p-4"
            >
              Services
            </Link>
          </li>
          <li className="flex-col">
            <p
              onMouseEnter={() => setShowDropdown('read')}
              onClick={() => setShowDropdown('read')}
              className="flex items-center p-4"
            >
              Management Team
            </p>
          </li>
          <li className="flex-col">
            <Link
              href="/joinus"
              className="mt-4 flex items-center justify-center rounded-full bg-primary-light py-3 font-semibold text-white sm:mt-0 sm:px-4 md:px-8"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <button className="flex justify-end p-4 sm:hidden" onClick={handleNav}>
          {nav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
