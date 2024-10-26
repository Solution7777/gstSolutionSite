import sql from '@/db';


export async function storeUser(fName:string, lName:string, email:string, phone:number, address:string, password:string){
    const storeUser = await sql`
    insert into users (f_name, l_name, email, phone, address, password)
    values (${fName}, ${lName}, ${email}, ${phone}, ${address}, ${password})
    returning id
    `
    return storeUser
}
export async function getUserbyEmail(email:string) {
  const user = await sql`
    select * from users
    where email = ${email}
  `
  return user
}

