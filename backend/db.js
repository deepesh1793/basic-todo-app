const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:gIrUGP7vRWVX0ANC@cluster0.uv4ax.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)
module.exports = {
    todo
}