import Head from "next/head"
import Link from "next/link"
import { useUser } from "@auth0/nextjs-auth0/client"
import { useRouter } from "next/router"
import { useState } from "react"
import { BiUserCircle } from "react-icons/bi"
const Layout = ({ children }) => {
  const { user, error, isLoading } = useUser()
  const [show, setShow] = useState(false)
  const router = useRouter()
  if (router.pathname === "/todos" && show === false) {
    setShow(true)
  } else if (router.pathname !== "/todos" && show === true) {
    setShow(false)
  }
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <>
      <Head>
        <title>Alex Pro</title>
      </Head>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex flex-col">
        <nav className="bg-gray-800">
          <div className="container mx-auto py-4 px-6">
            {user ? (
              <>
                <div className="flex justify-between items-center">
                  <div>
                    <Link href="/">
                      <a className="text-white text-xl font-bold mr-8">Home</a>
                    </Link>
                    <Link href="/todos">
                      <a className="text-white text-xl font-bold mr-8">TODOS</a>
                    </Link>
                    {show ? (
                      <Link href="/new">
                        <a className="text-white bg-orange-500 rounded px-4 py-2 hover:bg-orange-600 transition duration-300">
                          Add Todo
                        </a>
                      </Link>
                    ) : null}
                  </div>
                  <div>
                    <Link href="/profile">
                      <a className="text-white bg-cyan-500 rounded px-4 py-2 hover:bg-cyan-600 transition duration-300 mr-6">
                        <BiUserCircle className="inline-block h-100 w-100" />
                      </a>
                    </Link>

                    <Link href="/api/auth/logout">
                      <a className="text-white bg-indigo-500 rounded px-4 py-2 hover:bg-indigo-600 transition duration-300">
                        Log out
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between items-center">
                  <Link href="/">
                    <a className="text-white text-xl font-bold">Home</a>
                  </Link>

                  <Link href="/api/auth/login">
                    <a className="text-white bg-indigo-500 rounded px-4 py-2 hover:bg-indigo-600 transition duration-300">
                      Log in
                    </a>
                  </Link>
                </div>
              </>
            )}
          </div>
        </nav>
        <div className="flex-grow container mx-auto py-8">{children}</div>
      </div>
    </>
  )
}

export default Layout
