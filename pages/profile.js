import { withPageAuthRequired } from "@auth0/nextjs-auth0"

export const getServerSideProps = withPageAuthRequired()

export default function Profile(props) {
  const { user } = props
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-4xl font-bold mb-4">Profile</h1>
      <p className="text-lg text-gray-600 mb-2">Hola! 👋</p>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-4">
          <img
            src={user.picture}
            alt="Profile Picture"
            className="w-32 h-32 rounded-full mx-auto"
          />
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  )
}
