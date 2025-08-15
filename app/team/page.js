'use client';
import React, { useState } from 'react'
import Image from 'next/image'
const page = () => {
    const [show, setShow] = useState('issam')
    const [showAll, setShowAll] = useState(false);

    const qualifications = [
        "LLB, Dip-Law, LLM: Dedicated Legal Advisor with high-level Sudanese and U.K academic and professional qualification plus over 40 years of work experience in the Sudan and UAE.",
        "Master of Laws (LLM) in English Legal System, University of Bristol, Bristol, UK, 1985.",
        "Diploma in English Legal Studies (Dip-Law), University of Bristol, Bristol, U.K, 1983.",
        "Bachelor of Laws (LLB), Cairo University of Khartoum, Khartoum ,Sudan 1973.",
        "Membership: International Islamic Center for Reconciliation and Arbitration (IICRA).",
        "Banking experts Dubai courts.",
        "Sharia Certificate: Sudan Supreme Court of Sharia, 1974.",
        "Sudanese Bar Examination Certification and Sudanese Advocacy License,1975."
    ];

    const qualifications_moyad = [
        "Senior Legal Professional with diverse experience in business, commercial and law of banking with vast experience in Islamic banking",
        "Al-Nilin University - Faculty of Law 2016-2022 LLB – bachelor's degree (Honor)",
        "Emirates Institute for Banking & Financial Studies, UAE 2002-2003 - IFS Banking & Finance Diploma",
        "University College of the Cariboo, BC, Canada 1999-2001 – Pre-bachelor course in English as a second language",
        "Al Masha’el National School, UAE 1997-1999 - High school diploma",
        "Dubai Islamic Bank - Banker trainee as graduation project in Customer Services, Trade Finance, Loans 'Murabaha, credit sale', Operations, Real Estate & Private Banking - training course",
        "HSBC Training Center - Collection and recovery training program - Fraud-cases program"
    ];
    return (
        <>
            <div className='min-h-screen'>
                <div className='mx-auto max-w-screen-2xl pb-20 py-60'>
                    <div
                        className={`flex justify-between w-full items-center transition-all duration-500 ease-in-out ${show === '' ? 'py-44' : 'pt-10 pb-0'
                            }`}
                    >
                        <div className='mb-16 w-1/2'>
                            <h1 className='font-light text-4xl text-primary-dark mb-8'>Our Management Team</h1>
                            <p>our management team at Abu Gisseisa Consultancy is a group of seasoned professionals with diverse expertise in Islamic finance, project management, operations, and strategic guidance. From visionary leadership to specialized skills in Shariah compliance and translation, each member plays a crucial role in driving our consultancy's success and fostering growth in the industry. </p>
                        </div>
                        <div className='grid grid-cols-3 gap-6 w-3/4'>
                            <Image
                                onClick={() => setShow("issam")}
                                width={400}
                                height={500}
                                alt=""
                                role="presentation"
                                className={show === 'issam' ? 'col-span-1 rounded-lg h-64 w-full object-cover mb-6 bg-primary-light' : 'grayscale hover:grayscale-0 col-span-1 rounded-lg h-64 w-full object-cover mb-6 bg-primary-light'}
                                src="/img/issam.png"
                            />
                            <Image
                                onClick={() => setShow("mohammed")}
                                width={600}
                                height={500}
                                alt=""
                                role="presentation"
                                className={show === 'mohammed' ? 'col-span-1 rounded-lg h-64 w-full object-cover mb-6 bg-primary-light' : 'grayscale hover:grayscale-0 col-span-1 rounded-lg h-64 w-full object-cover mb-6 bg-primary-light'}
                                src="/img/moe.png"
                            />
                            <Image
                                onClick={() => setShow("muayad")}
                                width={600}
                                height={500}
                                alt=""
                                role="presentation"
                                className={show === 'muayad' ? 'col-span-1 rounded-lg h-64 w-full object-cover mb-6 bg-primary-light' : 'grayscale hover:grayscale-0 col-span-1 rounded-lg h-64 w-full object-cover mb-6 bg-primary-light'}
                                src="/img/moyad.png"
                            />
                        </div>
                    </div>
                    {show == "issam" &&
                        <div className='py-20 flex'>
                            <div className='w-3/4 mr-6'>
                                <h1 className='text-3xl mb-2'>Issameldin Abugisseisa</h1>
                                <p className='mb-6'>Chairman of supervisory board and chief Sharia(Islamic finance law) controller</p>
                                <p>Issameldin Abugisseisa has over 40 years of experience in Islamic finance. He played a key role in setting up several major banks and institutions in the UAE. Currently he is Sharia controller and head of Sharia committee in one of the foreign banks registered in the UAE recognized by the central bank of the UAE. </p>
                                <button className="text-xl mt-8 mb-2">Work experience</button>
                                <div className="content_bar">
                                    <ul>
                                        <li>Sharia (Islamic finance law) Controller & Head of legal dept.(2001-2015) ALMASRAF (ARBIFT) Bank.</li>
                                        <li>Head of Legal Department & Sharia (Islamic finance law) Board Coordinator: (1998-2001) Abu Dhabi Islamic Bank (ADIB), Abu Dhabi, UAE.</li>
                                        <li>Head of Legal Department (1991-1997)- Dubai Islamic Bank (DIB),Dubai, UAE.</li>
                                        <li>Advocate and Legal Consultant 1988-1991- UAE Federal Court, Dubai, UAE.</li>
                                        <li>Advocate and Legal Consultant ( 1974-1987) Sudanese Judiciary, Khartoum, Sudan.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <button className="text-xl mb-2">Qualifications</button>
                                <div className="content_bar">
                                    <div>
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${showAll ? "max-h-[1000px]" : "max-h-[240px]"
                                                }`}
                                        >
                                            <ul className="divide-y">
                                                {qualifications.map((item, index) => (
                                                    <li key={index} className="py-4">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {qualifications.length > 4 && (
                                            <button
                                                onClick={() => setShowAll(!showAll)}
                                                className="mt-4 text-primary-dark font-semibold hover:underline"
                                            >
                                                {showAll ? "Show Less" : "Show More"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>}

                    {show == "mohammed" &&
                        <div className='py-20 flex'>
                            <div className='w-3/4 mr-6'>
                                <h1 className='text-3xl mb-2'>Mohamed Issameldin Abu Gisseisa</h1>
                                <p className='mb-6'>Founder/ Managing Director & Shariah Auditor</p>
                                <p>With over 7 years of experience in Islamic finance, Mohamed Issameldin Abu Gisseisa brings visionary leadership to the consultancy. His expertise lies in Islamic finance structuring, Shariah compliance, and strategic management. Besides his practical experience, Mohamed is a dedicated seeker of knowledge in Sharia law studies. He holds a Sharia Bachelor in Sharia (Islamic law) and a certificate in Islamic finance Auditing and consultancy from AAIOFI, further enhancing his proficiency in the field.</p>
                                <button className="text-xl mt-8 mb-2">Work experience</button>
                                <div className="content_bar">
                                    <p>Currently working on conducting researches – drafting-and reviewing Islamic transactions under the supervision of ISSAMELDIN ABDULMAJID (2014-2022) Abu Gisseisa Attorneys L.l.C – Khartoum- Sudan.</p>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <button className="text-xl mb-2">Qualifications</button>
                                <div className="content_bar">
                                    <ul className='divide-y'>
                                        <li className='py-4'>Bachelor of Sharia studies(Islamic jurisprudence-principles of Islamic jurisprudence) Jabra university college-Sudan.</li>
                                        <li className='py-4'>Diploma in Sharia studies (Islamic studies)- Ibn Othaimen institute-Khartoum-Sudan(2014-2015).</li>
                                        <li className='py-4'> Certified Sharia Advisor and Auditor (CSAA) certificate from AAOIFI CENTER 2022.</li>
                                    </ul>
                                </div>

                            </div>
                        </div>}

                    {show == "muayad" &&
                        <div className='py-20 flex'>
                            <div className='w-3/4 mr-6'>
                                <h1 className='text-3xl mb-2'>Muayad Issameldin Abu Gisseisa</h1>
                                <p className='mb-6'>Risk Management Advisory</p>
                                <p>Muayad Issam Eldeen Ali Abugiseisa brings a wealth of experience and expertise to our team. With a Bachelor's degree in Law from Al-Nilin University and additional qualifications in banking and finance, Muayad has seamlessly navigated both sectors. His roles at prestigious institutions like Dubai Islamic Bank and Abu-Gisseisa Law Firm have honed his skills in operations, contract translation, and recovery management. Currently serving as a Translator for the U.S.A.I.D/OTI Chemonics Sudan Transition Program, Muayad's dedication to excellence and diverse skill set make him a valuable asset to our firm. </p>
                                <button className="text-xl mt-8 mb-2">Work experience</button>
                                <div className="content_bar">
                                    <ul>
                                        <li>Translator, U.S.A.I.D/OTI Chemonics - Sudan Transition Program (STP), 29/01/2023 – Present</li>
                                        <li>Contracts Translator, Abu-Gisseisa Law Firm, 01/06/2018 – 26/12/2022</li>
                                        <li>Recovery Manager, Abu-Gisseisa Law Firm, 26/03/2011 – 2018</li>
                                        <li>Collection Officer, Finance House, Abu Dhabi, 26/12/2006</li>
                                        <li>Operations, Abu Dhabi Islamic Bank, 08/09/2004 – 2006</li>
                                        <li>Collection Department, HSBC Credit Management Unit (CMU), November 2003 – September 2004</li>
                                    </ul>

                                </div>
                            </div>
                            <div className='w-1/2'>
                                <button className="text-xl mb-2">Qualifications</button>
                                <div className="content_bar">
                                    <div>
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${showAll ? "max-h-[1000px]" : "max-h-[290px]"
                                                }`}
                                        >
                                            <ul className="divide-y">
                                                {qualifications_moyad.map((item, index) => (
                                                    <li key={index} className="py-4">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {qualifications_moyad.length > 4 && (
                                            <button
                                                onClick={() => setShowAll(!showAll)}
                                                className=" text-primary-dark font-semibold hover:underline"
                                            >
                                                {showAll ? "Show Less" : "Show More"}
                                            </button>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>}
                </div>
            </div >
        </>
    )
}

export default page