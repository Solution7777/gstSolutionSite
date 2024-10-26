'use server'

import { storeUser } from '@/lib/sql-actions'

export async function registerUser(formData){

    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeat_password');
    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');
    const phoneNumber = formData.get('phone');
    const company = formData.get('company');

    console.log(email, firstName, lastName, phoneNumber, company, password)

    await storeUser(email, firstName, lastName, phoneNumber, company, password)    
}