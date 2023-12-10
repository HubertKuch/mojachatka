/*
  Warnings:

  - Added the required column `resolvedAt` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Payment` ADD COLUMN `resolvedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `status` ENUM('SUCCEEDED', 'PENDING', 'FAILED') NOT NULL;
