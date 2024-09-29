'use client'
import { useRouter } from "next/navigation"
export default function Buttons(){
    const route = useRouter()
    return(
        <div className="buttons">
        <u><b> Buttons;</b></u>
        <br/>
        <p className="buttons">
        <button className="b4" onClick={()=>route.push('/About')}>About</button>
        <br/>
        <button className="b4"onClick={()=>route.push('/Footer')}>Footer</button>
        <button className="b4"onClick={()=>route.push('/')}>Home Page</button>
        <br/>
        <button className="b4"onClick={()=>route.push('/Contact')}>Contact</button>
        {/* <br/> */}
        <button className="b4"onClick={()=>route.push('/Navbar')}>Navbar</button>
        </p>
        </div>
    )
}