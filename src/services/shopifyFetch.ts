export async function shopifyFetch({query, variables}: {query: string, variables?: any}) {
  const endpoint = process.env.SHOPIFY_STORE_DOMAIN
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
  try {
      //@ts-ignore
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': key
        },
        body: {query, variables} && JSON.stringify({query, variables})
      })
      
      return {
        status: res.status,  
        body: await res.json()
      }

  } catch (error) {
    return {
      status: 500,
      error: "Error receiving data"
    }
  }
}