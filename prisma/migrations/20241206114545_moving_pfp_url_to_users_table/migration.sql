/*
  Warnings:

  - You are about to drop the column `pfp_url` on the `profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profile" DROP COLUMN "pfp_url";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "pfp_url" TEXT;
