import prisma from "./prisma.js";

async function main() {
  await prisma.item.deleteMany();
  await prisma.item.createMany({
    data: [
      {
        title: "No-complication rate baseline",
        amount: 6500,
        status: "verified",
        wallet: "system",
      },
      {
        title: "Verify recovery milestone pilot queue",
        amount: 2730,
        status: "pending",
        wallet: "system",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
