'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
export default function Home() {
  const [section, setSection] = useState('')

  return (
    <div className='text-lg'>
      <div className="relative h-screen bg-[url('/img/background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 h-screen  bg-black bg-opacity-50"></div>
        <main className="flex flex-col text-white items-start justify-center h-full mx-auto max-w-screen-2xl space-y-24 px-18 py-12">
          <div className="z-10 space-y-12" >
            <h1 className="w-9/12 text-6xl">Empowering Businesses with Expert Legal and Strategic Business Consultancy</h1>
            <p className="text-2xl w-11/12">Based on <span>Sudanese family heritage in Sharia</span> (islamic
              law) principles and jurisprudence, we provide Islamic finance advisory, Auditing services and offer
              comprehensive solutions tailored for Islamic institutions.</p>
          </div>
        </main>
      </div>
      <div className="grid grid-cols-6 mx-auto max-w-screen-2xl px-18">
        <Image
          width={800}
          height={800}
          src="/img/about_the_company.jpg"
          className="mr-2 h-auto col-span-3 w-3/4 -mt-36 z-10 shadow-md"
          alt=""
        />
        <div className="space-y-12 col-span-3 flex flex-col justify-center">
          <h1 className='font-extralight text-2xl text-primary-dark'>About the Company</h1>
          <h1 className='text-4xl'>Over 40 years to the field of Islamic banking, becoming a trusted advisor since the 1970s</h1>
          <p>Abugisseisa Consultancy establishment based on Sudanese family heritage in Sharia (islamic law) principles and jurisprudence. In the 1930s, our founder Sheikh Abdel Majid Abugisseisa served as a Shariah (Islamic law) court judge and his last status was chief justice of Sharia courts ( Grand Cadi) . Following his lead, his son dedicated over 40 years to the field of Islamic banking, becoming a trusted advisor since the 1970s. Today, grandson of Abdel Majid, who is a Sharia advisor holder of AAIOFI Islamic finance accounting and advisory certification jointly founded Abu gisseisa Consultancy. With the grandson vision and the son expertise and qualification, our consultancy continues to uphold the legacy of integrity and excellence established by our family heritage.</p>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-18 py-44 space-y-12">
        <h1 className='font-extralight text-2xl text-primary-dark'>Establishments & Contributions</h1>
        <h1 className='text-4xl'>Our Chief Sharia Controller Initiatives</h1>
        <div className="content centered half_hight grid grid-cols-3 gap-12 divide-x-2">
          <div>
            <h1 className='text-4xl mb-6 text-primary-dark'>1997-2001</h1>
            <p>Contributed to the Establishment of ADIB (Abu Dhabi Islamic Bank)</p>
          </div>
          <div className='pl-12'>
            <h1 className='text-4xl mb-6 text-primary-dark'>1991-1997</h1>
            <p>Contributed to the Improvement and Redrafting of Dubai Islamic Bank Finance Products</p>
          </div>
          <div className='pl-12'>
            <h1 className='text-4xl mb-6 text-primary-dark'>2001-2015</h1>
            <p>Structured and Established Islamic Banking Division at ARBIFT Group (AL MASRAF BANK)</p>
          </div>
        </div>
      </div>

      <div className="relative h-auto py-44">
        <div className="absolute inset-0 bg-cover bg-bottom bg-[url('/img/paperwork.jpg')]"></div>

        <div className="absolute inset-0 items-center flex md:py-44 text-white bg-gradient-to-r from-primary-light via-primary-dark to-transparent"></div>

        <div className="relative z-10 flex justify-center items-center h-full text-white">
          <div className="mx-auto max-w-screen-2xl px-18 space-y-12 grid grid-cols-3 gap-20">
            <div className='space-y-12 col-span-2'>
              <h1 className='font-extralight text-2xl'>Our Services</h1>
              <h1 className='text-4xl w-3/5'>Designed to assist clients in navigating the complexities of Islamic finance </h1>
              <p>while ensuring compliance and ethical practices. From consultation and Auditing to training and participatory engagement, we strive to support the growth and development of Islamic finance globally. With our commitment to excellence, we aim to be a trusted partner to our clients in achieving success in the Islamic finance sector.</p>
              <Link href={"/"} className='hover:text-black'>Read More</Link>
            </div>
            <ul className='text-xl divide-y-2 w-3/4 col-span-1'>
              <li className='py-4'>Legal Consultations</li>
              <li className='py-4'>Business and Company Formation Consultancy</li>
              <li className='py-4'>Islamic Finance and Banking Expertise</li>
              <li className='py-4'>Training and Development Programs</li>
              <li className='pt-4'>Specialized Translation Services</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-screen-2xl px-18 pt-44 pb-80 space-y-12 flex flex-col'>
      <h1 className='font-extralight text-2xl text-primary-dark'>Associations</h1>
      <h1 className='text-4xl'>Trusted by</h1>
      <div className='grid grid-cols-4 items-center'>
      <Image
          width={150}
          height={150}
          src="/img/image001.jpg"
          className="grayscale hover:grayscale-0 h-auto w-1/2 col-span-1 m-auto"
          alt=""
        />
         <Image
          width={150}
          height={150}
          src="/img/SNDB Logo.pdf.png"
          className="grayscale hover:grayscale-0 h-auto  w-1/2 col-span-1 m-auto"
          alt=""
        />
         <Image
          width={150}
          height={150}
          src="/img/UNEP logo (1).jpg"
          className="grayscale hover:grayscale-0 h-auto  w-1/2 col-span-1 m-auto"
          alt=""
        />
          <Image
          width={150}
          height={150}
          src="/img/YNO-LOGOs.pdf.png"
          className="grayscale hover:grayscale-0 h-auto  w-1/2 col-span-1 m-auto"
          alt=""
        />
      </div>
      </div>
    </div>
  );
}
