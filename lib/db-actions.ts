import sql from '@/db';


export async function storeUser(fName:any, lName:any, email:any, phone:any, address:any, password:any){
    const storeUser = await sql`
    insert into users (f_name, l_name, email, phone, address, password)
    values (${fName}, ${lName}, ${email}, ${phone}, ${address}, ${password})
    returning id
    `
    return storeUser
}
export async function getUserbyEmail(email:any) {
  const user = await sql`
    select * from users
    where email = ${email}
  `
  return user
}

