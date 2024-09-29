
import Links from "../Links/page";
import Buttons from "../Buttons/page";
import Link from "next/link";

import React from "react";

const Contact = () => {

  return (
    <>
      <span style={{fontSize:'40px'}}><h1><b><i>Contact Info;</i></b></h1>
      <hr style={{
      border: '1px solid #000', margin: '20px 0' }}/>
    
      </span>
     <div style={{background:'pink', fontSize:'20px'}}>

      <ol>
        <u>
          <li>
            <Link href="https://www.linkedin.com/in/syed-yazdan-haider-5179a224a/">
              Linkdein
            </Link>
          </li>
          <li>
            <Link href="https://github.com/SyedYazdanHaider">Github</Link>
          </li>
        </u>
          <li>
            <Link href="gmail.com"><u>Email:</u>
             &nbsp;yhzaidi7@gmail.com</Link>

          </li>
      </ol>

     </div>
     &nbsp;
      <Buttons/>
      
    <Links/>

    </>
  );
};
export default Contact;
