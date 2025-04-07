import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <>
      <section className="h-96 text-white relative">
        <div>
          <Image
            width={900}
            height={120}
            alt=""
            role="presentation"
            className="h-96 w-full object-cover"
            src="/img/background.jpg"
          />
          <h1 className='absolute top-12'>text</h1>
        </div>
      </section>
      <div className='mx-auto max-w-screen-2xl px-18'>
        {/* <h1>Abugisseisa Consultancy LLC</h1> */}
        <p className='text-center text-lg px-20 pt-44'>
          We provide Islamic finance advisory and Auditing services and offer comprehensive solutions tailored for Islamic institutions. In addition to consultancy and transaction Auditing, we provide specialized training programs to equip professionals with the knowledge and skills necessary to navigate Islamic finance principles effectively. Furthermore, our expertise extends to Shariah translation services, ensuring clear and accurate interpretation of Shariah principles within financial contexts. With a focus on empowering institutions with both practical know-how and linguistic precision, we strive to foster growth, compliance, and ethical conduct within the Islamic finance industry
        </p>
      </div>
      <div className='grid grid-cols-2 mx-auto max-w-screen-2xl px-18 items-center my-44 bg-primary-light text-white rounded-3xl'>
        <Image
          width={600}
          height={100}
          alt=""
          role="presentation"
          className='col-span-1 rounded-l-2xl h-full w-full'
          src="/img/background.jpg"
        />
        <div className='col-span-1 space-y-12 py-12 px-20'>
          <div>
          <h1 className='text-4xl mb-6'>Our mission</h1>
          <p>Our mission at Abu Gisseisa Consultancy is to advance global Islamic finance by blending authentic Islamic principles with our expertise. We strive to offer innovative solutions, promote recognition worldwide, and create inclusive financial opportunities for all, fostering prosperity in communities</p>
          </div>
          <div>
          <h1 className='text-4xl mb-6'>Our vision</h1>
          <p>Our vision is to establish a presence within international institutions and actively contribute in the structuring and developing the Islamic finance services to full fledge Islamic banks and the Islamic units of the conventional banks and financial institutions.</p>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-screen-2xl px-18 pb-44 pt-12 text-center flex flex-col items-center'>
        <p className='text-4xl w-3/4 font-thin'>A premier provider of specialized services in <span className='font-bold'>Islamic finance, Shariah audit, and institution structuring.</span></p>
        <p className='py-12 text-2xl'>Guided by our core values</p>
      </div>
      <div className='grid grid-cols-6 mx-auto max-w-screen-2xl gap-12 pb-44'>
        <div className='col-span-2 border p-4 rounded-lg'>
          <h1 className='text-2xl mb-6'>Integrity</h1>
          <p>Upholding the highest ethical standards in every aspect of our operations, including Shariah audit and Islamic institution structuring.</p>
        </div>
        <div className='col-span-2 border p-4 rounded-lg'>
          <h1 className='text-2xl mb-6'>Excellence</h1>
          <p>Committing to delivering exceptional service and activities, including the establishment and structuring of Islamic institutions, ensuring compliance with Shariah principles.</p>
        </div>
        <div className='col-span-2 border p-4 rounded-lg'>
          <h1 className='text-2xl mb-6'>Collaboration</h1>
          <p>Fostering strong partnerships and teamwork to achieve our clients' objectives effectively, whether in Shariah audit or the establishment of Islamic institutions.</p>
        </div>
        <div className='col-span-3 border p-4 rounded-lg'>
          <h1 className='text-2xl mb-6'>Timeliness</h1>
          <p>Ensuring punctuality and delivering work on time, demonstrating our dedication to meeting deadlines and fulfilling our commitments in Shariah audit and institution structuring.</p>
        </div>
        <div className='col-span-3 border p-4 rounded-lg'>
          <h1 className='text-2xl mb-6'>Commitment</h1>
          <p>Demonstrating unwavering dedication to our clients' success, ensuring their satisfaction and the success of their Islamic institutions through our services</p>
        </div>
      </div>
    </>
  )
}

export default page