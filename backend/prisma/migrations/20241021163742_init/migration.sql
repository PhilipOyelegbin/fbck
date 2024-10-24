-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "gender" TEXT,
    "date_of_birth" TEXT,
    "password" TEXT NOT NULL,
    "has_voted" BOOLEAN NOT NULL DEFAULT false,
    "reset_token" TEXT,
    "reset_expiration" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "date_of_birth", "email", "gender", "has_voted", "id", "name", "password", "phone_number", "reset_expiration", "reset_token", "updatedAt") SELECT "createdAt", "date_of_birth", "email", "gender", "has_voted", "id", "name", "password", "phone_number", "reset_expiration", "reset_token", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
