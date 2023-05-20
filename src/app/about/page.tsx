import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <>
    <div className=' pt-[20px] px-[50px] pb-[20px] ' id='about'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>About</h1>
      </div>
      <div className='  bg-black text-white w-[90%] m-auto rounded-3xl pt-5 pb-20 px-5'>
        <h1 className=' text-center text-xl font-bold pb-[15px]'>_______ WHO WE ARE? _______</h1>
      <p className=' text-center'>TGB Co. in one of the leading Apparel & accessories Manufacturing/Exporting Company across the globe and targets to become the world leading producer by providing quality, on-time delivery, cost saving, innovation and high-tech oriented solutions to the customers.</p>
      <p className=' text-center'>We aim to excel in research and development and become prominent to provide best product for our customers. We have the mindset to provide cost effective & sustainable solutions for our clients and end users.</p>
      <p className=' text-center'>TGB Co. in history of a decade worth of commitment to quality and value. We aim to bring the latest and best of products to you as never done before. We design and manufacture all kinds Fashion/Sports Garments and accessories. We have also stared our sports goods manufacturing unit in 2020.</p>
      </div>
      <div className=' flex pl-[60px] pr-[60px]'>
        <div className=' bg-gray-700 text-white text-center text-lg font-bold w-[35%] -mt-[45px] m-auto rounded-3xl py-5 px-5'>
          <h1 className=' underline'>OUR VISION</h1>
          <p>To be the world prominent in design and manufacturing.</p>
        </div>
        <div className=' bg-gray-700 text-white text-center text-lg font-bold w-[35%] -mt-[45px] m-auto rounded-3xl py-5 px-5'>
        <h1 className=' underline'>OUR MISSION</h1>
          <p>To be the first choice for customers offshore in accessories and apparel.</p>
        </div>
      </div>
    </>
  )
}
