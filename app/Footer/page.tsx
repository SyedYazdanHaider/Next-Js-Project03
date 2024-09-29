

import Links from '../Links/page'

import React from 'react'
import Buttons from '../Buttons/page';

export default function Footer() {

        return (<>
        <span className='heading'>
    <b>Developer Info</b>
    </span> 
    <hr style={{
      border: '1px solid #000', margin: '20px 0' }}/>
    <div style={{fontSize:'20px',padding:'20px'}}>
      Hello!<br/>
      &nbsp;
      My name is Syed Yazdan Haider Zaidi, and I am currently enrolled in A2-Level at 
      <u><i> <a href='https://bcp.net.pk/bcp-gulshan-campus/'> BeaconHouse College</a></i></u>.
    <br/>

    In my recent AS-Level exams, I proudly achieved top grades in Math, Chemistry, and Computer Science, showcasing my dedication and academic prowess.     <b>
    <ol>
        <li>Math: A</li>
        <li>Chemistry: A</li>
        <li>Physics: B</li>
        <li>Computer Science: A</li>
    </ol>
    </b>
    
    <p>
     
      Moreover, I am currently expanding my knowledge in artificial intelligence at <a href='https://www.governorsindh.com/'><i><u><b>GIAIC</b></u></i></a>, while simultaneously imparting my expertise in Math and Physics to students following the Cambridge and Agha Khan board syllabi at a highly respected institute.
      <br/>
    </p>
    </div>
<Buttons/>
    <Links/>
    </>
  )
}

