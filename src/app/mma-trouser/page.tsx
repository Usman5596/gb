import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Team Uniform</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/mma-trouser/mat01.jpeg'} alt='' width={200} height={100}></Image><p>Team Uniform 01</p></div>
      <div><Image src={'/mma-trouser/mat02.jpg'} alt='' width={200} height={100}></Image><p>Team Uniform 02</p></div>
      <div><Image src={'/mma-trouser/mat03.jpg'} alt='' width={200} height={100}></Image><p>Team Uniform 03</p></div>
      <div><Image src={'/mma-trouser/mat04.jpg'} alt='' width={200} height={100}></Image><p>Team Uniform 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/mma-trouser/mat05.jpg'} alt='' width={200} height={100}></Image><p>Team Uniform 05</p></div>
      <div><Image src={'/mma-trouser/mat06.jpg'} alt='' width={200} height={100}></Image><p>Team Uniform 06</p></div>
      <div><Image src={'/mma-trouser/mat07.jpg'} alt='' width={200} height={100}></Image><p>Team Uniform 07</p></div>
      <div><Image src={'/mma-trouser/mat08.jpg'} alt='' width={200} height={100}></Image><p>Team Uniform 08</p></div>
    </div>

    </>
  )
}