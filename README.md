# bamazon
## Overview
This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package. The application presents two interfaces: customer and manager.
## Instruction
### 1. After download or clone the repos, you can see  two npm dependencies in package json! Before running the JavaScript files mentioned above, please run npm install in your terminal to download the prompt and mysql node packages.
### 2.MySQL Database Setup
In order to run this application, you should have the MySQL database already set up on your machine. If you don't, visit the MySQL installation page to install the version you need for your operating system. Once you have MySQL isntalled, you will be able to create the Bamazon database and the products table with the SQL code found in Bamazon.sql. Run this code inside your MySQL client like Sequel Pro to populate the database, then you will be ready to proceed with running the Bamazon customer and manager interfaces.

## Node.js
Three JavaScript files replicate the basics of a simple ecommerce engine:
BamazonCustomer.js (See example here)
Receives orders from customers via the command line and interfaces with mySQL to deplete stock from the store's inventory.
BamazonManager.js (See example here)
Mimics the basics of a warehouse management system, providing managers with a list of options to view stock and adjust inventory.
A sample of the menu is below: 
View Products for Sale
View Low Inventory
Add to Inventory
Add New Product
BamazonExecutive.js (See example here)
Simulates very basic profit and sales insights for upper management.
A sample of the menu is below: 
View Product Sales by Department
Create New Department
MySQL
The JavaScript files mentioned above query a MySQL database called Bamazon which is locally hosted on my laptop.
Please refer to the schema.sql file to see how the database was created using raw SQL queries.
If you wish to run this app on your own machine, then please note the following commands:
If you are new to MySQL, please set up MySQL and MySQL Workbench on your laptop and then open up to your localhost connection.
Run CREATE DATABASE Bamazon; in mySQL Workbench.
Be sure to select the correct database by running the USE Bamazon;
Refer to the raw SQL commands under the === First Table === comment to set up the Products table.
Refer to the raw SQL commands under the === Second Table === comment to set up the Departments table.
Node Package Manager (npm)
If you clone this repo down to your machine, note that it has two npm dependencies! Before running the JavaScript files mentioned above, please run npm install in your terminal to download the prompt and mysql node packages.
