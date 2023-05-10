import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Track Suit</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/t-suit/ts01.jpg'} alt='' width={200} height={100}></Image><p>Track Suit 01</p></div>
      <div><Image src={'/t-suit/ts02.jpg'} alt='' width={200} height={100}></Image><p>Track Suit 02</p></div>
      <div><Image src={'/t-suit/ts03.jpg'} alt='' width={200} height={100}></Image><p>Track Suit 03</p></div>
      <div><Image src={'/t-suit/ts04.jpg'} alt='' width={200} height={100}></Image><p>Track Suit 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/t-suit/ts05.jpg'} alt='' width={200} height={100}></Image><p>Track Suit 05</p></div>
      <div><Image src={'/t-suit/ts06.jpg'} alt='' width={200} height={100}></Image><p>Track Suit 06</p></div>
      <div><Image src={'/t-suit/ts07.jpg'} alt='' width={200} height={100}></Image><p>Track Suit 07</p></div>
      <div><Image src={'/t-suit/ts08.jpg'} alt='' width={200} height={100}></Image><p>Track Suit 08</p></div>
    </div>

    </>
  )
}
