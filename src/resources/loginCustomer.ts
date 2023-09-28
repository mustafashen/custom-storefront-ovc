"use server"
import { shopifyFetch } from "@/services/shopifyFetch"

async function loginCustomer(newSession: {email: string, password: string}) {

  const res = await shopifyFetch({
    query: `
    mutation customerAccessTokenCreate {
      customerAccessTokenCreate(input: {email: "${newSession.email}", password: "${newSession.password}"}) {
        customerAccessToken {
          accessToken
        }
        customerUserErrors {
          message
        }
      }
    }
    `})
  
  return res
}

export {
  loginCustomer
}