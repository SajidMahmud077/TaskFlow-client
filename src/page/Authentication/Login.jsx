import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from '../../assets/flowlogo.png'

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  dark:bg-gray-900 px-4">
      <div className="flex w-full max-w-4xl overflow-hidden text-white rounded-lg shadow-lg bg-gray-800">
    
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
          }}
        ></div>

        {/* Right Side - Login Form */}
        <div className="w-[380px] p-6 md:p-8 lg:w-1/2">
          <div className="flex justify-center">
            <img
              className="w-auto h-7 sm:h-8"
              src={logo}
              alt="Logo"
            />
          </div>

          <p className="mt-3 text-xl text-center text-white dark:text-gray-200">
            Welcome back!
          </p>

          {/* Google Sign-In Button */}
          <button className="flex items-center justify-center w-full mt-4 border rounded-lg dark:border-gray-700 dark:text-gray-200  dark:hover:bg-gray-600">
            <div className="px-4 py-2">
            <FcGoogle className='text-2xl' />
            </div>
            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600"></span>
            <p className="text-xs text-center text-white uppercase dark:text-gray-400">
              or login with email
            </p>
            <span className="w-1/5 border-b dark:border-gray-600"></span>
          </div>

          {/* Email Input */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-white dark:text-gray-200">
              Email Address
            </label>
            <input
              className="block w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block mb-2 text-sm font-medium text-white dark:text-gray-200">
                Password
              </label>
              <a
                href="#"
                className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <input
              className="block w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Sign-In Button */}
          <div className="mt-6">
            <button className="w-full px-6 py-3 text-white bg-gradient-to-r from-yellow-500 to-gray-600 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300">
              Sign In
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600"></span>
            <Link
              to="/"
              className="text-xs text-white uppercase dark:text-gray-400 hover:underline"
            >
              or sign up
            </Link>
            <span className="w-1/5 border-b dark:border-gray-600"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
