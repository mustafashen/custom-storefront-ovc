'use server'
import { shopifyFetch } from "@/services/shopifyFetch"

async function getProduct(id: string) {
  
  const res = await shopifyFetch({
    query: `
    {
      product(id: "${id}") {
        title
        description
        images(first: 10) {
          edges {
            node {
              url
            }
          }
        }
        variants(first: 100) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }`
  })
  
  return res
}

export {
  getProduct
}