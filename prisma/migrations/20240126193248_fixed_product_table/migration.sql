/*
  Warnings:

  - You are about to drop the column `currentPrice` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `is_new` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `pertange_discount` on the `products` table. All the data in the column will be lost.
  - Added the required column `current_price` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `original_price` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `reviews` DROP FOREIGN KEY `reviews_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `reviews` DROP FOREIGN KEY `reviews_user_id_fkey`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `currentPrice`,
    DROP COLUMN `is_new`,
    DROP COLUMN `pertange_discount`,
    ADD COLUMN `current_price` FLOAT NOT NULL,
    ADD COLUMN `has_discount` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `original_price` FLOAT NOT NULL;
