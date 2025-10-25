import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Please enter your name!");

    const finalPassword = password.trim() === "" ? "1234" : password;
    const user = { name, password: finalPassword };
    localStorage.setItem("user", JSON.stringify(user));
    alert(`Welcome, ${name}!`);
    navigate("/courses");
  };

  return (
    <div className="min-h-[92.5vh] flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-2xl p-8 w-[90%] max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Login
        </h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 w-full rounded-lg p-3 mb-5 focus:outline-blue-500"
        />
        <input
          type="password"
          placeholder="Enter your password (default 1234)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 w-full rounded-lg p-3 mb-5 focus:outline-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium"
        >
          Login
        </button>
        <p className="text-center text-gray-500 text-sm mt-4">
          If no password is entered, the default will be{" "}
          <span className="font-semibold text-blue-600">1234</span>.
        </p>
      </form>
    </div>
  );
};

export default Login;