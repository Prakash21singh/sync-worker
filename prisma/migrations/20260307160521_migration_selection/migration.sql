/*
  Warnings:

  - Added the required column `name` to the `MigrationFile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MigrationFile" ADD COLUMN     "name" TEXT NOT NULL;
