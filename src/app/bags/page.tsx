import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Bags</h1>
      </div>

      <div className=' flex justify-center gap-20'>
      <Image src={'/bags/bag01.jpg'} alt='' width={250} height={50}></Image>
      <Image src={'/bags/bag02.jpg'} alt='' width={250} height={50}></Image>
      <Image src={'/bags/bag03.jpg'} alt='' width={250} height={50}></Image>
    </div>

    </>
  )
}
