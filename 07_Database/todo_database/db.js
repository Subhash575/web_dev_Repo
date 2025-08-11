//Create the todo application Database

const mongoose = require("mongoose");

//After that we need to create the schema
const Schema = mongoose.Schema;

//Then we need the object Id of the Schema(It is nothing but database design).
const ObjectId = Schema.ObjectId;

//User Schema: name, email, password
const User = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

//Todo Schema: userId, tittle, done
const Todo = new Schema({
  userId: ObjectId,
  title: String,
  done: Boolean,
});

//Here first parameter {model-name/collection} & second parameter is {schema}
//which we define above
const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
  UserModel,
  TodoModel,
};
