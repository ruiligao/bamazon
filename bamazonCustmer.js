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
    connection.query('SELECT item_id, product_name, price, stock_quantity FROM products', function (error, results, fields) {
        if (error) throw error;
        // console.log(results);
        console.table(results);
        runInquirer()
    });
}
function runInquirer() {
    inquirer
        .prompt([
            {
                type: "number",
                message: "what's the ID of the product you would like to buy?",
                name: "id"
            },
            {
                type: "number",
                message: "how many units of the product you would like to buy?",
                name: "quantity"
            }
        ])
        .then(answer => {
            connection.query("SELECT item_id,stock_quantity FROM products", function (err, res, fields) {
                if (err) throw err;
                if (res) {
                    var chosenItem;
                    for (i = 0; i < res.length; i++) {
                        if (answer.id === res[i].item_id) {
                            chosenItem = res[i];
                        }
                    }
                    if (answer.quantity <= chosenItem.stock_quantity) {
                        console.log("Your order is successfully proved!");
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: chosenItem.stock_quantity -= answer.quantity
                                },
                                {
                                    item_id: answer.id
                                }
                            ],
                            function (err) {
                                if (err) throw err;
                                console.log("Stock Updated!");
                                check();
                            }
                        );
                    } else {
                        console.log("Sorry, We have insufficient quantity!");
                        check();
                    }
                }
            })
        });
        
}

function check(){
    inquirer
    .prompt([
        {
            type: "list",
            message: "Do you want to buy another product?",
            choices: ['Yes','No'],
            name: "action"
        }
    ])
    .then(function(answer){
        if(answer.action==="Yes") {
            start()
        }
        else {
            console.log("BEY BEY!")
            connection.end();
        }
    });
}