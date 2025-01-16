-- CreateEnum
CREATE TYPE "status" AS ENUM ('active', 'pending', 'done');

-- AlterTable
ALTER TABLE "Campaigns" ADD COLUMN     "status" "status" NOT NULL DEFAULT 'active';
