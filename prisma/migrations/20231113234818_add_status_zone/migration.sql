/*
  Warnings:

  - Added the required column `statusDevanado` to the `Serie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusGuillotina` to the `Serie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusMarcos` to the `Serie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusPegamento` to the `Serie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusPladur` to the `Serie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusPlegado` to the `Serie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusPunzonado` to the `Serie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusRockbulk` to the `Serie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `serie` ADD COLUMN `statusDevanado` BOOLEAN NOT NULL,
    ADD COLUMN `statusGuillotina` BOOLEAN NOT NULL,
    ADD COLUMN `statusMarcos` BOOLEAN NOT NULL,
    ADD COLUMN `statusPegamento` BOOLEAN NOT NULL,
    ADD COLUMN `statusPladur` BOOLEAN NOT NULL,
    ADD COLUMN `statusPlegado` BOOLEAN NOT NULL,
    ADD COLUMN `statusPunzonado` BOOLEAN NOT NULL,
    ADD COLUMN `statusRockbulk` BOOLEAN NOT NULL;
