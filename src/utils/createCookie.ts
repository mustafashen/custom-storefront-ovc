'use server'
 
import { cookies } from 'next/headers'
 
async function createCookie(name: string, token: string) {
  cookies().set(name, token)
}

export {
  createCookie
}