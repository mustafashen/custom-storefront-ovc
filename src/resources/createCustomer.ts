import { shopifyFetch } from "@/services/shopifyFetch";

interface Customer {
  email: string,
  password: string,
  name: string,
  lastName: string
}
// TODO: 
// Fix query notations
// Fix query response parse errors
async function createCustomer(customer: Customer) {
  const res = shopifyFetch({
    query: `{
      customerCreate(input: {
        email: "${customer.email}",
        password: "${customer.password}",
        firstName: "${customer.name}",
        lastName: "${customer.lastName}"
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