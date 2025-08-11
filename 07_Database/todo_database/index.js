//Creating the todo application backend.
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const JWT_SECRET = "siaoenhdgv4934093";
mongoose.connect(
  "mongodb+srv://Subhash10033:4KAvk5ttg4woxKxM@cluster0.sus4gum.mongodb.net/todo-app-database"
);

//(imp-> To understand)
//This is my cluster creditential:- "mongodb+srv://Subhash10033:4KAvk5ttg4woxKxM@cluster0.sus4gum.mongodb.net/"
//One thing we need to add in the above string is my database name. It database not present with that name
//it will create the new database.
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
app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  //Here we use the async and await bcs connecting to the database take the time.
  await UserModel.create({
    name: name,
    email: email,
    password: password,
  });

  res.json({
    message: "You are logged in",
  });
});

//login
app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // (v.imp): All database call you have to await.
  const user = await UserModel.findOne({
    email: email,
    password: password,
  });

  //Here we check what we get back from the database
  console.log(user);

  if (user) {
    const token = jwt.sign(
      {
        //for uniquely identify we use the id
        //It bydefault objectId we convert it into the string
        // userId: user._id,
        userId: user._id.toString(),
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({ message: "Incorrect credential" });
  }
});

//todo

//This is my todo logic:-

// app.post("/todo", async (req, res) => {
//   const decodedData = jwt.verify(req.headers.token, JWT_SECRET);
//   const title = req.body.title;
//   const done = req.body.done;

//   await TodoModel.create({
//     userId: decodedData.userId,
//     title: title,
//     done: done,
//   });

//   res.json({ message: "todo is successfully created" });
// });

//This is actual todo logic:-
//Here both the below endpoint:- app.post(), app.get() need to be authenticated.

//todo
app.post("/todo", auth, async (req, res) => {
  //Here
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId: userId,
    title: title,
    done: done,
  });

  res.json({ message: "todo created successfully" });
});

// todos
app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;
  const todo = TodoModel.findOne({
    userId: userId,
  });

  res.json({
    message: todo,
  });
});

//authentication middleware.
function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    //if data or token is correct then we take the userId from the token and change the req.userId here
    req.userId = decodedData.userId;
    next();
  } else {
    res.status(403).json({
      message: "incorrect credentials",
    });
  }
}

app.listen(3000, () => {
  console.log("Server start at port 3000");
});
