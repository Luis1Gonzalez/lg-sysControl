/*
  Warnings:

  - You are about to drop the column `numserie` on the `serie` table. All the data in the column will be lost.
  - Added the required column `serie` to the `Serie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `serie` DROP COLUMN `numserie`,
    ADD COLUMN `serie` VARCHAR(191) NOT NULL;
