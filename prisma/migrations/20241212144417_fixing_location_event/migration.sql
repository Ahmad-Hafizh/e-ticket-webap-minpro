/*
  Warnings:

  - A unique constraint covering the columns `[city_name]` on the table `location_city` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[country_name]` on the table `location_country` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imgEvent` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event" ADD COLUMN     "imgEvent" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "location_city_city_name_key" ON "location_city"("city_name");

-- CreateIndex
CREATE UNIQUE INDEX "location_country_country_name_key" ON "location_country"("country_name");
