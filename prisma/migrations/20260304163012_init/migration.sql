-- CreateEnum
CREATE TYPE "AdapterName" AS ENUM ('GOOGLE_DRIVE', 'DROPBOX');

-- CreateEnum
CREATE TYPE "MigrationFileStatus" AS ENUM ('PENDING', 'TRANSFERRING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "MigrationSelectionType" AS ENUM ('FILE', 'FOLDER');

-- CreateEnum
CREATE TYPE "MigrationStatus" AS ENUM ('PENDING', 'DISCOVERING', 'TRANSFERRING', 'COMPLETED', 'FAILED', 'RETRYING', 'SKIPPED');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "emailVerified" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "image" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "idToken" TEXT,
    "accessTokenExpiresAt" TIMESTAMP(3),
    "refreshTokenExpiresAt" TIMESTAMP(3),
    "scope" TEXT,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adapter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "access_token" TEXT,
    "refresh_token" TEXT,
    "expires_in" TIMESTAMP(3),
    "refresh_token_expires_in" TIMESTAMP(3),
    "scope" TEXT,
    "token_type" TEXT,
    "adapter_type" "AdapterName" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "adapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adapter_account_info" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "name" TEXT,
    "avatar" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adapterId" TEXT NOT NULL,

    CONSTRAINT "adapter_account_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Migration" (
    "id" TEXT NOT NULL,
    "status" "MigrationStatus" NOT NULL,
    "sourceAdapterId" TEXT NOT NULL,
    "destinationAdapterId" TEXT NOT NULL,
    "totalFiles" INTEGER NOT NULL DEFAULT 0,
    "completedFiles" INTEGER NOT NULL DEFAULT 0,
    "failedFiles" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Migration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MigrationSelection" (
    "id" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "MigrationSelectionType" NOT NULL,
    "mimeType" TEXT,
    "migrationId" TEXT NOT NULL,

    CONSTRAINT "MigrationSelection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MigrationFile" (
    "id" TEXT NOT NULL,
    "sourceFileId" TEXT NOT NULL,
    "size" INTEGER,
    "mimeType" TEXT,
    "path" TEXT NOT NULL,
    "status" "MigrationFileStatus" NOT NULL,
    "migrationId" TEXT NOT NULL,

    CONSTRAINT "MigrationFile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE INDEX "account_userId_idx" ON "account"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");

-- CreateIndex
CREATE INDEX "session_userId_idx" ON "session"("userId");

-- CreateIndex
CREATE INDEX "verification_identifier_idx" ON "verification"("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "adapter_name_key" ON "adapter"("name");

-- CreateIndex
CREATE UNIQUE INDEX "adapter_account_info_adapterId_key" ON "adapter_account_info"("adapterId");

-- CreateIndex
CREATE INDEX "adapter_account_info_adapterId_idx" ON "adapter_account_info"("adapterId");

-- CreateIndex
CREATE INDEX "MigrationSelection_migrationId_idx" ON "MigrationSelection"("migrationId");

-- CreateIndex
CREATE INDEX "MigrationFile_migrationId_status_idx" ON "MigrationFile"("migrationId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "MigrationFile_migrationId_sourceFileId_key" ON "MigrationFile"("migrationId", "sourceFileId");

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adapter" ADD CONSTRAINT "adapter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adapter_account_info" ADD CONSTRAINT "adapter_account_info_adapterId_fkey" FOREIGN KEY ("adapterId") REFERENCES "adapter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Migration" ADD CONSTRAINT "Migration_sourceAdapterId_fkey" FOREIGN KEY ("sourceAdapterId") REFERENCES "adapter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Migration" ADD CONSTRAINT "Migration_destinationAdapterId_fkey" FOREIGN KEY ("destinationAdapterId") REFERENCES "adapter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Migration" ADD CONSTRAINT "Migration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MigrationSelection" ADD CONSTRAINT "MigrationSelection_migrationId_fkey" FOREIGN KEY ("migrationId") REFERENCES "Migration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MigrationFile" ADD CONSTRAINT "MigrationFile_migrationId_fkey" FOREIGN KEY ("migrationId") REFERENCES "Migration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
