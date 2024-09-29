'use client';
import Links from './Links/page';
import { useRouter } from 'next/navigation';
import React from 'react'
import Buttons from './Buttons/page';


export default function page() {
 const route = useRouter();
  return (
    <div >
    <span className='heading'>
    <b>Home Page</b>
    </span> 
    <hr style={{
      border: '1px solid #000', margin: '20px 0' }}/>
    <div style = {{display:'-webkit-flex', margin:'20px'}}>
      <nav>
    <Buttons/>  <Links/>
      </nav>
    
    
    </div>
    
    </div>

  )
}


