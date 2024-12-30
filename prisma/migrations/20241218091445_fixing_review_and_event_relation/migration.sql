/*
  Warnings:

  - Added the required column `score` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "score" INTEGER NOT NULL,
ALTER COLUMN "review_img" DROP NOT NULL;

-- AlterTable
ALTER TABLE "event" ALTER COLUMN "customer_id" DROP NOT NULL;
