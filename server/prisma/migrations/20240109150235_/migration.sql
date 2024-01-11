-- CreateTable
CREATE TABLE `Company` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `license` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `house` VARCHAR(191) NOT NULL,
    `zipCode` VARCHAR(191) NOT NULL,
    `nip` VARCHAR(191) NOT NULL,
    `regon` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Company_id_key`(`id`),
    UNIQUE INDEX `Company_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SalesRep` (
    `id` VARCHAR(191) NOT NULL,
    `companyId` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `altTelephone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SalesRep_id_key`(`id`),
    UNIQUE INDEX `SalesRep_companyId_key`(`companyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Company` ADD CONSTRAINT `Company_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesRep` ADD CONSTRAINT `SalesRep_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
