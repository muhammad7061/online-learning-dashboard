import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const found = mockCourses.find((c) => c.id === parseInt(id));
    setCourse(found);
  }, [id]);

  if (!course)
    return (
      <div className="text-center mt-20 text-gray-600">
        Course not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[80%] max-w-3xl">
        <img
          src={course.image}
          alt={course.title}
          className="rounded-xl mb-4"
        />
        <h1 className="text-3xl font-bold mb-3">{course.title}</h1>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <p className="text-blue-600 font-semibold">Happy learning!</p>
      </div>
    </div>
  );
};

export default CourseDetail;