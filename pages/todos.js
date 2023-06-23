import dbConnect from "../lib/dbConnect"
import Todo from "../models/Todo"
import Card from "../components/Card"
import { withPageAuthRequired } from "@auth0/nextjs-auth0"

const Index = ({ todos }) => (
  <>
    {/* Create a card for each todo */}

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {todos.map((todo) => (
        <Card
          key={todo._id}
          todo={todo}
        />
      ))}
    </div>
  </>
)

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    await dbConnect()
    /* find all the data in our database */
    const result = await Todo.find({})
    const todos = result.map((doc) => {
      const todo = doc.toObject()
      todo._id = todo._id.toString()
      return todo
    })

    return { props: { todos: todos } }
  },
})
export default Index
