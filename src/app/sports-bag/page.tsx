import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Sports Bag</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/sport-bag/sb01.jpg'} alt='' width={200} height={100}></Image><p>Sports Bag 01</p></div>
      <div><Image src={'/sport-bag/sb02.jpg'} alt='' width={200} height={100}></Image><p>Sports Bag 02</p></div>
      <div><Image src={'/sport-bag/sb03.jpg'} alt='' width={200} height={100}></Image><p>Sports Bag 03</p></div>
      <div><Image src={'/sport-bag/sb04.jpg'} alt='' width={200} height={100}></Image><p>Sports Bag 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/sport-bag/sb05.jpg'} alt='' width={200} height={100}></Image><p>Sports Bag 05</p></div>
      <div><Image src={'/sport-bag/sb06.jpg'} alt='' width={200} height={100}></Image><p>Sports Bag 06</p></div>
      <div><Image src={'/sport-bag/sb07.jpg'} alt='' width={200} height={100}></Image><p>Sports Bag 07</p></div>
      <div><Image src={'/sport-bag/sb08.jpg'} alt='' width={200} height={100}></Image><p>Sports Bag 08</p></div>
    </div>

    </>
  )
}
