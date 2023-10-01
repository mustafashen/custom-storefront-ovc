'use server'
import { shopifyFetch } from "@/services/shopifyFetch"

async function cartLinesAdd(cartId: string, lines: {merchandiseId: string, quantity: number}[]) {
  const {merchandiseId, quantity} = lines[0]
  const res = await shopifyFetch({
    query: `mutation {
      cartLinesAdd(
        cartId: "${cartId}",
        lines: {merchandiseId: "${merchandiseId}", quantity:  ${quantity}}
      ) {
        cart {
          id
          totalQuantity
        }
      }
    }
    `})

  return res
}

export {
  cartLinesAdd
}