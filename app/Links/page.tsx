'use client'
import Link from 'next/link'
import React from 'react'


const links = () => {
  return (
    <div className='links'>
        <b><u>LINKS:</u></b>
      <ul>
        <u>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Footer">Footer</Link>
          </li>
            
            <li>
            <Link href="/">Home Page</Link>
            </li>
          <li>
            <Link href="/Navbar">Navbar</Link>
          </li>
        </u>
      </ul>
    </div>
  )
}

export default links
