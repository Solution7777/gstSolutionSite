'use server'

import { createAuthSession } from "./lucia-auth";
import { verifyPassword } from "./hash";
import { getUserbyEmail, storeUser } from "./db-actions";
import { hashUserPassword } from "./hash";
import { redirect } from "next/navigation";

export async function signUp(formData){
    const email = formData.get('email');
    const password = formData.get('password');
   //  const repeatPassword = formData.get('repeat_pasword');
    const firstName = formData.get("first_name");
    const lastName = formData.get('last_name');
    const phone = formData.get('phone');
    const address = formData.get('address');

    const hashedPassword = hashUserPassword(password)

   const resultArr = await storeUser(firstName, lastName, email, phone, address, hashedPassword);
   console.log(resultArr)
   const id = resultArr[0].id;
   await createAuthSession(id);
   return redirect('/login')
}

export async function login(prevState, formData){
   const email = formData.get('email');
   const password = formData.get('password');

   const existingUser = await getUserbyEmail(email);
   if (existingUser.length == 0 ){
      return {
         error: "You are not a valid user"
      }
   }
   const isValidPassword = verifyPassword(existingUser[0].password, password);
   if(!isValidPassword){
       return {
           error: "Wrong password!"
       }
   }
   await createAuthSession(existingUser[0].id);
   return redirect("/")
}