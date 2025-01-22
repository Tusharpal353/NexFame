-- AlterTable
ALTER TABLE "Campaigns" ADD COLUMN     "brandId" TEXT NOT NULL DEFAULT '0';

-- AlterTable
ALTER TABLE "Celeb" ADD COLUMN     "invitations" INTEGER DEFAULT 0;

-- CreateTable
CREATE TABLE "_CampaignCeleb" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CampaignCeleb_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CampaignCeleb_B_index" ON "_CampaignCeleb"("B");

-- AddForeignKey
ALTER TABLE "Campaigns" ADD CONSTRAINT "Campaigns_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampaignCeleb" ADD CONSTRAINT "_CampaignCeleb_A_fkey" FOREIGN KEY ("A") REFERENCES "Campaigns"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampaignCeleb" ADD CONSTRAINT "_CampaignCeleb_B_fkey" FOREIGN KEY ("B") REFERENCES "Celeb"("id") ON DELETE CASCADE ON UPDATE CASCADE;
