/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Brand_email_key" ON "Brand"("email");
