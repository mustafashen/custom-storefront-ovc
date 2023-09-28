'use server'
 
import { cookies } from 'next/headers'
 
async function createCookie(token: string) {
  cookies().set('accessToken', token)
}

export {
  createCookie
}