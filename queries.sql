CREATE TABLE IF NOT EXISTS shopper_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL UNIQUE,
         password VARCHAR(255) NOT NULL,
         role VARCHAR(64) NOT NULL DEFAULT "NORMAL"
      );

      CREATE TABLE IF NOT EXISTS shopper_products (
         cod VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         price DOUBLE NOT NULL,
         qty_stock INT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS shopper_purchases (
         id VARCHAR(255) PRIMARY KEY,
         product_cod VARCHAR(255) NOT NULL,
         product_name VARCHAR(255) NOT NULL,
         purchase_date VARCHAR(255) NOT NULL,
         delivery_date VARCHAR(255) NOT NULL,
         user_id VARCHAR(255) NOT NULL,
         price DOUBLE NOT NULL,
         qty_cart INT NOT NULL,
         FOREIGN KEY(user_id) REFERENCES shopper_users(id),
         FOREIGN KEY(product_cod) REFERENCES shopper_products(cod)
      );