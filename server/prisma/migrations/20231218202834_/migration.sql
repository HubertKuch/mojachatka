-- CreateTable
CREATE TABLE `SocialMedia` (
    `id` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `type` ENUM('FACEBOOK', 'INSTAGRAM', 'LINKEDIN', 'PINTEREST', 'TWITTER') NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SocialMedia_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SocialMedia` ADD CONSTRAINT `SocialMedia_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
