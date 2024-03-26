"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

function About(){
    const router=useRouter()
    const navigate=(name:string)=>{
        return router.push(name)
    }
    return(
        <main>
            <h1>About Page</h1>
            <Link href="/">Go to HomePage</Link>
            <button onClick={()=>{return navigate("/")}}>Go to HomePage</button>
        </main>
    )
}
export default About