import { useState } from "react";

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    const response = await fetch(
      "http://localhost:5000/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      }
    );

    const data = await response.json();

    console.log(data);

  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600">
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
      <h1 className="text-3xl font-bold text-center mb-6">
        Signup
      </h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-3 rounded-lg mb-4"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-3 rounded-lg mb-4"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-3 rounded-lg mb-4"
      />

      <button
        onClick={handleSignup}
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
      >
        Signup
      </button>

      <p className="text-center mt-4">
        Already have an account?
        <a
          href="/login"
          className="text-green-600 ml-2"
        >
          Login
        </a>
      </p>
    </div>
  </div>
);
};

export default Signup;