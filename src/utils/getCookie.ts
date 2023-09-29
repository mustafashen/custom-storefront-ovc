'use server'
 
import { cookies } from 'next/headers'
 
async function getCookie(name: string) {
  const token = cookies().get(name)
  return token
}

export {
  getCookie
}