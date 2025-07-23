//Create the todo application Database

const mongoose = require("mongoose");

//After that we need to create the schema
const Schema = mongoose.Schema;

//Then we need the object Id of the Schema(It is nothing but database design).
const ObjectId = Schema.ObjectId;

//User Schema: name, email, password
const User = new Schema({
  name: String,
  email: String,
  password: String,
});

//Todo Schema: userId, tittle, done
const Todo = new Schema({
  userId: ObjectId,
  title: String,
  done: Boolean,
});
