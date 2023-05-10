import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className=' flex align-middle gap-[150px] p-[40px]'>
        <div>
            <h1 className=' text-3xl font-bold border-l-yellow-600 border-l-[5px] pl-[8px]'>CONTACT INFORMATION</h1>
            <h1 className=' pt-[30px] font-bold'>ADDRESS:</h1>
            <p className=' text-sm flex'>KASHMIR ROAD, PAKKA GHRAH, SIALKOT - 51310 PAKISTAN.</p>
            <h1 className=' font-bold pt-[15px]'>PHONE:</h1>
            <p className=' text-sm'>0092 - 321 - 7146798</p>
            <h1 className=' font-bold pt-[15px]'>EMAIL:</h1>
            <p className=' text-sm flex gap-1'>source.tgb@gmail.com</p>
        </div>
        <div>
        <h1 className='text-3xl font-bold border-l-yellow-600 border-l-[5px] pl-[8px]'>USEFUL LINKS</h1>
        <ul className="text-sm font-bold py-[30px]">
                <li className='py-[4px] hover:text-rose-500'>
                    <Link href='/'>HOME</Link>
                </li>
                <li className=' py-[4px] hover:text-rose-500'>
                    <Link href='/'>ABOUT</Link>
                </li>
                <li className=' py-[4px] hover:text-rose-500'>
                    <Link href='./products'>PRODUCTS</Link>
                </li>
                <li className=' py-[4px] hover:text-rose-500'>
                    <Link href='/'>COMMITMENT</Link>
                </li>
                <li className=' py-[4px] hover:text-rose-500'>
                    <Link href='/'>CONTACT US</Link>
                </li>
            </ul>
        </div>
        <div>
            <h1 className=' text-3xl font-bold border-l-yellow-600 border-l-[5px] pl-[8px]'>FOLLOW US</h1>
            <ul className= " font-extrabold py-[30px] flex gap-1 ">
                <li>
                    <Link href='/'><Image src={'/facebook.png'} alt='fb' width={35} height={35}/></Link>
                </li>
                <li>
                    <Link href='/'><Image src={'/linkedin.png'} alt='link' width={35} height={35}/></Link>
                </li>
                <li>
                    <Link href='/'><Image src={'/instagram.png'} alt='Inst' width={35} height={35}/></Link>
                </li>
                <li>
                    <Link href='/'><Image src={'/twitter.png'} alt='Twit' width={35} height={35}/></Link>
                </li>
                <li>
                    <Link href='/'><Image src={'/youtube.png'} alt='You' width={35} height={35}/></Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
