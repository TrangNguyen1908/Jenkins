var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
var server = require("http").Server(app);

//mở server chạy trên cổng 8282
server.listen(8282);

app.get('/', (req, res) => res.send('Hello World!'))