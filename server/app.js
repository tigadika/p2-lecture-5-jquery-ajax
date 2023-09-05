const express = require("express");
const UserHandler = require("./controllers/user");
const GirlGroupHandler = require("./controllers/girlgroups");
const { authentication } = require("./middleware/authentication");
const app = express();
const cors = require('cors');

const PORT = 3000;

// middleware - body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors()) // access origin di allow


// routes
app.get("/", (req, res) => {
  res.json({ message: "Server is up" });
});
app.post("/register", UserHandler.register);
app.post("/login", UserHandler.login);

app.use(authentication);
app.get("/girlgroups", GirlGroupHandler.getGirlGroupList);
app.get("/girlgroups/:id", GirlGroupHandler.getGirlGroupById);
app.post("/girlgroups", GirlGroupHandler.addGirlGroup);
app.delete("/girlgroups/:id", GirlGroupHandler.deleteGirlGroupById);

// listening
app.listen(PORT, () =>
  console.log(`Server is up dudeh: http://localhost:${PORT}`)
);
