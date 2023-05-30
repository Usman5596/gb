import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Motorbike Garment</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/motorbike/bj01.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Garment 01</p></div>
      <div><Image src={'/motorbike/bj02.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Garment 02</p></div>
      <div><Image src={'/motorbike/bj03.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Garment 03</p></div>
      <div><Image src={'/motorbike/bj04.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Garment 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/motorbike/bj05.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Garment 05</p></div>
      <div><Image src={'/motorbike/bj06.jpeg'} alt='' width={200} height={100}></Image><p>Motorbike Garment 06</p></div>
      <div><Image src={'/motorbike/bj07.jpeg'} alt='' width={200} height={100}></Image><p>Motorbike Garment 07</p></div>
      <div><Image src={'/motorbike/bj08.jpg'} alt='' width={200} height={100}></Image><p>Motorbike Garment 08</p></div>
    </div>

    </>
  )
}
