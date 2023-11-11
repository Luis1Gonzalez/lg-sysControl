/*
  Warnings:

  - You are about to drop the column `hojas` on the `serie` table. All the data in the column will be lost.
  - Added the required column `punzonado` to the `Serie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `serie` DROP COLUMN `hojas`,
    ADD COLUMN `punzonado` BOOLEAN NOT NULL;
