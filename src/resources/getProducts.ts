import { shopifyFetch } from "@/services/shopifyFetch"

async function getProducts() {

  const res = await shopifyFetch({
    query: `{
        products(first: 100) {
          edges{
            node {
              id
              title
              description
            }
          }
        }
      }`
  })
  
  return res
}

export {
  getProducts
}