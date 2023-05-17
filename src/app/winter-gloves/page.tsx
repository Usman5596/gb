import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Winter Gloves</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/winter-glove/wg01.jpg'} alt='' width={200} height={100}></Image><p>Winter Gloves 01</p></div>
      <div><Image src={'/winter-glove/wg02.jpg'} alt='' width={200} height={100}></Image><p>Winter Gloves 02</p></div>
      <div><Image src={'/winter-glove/wg03.jpg'} alt='' width={200} height={100}></Image><p>Winter Gloves 03</p></div>
      <div><Image src={'/winter-glove/wg04.jpg'} alt='' width={200} height={100}></Image><p>Winter Gloves 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/winter-glove/wg05.jpg'} alt='' width={200} height={100}></Image><p>Winter Gloves 05</p></div>
      <div><Image src={'/winter-glove/wg06.jpg'} alt='' width={200} height={100}></Image><p>Winter Gloves 06</p></div>
      <div><Image src={'/winter-glove/wg07.jpg'} alt='' width={200} height={100}></Image><p>Winter Gloves 07</p></div>
      <div><Image src={'/winter-glove/wg08.jpg'} alt='' width={200} height={100}></Image><p>Winter Gloves 08</p></div>
    </div>

    </>
  )
}
