import dbConnect from "../lib/dbConnect";
import Todo from "../models/Todo";

const Index = () => (
  <>
    {/* Create a card for each todo */}
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-6xl font-bold mb-8 text-white">
        Welcome to TODO App by Alexjamesmx
      </h1>
      <p className="text-xl text-center mb-12 text-white">
        Manage your tasks efficiently and stay organized.
      </p>
      <img
        src="/images/tasks.png"
        alt="TODO Image"
        className="w-32 h-12 rounded-full mb-12 animate-bounce"
      />
      <p className="text-2xl text-center mb-8 text-white">
        Stay on top of your tasks, create, update, and delete TODOs seamlessly.
      </p>
      <p className="text-2xl text-center text-white">
        Get started by exploring our intuitive and user-friendly interface.
      </p>
    </div>
  </>
);

export default Index;
