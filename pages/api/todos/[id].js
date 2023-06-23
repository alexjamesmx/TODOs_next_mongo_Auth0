import dbConnect from "../../../lib/dbConnect"
import Todo from "../../../models/Todo"
import { withApiAuthRequired } from "@auth0/nextjs-auth0"

const handler = async function (req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const todo = await Todo.findById(id)
        if (!todo) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: todo })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case "PUT" /* Edit a model by its ID */:
      try {
        const todo = await Todo.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!todo) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: todo })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedTodo = await Todo.deleteOne({ _id: id })
        if (!deletedTodo) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}

export default withApiAuthRequired(handler)
