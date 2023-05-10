import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Working Gloves</h1>
      </div>

      <div className=' flex justify-center gap-20'>
      <div><Image src={'/glove/glv-1.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 001</p></div>
      <div><Image src={'/glove/glv2.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 002</p></div>
      <div><Image src={'/glove/glv3.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 003</p></div>
      <div><Image src={'/glove/glv4.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 004</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px]'>
      <div><Image src={'/glove/glv5.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 005</p></div>
      <div><Image src={'/glove/glv6.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 006</p></div>
      <div><Image src={'/glove/glv7.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 007</p></div>
      <div><Image src={'/glove/glv-8.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 008</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px]'>
      <div><Image src={'/glove/glv9.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 009</p></div>
      <div><Image src={'/glove/glv10.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 010</p></div>
      <div><Image src={'/glove/glv11.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 011</p></div>
      <div><Image src={'/glove/glv12.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 012</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px]'>
      <div><Image src={'/glove/glv13.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 013</p></div>
      <div><Image src={'/glove/glv14.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 014</p></div>
      <div><Image src={'/glove/glv15.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 015</p></div>
      <div><Image src={'/glove/glv16.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Gloves 016</p></div>
    </div>

    </>
  )
}