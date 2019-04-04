# bamazon
## Overview
This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package. The application presents two interfaces: customer and manager.
## Instruction
### 1. Download or clone the repos, 
There are two npm dependencies in package json! Before running the JavaScript files mentioned above, please run npm install in your terminal to download the prompt and mysql node packages.
### 2.MySQL Database Setup
In order to run this application, you should have the MySQL database already set up on your machine. If you don't, visit the MySQL installation page to install the version you need for your operating system. Once you have MySQL isntalled, you will be able to create the Bamazon database and the products table with the SQL code found in Bamazon.sql. Run this code inside your MySQL client like Sequel Pro to populate the database, then you will be ready to proceed with running the Bamazon customer and manager interfaces.

## Node.js
Two JavaScript files replicate the basics of a simple ecommerce engine:
### (1) BamazonCustomer.js
Receives orders from customers via the command line and interfaces with mySQL to deplete stock from the store's inventory.

![1-1](https://user-images.githubusercontent.com/47795010/55520924-6cc9dc00-5633-11e9-938d-c9874cd8f86c.png) ![1-2](https://user-images.githubusercontent.com/47795010/55520933-73585380-5633-11e9-9a9b-272efad2642f.png)


### (2) BamazonManager.js 
Mimics the basics of a warehouse management system, providing managers with a list of options to view stock and adjust inventory.
A sample of the menu is below: 

#### View Products for Sale

![2-2](https://user-images.githubusercontent.com/47795010/55520939-78b59e00-5633-11e9-9e9f-f4bce7cd7344.png)

#### View Low Inventory

![2-3](https://user-images.githubusercontent.com/47795010/55520942-7bb08e80-5633-11e9-8e23-06d5b289d2c5.png)

#### Add to Inventory

![2-4](https://user-images.githubusercontent.com/47795010/55520946-7d7a5200-5633-11e9-9a9e-9337fc338da2.png)

#### Add New Product

![2-5](https://user-images.githubusercontent.com/47795010/55520949-7f441580-5633-11e9-80f2-4db1aedd4133.png)
