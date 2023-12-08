/*
  Warnings:

  - The primary key for the `Payment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `paymentId` to the `AccountPacketPayment` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Payment` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `AccountPacketPayment` ADD COLUMN `paymentId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Payment` DROP PRIMARY KEY,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Payment_id_key` ON `Payment`(`id`);

-- AddForeignKey
ALTER TABLE `AccountPacketPayment` ADD CONSTRAINT `AccountPacketPayment_paymentId_fkey` FOREIGN KEY (`paymentId`) REFERENCES `Payment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
