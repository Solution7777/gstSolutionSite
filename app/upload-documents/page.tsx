'use client'

import { uploadDocuments } from "@/lib/actions"
import { useActionState } from "react"
import Image from "next/image"

export default function DocumentUploadPage(){
    const [formState, formAction] = useActionState<any, FormData>(uploadDocuments, {})
    
    return (
        <>
            <h1 className="text-center m-20">Upload your document here</h1>
            <form className="mx-12" action={formAction}>
            <label className="block mb-2" htmlFor="Image">Upload PAN Card Image</label>
            
            <div className="block w-72 h-36  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                {formState.url ? <Image src={formState.url} alt="No image" width={200} height={100}></Image> : <p>Upload image</p>}
            </div>

                <input className="w-72 h-10 file:p-1 file:bg-gradient-to-r from-cyan-500 to-blue-500 file:text-white p-1 rounded-md mt-2 mb-4 border border-slate-900" type="file" accept="image/png, image/jpeg, image/jpg" id="image" name="image" required />
                <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Upload</button>
                </form>
        </>
    )
}