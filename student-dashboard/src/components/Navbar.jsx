import { Link } from "react-router-dom";

const Navbar = () => {

  const handleLogout = () => {

    localStorage.removeItem("token");

    window.location.href = "/login";

  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 shadow-lg">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          🎓 Student Dashboard
        </h1>

        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="hover:text-gray-200 transition"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-gray-200 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/about"
            className="hover:text-gray-200 transition"
          >
            About
          </Link>

          <Link
            to="/login"
            className="hover:text-gray-200 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="hover:text-gray-200 transition"
          >
            Signup
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;