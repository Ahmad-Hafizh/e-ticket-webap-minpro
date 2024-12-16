/*
  Warnings:

  - You are about to drop the column `user_id` on the `event` table. All the data in the column will be lost.
  - Added the required column `organizer_id` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "event" DROP CONSTRAINT "event_user_id_fkey";

-- AlterTable
ALTER TABLE "event" DROP COLUMN "user_id",
ADD COLUMN     "organizer_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "organizer" (
    "organizer_id" SERIAL NOT NULL,
    "organizer_name" TEXT NOT NULL,
    "organizer_email" TEXT NOT NULL,
    "organizer_phone" TEXT NOT NULL,
    "organizer_address" TEXT NOT NULL,
    "organizer_logo" TEXT,
    "organizer_banner" TEXT,
    "organizer_bio" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "organizer_pkey" PRIMARY KEY ("organizer_id")
);

-- CreateTable
CREATE TABLE "bank_account" (
    "bank_account_id" SERIAL NOT NULL,
    "bank_name" TEXT NOT NULL,
    "bank_account_name" TEXT NOT NULL,
    "bank_account_number" TEXT NOT NULL,
    "organizer_id" INTEGER NOT NULL,

    CONSTRAINT "bank_account_pkey" PRIMARY KEY ("bank_account_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "organizer_organizer_name_key" ON "organizer"("organizer_name");

-- CreateIndex
CREATE UNIQUE INDEX "organizer_organizer_email_key" ON "organizer"("organizer_email");

-- CreateIndex
CREATE UNIQUE INDEX "organizer_user_id_key" ON "organizer"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "bank_account_organizer_id_key" ON "bank_account"("organizer_id");

-- AddForeignKey
ALTER TABLE "organizer" ADD CONSTRAINT "organizer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bank_account" ADD CONSTRAINT "bank_account_organizer_id_fkey" FOREIGN KEY ("organizer_id") REFERENCES "organizer"("organizer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_organizer_id_fkey" FOREIGN KEY ("organizer_id") REFERENCES "organizer"("organizer_id") ON DELETE RESTRICT ON UPDATE CASCADE;
