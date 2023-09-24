import { shopifyFetch } from "@/services/shopifyFetch"

async function createCustomer(newCustomer: any) {

  const res = await shopifyFetch({
    query: `
    mutation {
      customerCreate(input: {
        email: "eun@example.com",
        password: "password123",
        firstName: "John",
        lastName: "Doe"
      }) {
        customer {
           id
           email
        }
      }
    }`
  })
  
  return res
}

export {
  createCustomer
}