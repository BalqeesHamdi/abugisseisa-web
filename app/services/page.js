'use client';
import React, { useState } from 'react'
import Image from 'next/image'
const page = () => {
    const [show, setShow] = useState('Legal')
    const [animationKey, setAnimationKey] = useState(0);

    const handleSetShow = (value) => {
        setShow(value);
        setAnimationKey((prev) => prev + 1); // forces content re-render for animation
    };
    return (
        <>
            <>
                <div className='min-h-screen'>
                    <div className='px-18 py-60 pt-48 h-[400px] w-full bg-primary-light relative flex justify-center'>
                        <div className='mx-auto max-w-screen-2xl'>
                            <h1 className='z-10 text-6xl text-white w-3/5'>Providing Tailored Solutions and Expertise to Meet Your Needs Effectively</h1>
                        </div>
                    </div>
                    <div className='mx-auto max-w-screen-2xl pb-20 pt-44'>
                        <h1 className='font-light text-4xl text-primary-dark mb-8'>
                            Our Core Services
                        </h1>

                        <div className='flex flex-col md:flex-row gap-16'>
                            {/* Left Menu */}
                            <ul className='md:w-1/3'>
                                <div className=''>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                                </div>
                                {[
                                    { label: "Legal Consultations", value: "Legal" },
                                    { label: "Business and Company Formation Consultancy", value: "Business" },
                                    { label: "Islamic Finance and Banking Expertise", value: "Islamic-Finance" },
                                    { label: "Training and Development Programs", value: "Training" },
                                    { label: "Specialized Translation Services", value: "Translation-Services" },
                                ].map(({ label, value }) => (
                                    <li
                                        key={value}
                                        onClick={() => handleSetShow(value)}
                                        className={`transition-all duration-300 ease-in-out cursor-pointer border-b py-6 hover:pl-2 hover:border-b-primary-light hover:text-primary-dark ${show === value ? "font-bold text-primary-dark border-primary-light" : "text-gray-600"
                                            }`}
                                    >
                                        {label}
                                    </li>
                                ))}
                            </ul>

                            <div
                                key={animationKey}
                                className='md:w-2/3 space-y-6 animate-fade-in-slide transition-all duration-500'
                            >
                                {show === "Legal" && (
                                    <div>
                                        <Image
                                            width={600}
                                            height={500}
                                            alt=""
                                            role="presentation"
                                            className='col-span-1 rounded-2xl h-60 w-full object-cover mb-6'
                                            src="/img/background.jpg"
                                        />
                                        <p className='mb-4'>
                                            <b>Bridging Common Law, International Legal Standards, and Islamic Jurisprudence</b> — We provide a wide range of legal services tailored to meet the requirements of local and international markets:
                                        </p>
                                        <h1 className='font-bold mb-2'>General Law Advisory:</h1>
                                        <ul className='list-disc ml-5 space-y-2'>
                                            <li>Expertise in civil, criminal, family, and inheritance law.</li>
                                            <li>Drafting and reviewing contracts, agreements, legal opinions, and compliance documents.</li>
                                        </ul>
                                    </div>
                                )}
                                {show === "Business" && (
                                    <div>
                                        <Image
                                            width={600}
                                            height={500}
                                            alt=""
                                            role="presentation"
                                            className='col-span-1 rounded-2xl h-60 w-full object-cover mb-6'
                                            src="/img/background.jpg"
                                        />
                                        <p>We help businesses lay the groundwork for success with strategic, compliant, and efficient advisory:</p>
                                        <h1 className='font-bold my-2'>Company Registration and Compliance:</h1>
                                        <ul className='list-disc ml-5 space-y-2'>
                                            <li>Support for free zone and mainland company formation in the UAE and internationally.</li>
                                            <li>VAT and TRN registration, ensuring compliance with regional and global tax systems.</li>
                                        </ul>
                                        <h1 className='font-bold mt-6 mb-2'>Feasibility Studies:</h1>
                                        <ul className='list-disc ml-5 space-y-2'>
                                            <li>In-depth market research, financial modeling, and feasibility assessments to evaluate business opportunities.</li>
                                        </ul>
                                        <h1 className='font-bold mt-6 mb-2'>Strategic Business Advisory:</h1>
                                        <ul className='list-disc ml-5 space-y-2'>
                                            <li>Guidance on structuring businesses for scalability, operational efficiency, and global expansion.</li>
                                        </ul>
                                    </div>
                                )}
                                {show === "Islamic-Finance" && (
                                    <div>
                                        <Image
                                            width={600}
                                            height={500}
                                            alt=""
                                            role="presentation"
                                            className='col-span-1 rounded-2xl h-60 w-full object-cover mb-6'
                                            src="/img/background.jpg"
                                        />
                                        <ul className='list-disc ml-5 space-y-2'>
                                            <li>Structuring and auditing <b>Sharia-compliant financial products</b> tailored for businesses and financial institutions.</li>
                                            <li>Assisting conventional banks with transformation into fully Sharia-compliant institutions.</li>
                                            <li>Advisory on Islamic financial services, regulatory frameworks, and market positioning.</li>
                                        </ul>
                                    </div>
                                )}
                                {show === "Training" && (
                                    <div>
                                        <Image
                                            width={600}
                                            height={500}
                                            alt=""
                                            role="presentation"
                                            className='col-span-1 rounded-2xl h-60 w-full object-cover mb-6'
                                            src="/img/background.jpg"
                                        />
                                        <p className='mb-4'>We empower professionals and institutions through specialized training:</p>
                                        <ul className='list-disc ml-5 space-y-2'>
                                            <li>Workshops and tailored programs on common legal frameworks, Islamic finance, VAT compliance, and business management.</li>
                                            <li>Professional training for legal practitioners, financial managers, and corporate leadership teams to enhance operational efficiency.</li>
                                        </ul>
                                    </div>
                                )}
                                {show === "Translation-Services" && (
                                    <div>
                                        <Image
                                            width={600}
                                            height={500}
                                            alt=""
                                            role="presentation"
                                            className='col-span-1 rounded-2xl h-60 w-full object-cover mb-6'
                                            src="/img/background.jpg"
                                        />
                                        <ul className='list-disc ml-5 space-y-2'>
                                            <li>Accurate and professional translation of <b>legal, financial, and technical documents</b>, ensuring linguistic precision and compliance with Islamic principles.</li>
                                            <li>Multi-lingual services to bridge communication gaps across borders and legal systems.</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>


                <div className='mx-auto flex items-center max-w-screen-2xl py-44'>
                    <div className='h-100 w-1/2'>
                        <h1 className='text-8xl'>
                            Additional Services for a Global Edge
                        </h1>
                    </div>
                    <ul className='p-4 flex flex-col justify-center pl-14'>
                        <li className='flex items-center mb-8'>
                            <div>
                                <h1 className='text-xl mb-2'>Compliance and Risk Management Solutions</h1>
                                <p>Addressing regulatory challenges in AML (Anti-Money Laundering), GDPR (Data Privacy), and ESG (Environmental, Social, Governance) compliance.</p>
                            </div>
                        </li>
                        <li className='flex items-center mb-8'>
                            <div>
                                <h1 className='text-xl mb-2'>Technology-Enabled Legal Services</h1>
                                <p>Offering AI-based legal documentation, contract analysis, and virtual legal consultations.</p>
                            </div>
                        </li>
                        <li className='flex items-center mb-8'>
                            <div>
                                <h1 className='text-xl mb-2'>International Tax and Financial Advisory</h1>
                                <p>Structuring international investments, tax-efficient operations, and advising on global financial laws.</p>
                            </div>
                        </li>
                        <li className='flex items-center'>
                            <div>
                                <h1 className='text-xl mb-2'>Intellectual Property (IP) and Trademark Services:</h1>
                                <p>Helping businesses protect their brands and innovations locally and internationally.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='mx-auto max-w-screen-2xl mb-40'>
                    <div className='py-12 gap-6 grid grid-cols-4 align-middle'>
                        <div className='h-100% col-span-2 flex items-center rounded-lg border-2 border-primary-light text-primary-light p-4'>
                            <h1 className='text-3xl'>What Sets <b>Abugisseisa Consultancy</b> Apart?</h1>
                        </div>
                        <div className='flex border rounded-lg'>
                            <div className='p-4'>
                                <h1 className='text-xl mb-2'>Dual Legal Expertise</h1>
                                <p>Mastery of both conventional legal frameworks (common and international law) and Islamic jurisprudence.</p>
                            </div>
                        </div>

                        <div className='flex border rounded-lg'>
                            <div className='p-4'>
                                <h1 className='text-xl mb-2'>Proven Legacy</h1>
                                <p>Decades of experience in legal consultancies, Islamic finance, and strategic business advisory rooted in a history of excellence.</p>
                            </div>
                        </div>

                        <div className='flex border rounded-lg'>
                            <div className='p-4'>
                                <h1 className='text-xl mb-2'>Global Reach with Local Expertise</h1>
                                <p>A trusted partner for businesses operating locally, regionally, and internationally, with solutions customized for UAE, GCC, and global markets.</p>
                            </div>
                        </div>

                        <div className='flex border rounded-lg'>
                            <div className='p-4'>
                                <h1 className='text-xl mb-2'>Client-Centric Solutions</h1>
                                <p>Tailored services that prioritize client success, with an emphasis on delivering measurable results and fostering long-term relationships.</p>
                            </div>
                        </div>

                        <div className='flex border rounded-lg'>
                            <div className='p-4'>
                                <h1 className='text-xl mb-2'>Innovative and Technology-Driven</h1>
                                <p>Leveraging advanced tools for legal analysis, financial modeling, and business consultancy to deliver efficient, transparent, and cutting-edge solutions.</p>
                            </div>
                        </div>

                        <div className='flex border rounded-lg'>
                            <div className='p-4'>
                                <h1 className='text-xl mb-2'>Cross-Disciplinary Team</h1>
                                <p>A team of legal professionals, Sharia advisors, financial experts, and business consultants bringing diverse expertise to complex challenges.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default page