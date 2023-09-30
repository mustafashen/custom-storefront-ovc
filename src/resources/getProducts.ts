import { shopifyFetch } from "@/services/shopifyFetch"

async function getProducts(collection = '') {

  let query = `{
    products(first: 100) {
      edges {
        node {
          id
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
      }
    }
  }`

  if (collection !== '') {
    query = `{
      collection(handle: "${collection}") {
        products(first: 100) {
          edges {
            node {
              id
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