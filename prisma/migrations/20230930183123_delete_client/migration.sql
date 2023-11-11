/*
  Warnings:

  - You are about to drop the column `clienteId` on the `serie` table. All the data in the column will be lost.
  - You are about to drop the `cliente` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cliente` to the `Serie` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `serie` DROP FOREIGN KEY `Serie_clienteId_fkey`;

-- AlterTable
ALTER TABLE `serie` DROP COLUMN `clienteId`,
    ADD COLUMN `cliente` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `cliente`;
