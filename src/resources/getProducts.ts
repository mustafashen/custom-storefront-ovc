import { shopifyFetch } from "@/services/shopifyFetch"

async function getProducts(collection = '') {

  let query = `{
    products(first: 100) {
      edges{
        node {
          id
          title
          description
          images(first:1){
            edges{
                node{ url }
            }
          }
        }
      }
    }
  }`

  if (collection !== '') {
    query = `{
      collection(handle: "${collection}") {
        products(first: 10) {
          edges {
            node {
              id
              title
              description
              images(first:1){
                edges{
                    node{ url }
                }
              }
            }
          }
        }
      }
    }`
  }
  
  const res = await shopifyFetch({
    query: query
  })
  
  return res
}

export {
  getProducts
}