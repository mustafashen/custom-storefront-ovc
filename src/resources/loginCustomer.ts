"use server"
import { shopifyFetch } from "@/services/shopifyFetch"
import { createCookie } from "@/utils/createCookie"

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

  if (res.status === 200) {
    const accessToken = res.body.data.customerAccessTokenCreate.customerAccessToken.accessToken
    createCookie('accessToken', accessToken)
  }
  
  return res
}

export {
  loginCustomer
}