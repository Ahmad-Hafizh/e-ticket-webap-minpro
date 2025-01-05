/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `event` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "event_title_key" ON "event"("title");
