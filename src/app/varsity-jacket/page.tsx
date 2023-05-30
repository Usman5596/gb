import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Varsity Jacket</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/varsity-jacket/vj01.jpg'} alt='' width={200} height={100}></Image><p>Varsity Jacket 01</p></div>
      <div><Image src={'/varsity-jacket/vj02.jpg'} alt='' width={200} height={100}></Image><p>Varsity Jacket 02</p></div>
      <div><Image src={'/varsity-jacket/vj03.jpg'} alt='' width={200} height={100}></Image><p>Varsity Jacket 03</p></div>
      <div><Image src={'/varsity-jacket/vj04.jpg'} alt='' width={200} height={100}></Image><p>Varsity Jacket 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/varsity-jacket/vj05.jpg'} alt='' width={200} height={100}></Image><p>Varsity Jacket 05</p></div>
      <div><Image src={'/varsity-jacket/vj06.jpg'} alt='' width={200} height={100}></Image><p>Varsity Jacket 06</p></div>
      <div><Image src={'/varsity-jacket/vj07.jpg'} alt='' width={200} height={100}></Image><p>Varsity Jacket 07</p></div>
      <div><Image src={'/varsity-jacket/vj08.jpg'} alt='' width={200} height={100}></Image><p>Varsity Jacket 08</p></div>
    </div>

    </>
  )
}
