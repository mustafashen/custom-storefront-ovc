import { createCustomer } from "@/resources/createCustomer"
import { NextResponse } from "next/server"

// TODO: Fix argument recieving problems
export async function POST(request: any) {
  try {
    console.log(JSON.parse(request.body))
    const res = await createCustomer(request.body.newCustomer)
    return NextResponse.json(res)
  } catch (error) {
    console.log(error)
  }
}