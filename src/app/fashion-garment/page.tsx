import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Fashion Garment</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/feshion-jacket/fj01.jpg'} alt='' width={200} height={100}></Image><p>Fashion Jacket 01</p></div>
      <div><Image src={'/feshion-jacket/fj02.jpg'} alt='' width={200} height={100}></Image><p>Fashion Jacket 02</p></div>
      <div><Image src={'/feshion-jacket/fj03.jpg'} alt='' width={200} height={100}></Image><p>Fashion Jacket 03</p></div>
      <div><Image src={'/feshion-jacket/fj04.jpg'} alt='' width={200} height={100}></Image><p>Fashion Jacket 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/feshion-jacket/fj05.jpg'} alt='' width={200} height={100}></Image><p>Fashion Jacket 05</p></div>
      <div><Image src={'/feshion-jacket/fj06.jpg'} alt='' width={200} height={100}></Image><p>Fashion Jacket 06</p></div>
      <div><Image src={'/feshion-jacket/fj07.jpg'} alt='' width={200} height={100}></Image><p>Fashion Jacket 07</p></div>
      <div><Image src={'/feshion-jacket/fj08.jpg'} alt='' width={200} height={100}></Image><p>Fashion Jacket 08</p></div>
    </div>

    </>
  )
}
