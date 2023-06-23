import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for this todo."],
    maxlength: [50, "Title cannot be more than 50 characters"],
  },
  description: {
    type: String,
    maxlength: [60, "Description specified cannot be more than 60 characters"],
  },
})

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema)
