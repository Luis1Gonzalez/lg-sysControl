/*
  Warnings:

  - You are about to drop the column `cliente` on the `serie` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `serie` table. All the data in the column will be lost.
  - You are about to drop the column `hora` on the `serie` table. All the data in the column will be lost.
  - You are about to drop the column `prioridad` on the `serie` table. All the data in the column will be lost.
  - Added the required column `client` to the `Serie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `day` to the `Serie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hour` to the `Serie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priority` to the `Serie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `serie` DROP COLUMN `cliente`,
    DROP COLUMN `fecha`,
    DROP COLUMN `hora`,
    DROP COLUMN `prioridad`,
    ADD COLUMN `client` VARCHAR(191) NOT NULL,
    ADD COLUMN `day` VARCHAR(191) NOT NULL,
    ADD COLUMN `hour` VARCHAR(191) NOT NULL,
    ADD COLUMN `priority` BOOLEAN NOT NULL;
