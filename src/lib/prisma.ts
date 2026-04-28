import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

function createPrismaClient() {
  return new PrismaClient(
    process.env.PRISMA_LOG_QUERIES === 'true'
      ? {
          log: ['query'],
        }
      : undefined
  )
}

export const prisma =
  globalForPrisma.prisma ||
  createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
