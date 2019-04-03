DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE  bamazon_db;
CREATE TABLE products (
    item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(40) NOT NULL,
    department_name VArCHAR(40) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INTEGER(20),
    PRIMARY KEY(item_id)
); 
INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES ("Paper towel", "Household", 17.99, 90, 0), ("Apple", "Food", 1.99, 30, 0),
 ("Slow Cooker","Kitchen Appliances", 25.80, 4, 0),
 ("Coffee", "Food", 4.75, 30, 0), ("Toilet Paper","Household", 15.00, 95, 0),
 ("Air Fryers","Kitchen Appliances", 25.99, 2, 0), ("Wipes", "Baby", 12.00, 38, 0),
 ("Mixers", "Kitchen Appliances", 49.39, 45,0), ("Diapers", "Baby", 34.99, 3, 0),  
 ("Facial Tissues", "Household", 6.00, 55, 0); 
CREATE TABLE saleProducts(
    item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
    product_name VArCHAR(40) NOT NULL,
    sale_price DECIMAL (10, 2) NULL,
    PRIMARY KEY (item_id)
);
INSERT INTO saleProducts (product_name, sale_price) 
VALUES ("Slow Cooker", 9.99), ("Air Fryers", 7.99), ("Apple", .99), ("Diapers", 24.99);

-- CREATE TABLE departments (
-- department_id INTEGER(10) AUTO_INCREMENT NOT NULL,
-- department_name VARCHAR(40) NULL,
--  over_head_costs DECIMAL (10, 2) NULL,
--  PRIMARY KEY (department_id)
--  )
