import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import dbConnect from "../../lib/dbConnect"
import Todo from "../../models/Todo"
import { BsBoxArrowInUpLeft } from "react-icons/bs"

/* Allows you to view todo card info and delete todo card*/
const TodoPage = ({ todo }) => {
  const router = useRouter()
  const [message, setMessage] = useState("")

  const onDelete = async () => {
    const todoID = router.query.id

    try {
      await fetch(`/api/todos/${todoID}`, {
        method: "Delete",
      })
      router.push("/todos")
    } catch (error) {
      setMessage("Failed to delete the todo.")
    }
  }
  return (
    <div
      key={todo._id}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold mb-4">{todo.title}</h2>
      <p className="text-lg text-gray-600 mb-6">{todo.description}</p>
      <div className="flex justify-end">
        <Link href="/todos">
          <button className="bg-green-500 text-white rounded px-6 py-3 ml-4 hover:bg-green-600 transition duration-300 mr-4">
            <BsBoxArrowInUpLeft />
          </button>
        </Link>
        <Link
          href="/[id]/edit"
          as={`/${todo._id}/edit`}
        >
          <button className="bg-indigo-500 text-white rounded px-6 py-3 mr-4 hover:bg-blue-600 transition duration-300">
            Edit
          </button>
        </Link>
        <button
          className="bg-red-700 text-white rounded px-6 py-3 hover:bg-red-600 transition duration-300"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
      {message && <p className="text-red-500 mt-4">{message}</p>}
    </div>
  )
}

export async function getServerSideProps({ params }) {
  await dbConnect()

  const todo = await Todo.findById(params.id).lean()
  todo._id = todo._id.toString()

  return { props: { todo } }
}

export default TodoPage
