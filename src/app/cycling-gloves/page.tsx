import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Cycling Gloves</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/cycling-glove/cg01.jpg'} alt='' width={200} height={100}></Image><p>Cycling Gloves 01</p></div>
      <div><Image src={'/cycling-glove/cg02.jpg'} alt='' width={200} height={100}></Image><p>Cycling Gloves 02</p></div>
      <div><Image src={'/cycling-glove/cg03.jpeg'} alt='' width={200} height={100}></Image><p>Cycling Gloves 03</p></div>
      <div><Image src={'/cycling-glove/cg04.jpeg'} alt='' width={200} height={100}></Image><p>Cycling Gloves 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/cycling-glove/cg05.jpg'} alt='' width={200} height={100}></Image><p>Cycling Gloves 05</p></div>
      <div><Image src={'/cycling-glove/cg06.jpg'} alt='' width={200} height={100}></Image><p>Cycling Gloves 06</p></div>
      <div><Image src={'/cycling-glove/cg07.jpg'} alt='' width={200} height={100}></Image><p>Cycling Gloves 07</p></div>
      <div><Image src={'/cycling-glove/cg08.jpg'} alt='' width={200} height={100}></Image><p>Cycling Gloves 08</p></div>
    </div>

    </>
  )
}
