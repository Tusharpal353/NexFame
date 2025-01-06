/*
  Warnings:

  - You are about to drop the column `timeline` on the `Campaigns` table. All the data in the column will be lost.
  - Added the required column `eDate` to the `Campaigns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sDate` to the `Campaigns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Campaigns" DROP COLUMN "timeline",
ADD COLUMN     "eDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "sDate" TIMESTAMP(3) NOT NULL;
