-- CreateTable
CREATE TABLE `OfferViews` (
    `id` VARCHAR(191) NOT NULL,
    `at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `by` VARCHAR(191) NOT NULL,
    `offerId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `OfferViews_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OfferViews` ADD CONSTRAINT `OfferViews_offerId_fkey` FOREIGN KEY (`offerId`) REFERENCES `Offers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
