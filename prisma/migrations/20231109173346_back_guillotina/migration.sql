/*
  Warnings:

  - You are about to alter the column `guillotina` on the `serie` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `serie` MODIFY `guillotina` BOOLEAN NOT NULL;
