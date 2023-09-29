'use server'
import { shopifyFetch } from "@/services/shopifyFetch"
import { createCookie } from "@/utils/createCookie"

async function createCart() {
  const res = await shopifyFetch({
    query: `mutation {
      cartCreate {
        cart {
          id
          createdAt
          updatedAt
        }
      }
    }
    `})

  if (res.status === 200) {
    const cartID = res.body.data.cartCreate.cart.id
    createCookie('cartID', cartID)
  }
  return res
}

export {
  createCart
}