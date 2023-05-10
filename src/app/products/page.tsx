import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export default function Page() {
  return (

    
    <div className=' flex align-middle gap-[30px] p-[30px]'>
        <div className='w-1/5'><Image src={'/swa.webp'} alt='sw' width={350} height={350} className=' rounded-2xl shadow-2xl' />
          <h1 className=' font-bold text-lg pt-[10px] pb-[5px]'>Sports Wear</h1>
          <Link href='./uniform' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500 '>Team Uniform</p></Link>
          <Link href='./t-shirt' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>T-Shirt</p></Link>
          <Link href='./track-suit' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Track Suit</p></Link>
          <Link href='./hoodie' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Hoodies</p></Link>
          <Link href='./caps' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Caps</p></Link>
          <Link href='./sports-bag' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Sport Bag</p></Link>
          </div>

          <div className='w-1/5'><Image src={'/mlg.png'} alt='lg' width={350} height={350} className=' rounded-2xl shadow-2xl' />
          <h1 className=' font-bold text-lg pt-[10px]'>Leather Garments</h1>
          <Link href='./fashion-garment' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Fashion Garment</p></Link>
          <Link href='./varsity-jacket' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Varsity Jacket</p></Link>
          <Link href='./motorbike-garment' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Motorbike Garment</p></Link>
          </div>

          <div className='w-1/5'><Image src={'/las.webp'} alt='lg' width={350} height={350} className=' rounded-2xl shadow-2xl' />
          <h1 className=' font-bold text-lg pt-[10px]'>Leather Accessories</h1>
          <Link href='./bags' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Bags</p></Link>
          <Link href='./belt' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Belt</p></Link>
          <Link href='./wallet' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Wallet</p></Link>
          <Link href='./weight-lifting-belt' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Weight Lifting Belt</p></Link>
          </div>

          <div className='w-1/5'><Image src={'/off.webp'} alt='glv' width={350} height={350} className=' rounded-2xl shadow-2xl' />
          <h1 className=' font-bold text-lg pt-[10px]'>Gloves</h1>
          <Link href='./working-gloves' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Working Gloves</p></Link>
          <Link href='./boxing-gloves' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Boxing Gloves</p></Link>
          <Link href='./mb-gloves' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Motorbike Gloves</p></Link>
          <Link href='./winter-gloves' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Winter Gloves</p></Link>
          <Link href='./summer-gloves' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Summer Gloves</p></Link>
          <Link href='./cycling-gloves' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Cycling Gloves</p></Link>
          </div>

          <div className='w-1/5'><Image src={'/mar.jpeg'} alt='mar' width={350} height={350} className=' rounded-2xl shadow-2xl' />
          <h1 className=' font-bold text-lg pt-[10px] hover:text-yellow-500'>Martial Arts</h1>
          <Link href='./karate-suit' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Karate Suit</p></Link>
          <Link href='./mma-trouser' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>MMA Trouser</p></Link>
          <Link href='./punching-pad' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Punching Pad</p></Link>
          <Link href='./wl-belt' target='_blank'><p className=' text-xs text-stone-500 hover:text-yellow-500'>Weight Lifting Belt</p></Link>
          </div>
          
          </div>
  )
}
