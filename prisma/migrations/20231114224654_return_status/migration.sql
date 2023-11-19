/*
  Warnings:

  - You are about to drop the column `statusDevanado` on the `serie` table. All the data in the column will be lost.
  - You are about to drop the column `statusGuillotina` on the `serie` table. All the data in the column will be lost.
  - You are about to drop the column `statusMarcos` on the `serie` table. All the data in the column will be lost.
  - You are about to drop the column `statusPegamento` on the `serie` table. All the data in the column will be lost.
  - You are about to drop the column `statusPladur` on the `serie` table. All the data in the column will be lost.
  - You are about to drop the column `statusPlegado` on the `serie` table. All the data in the column will be lost.
  - You are about to drop the column `statusPunzonado` on the `serie` table. All the data in the column will be lost.
  - You are about to drop the column `statusRockbulk` on the `serie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `serie` DROP COLUMN `statusDevanado`,
    DROP COLUMN `statusGuillotina`,
    DROP COLUMN `statusMarcos`,
    DROP COLUMN `statusPegamento`,
    DROP COLUMN `statusPladur`,
    DROP COLUMN `statusPlegado`,
    DROP COLUMN `statusPunzonado`,
    DROP COLUMN `statusRockbulk`;
