"use client"
import Link from "next/link"
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function HomePage() {
  const router=useRouter();
  
  return (
    <main >
      <h1><b>
        HomePage </b></h1>
        <Link href="/login">Go to login page</Link>
        <br></br>
        <Link href="/about">Go to about page</Link>
        <br></br>
        <Link href="/contacts">Go to  contacts page</Link>
        <br></br>
        <button onClick={()=>{return router.push("/login")}}> Go to login page</button>
        <button onClick={()=>{return router.push("/contacts")}}>Go to contacts page</button>
        <button onClick={()=>{return router.push("/about")}}>Go to about page</button>

     

    </main>
  );
}

//React is a javascript library and library is a specific code of task while on the other hand framework is 
// a multiple set of librar

// Next.js is a framework of react and we write react in next.js but with some extra featues like in 
// React we can't do seo but in Next.js google can seo to promote any website or webapp.
// React componants are reusable piece of code 
// In React componants output will be compulsory beacuse we write some html or css code in react componant
// on the other hand , there is not compulsory that a function will show output .