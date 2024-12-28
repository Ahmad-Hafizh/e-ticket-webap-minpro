/*
  Warnings:

  - You are about to drop the column `transaction_details_id` on the `transaction` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "transaction_transaction_details_id_key";

-- AlterTable
ALTER TABLE "transaction" DROP COLUMN "transaction_details_id";
