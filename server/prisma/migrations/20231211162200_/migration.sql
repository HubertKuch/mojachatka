/*
  Warnings:

  - Added the required column `pricePerMonth` to the `Offers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Offers` ADD COLUMN `pricePerMonth` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Feature` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Feature_id_key`(`id`),
    UNIQUE INDEX `Feature_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OfferFeature` (
    `id` VARCHAR(191) NOT NULL,
    `offerId` VARCHAR(191) NOT NULL,
    `featureId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `OfferFeature_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OfferFeature` ADD CONSTRAINT `OfferFeature_offerId_fkey` FOREIGN KEY (`offerId`) REFERENCES `Offers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OfferFeature` ADD CONSTRAINT `OfferFeature_featureId_fkey` FOREIGN KEY (`featureId`) REFERENCES `Feature`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
