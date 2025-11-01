import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // --- MOCK LOGIN LOGIC ---
    // User can enter any username, but the password MUST be '1234'.
    // The condition checks: 1) Is the username NOT empty, AND 2) Is the password '1234'?
    if (username.trim() !== "" && password === "1234") {
      
      // 1. Store user data, using the entered username as the user's name
      const user = { name: username, id: 1 }; 
      localStorage.setItem("user", JSON.stringify(user));
      
      // 2. Check for a stored redirect path (from a protected route or enrollment click)
      const redirectPath = sessionStorage.getItem("redirectPath") || "/profile";
      
      // 3. Clear the redirect path and navigate to the intended page
      sessionStorage.removeItem("redirectPath");
      navigate(redirectPath, { replace: true });

    } else {
      let errorMessage = "Invalid login attempt. ";
      if (username.trim() === "") {
        errorMessage += "Username cannot be empty.";
      } else if (password !== "1234") {
        errorMessage += "The password must be '1234'.";
      }
      alert(errorMessage);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Login to Enroll & View Profile
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
            <span className="font-semibold text-red-500">MOCK LOGIN:</span> Use any name, but the password must be <code className="bg-red-100 p-1 rounded">1234</code>.
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter any name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="1234"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
