'use server'
import { shopifyFetch } from "@/services/shopifyFetch"

// TODO: createLinesAdd expects merchandise id, product id doesn't work found a fix for this
async function cartLinesAdd() {
  const res = await shopifyFetch({
    query: `mutation {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
        }
        userErrors {
          code
          message
        }
      }
    }
    `})

  return res
}

export {
  cartLinesAdd
}