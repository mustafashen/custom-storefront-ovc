'use server'
import { shopifyFetch } from "@/services/shopifyFetch"
import { createCookie } from "@/utils/createCookie"

async function createCart(accessToken: any) {
  const res = await shopifyFetch({
    query: `mutation {
      cartCreate(input: {
        buyerIdentity: {
          customerAccessToken: "${accessToken}"
        }
      }) {
        cart {
          id
          totalQuantity
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