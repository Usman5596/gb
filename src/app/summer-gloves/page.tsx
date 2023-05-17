import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Summer Gloves</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/summer-glove/sg01.jpg'} alt='' width={200} height={100}></Image><p>Summer Gloves 01</p></div>
      <div><Image src={'/summer-glove/sg02.jpg'} alt='' width={200} height={100}></Image><p>Summer Gloves 02</p></div>
      <div><Image src={'/summer-glove/sg03.jpg'} alt='' width={200} height={100}></Image><p>Summer Gloves 03</p></div>
      <div><Image src={'/summer-glove/sg04.jpg'} alt='' width={200} height={100}></Image><p>Summer Gloves 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/summer-glove/sg05.jpg'} alt='' width={200} height={100}></Image><p>Summer Gloves 05</p></div>
      <div><Image src={'/summer-glove/sg06.jpg'} alt='' width={200} height={100}></Image><p>Summer Gloves 06</p></div>
      <div><Image src={'/summer-glove/sg07.jpg'} alt='' width={200} height={100}></Image><p>Summer Gloves 07</p></div>
      <div><Image src={'/summer-glove/sg08.jpg'} alt='' width={200} height={100}></Image><p>Summer Gloves 08</p></div>
    </div>

    </>
  )
}
