import { useState } from "react"
import { useRouter } from "next/router"
import { mutate } from "swr"
import Link from "next/link"
import { BsBoxArrowInUpLeft } from "react-icons/bs"
import { withApiAuthRequired } from "@auth0/nextjs-auth0"

const Form = ({ formId, todoForm, forNewTodo = true }) => {
  const router = useRouter()
  const contentType = "application/json"
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState("")

  const [form, setForm] = useState({
    id: todoForm.id,
    title: todoForm.title,
    description: todoForm.description,
  })

  const putData = async (form) => {
    const { id } = router.query

    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        throw new Error(res.status)
      }

      const { data } = await res.json()

      mutate(`/api/todos/${id}`, data, false)
      router.push("/todos")
    } catch (error) {
      setMessage("Failed to update todo")
    }
  }

  const postData = withApiAuthRequired(async (form) => {
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        throw new Error(res.status)
      }

      router.push("/todos")
    } catch (error) {
      setMessage("Failed to add todo")
    }
  })
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      forNewTodo ? postData(form) : putData(form)
    } else {
      setErrors({ errs })
    }
  }

  const formValidate = () => {
    let err = {}
    if (!form.title) err.title = "Title is required"
    return err
  }

  return (
    <>
      <form
        id={formId}
        onSubmit={onSubmit}
        className="bg-white rounded-lg shadow-lg p-8 mb-8"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            maxLength="50"
            value={form.title}
            onChange={onChange}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            maxLength="500"
            value={form.description}
            onChange={onChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <Link href="/todos">
          <button className="bg-indigo-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition duration-300 ml-4 mr-4">
            <BsBoxArrowInUpLeft />
          </button>
        </Link>
        <button
          type="submit"
          className="bg-orange-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  )
}

export default Form
