-- AlterTable
ALTER TABLE `AccountPackets` MODIFY `price` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Payment` MODIFY `resolvedAt` DATETIME(3) NULL,
    MODIFY `status` ENUM('SUCCEEDED', 'PENDING', 'FAILED') NULL;

-- AlterTable
ALTER TABLE `UserAccountPacketsSnapshots` MODIFY `price` INTEGER NOT NULL;
