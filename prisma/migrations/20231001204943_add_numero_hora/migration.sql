/*
  Warnings:

  - You are about to drop the column `serie` on the `serie` table. All the data in the column will be lost.
  - Added the required column `hora` to the `Serie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numserie` to the `Serie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `serie` DROP COLUMN `serie`,
    ADD COLUMN `hora` VARCHAR(191) NOT NULL,
    ADD COLUMN `numserie` VARCHAR(191) NOT NULL;
