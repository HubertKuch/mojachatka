/*
  Warnings:

  - You are about to drop the column `city` on the `Offers` table. All the data in the column will be lost.
  - You are about to drop the column `region` on the `Offers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Offers` DROP COLUMN `city`,
    DROP COLUMN `region`;
