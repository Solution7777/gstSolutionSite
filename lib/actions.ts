'use server'

import { uploadImage } from "./cloudinaray"

export async function uploadDocuments(preVState:any, formData: FormData){
    const image = formData.get('image')
    let imageUrl
try{
    imageUrl = await uploadImage(image)
}catch (error){
    throw new Error('Image upload failed. Try again')
}
console.log(imageUrl)
return {
    url: imageUrl
}
}