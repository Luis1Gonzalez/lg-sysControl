/*
  Warnings:

  - Added the required column `prioridad` to the `Serie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `serie` ADD COLUMN `prioridad` BOOLEAN NOT NULL;
