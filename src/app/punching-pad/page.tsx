import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Punching Pad</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/punch-pad/pp01.png'} alt='' width={200} height={100}></Image><p>Punching Pad 01</p></div>
      <div><Image src={'/punch-pad/pp02.jpg'} alt='' width={200} height={100}></Image><p>Punching Pad 02</p></div>
      <div><Image src={'/punch-pad/pp03.jpg'} alt='' width={200} height={100}></Image><p>Punching Pad 03</p></div>
      <div><Image src={'/punch-pad/pp04.jpeg'} alt='' width={200} height={100}></Image><p>Punching Pad 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/punch-pad/pp05.jpg'} alt='' width={200} height={100}></Image><p>Punching Pad 05</p></div>
      <div><Image src={'/punch-pad/pp06.jpg'} alt='' width={200} height={100}></Image><p>Punching Pad 06</p></div>
      <div><Image src={'/punch-pad/pp07.jpg'} alt='' width={200} height={100}></Image><p>Punching Pad 07</p></div>
      <div><Image src={'/punch-pad/pp08.jpg'} alt='' width={200} height={100}></Image><p>Punching Pad 08</p></div>
    </div>

    </>
  )
}