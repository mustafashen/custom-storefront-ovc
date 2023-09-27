import { shopifyFetch } from "@/services/shopifyFetch"

async function createCustomer(newCustomer: any) {
  const {email, password, firstName, lastName} = newCustomer
  const res = await shopifyFetch({
    query: `
    mutation {
      customerCreate(input: {
        email: "${email}",
        password: "${password}",
        firstName: "${firstName}",
        lastName: "${lastName}",
      }) {
        customer {
           id
           email
        }
      }
    }`})
  
  return res
}

export {
  createCustomer
}