'use server'

import { uploadImage } from "./cloudinaray";

export async function uploadDocuments(formData){
    const image = formData.get('image')
    let imageUrl
try{
    imageUrl = await uploadImage(image)
}catch (error){
    throw new Error('Image upload failed. Try again')
}
return {
    url: imageUrl
}
}