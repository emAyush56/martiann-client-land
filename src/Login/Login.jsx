import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen flex justify-center items-center bg-theme-purple/20x">
      <div className="wrapper bg-white h-full w-[512px] p-4 flex flex-col">
        <header className="ff-taviraj text-center font-semibold text-2xl text-theme-purple">
          <Link to="/">martiann</Link>
        </header>
        <div className="login-wrapper my-auto pb-20 text-center">
          <div className="title text-2xl text-gray-800 font-medium">
            Welcome Back!
          </div>
          <div className="login">
            <form className="flex flex-col gap-2.5 w-72 mx-auto mt-8">
              <input
                required
                type="email"
                className="px-5 py-2 text-gray-800 outline-none border border-gray-300/70 transition-all rounded-full focus:bg-gray-50/70"
                placeholder="email address"
              />
              <input
                required
                type="password"
                className="px-5 py-2 text-gray-800 outline-none border border-gray-300/70 transition-all rounded-full focus:bg-gray-50/70"
                placeholder="password"
              />
              <span className="block text-sm text-theme-purple pr-1.5 text-right">
                <span className="cursor-pointer">Forgot password?</span>
              </span>
              <button
                type="submit"
                className="rounded-full mt-2 bg-theme-purple px-6 py-2 font-medium text-white transition-all hover:scale-105 active:scale-95"
              >
                Login
              </button>
            </form>
            {/* <div className="incorrect-message w-72 mx-auto">
              <div className="text-red-500 text-sm mt-8">
                Sorry, you have entered incorrect email or password! Please try
                again.
              </div>
            </div> */}
          </div>
        </div>
        <footer className="text-xs text-gray-300">
          <ul className="flex gap-4 items-center justify-center">
            <li className="hover:text-gray-400 transition-all cursor-pointer">
              Terms of use
            </li>
            <li className="hover:text-gray-400 transition-all cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Login;
