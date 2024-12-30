-- DropForeignKey
ALTER TABLE "transaction" DROP CONSTRAINT "transaction_transaction_details_id_fkey";

-- AlterTable
ALTER TABLE "transaction_detail" ADD COLUMN     "transaction_id" INTEGER;

-- AddForeignKey
ALTER TABLE "transaction_detail" ADD CONSTRAINT "transaction_detail_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("transaction_id") ON DELETE SET NULL ON UPDATE CASCADE;
