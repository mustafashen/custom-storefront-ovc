import Products from "@/components/Products";
import { getProducts } from "@/resources/getProducts";
import { Button } from "@mui/joy";

export default async function Home() {
  const res = await getProducts()
  const products = res.body.data.products.edges

  return (
    <main>
      <Products products={products}/>
    </main>
  )
}
