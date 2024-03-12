'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function layout({children}) {
    const pathname=usePathname();
    console.log(pathname);
  return (
    <div>
        {/* <h1>This is my layout page</h1> */}
        {
            pathname !=='/login/main' && pathname!=="/login/studentlist"&& 
            <ul className='flex '>
            <li className='m-3 '><Link href={"/login"}>go to login page</Link></li>
            <li className='m-3'><Link href={"/login/home"}>go to home page</Link></li>
            <li className='m-3'><Link href={"/login/main"}>go to main page</Link></li>
        </ul>
        }
        
        {
            children
        }
    </div>
  )
}

export default layout