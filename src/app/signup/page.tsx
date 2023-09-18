import Products from '@/components/Products'
import SignupForm from '@/components/SignupForm'
import { getProducts } from '@/resources/getProducts'


export default async function page({searchParams} : any) {

  return (
    <SignupForm/>
  )
}
