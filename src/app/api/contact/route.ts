import { NextRequest } from 'next/server'



export async function POST(request: Request) {

  const { name, email, message } = await request.json()
  console.log(name, email, message)
  return new Response('OK')
}