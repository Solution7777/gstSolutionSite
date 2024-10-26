import sql from '@/db'

export async function storeUser(email, first_name, last_name, phoneNumber, company, password) {
  const user = await sql`
    insert into user (email, f_name, l_name, phone_number, company, password)
    values (${email}, ${first_name}, ${last_name}, ${phoneNumber}, ${company}, ${password})`
  return user;
}
