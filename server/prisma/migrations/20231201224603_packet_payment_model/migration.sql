-- CreateTable
CREATE TABLE `AccountPacketPayment` (
    `id` VARCHAR(191) NOT NULL,
    `packetId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AccountPacketPayment_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AccountPacketPayment` ADD CONSTRAINT `AccountPacketPayment_packetId_fkey` FOREIGN KEY (`packetId`) REFERENCES `AccountPackets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AccountPacketPayment` ADD CONSTRAINT `AccountPacketPayment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
