mysql = require("mysql");
inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gao9851046!',
    database: 'bamazon_db',
    port: 3306
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
    start();
});
function start() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "what you want to do?",
                choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product', 'Exit'],
                name: "action"
            }
        ])
        .then(function (answer) {
            switch (answer.action) {
                case "View Products for Sale":
                    viewProducts();
                    break;

                case "View Low Inventory":
                    viewLowInventory();
                    break;

                case "Add to Inventory":
                    addToInventory();
                    break;

                case "Add New Product":
                    addNewProduct();
                    break;

                case "Exit":
                    exit();
                    break;
            }
        })
}
function exit() {
    console.log("BEY BEY!");
    connection.end();
}
function viewProducts() {
    var query = "SELECT products.item_id, products.product_name, products.price, saleProducts.sale_price FROM products LEFT JOIN saleProducts ON products.product_name = saleproducts.product_name ORDER BY products.item_id"
    connection.query(query, function (err, results) {
        if (err) throw err;
        else {
            console.table(results);
        }
        start();
    });
}

function viewLowInventory() {
    var query = "SELECT item_id, product_name, stock_quantity FROM products GROUP BY product_name HAVING stock_quantity <5";
    connection.query(query, function (err, results) {
        for (let i = 0; i < results.length; i++) {
            // console.table(results[i]);
        }
        console.table(results);
        start();
    });
}
// inquirer prompt to choise item from the list to update
function addToInventory() {
    connection.query("SELECT product_name FROM products", function (err, results) {
        inquirer
            .prompt ([
                {
                    type: "rawlist",
                    message: "Which item do you want to add to Inventory",
                    name: "choice",
                    choices: function () {
                        var choiceArry = [];
                        for (let i = 0; i < results.length; i++) {
                            choiceArry.push(results[i].product_name);
                        }
                        return choiceArry;
                    }
                },
                {
                    type: "number",
                    message: "how much you want to add?",
                    name: "addAmount",
                }
            ])
            .then(function (answer) {
                connection.query("SELECT item_id,product_name, price, stock_quantity FROM products", function (err, results) {
                    var chosenItem;
                    // console.log(results);
                    for (i = 0; i < results.length; i++) {
                        if (answer.choice === results[i].product_name) {
                            chosenItem = results[i];
                            // console.log(chosenItem);
                        }
                    }
                    connection.query("UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: chosenItem.stock_quantity += answer.addAmount
                            },
                            {
                                product_name: answer.choice
                            }
                        ],
                        function (err, results) {
                            if (err) throw err;
                            console.log("Quantity Updated!");
                            start();
                        });         
                });  
            });  
    });
}

function addNewProduct() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "what new product do you to add?",
                name: "newProduct"
            },
            {
                type: "input",
                message: "which department you want to add to?",
                name: "department"
            },
            {
                type: "number",
                message: "what's the price?",
                name: "price"
            },
            {
                type: "number",
                message: "what's the quantity you want to add?",
                name: "quantity"
            }
        ])
        .then(function (answer) {
            var query = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ?";
            var values = [
                [answer.newProduct, answer.department, answer.price, answer.quantity],
            ];
            connection.query(query, [values], function (err, res) {
                if (err) throw err;
                console.log("New Product Added!!");
                connection.query("SELECT item_id,product_name, price, stock_quantity FROM products", function (err, res) {
                    if (err) throw err;
                    console.table(res);
                    start();
                });
            });
        });
}


// create a new table with sale price 
//left join 
//inquire prompt to choose what to do 
//run user's action 
//if answer.action=view Products for sale run viewProducts()
//viewProdcuts() SELECT products.item_id, products.product_name, products.price and saleProduct.sale_price FROM products LEFT JOIN saleProduct ON
//products.name=saleProduct.name

//if answer.action = view Low, run viewLowInverntory()
//VLI() list all the products stock_quantity < 5 


//if answeer.action =Add to Inventory run addInventory()
// inquirer prompt to choise item from the list to update

//if answer.action = add new Proudct, run addNewProduct()
//inquirer what 's want to add?
// which department 
//the quantity?
// INSERT INTO products (prodcut_name, department, stock-qautity)
