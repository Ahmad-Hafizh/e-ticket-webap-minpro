-- CreateTable
CREATE TABLE "Event" (
    "event_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "coupon_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("event_id")
);

-- CreateTable
CREATE TABLE "Event_category" (
    "event_cateogry_id" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "Event_category_pkey" PRIMARY KEY ("event_cateogry_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_category_category_name_key" ON "Event_category"("category_name");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
