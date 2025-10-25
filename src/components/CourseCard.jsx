import { Link } from "react-router-dom";

const CourseCard = ({ course, onEnroll, enrolled }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between">
      <div>
        <img
          src={course.image}
          alt={course.title}
          className="rounded-xl h-40 w-full object-cover mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
        <p className="text-gray-600 mb-4">{course.description}</p>
      </div>
      <div className="flex justify-between mt-auto">
        <Link to={`/courses/${course.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
  Learn More
</Link>

        <button
          onClick={() => onEnroll(course)}
          className={`${
            enrolled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded-lg transition-all`}
          disabled={enrolled}
        >
          {enrolled ? "Enrolled" : "Enroll"}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;