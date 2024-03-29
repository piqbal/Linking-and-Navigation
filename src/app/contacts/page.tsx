"use client"
import Link from "next/link"
import {useRouter} from "next/navigation"

const contacts=()=>{
    
const router=useRouter()
    return(
        <div>
        <h1>About Contacts</h1>
        
        <Link href="/">Go to homepage</Link>
        <button onClick={()=> {return router.push("/")}}> Go to homepage</button>
        </div>
    )
}
export default contacts