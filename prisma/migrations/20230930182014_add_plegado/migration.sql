/*
  Warnings:

  - Added the required column `plegado` to the `Serie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serie` to the `Serie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `serie` ADD COLUMN `plegado` BOOLEAN NOT NULL,
    ADD COLUMN `serie` VARCHAR(191) NOT NULL;
