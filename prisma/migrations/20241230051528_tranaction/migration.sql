/*
  Warnings:

  - You are about to drop the column `customer_id` on the `event` table. All the data in the column will be lost.
  - Made the column `transaction_id` on table `transaction_detail` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "transaction_detail" DROP CONSTRAINT "transaction_detail_transaction_id_fkey";

-- AlterTable
ALTER TABLE "event" DROP COLUMN "customer_id";

-- AlterTable
ALTER TABLE "transaction_detail" ALTER COLUMN "transaction_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "transaction_detail" ADD CONSTRAINT "transaction_detail_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("transaction_id") ON DELETE RESTRICT ON UPDATE CASCADE;
