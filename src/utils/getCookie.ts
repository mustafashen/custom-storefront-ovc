'use server'
 
import { cookies } from 'next/headers'
 
async function getCookie() {
  const token = cookies().get('accessToken')
  return token
}

export {
  getCookie
}