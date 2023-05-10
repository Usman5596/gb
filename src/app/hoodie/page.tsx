import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Hoodies</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/hoodies/h01.jpg'} alt='' width={200} height={100}></Image><p>Hoodies 01</p></div>
      <div><Image src={'/hoodies/h02.jpg'} alt='' width={200} height={100}></Image><p>Hoodies 02</p></div>
      <div><Image src={'/hoodies/h03.jpg'} alt='' width={200} height={100}></Image><p>Hoodies 03</p></div>
      <div><Image src={'/hoodies/h04.jpg'} alt='' width={200} height={100}></Image><p>Hoodies 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/hoodies/h05.jpg'} alt='' width={200} height={100}></Image><p>Hoodies 05</p></div>
      <div><Image src={'/hoodies/h06.jpg'} alt='' width={200} height={100}></Image><p>Hoodies 06</p></div>
      <div><Image src={'/hoodies/h07.jpg'} alt='' width={200} height={100}></Image><p>Hoodies 07</p></div>
      <div><Image src={'/hoodies/h08.jpg'} alt='' width={200} height={100}></Image><p>Hoodies 08</p></div>
    </div>

    </>
  )
}
