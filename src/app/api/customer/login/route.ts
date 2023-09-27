import { loginCustomer } from "@/resources/loginCustomer"
import { NextResponse } from "next/server"

export async function POST(request: any) {
  try {
    const body = await request.json()

    const res = await loginCustomer(body.newSession)
    return NextResponse.json(res)
  } catch (error) {
    console.log(error)
  }
}