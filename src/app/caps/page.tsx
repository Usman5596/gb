import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Caps</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/caps/cap01.jpg'} alt='' width={200} height={100}></Image><p>Caps 01</p></div>
      <div><Image src={'/caps/cap02.jpeg'} alt='' width={200} height={100}></Image><p>Caps 02</p></div>
      <div><Image src={'/caps/cap03.jpg'} alt='' width={200} height={100}></Image><p>Caps 03</p></div>
      <div><Image src={'/caps/cap04.jpg'} alt='' width={200} height={100}></Image><p>Caps 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/caps/cap05.jpg'} alt='' width={200} height={100}></Image><p>Caps 05</p></div>
      <div><Image src={'/caps/cap06.jpg'} alt='' width={200} height={100}></Image><p>Caps 06</p></div>
      <div><Image src={'/caps/cap07.jpg'} alt='' width={200} height={100}></Image><p>Caps 07</p></div>
      <div><Image src={'/caps/cap08.png'} alt='' width={200} height={100}></Image><p>Caps 08</p></div>
    </div>

    </>
  )
}
