"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

function About(){
    
const router=useRouter()
    
    return(
        <main>
            <h1>About Page</h1>
            <Link href="/">Go to HomePage</Link>
            <button onClick={()=>{return router.push("/")}}>Go to HomePage</button>
        </main>
    )
}
export default About