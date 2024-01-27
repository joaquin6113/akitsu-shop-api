/*
  Warnings:

  - You are about to drop the column `product_id` on the `reviews` table. All the data in the column will be lost.
  - You are about to drop the column `textContent` on the `reviews` table. All the data in the column will be lost.
  - Added the required column `productId` to the `reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text_content` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `reviews_product_id_fkey` ON `reviews`;

-- DropIndex
DROP INDEX `reviews_user_id_fkey` ON `reviews`;

-- AlterTable
ALTER TABLE `products` MODIFY `original_price` FLOAT NULL;

-- AlterTable
ALTER TABLE `reviews` DROP COLUMN `product_id`,
    DROP COLUMN `textContent`,
    ADD COLUMN `productId` INTEGER NOT NULL,
    ADD COLUMN `text_content` TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
