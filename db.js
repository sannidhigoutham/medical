const mysql = require("mysql")

const db = mysql.createConnection({
    host:"database-1.cn244wiagm8f.us-east-2.rds.amazonaws.com",
    user:"admin",
    password:"askfeteworld",
    database:"Medical",
    port:3308,
})

db.connect((err)=>{
    if(err){
        throw err
    }
})

module.exports =db