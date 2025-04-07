import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <>
            <div className='h-screen'>
                <div className='px-18 py-60 h-1/2 w-full bg-primary-light relative flex justify-center'>
                    <div className='mx-auto max-w-screen-2xl'>
                        <h1 className='z-10 text-6xl text-white w-3/5'>Providing Tailored Solutions and Expertise to Meet Your Needs Effectively</h1>
                    </div>
                </div>
                <div className='mx-auto max-w-screen-2xl py-12'>
                    <h1 className='font-extralight text-2xl text-primary-dark'>Our Core Services</h1>
                    <div className='py-12'>
                        <ul className='grid grid-cols-3 gap-4'>
                            <li>Legal Consultations</li>
                            <li>Business and Company Formation Consultancy</li>
                            <li>Islamic Finance and Banking Expertise</li>
                            <li>Training and Development Programs</li>
                            <li>Specialized Translation Services</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page