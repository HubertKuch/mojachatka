/*
  Warnings:

  - You are about to drop the `BoostedOffers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MainBoostedOffers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `BoostedOffers` DROP FOREIGN KEY `BoostedOffers_author_fkey`;

-- DropForeignKey
ALTER TABLE `MainBoostedOffers` DROP FOREIGN KEY `MainBoostedOffers_author_fkey`;

-- DropTable
DROP TABLE `BoostedOffers`;

-- DropTable
DROP TABLE `MainBoostedOffers`;

-- CreateTable
CREATE TABLE `BoostOfferPayment` (
    `id` VARCHAR(191) NOT NULL,
    `boostPacketId` VARCHAR(191) NOT NULL,
    `paymentId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `BoostOfferPayment_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OfferBoosts` (
    `id` VARCHAR(191) NOT NULL,
    `offerId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,
    `userBoostId` VARCHAR(191) NOT NULL,
    `properties` JSON NOT NULL,

    UNIQUE INDEX `OfferBoosts_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BoostOfferPayment` ADD CONSTRAINT `BoostOfferPayment_boostPacketId_fkey` FOREIGN KEY (`boostPacketId`) REFERENCES `BoostPacket`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BoostOfferPayment` ADD CONSTRAINT `BoostOfferPayment_paymentId_fkey` FOREIGN KEY (`paymentId`) REFERENCES `Payment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OfferBoosts` ADD CONSTRAINT `OfferBoosts_userBoostId_fkey` FOREIGN KEY (`userBoostId`) REFERENCES `UserBoosts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
