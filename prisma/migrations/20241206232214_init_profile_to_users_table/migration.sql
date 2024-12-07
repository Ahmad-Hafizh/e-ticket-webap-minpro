/*
  Warnings:

  - You are about to drop the column `user_id` on the `social_media` table. All the data in the column will be lost.
  - Added the required column `profile_id` to the `social_media` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "social_media" DROP CONSTRAINT "social_media_user_id_fkey";

-- AlterTable
ALTER TABLE "social_media" DROP COLUMN "user_id",
ADD COLUMN     "profile_id" INTEGER NOT NULL;

-- AlterTable
CREATE SEQUENCE users_profile_id_seq;
ALTER TABLE "users" ALTER COLUMN "profile_id" SET DEFAULT nextval('users_profile_id_seq');
ALTER SEQUENCE users_profile_id_seq OWNED BY "users"."profile_id";

-- AddForeignKey
ALTER TABLE "social_media" ADD CONSTRAINT "social_media_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profile"("profile_id") ON DELETE RESTRICT ON UPDATE CASCADE;
