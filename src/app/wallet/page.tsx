import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Wallet</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/wallet/w01.webp'} alt='' width={200} height={100}></Image><p>Wallet 01</p></div>
      <div><Image src={'/wallet/w02.webp'} alt='' width={200} height={100}></Image><p>Wallet 02</p></div>
      <div><Image src={'/wallet/w03.webp'} alt='' width={200} height={100}></Image><p>Wallet 03</p></div>
      <div><Image src={'/wallet/w04.jpg'} alt='' width={200} height={100}></Image><p>Wallet 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/wallet/w05.jpg'} alt='' width={200} height={100}></Image><p>Wallet 05</p></div>
      <div><Image src={'/wallet/w06.jpg'} alt='' width={200} height={100}></Image><p>Wallet 06</p></div>
      <div><Image src={'/wallet/w07.jpg'} alt='' width={200} height={100}></Image><p>Wallet 07</p></div>
      <div><Image src={'/wallet/w08.jpg'} alt='' width={200} height={100}></Image><p>Wallet 08</p></div>
    </div>

    </>
  )
}
