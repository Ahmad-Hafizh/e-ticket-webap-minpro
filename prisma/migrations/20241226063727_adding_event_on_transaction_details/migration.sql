/*
  Warnings:

  - Added the required column `event_id` to the `transaction_detail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transaction_detail" ADD COLUMN     "event_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "transaction_detail" ADD CONSTRAINT "transaction_detail_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "event"("event_id") ON DELETE RESTRICT ON UPDATE CASCADE;
