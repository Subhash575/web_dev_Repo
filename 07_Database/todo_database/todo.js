//Creating the todo application backend.

const express = require("express");
const app = express();

/*
- Create the skeleton for 4 routes
    - POST /signup
    - POST /login
    - POST /todo (authenticated)
    - GET /todos (authenticated)
*/

app.use(express.json());

// signup
app.post("/signup", (req, res) => {});

//login
app.post("/login", (req, res) => {});

//todo
app.post("/todo", (req, res) => {});

//todos
app.get("/todos", (req, res) => {});

app.listen(3000, () => {
  console.log("Server start at port 3000");
});
