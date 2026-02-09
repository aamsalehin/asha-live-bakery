import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

import { PRODUCTS } from "../data/Products";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export async function main() {
  console.log("🌱 Seeding categories and products...");

  // -----------------------------
  // 1️⃣ Create Categories
  // -----------------------------
  const categoryMap = new Map<string, number>();

  for (const product of PRODUCTS) {
    if (!categoryMap.has(product.category)) {
      const slug = product.category.toLowerCase().replace(/\s+/g, "-");

      const category = await prisma.category.upsert({
        where: { slug },
        update: {},
        create: {
          name: product.category,
          slug,
        },
      });

      categoryMap.set(product.category, category.id);
    }
  }

  // -----------------------------
  // 2️⃣ Create Products
  // -----------------------------
  for (const product of PRODUCTS) {
    await prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        unit: product.unit,
        image: product.img,
        description: product.description,
        ingredients: product.ingredients,

        featuredProduct: false,
        productOfTheDay: false,

        categoryId: categoryMap.get(product.category)!,
      },
    });
  }

  console.log("✅ Products seeding completed");
}

main()
  .catch((error) => {
    console.error("❌ Seed error:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
