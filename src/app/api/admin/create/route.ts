import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json()

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if admin already exists
    const existingAdmin = await prisma.superAdmin.findUnique({
      where: { email },
    })

    if (existingAdmin) {
      return NextResponse.json(
        { error: 'Admin already exists' },
        { status: 400 }
      )
    }

    const hashedPassword = await hashPassword(password)

    const admin = await prisma.superAdmin.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })

    return NextResponse.json(
      {
        id: admin.id,
        email: admin.email,
        name: admin.name,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating admin:', error)
    return NextResponse.json(
      { error: 'Failed to create admin' },
      { status: 500 }
    )
  }
}
