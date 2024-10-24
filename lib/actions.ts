'use server'

import { getUsers } from "./db-actions"

export default async function getAllUsers(){
   const data = await getUsers();

   console.log(data)

}