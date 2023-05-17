import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Boxing Gloves</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/boxing-glove/bg01.jpg'} alt='' width={200} height={100}></Image><p>Boxing Gloves 01</p></div>
      <div><Image src={'/boxing-glove/bg02.jpg'} alt='' width={200} height={100}></Image><p>Boxing Gloves 02</p></div>
      <div><Image src={'/boxing-glove/bg03.jpg'} alt='' width={200} height={100}></Image><p>Boxing Gloves 03</p></div>
      <div><Image src={'/boxing-glove/bg04.jpg'} alt='' width={200} height={100}></Image><p>Boxing Gloves 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/boxing-glove/bg05.jpg'} alt='' width={200} height={100}></Image><p>Boxing Gloves 05</p></div>
      <div><Image src={'/boxing-glove/bg06.jpg'} alt='' width={200} height={100}></Image><p>Boxing Gloves 06</p></div>
      <div><Image src={'/boxing-glove/bg07.jpg'} alt='' width={200} height={100}></Image><p>Boxing Gloves 07</p></div>
      <div><Image src={'/boxing-glove/bg08.jpg'} alt='' width={200} height={100}></Image><p>Boxing Gloves 08</p></div>
    </div>

    </>
  )
}
