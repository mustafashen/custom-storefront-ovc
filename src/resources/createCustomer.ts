import { shopifyFetch } from "@/services/shopifyFetch"

async function createCustomer(newCustomer: any) {
  console.log(newCustomer)
  const res = await shopifyFetch({
    query: `
    mutation {
      customerCreate(input: {
        email: $email,
        password: $password,
        firstName: $firstName,
        lastName: $lastName,
      }) {
        customer {
           id
           email
        }
      }
    }`
  , variables: {email: newCustomer.email,
    password: newCustomer.password,
    firstName: newCustomer.firstName,
    lastName: newCustomer.lastName}})
  
  return res
}

export {
  createCustomer
}