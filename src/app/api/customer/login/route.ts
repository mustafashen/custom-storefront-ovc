import { loginCustomer } from "@/resources/loginCustomer"
import { NextResponse } from "next/server"

export async function POST(request: any) {
  try {
    const res = await loginCustomer(request.body.newSession)
    return NextResponse.json(res)
  } catch (error) {
    console.log(error)
  }
}