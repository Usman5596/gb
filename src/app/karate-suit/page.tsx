import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Karate Suit</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/karate-suit/ks01.jpg'} alt='' width={200} height={100}></Image><p>Karate Suit 01</p></div>
      <div><Image src={'/karate-suit/ks02.jpg'} alt='' width={200} height={100}></Image><p>Karate Suit 02</p></div>
      <div><Image src={'/karate-suit/ks03.jpg'} alt='' width={200} height={100}></Image><p>Karate Suit 03</p></div>
      <div><Image src={'/karate-suit/ks04.jpg'} alt='' width={200} height={100}></Image><p>Karate Suit 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/karate-suit/ks05.jpg'} alt='' width={200} height={100}></Image><p>Karate Suit 05</p></div>
      <div><Image src={'/karate-suit/ks06.jpg'} alt='' width={200} height={100}></Image><p>Karate Suit 06</p></div>
      <div><Image src={'/karate-suit/ks07.jpg'} alt='' width={200} height={100}></Image><p>Karate Suit 07</p></div>
      <div><Image src={'/karate-suit/ks08.jpg'} alt='' width={200} height={100}></Image><p>Karate Suit 08</p></div>
    </div>

    </>
  )
}