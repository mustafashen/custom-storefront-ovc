import { shopifyFetch } from "@/services/shopifyFetch"

async function loginCustomer(newSession: any) {
  console.log(newSession)
  const res = await shopifyFetch({
    query: `
    mutation {
      customerAccessTokenCreate(input: 
        {email: $email, 
        password: $password}) {
        customerAccessToken {
          accessToken
        }
        customerUserErrors {
          message
        }
      }
    }`
  , variables: {
      email: newSession.email,
      password: newSession.password
  }})
  
  return res
}

export {
  loginCustomer
}