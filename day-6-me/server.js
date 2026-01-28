const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://prashant:dpnQHY0ihWhKXlbO@cluster0.eufpv1c.mongodb.net/",
    )
    .then(() => {
      console.log("Connected to Database");
    });
}

connectToDb();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
