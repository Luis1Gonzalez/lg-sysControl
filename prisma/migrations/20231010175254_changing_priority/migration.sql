/*
  Warnings:

  - You are about to alter the column `priority` on the `serie` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `serie` MODIFY `priority` VARCHAR(191) NOT NULL;
