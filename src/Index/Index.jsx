import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="wrapper text-center">
        <h1 className="text-4xl font-semibold text-theme-purple ff-taviraj">
          martiann
        </h1>
        <p className="text-gray-800 mt-2">Find and date your ideal match!</p>
        <div className="actions mt-8 space-x-4">
          <Link
            to="/login"
            className="rounded-full mt-2 bg-theme-purple border border-theme-purple px-6 py-2 font-medium text-white transition-all hover:bg-transparent hover:text-theme-purple"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-full mt-2 bg-white border border-theme-purple px-6 py-2 font-medium text-theme-purple transition-all hover:bg-theme-purple hover:text-white"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
