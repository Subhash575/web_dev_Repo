const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const JWT_SECRET = "siaoenhdgv4934093";
mongoose.connect(
  "mongodb+srv://Subhash10033:4KAvk5ttg4woxKxM@cluster0.sus4gum.mongodb.net/improve-todo-database"
);

const app = express();

app.use(express.json());

// signup
//In signup endpoint we know that 'bcrypt' and 'UserModel' create the error therefore
//we use the try-catch block here.
app.post("/signup", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    //Using the bcrypt without the callback it will return the promise.
    const hashPassword = await bcrypt.hash(password, 5);
    console.log(hashPassword);
    // Hash Password:- $2b$05$fTeswMtckyLhoGG.yg3xTuvrBWf6dVw6.D0C6ySlpuVSx/hLY3HfC
    // structure of password:- $<version>$<cost>$<22-char-salt+31-char-hash>
    // Here cost is nothing but round which is `5` in our case.
    //the rounds (cost factor) in bcrypt only change how many times the algorithm runs,
    // not the final string length.
    // 22-char-salt is always fixed it is random.
    // But 31-char-hash length can be change in case of different encryption alogrithm
    // like SHA-256. But in case of bcrypt it doesn't change by any factor.

    //Here we use the async and await bcs connecting to the database take the time.
    await UserModel.create({
      name: name,
      email: email,
      password: hashPassword,
    });

    res.json({
      message: "You are signed up",
    });
  } catch (e) {
    res.status(500).json({ message: "Error while signup" });
  }
});

//login
app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // (v.imp): All database call you have to await.
  const response = await UserModel.findOne({
    email: email,
    // password: password,
    //Here we don't use the password bcs it is hash and not match with original password
  });

  //Here we check what we get back from the database
  console.log(response);

  if (!response) {
    res.status(403).json({ message: "user doesn't exist in our database." });
    return;
    //Here we need to `return` otherwise our code will not work fine bcs will code also
    // run.
    //Another problem is that if we use the two or more `res` we get the error.
    //in Express (and Node’s HTTP), each request can only have one response.
    //For learning only:-
    /*

    If you want to send different responses based on a condition → use if/else with return:
    app.get("/test", (req, res) => {
    if (!req.query.name) {
      return res.status(400).send("Name required"); // response ends here
    }
    return res.send(`Hello ${req.query.name}`); // response ends here
    });

  */
  }
  //bcrypt provide the way to compare the hashpassword with the original password
  const passwordMatch = await bcrypt.compare(password, response.password);
  //It will return true/false.
  //Alway remember it will return the promise therefore we need to use the await.
  //Otherwise when you send the email with different password each time it will give the
  //token always in case of login/signin not `incorrect credential`for `wrong password`.
  //Therefore always use the 'await' here.

  if (passwordMatch) {
    const token = jwt.sign(
      {
        //for uniquely identify we use the id
        //It bydefault objectId we convert it into the string
        // userId: user._id,
        userId: response._id.toString(),
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
  const todo = await TodoModel.findOne({
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

//One problem in our todo-application is that server is crashed when we use the duplicate
//key/same email twice to remove this problem we use the try catch block in our signup
//endpoint.
