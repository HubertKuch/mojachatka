/*
  Warnings:

  - Added the required column `userId` to the `UserAccountPacketsSnapshots` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `UserAccountPacketsSnapshots` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `UserAccountPacketsSnapshots` ADD CONSTRAINT `UserAccountPacketsSnapshots_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
