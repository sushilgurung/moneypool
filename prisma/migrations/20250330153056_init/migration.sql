-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "fName" VARCHAR(255) NOT NULL,
    "mName" VARCHAR(255) NOT NULL,
    "lName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "verified" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "last_active" TIMESTAMP(3) NOT NULL,
    "session_token" VARCHAR(255),
    "device_fingerprint" VARCHAR(255),

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);
