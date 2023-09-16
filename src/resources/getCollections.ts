import { shopifyFetch } from "@/services/shopifyFetch"

async function getCollections() {

  const res = await shopifyFetch({
    query: `{
      collections(first: 5) {
        edges {
            node {
              title
              handle
            }
        }
      }
    }`
  })
  
  return res
}

export {
  getCollections
}