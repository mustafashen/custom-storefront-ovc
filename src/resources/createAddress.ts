'use server'
import { shopifyFetch } from "@/services/shopifyFetch"

async function createAddress(newAddress: any, token: string) {
  console.log(newAddress, token)
  const res = await shopifyFetch({
    query: `mutation {
      customerAddressCreate(address: {
        address1: "${newAddress.address1}",
        address2: "${newAddress.address2}",
        city: "${newAddress.city}",
        company: "${newAddress.company}",
        country: "${newAddress.country}",
        firstName: "${newAddress.firstName}",
        lastName: "${newAddress.lastName}",
        phone: "${newAddress.phone}",
        province: "${newAddress.province}",
        zip: "${newAddress.zip}"
      }, customerAccessToken: "${token}") {
        customerAddress {
          name
        }
        customerUserErrors {
          code
          message
        }
      }
    }
    `})
  
  return res
}

export {
  createAddress
}