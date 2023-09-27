import { createCustomer } from "@/resources/createCustomer"
import { NextResponse } from "next/server"

export async function POST(request: any) {
  try {
    const body = await request.json()
    console.log(body)
    const res = await createCustomer(body.newCustomer)
    return NextResponse.json(res)
  } catch (error) {
    console.log(error)
  }
}