/*
  Warnings:

  - Added the required column `price` to the `BoostPacket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BoostPacket` ADD COLUMN `price` DOUBLE NOT NULL;
