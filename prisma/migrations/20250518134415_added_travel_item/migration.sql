/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt";

-- CreateTable
CREATE TABLE "TravelItem" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "Title" TEXT NOT NULL,
    "Image" TEXT,
    "Price" DOUBLE PRECISION NOT NULL,
    "UserId" INTEGER NOT NULL,

    CONSTRAINT "TravelItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TravelItem" ADD CONSTRAINT "TravelItem_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
