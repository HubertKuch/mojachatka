/*
  Warnings:

  - Added the required column `createdOnIp` to the `Offers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Offers` ADD COLUMN `createdOnIp` VARCHAR(191) NOT NULL;
