const mongoose = require("mongoose");
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds047484.mlab.com:47484/todos-node-backend',  { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("debug", true);
//mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: String
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
