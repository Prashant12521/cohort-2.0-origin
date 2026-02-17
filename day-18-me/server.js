require('dotenv').config()
const app = require("./src/app");
const connectT0Db = require('./src/config/database');

connectT0Db()

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});