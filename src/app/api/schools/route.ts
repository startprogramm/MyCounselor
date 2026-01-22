import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET all schools
export async function GET() {
  try {
    const schools = await prisma.school.findMany({
      include: {
        _count: {
          select: { counselors: true, students: true },
        },
      },
    })
    return NextResponse.json(schools)
  } catch (error) {
    console.error('Error fetching schools:', error)
    return NextResponse.json(
      { error: 'Failed to fetch schools' },
      { status: 500 }
    )
  }
}

// POST create school
export async function POST(request: NextRequest) {
  try {
    const { name, city } = await request.json()

    if (!name || !city) {
      return NextResponse.json(
        { error: 'Name and city required' },
        { status: 400 }
      )
    }

    const school = await prisma.school.create({
      data: {
        name,
        city,
      },
    })

    return NextResponse.json(school, { status: 201 })
  } catch (error) {
    console.error('Error creating school:', error)
    return NextResponse.json(
      { error: 'Failed to create school' },
      { status: 500 }
    )
  }
}
