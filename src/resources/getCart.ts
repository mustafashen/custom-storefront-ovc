'use server'
import { shopifyFetch } from "@/services/shopifyFetch"
import { getCookie } from "@/utils/getCookie"

async function getCart() {
  const cookie = await getCookie('cartID')
  const cartID = cookie?.value
  const res = await shopifyFetch({
    query: `
    query {
      cart(id: "${cartID}") {
          lines(first: 100) {
          edges {
            node {
              id

            }
          }
        }
      }
    }`
  })
  
  return res
}

export {
  getCart
}