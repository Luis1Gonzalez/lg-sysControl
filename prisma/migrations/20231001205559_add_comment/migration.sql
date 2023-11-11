/*
  Warnings:

  - Added the required column `comment` to the `Serie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `serie` ADD COLUMN `comment` VARCHAR(191) NOT NULL;
