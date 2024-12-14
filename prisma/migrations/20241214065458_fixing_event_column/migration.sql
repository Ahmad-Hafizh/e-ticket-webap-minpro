/*
  Warnings:

  - You are about to drop the column `time_date` on the `event` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timezone` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event" DROP COLUMN "time_date",
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "endTime" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TEXT NOT NULL,
ADD COLUMN     "timezone" TEXT NOT NULL;
