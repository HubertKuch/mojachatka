-- CreateTable
CREATE TABLE `BoostPacket` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `days` INTEGER NOT NULL,
    `properties` JSON NOT NULL,

    UNIQUE INDEX `BoostPacket_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
