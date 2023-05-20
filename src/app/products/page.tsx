import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export default function Page() {
  return (

    
    <div className=' flex align-middle gap-[30px] px-[30px] pt-[30px] pb-[30px]' id='product'>
        <div className='w-1/5 bg-gray-700 p-4 rounded-2xl'><Image src={'/swa.webp'} alt='sw' width={350} height={350} className=' rounded-2xl shadow-2xl' />
          <h1 className=' font-bold text-lg pt-[10px] pb-[5px] hover:text-rose-600 text-white'>Sports Wear</h1>
          <Link href='./uniform' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Team Uniform</p></Link>
          <Link href='./t-shirt' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>T-Shirt</p></Link>
          <Link href='./track-suit' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Track Suit</p></Link>
          <Link href='./hoodie' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Hoodies</p></Link>
          <Link href='./caps' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Caps</p></Link>
          <Link href='./sports-bag' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Sport Bag</p></Link>
          </div>

          <div className='w-1/5 bg-gray-700 p-4 rounded-2xl'><Image src={'/mlg.png'} alt='lg' width={350} height={350} className=' rounded-2xl shadow-2xl' />
          <h1 className=' font-bold text-lg pt-[10px] hover:text-rose-600 text-white'>Leather Garments</h1>
          <Link href='./fashion-garment' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Fashion Garment</p></Link>
          <Link href='./varsity-jacket' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Varsity Jacket</p></Link>
          <Link href='./motorbike-garment' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Motorbike Garment</p></Link>
          </div>

          <div className='w-1/5 bg-gray-700 p-4 rounded-2xl'><Image src={'/las.webp'} alt='lg' width={350} height={350} className=' rounded-2xl shadow-2xl' />
          <h1 className=' font-bold text-lg pt-[10px] hover:text-rose-600 text-white'>Leather Accessories</h1>
          <Link href='./bags' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Bags</p></Link>
          <Link href='./belt' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Belt</p></Link>
          <Link href='./wallet' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Wallet</p></Link>
          <Link href='./weight-lifting-belt' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Weight Lifting Belt</p></Link>
          </div>

          <div className='w-1/5 bg-gray-700 p-4 rounded-2xl'><Image src={'/off.webp'} alt='glv' width={350} height={350} className=' rounded-2xl shadow-2xl' />
          <h1 className=' font-bold text-lg pt-[10px] hover:text-rose-600 text-white'>Gloves</h1>
          <Link href='./working-gloves' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Working Gloves</p></Link>
          <Link href='./boxing-gloves' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Boxing Gloves</p></Link>
          <Link href='./mb-gloves' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Motorbike Gloves</p></Link>
          <Link href='./winter-gloves' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Winter Gloves</p></Link>
          <Link href='./summer-gloves' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Summer Gloves</p></Link>
          <Link href='./cycling-gloves' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Cycling Gloves</p></Link>
          </div>

          <div className='w-1/5 bg-gray-700 p-4 rounded-2xl'><Image src={'/mar.jpeg'} alt='mar' width={350} height={350} className=' rounded-2xl shadow-2xl' />
          <h1 className=' font-bold text-lg pt-[10px] hover:text-rose-600 text-white'>Martial Arts</h1>
          <Link href='./karate-suit' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Karate Suit</p></Link>
          <Link href='./mma-trouser' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>MMA Trouser</p></Link>
          <Link href='./punching-pad' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Punching Pad</p></Link>
          <Link href='./wl-belt' target='_blank'><p className=' font-semibold text-xs text-white hover: hover:text-rose-600'>Weight Lifting Belt</p></Link>
          </div>
          
          </div>
  )
}
