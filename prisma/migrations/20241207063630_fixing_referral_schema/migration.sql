/*
  Warnings:

  - A unique constraint covering the columns `[referral_code]` on the table `referral` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "referral_referral_code_key" ON "referral"("referral_code");
