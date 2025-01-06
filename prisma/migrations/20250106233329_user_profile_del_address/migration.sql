/*
  Warnings:

  - You are about to drop the column `company` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `job_title` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the `address` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- DropForeignKey
ALTER TABLE "address" DROP CONSTRAINT "address_profile_id_fkey";

-- AlterTable
ALTER TABLE "profile" DROP COLUMN "company",
DROP COLUMN "job_title",
DROP COLUMN "phone",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "birth_date" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "gender" "Gender",
ADD COLUMN     "zipcode" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "phone" TEXT;

-- DropTable
DROP TABLE "address";
