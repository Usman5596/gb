import Image from 'next/image'
import React from 'react'

export default function belt() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Belt</h1>
      </div>

      <div className=' flex justify-center gap-20'>
      <div><Image src={'/jean-belts.jpg'} alt='' width={200} height={100}></Image><p>Jean Belt</p></div>
      <div><Image src={'/jean-belt1.jpg'} alt='' width={200} height={100}></Image><p>Jean Belt</p></div>
      <div><Image src={'/jean-belt2.jpg'} alt='' width={200} height={100}></Image><p>Jean Belt</p></div>
      <div><Image src={'/jean-belt3.jpg'} alt='' width={200} height={100}></Image><p>Jean Belt</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px]'>
      <div><Image src={'/jean-belt4.jpg'} alt='' width={200} height={100}></Image><p>Jean Belt</p></div>
      <div><Image src={'/jean-belt5.jpg'} alt='' width={200} height={100}></Image><p>Jean Belt</p></div>
      <div><Image src={'/s-l300.jpg'} alt='' width={200} height={100}></Image><p>S-L300</p></div>
      <div><Image src={'/suit-belt.jpg'} alt='' width={200} height={100}></Image><p>Suit Belt</p></div>
    </div>

    </>
  )
}

