import { createCustomer } from "@/resources/createCustomer"
import { NextResponse } from "next/server"

export async function POST(request: any) {
  try {
    const res = await createCustomer(request.body.newCustomer)
    return NextResponse.json(res)
  } catch (error) {
    console.log(error)
  }
}