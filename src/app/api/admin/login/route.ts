import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyPassword } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password required' },
        { status: 400 }
      )
    }

    const admin = await prisma.superAdmin.findUnique({
      where: { email },
    })

    if (!admin) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const passwordValid = await verifyPassword(password, admin.password)

    if (!passwordValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // In a real app, set session/JWT here
    return NextResponse.json({
      id: admin.id,
      email: admin.email,
      name: admin.name,
    })
  } catch (error) {
    console.error('Error logging in:', error)
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    )
  }
}
