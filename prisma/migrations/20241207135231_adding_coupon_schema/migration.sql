/*
  Warnings:

  - Added the required column `coupon_name` to the `coupons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "coupons" ADD COLUMN     "coupon_name" TEXT NOT NULL;
