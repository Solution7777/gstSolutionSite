import sql from '@/db';

export async function getUsers() {
  const users = await sql`
    select * from users
  `
  // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
  return users
}
