import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className=' flex justify-between items-center px-[70px] py-[15px] w-full bg-black'>
        <div>
            <Link href='/'><Image src={'/logo.jpg'} alt='logo' height={150} width={150} /></Link>
        </div>
        <div>
            <ul className="flex space-x-[40px] text-lg font-bold text-white font-sans">
                <li className=' hover:bg-green-600 px-3 py-1 '>
                    <Link href='/'>HOME</Link>
                </li>
                <li className=' hover:bg-green-600 px-3 py-1 '>
                    <Link href='./about' target='_blank'>ABOUT</Link>
                </li>
                <li className=' hover:bg-green-600 px-3 py-1 '>
                    <Link href='./products' target='_blank'>PRODUCTS</Link>
                </li>
                <li className=' hover:bg-green-600 px-3 py-1 '>
                    <Link href='/'>COMMITMENT</Link>
                </li>
            </ul>
        </div>
        <div>
            <button className='bg-white font-bold rounded-2xl px-[7px] py-[7px] hover:bg-green-600'>CONTACT US</button>
        </div>
    </div>
  )
}
