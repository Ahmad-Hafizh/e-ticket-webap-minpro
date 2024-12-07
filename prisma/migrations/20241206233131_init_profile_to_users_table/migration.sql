-- AlterTable
ALTER TABLE "users" ALTER COLUMN "profile_id" DROP DEFAULT;
DROP SEQUENCE "users_profile_id_seq";
