import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for this todo."],
    maxlength: [50, "Title cannot be more than 50 characters"],
  },
  description: {
    type: String,
    maxlength: [60, "Description cannot be more than 60 characters"],
  },
});

// Check if the model already exists before defining it
const Todo =
  (mongoose.models && mongoose.models.Todo) ||
  mongoose.model("Todo", TodoSchema);

export default Todo;
