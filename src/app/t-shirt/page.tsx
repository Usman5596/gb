import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>T-Shirt</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/t-shirt/ts01.jpg'} alt='' width={200} height={100}></Image><p>T-Shirt 01</p></div>
      <div><Image src={'/t-shirt/ts02.jpg'} alt='' width={200} height={100}></Image><p>T-Shirt 02</p></div>
      <div><Image src={'/t-shirt/ts03.jpg'} alt='' width={200} height={100}></Image><p>T-Shirt 03</p></div>
      <div><Image src={'/t-shirt/ts04.jpg'} alt='' width={200} height={100}></Image><p>T-Shirt 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/t-shirt/ts05.jpg'} alt='' width={200} height={100}></Image><p>T-Shirt 05</p></div>
      <div><Image src={'/t-shirt/ts06.jpg'} alt='' width={200} height={100}></Image><p>T-Shirt 06</p></div>
      <div><Image src={'/t-shirt/ts07.jpg'} alt='' width={200} height={100}></Image><p>T-Shirt 07</p></div>
      <div><Image src={'/t-shirt/ts07.jpg'} alt='' width={200} height={100}></Image><p>T-Shirt 08</p></div>
    </div>

    </>
  )
}