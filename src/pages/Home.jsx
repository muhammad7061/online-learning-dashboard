import { Link } from "react-router-dom";

import bgImage from "../assets/Home-Bg.jpeg";

const Home = () => {
  return (
    <section
      className="min-h-[92.5vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
      }}
    >
      <div className="bg-black/50 p-10 rounded-2xl text-center text-white max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Welcome to OLMS Dashboard</h1>
        <p className="text-lg mb-8">
          Your personalized online learning platform — explore courses, grow your skills, 
          and track your progress all in one place.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/about"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg transition-all"
          >
            About Us
          </Link>
          <Link
            to="/courses"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-xl transition-all"
          >
            View Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;