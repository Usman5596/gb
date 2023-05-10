import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className=' p-[50px]'>
      <h1 className=' font-bold text-4xl border-l-yellow-600 border-l-[6px] pl-[8px]'>Weight Lifting Belt</h1>
      </div>

      <div className=' flex justify-center gap-20 text-center'>
      <div><Image src={'/lifting-belt/wlb01.jpg'} alt='' width={200} height={100}></Image><p>WLB 01</p></div>
      <div><Image src={'/lifting-belt/wlb02.jpg'} alt='' width={200} height={100}></Image><p>WLB 02</p></div>
      <div><Image src={'/lifting-belt/wlb03.jpg'} alt='' width={200} height={100}></Image><p>WLB 03</p></div>
      <div><Image src={'/lifting-belt/wlb04.jpg'} alt='' width={200} height={100}></Image><p>WLB 04</p></div>
    </div>

    <div className=' flex justify-center gap-20 pt-[60px] text-center'>
      <div><Image src={'/lifting-belt/wlb05.jpg'} alt='' width={200} height={100}></Image><p>WLB 05</p></div>
      <div><Image src={'/lifting-belt/wlb06.jpg'} alt='' width={200} height={100}></Image><p>WLB 06</p></div>
      <div><Image src={'/lifting-belt/wlb07.png'} alt='' width={200} height={100}></Image><p>WLB 07</p></div>
      <div><Image src={'/lifting-belt/wlb08.png'} alt='' width={200} height={100}></Image><p>WLB 08</p></div>
    </div>

    </>
  )
}