import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create SuperAdmin
  const hashedAdminPassword = await bcrypt.hash('admin123', 10)

  const superAdmin = await prisma.superAdmin.upsert({
    where: { email: 'admin@mycounselor.com' },
    update: {},
    create: {
      email: 'admin@mycounselor.com',
      password: hashedAdminPassword,
      name: 'Super Admin',
    },
  })
  console.log('Created SuperAdmin:', superAdmin.email)

  // Create a School
  const school = await prisma.school.upsert({
    where: { name: 'Demo High School' },
    update: {},
    create: {
      name: 'Demo High School',
      city: 'New York',
    },
  })
  console.log('Created School:', school.name)

  // Create Counselor User with password
  const hashedCounselorPassword = await bcrypt.hash('counselor123', 10)
  const counselorUser = await prisma.user.upsert({
    where: { email: 'counselor@mycounselor.com' },
    update: {},
    create: {
      email: 'counselor@mycounselor.com',
      password: hashedCounselorPassword,
      name: 'John Counselor',
      role: 'COUNSELOR',
    },
  })

  const counselor = await prisma.counselor.upsert({
    where: { userId: counselorUser.id },
    update: {},
    create: {
      userId: counselorUser.id,
      schoolId: school.id,
    },
  })
  console.log('Created Counselor:', counselorUser.email)

  // Create Student User with password
  const hashedStudentPassword = await bcrypt.hash('student123', 10)
  const studentUser = await prisma.user.upsert({
    where: { email: 'student@mycounselor.com' },
    update: {},
    create: {
      email: 'student@mycounselor.com',
      password: hashedStudentPassword,
      name: 'Jane Student',
      role: 'STUDENT',
    },
  })

  await prisma.student.upsert({
    where: { userId: studentUser.id },
    update: {},
    create: {
      userId: studentUser.id,
      schoolId: school.id,
      counselorId: counselor.id,
    },
  })
  console.log('Created Student:', studentUser.email)

  console.log('\n✅ Seeding completed!')
  console.log('\n📋 Test Accounts:')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('SuperAdmin:')
  console.log('  Email: admin@mycounselor.com')
  console.log('  Password: admin123')
  console.log('')
  console.log('Counselor:')
  console.log('  Email: counselor@mycounselor.com')
  console.log('  Password: counselor123')
  console.log('')
  console.log('Student:')
  console.log('  Email: student@mycounselor.com')
  console.log('  Password: student123')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
