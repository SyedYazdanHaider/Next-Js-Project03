
import Links from "../Links/page";

import Buttons from "../Buttons/page";

export default function AboutPage() {

    return(
        <div>
        <div className="About">
            <span className="heading"><b><i>Details:  </i></b></span>
        </div>
        <hr style={{
      border: '1px solid #000', margin: '20px 0' }}/>
        <p style={{fontSize:'20px'}} >
            <u>Name:</u><b> Syed Yazdan Haider Zaidi</b>
            <br/>
            <u>GIAIC Id:</u> 00221390
            <br/>
            <u>Days/Time</u> Monday-02:00 PM - 05:00 PM 
        </p>
        <br/>
        <Buttons/>

      
        <Links/>

        </div>
    )
}