import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white shadow-2xl">

      <div className="p-6 border-b border-slate-700">

        <h1 className="text-2xl font-bold">
          🚀 Dashboard
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Student Management
        </p>

      </div>

      <div className="p-4">

        <Link
          to="/"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition mb-2"
        >
          🏠 Home
        </Link>

        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition mb-2"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/about"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition mb-2"
        >
          ℹ️ About
        </Link>

        <Link
          to="/login"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition mb-2"
        >
          🔑 Login
        </Link>

        <Link
          to="/signup"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
        >
          👤 Signup
        </Link>

      </div>

      <div className="absolute bottom-6 left-6 text-gray-400 text-sm">
        Built with React ⚛️
      </div>

    </div>
  );
};

export default Sidebar;