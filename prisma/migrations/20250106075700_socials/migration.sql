/*
  Warnings:

  - Added the required column `category` to the `Celeb` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Celeb" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "followers" INTEGER DEFAULT 0,
ADD COLUMN     "instagramUsername" TEXT,
ADD COLUMN     "youtubeUsername" TEXT;
