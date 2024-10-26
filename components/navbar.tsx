
import { verifyAuth } from "@/lib/lucia-auth";
import Link from "next/link";

export default function Navbar(){
   
    return (
        <> 
        <div className="flex m-2 p-2 justify-between">
         <Link href={"/"}><h1 className="px-4 text-2xl font-extrabold">GST Solution</h1></Link> 
         <div>
         <Link href={"/signup"} className="px-2">Sign up</Link>
         <Link href={"/login"} className="px-2">Login</Link>     
        </div>
        </div>   
        </>
    )
}