/*
  Warnings:

  - Added the required column `budget` to the `Campaigns` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeline` to the `Campaigns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Campaigns" ADD COLUMN     "budget" INTEGER NOT NULL,
ADD COLUMN     "timeline" TEXT NOT NULL;
