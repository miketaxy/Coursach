/*
  Warnings:

  - You are about to drop the column `UserId` on the `TravelItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TravelItem" DROP CONSTRAINT "TravelItem_UserId_fkey";

-- AlterTable
ALTER TABLE "TravelItem" DROP COLUMN "UserId";

-- CreateTable
CREATE TABLE "SelectedTravelItem" (
    "id" SERIAL NOT NULL,
    "travelItemId" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "SelectedTravelItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SelectedTravelItem" ADD CONSTRAINT "SelectedTravelItem_travelItemId_fkey" FOREIGN KEY ("travelItemId") REFERENCES "TravelItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SelectedTravelItem" ADD CONSTRAINT "SelectedTravelItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
