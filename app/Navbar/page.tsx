import React from "react";
import Links from "../Links/page";
import Buttons from "../Buttons/page";

export default function Navbar(){
    return(
    <>
    
<span className='heading'>
    <b>Navbar</b>
    </span> 
    <div>
        <hr style={{
      border: '1px solid #000', margin: '20px 0' }}/>

    </div>
    <Buttons/>       
      <Links/>
      
    
    </>
    )
}