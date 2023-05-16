const express = require("express");
const connection = require("./config/db.js");
const bookRouter = require('./routes/api/books');
const cors = require("cors");

const app = express();

connection();

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// cors origin

app.use(cors({ origin: true, credentials: true }));

const port = process.env.PORT || 8082;

app.get("/", (req, res, next) => {
  res.send("<h1>Hello World!</h1>");
});

app.use("/book", bookRouter); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
