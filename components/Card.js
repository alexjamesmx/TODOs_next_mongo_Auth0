import Link from "next/link"

const Card = ({ todo }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-lg font-semibold">{todo.title}</h3>
    <p className="text-gray-600">{todo.description}</p>
    <div className="mt-4">
      <Link
        href="/[id]"
        as={`/${todo._id}`}
      >
        <button className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 transition duration-300">
          View
        </button>
      </Link>
    </div>
  </div>
)

export default Card
