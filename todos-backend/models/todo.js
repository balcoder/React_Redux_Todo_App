const CONFIG = require('../todos.backend.config.js');


const mongoose = require("mongoose");
console.log(`mongodb://${CONFIG.USER_NAME}:${CONFIG.USER_PASSWORD}@ds047484.mlab.com:47484/todos-node-backend`);
mongoose.connect(`mongodb://${CONFIG.USER_NAME}:${CONFIG.USER_PASSWORD}@ds047484.mlab.com:47484/todos-node-backend`,  { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("debug", true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: String
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
