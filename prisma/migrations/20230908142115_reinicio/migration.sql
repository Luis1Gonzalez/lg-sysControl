-- CreateTable
CREATE TABLE `Serie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nof` INTEGER NOT NULL,
    `guillotina` BOOLEAN NOT NULL,
    `devanado` BOOLEAN NOT NULL,
    `hojas` BOOLEAN NOT NULL,
    `marcos` BOOLEAN NOT NULL,
    `pladur` BOOLEAN NOT NULL,
    `rockbulk` BOOLEAN NOT NULL,
    `pegamento` BOOLEAN NOT NULL,
    `status` BOOLEAN NOT NULL,
    `clienteId` INTEGER NOT NULL,
    `fecha` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `seriex` VARCHAR(191) NOT NULL,
    `fecha` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Serie` ADD CONSTRAINT `Serie_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
