/*
  Warnings:

  - Added the required column `userId` to the `BoostOfferPayment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BoostOfferPayment` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `BoostOfferPayment` ADD CONSTRAINT `BoostOfferPayment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
