const { PrismaClient } = require("@prisma/client");
const { genSalt, hash } = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  try {
    const salt = await genSalt(12);
    const hashedPassword = await hash(process.env.SEED_ADMIN_PASSWORD, salt);

    const root = await prisma.admin.upsert({
      where: { email: process.env.SEED_ADMIN_EMAIL },
      update: {},
      create: {
        name: process.env.SEED_ADMIN_NAME,
        email: process.env.SEED_ADMIN_EMAIL,
        password: hashedPassword,
      },
    });

    console.log({ root });
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
