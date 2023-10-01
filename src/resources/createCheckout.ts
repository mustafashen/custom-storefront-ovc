'use server'
import { shopifyFetch } from "@/services/shopifyFetch"

async function createCheckout({countryCode, quantity, id}: any) {
  const res = await shopifyFetch({
    query: `mutation {
      checkoutCreate(input: { 
        buyerIdentity: {
          countryCode: "${countryCode}"
        },
        lineItems: [
         {
          quantity: ${quantity},
          variantId: ${id}
         } 
        ]
      }) {
        checkout {
          webURL
        }
        checkoutUserErrors {
        }
        queueToken
      }
    }
    `})

  return res
}

export {
  createCheckout
}