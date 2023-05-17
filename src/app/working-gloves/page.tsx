import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Working Gloves</h1>
      </div>

      <div className=' flex justify-center gap-20'>
      <div><Image src={'/working-glove/wg01.png'} alt='' width={200} height={100}></Image><p>Working Gloves 001</p></div>
      <div><Image src={'/working-glove/wg02.png'} alt='' width={200} height={100}></Image><p>Working Gloves 002</p></div>
      <div><Image src={'/working-glove/wg03.png'} alt='' width={200} height={100}></Image><p>Working Gloves 003</p></div>
      <div><Image src={'/working-glove/wg04.png'} alt='' width={200} height={100}></Image><p>Working Gloves 004</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px]'>
      <div><Image src={'/working-glove/wg05.png'} alt='' width={200} height={100}></Image><p>Working Gloves 005</p></div>
      <div><Image src={'/working-glove/wg06.png'} alt='' width={200} height={100}></Image><p>Working Gloves 006</p></div>
      <div><Image src={'/working-glove/wg07.png'} alt='' width={200} height={100}></Image><p>Working Gloves 007</p></div>
      <div><Image src={'/working-glove/wg08.png'} alt='' width={200} height={100}></Image><p>Working Gloves 008</p></div>
    </div>
    </>
  )
}