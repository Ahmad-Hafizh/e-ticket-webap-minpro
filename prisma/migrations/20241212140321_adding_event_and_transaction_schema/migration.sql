/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Event_category` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CREDIT_CARD', 'BANK_TRANSFER', 'E_WALLET');

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_user_id_fkey";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "Event_category";

-- CreateTable
CREATE TABLE "event" (
    "event_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coupon_id" INTEGER NOT NULL,
    "event_location_id" INTEGER NOT NULL,
    "time_date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("event_id")
);

-- CreateTable
CREATE TABLE "event_category" (
    "event_category_id" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "event_category_pkey" PRIMARY KEY ("event_category_id")
);

-- CreateTable
CREATE TABLE "event_location" (
    "event_location_id" SERIAL NOT NULL,
    "address_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "location_city_id" INTEGER NOT NULL,
    "location_country_id" INTEGER NOT NULL,
    "zipcode" TEXT,

    CONSTRAINT "event_location_pkey" PRIMARY KEY ("event_location_id")
);

-- CreateTable
CREATE TABLE "location_city" (
    "location_city_id" SERIAL NOT NULL,
    "city_name" TEXT NOT NULL,

    CONSTRAINT "location_city_pkey" PRIMARY KEY ("location_city_id")
);

-- CreateTable
CREATE TABLE "location_country" (
    "location_country_id" SERIAL NOT NULL,
    "country_name" TEXT NOT NULL,

    CONSTRAINT "location_country_pkey" PRIMARY KEY ("location_country_id")
);

-- CreateTable
CREATE TABLE "ticket_types" (
    "ticket_types_id" SERIAL NOT NULL,
    "event_id" INTEGER NOT NULL,
    "types" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity_available" INTEGER NOT NULL,

    CONSTRAINT "ticket_types_pkey" PRIMARY KEY ("ticket_types_id")
);

-- CreateTable
CREATE TABLE "transaction_detail" (
    "transaction_details_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "ticket_types_id" INTEGER NOT NULL,
    "quantity_bought" INTEGER NOT NULL,
    "subtotal" INTEGER NOT NULL,

    CONSTRAINT "transaction_detail_pkey" PRIMARY KEY ("transaction_details_id")
);

-- CreateTable
CREATE TABLE "transaction" (
    "transaction_id" SERIAL NOT NULL,
    "transaction_details_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "coupon_id" INTEGER NOT NULL,
    "total_amount" INTEGER NOT NULL,
    "payment_method" "PaymentMethod" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isPaid" BOOLEAN NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateTable
CREATE TABLE "_Event_categories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_Event_categories_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "event_event_location_id_key" ON "event"("event_location_id");

-- CreateIndex
CREATE UNIQUE INDEX "event_category_category_name_key" ON "event_category"("category_name");

-- CreateIndex
CREATE UNIQUE INDEX "transaction_detail_ticket_types_id_key" ON "transaction_detail"("ticket_types_id");

-- CreateIndex
CREATE UNIQUE INDEX "transaction_transaction_details_id_key" ON "transaction"("transaction_details_id");

-- CreateIndex
CREATE INDEX "_Event_categories_B_index" ON "_Event_categories"("B");

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_event_location_id_fkey" FOREIGN KEY ("event_location_id") REFERENCES "event_location"("event_location_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_location" ADD CONSTRAINT "event_location_location_city_id_fkey" FOREIGN KEY ("location_city_id") REFERENCES "location_city"("location_city_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_location" ADD CONSTRAINT "event_location_location_country_id_fkey" FOREIGN KEY ("location_country_id") REFERENCES "location_country"("location_country_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_types" ADD CONSTRAINT "ticket_types_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "event"("event_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_detail" ADD CONSTRAINT "transaction_detail_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_detail" ADD CONSTRAINT "transaction_detail_ticket_types_id_fkey" FOREIGN KEY ("ticket_types_id") REFERENCES "ticket_types"("ticket_types_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_transaction_details_id_fkey" FOREIGN KEY ("transaction_details_id") REFERENCES "transaction_detail"("transaction_details_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_categories" ADD CONSTRAINT "_Event_categories_A_fkey" FOREIGN KEY ("A") REFERENCES "event"("event_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Event_categories" ADD CONSTRAINT "_Event_categories_B_fkey" FOREIGN KEY ("B") REFERENCES "event_category"("event_category_id") ON DELETE CASCADE ON UPDATE CASCADE;
