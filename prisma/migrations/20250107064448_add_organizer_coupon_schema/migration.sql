/*
  Warnings:

  - You are about to drop the column `coupon_id` on the `event` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[organizer_coupon_id]` on the table `event` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "event" DROP COLUMN "coupon_id",
ADD COLUMN     "organizer_coupon_id" INTEGER;

-- CreateTable
CREATE TABLE "OrganizerCoupon" (
    "organizer_coupon_id" SERIAL NOT NULL,
    "organizer_coupon_code" TEXT NOT NULL,
    "discount" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "expired_date" TIMESTAMP(3) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "organizer_id" INTEGER,

    CONSTRAINT "OrganizerCoupon_pkey" PRIMARY KEY ("organizer_coupon_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrganizerCoupon_organizer_coupon_code_key" ON "OrganizerCoupon"("organizer_coupon_code");

-- CreateIndex
CREATE UNIQUE INDEX "event_organizer_coupon_id_key" ON "event"("organizer_coupon_id");

-- AddForeignKey
ALTER TABLE "OrganizerCoupon" ADD CONSTRAINT "OrganizerCoupon_organizer_id_fkey" FOREIGN KEY ("organizer_id") REFERENCES "organizer"("organizer_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_organizer_coupon_id_fkey" FOREIGN KEY ("organizer_coupon_id") REFERENCES "OrganizerCoupon"("organizer_coupon_id") ON DELETE SET NULL ON UPDATE CASCADE;
