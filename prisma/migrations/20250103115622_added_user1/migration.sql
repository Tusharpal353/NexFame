/*
  Warnings:

  - Added the required column `role` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Campaigns` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "role" AS ENUM ('Brand', 'celeb');

-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "role" "role" NOT NULL;

-- AlterTable
ALTER TABLE "Campaigns" ADD COLUMN     "role" "role" NOT NULL;

-- CreateTable
CREATE TABLE "Celeb" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "role" NOT NULL,

    CONSTRAINT "Celeb_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Celeb_email_key" ON "Celeb"("email");
