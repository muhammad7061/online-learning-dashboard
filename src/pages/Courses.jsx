import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

import webDev from "../assets/Web-Dev.jpeg";
import reactImg from "../assets/React-Js.jpeg";
import pythonImg from "../assets/Python.jpeg";
import githubImg from "../assets/Git&Github.png";
import tailwindImg from "../assets/Tailwind-CSS.jpeg";
import sqlImg from "../assets/SQL.jpeg";

const mockCourses = [
  {
    id: 1,
    title: "Intro to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript.",
    image:
      webDev,
  },
  {
    id: 2,
    title: "React for Beginners",
    description: "Build modern web apps with React JS.",
    image:
      reactImg,
  },
  {
    id: 3,
    title: "Python Fundamentals",
    description: "Start coding in Python — the most beginner-friendly language.",
    image:
      pythonImg,
  },
  {
    id: 4,
    title: "Git & GitHub",
    description: "Master version control and collaboration using Git and GitHub.",
    image:
      githubImg,
  },
  {
    id: 5,
    title: "Tailwind CSS",
    description: "Style modern websites rapidly using the Tailwind CSS framework.",
    image:
      tailwindImg,
  },
  {
    id: 6,
    title: "SQL Essentials",
    description: "Learn to query, manage, and analyze data using SQL databases.",
    image:
      sqlImg,
  },
];

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setCourses(mockCourses);
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const savedEnrolls = JSON.parse(localStorage.getItem("enrolled")) || [];
    setUser(savedUser);
    setEnrolledCourses(savedEnrolls);
  }, []);

  const handleEnroll = (course) => {
    if (!user) return alert("Please log in first!");
    const updated = [...enrolledCourses, course];
    setEnrolledCourses(updated);
    localStorage.setItem("enrolled", JSON.stringify(updated));
  };

  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="w-[80%] mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Available Courses</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEnroll={handleEnroll}
              enrolled={enrolledCourses.some((c) => c.id === course.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;