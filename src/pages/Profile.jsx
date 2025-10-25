import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const savedCourses = JSON.parse(localStorage.getItem("enrolled")) || [];
    setUser(savedUser);
    setEnrolledCourses(savedCourses);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("enrolled");
    setUser(null);
    window.location.href = "/";
  };

  if (!user) return null;

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-[80%] mx-auto bg-white shadow-md rounded-2xl p-8">
        <div className="flex flex-col items-center mb-10">
          <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mb-3">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-500 text-sm mt-1">
            Password: <span className="font-mono">{user.password}</span>
          </p>
          <button
            onClick={handleLogout}
            className="mt-4 text-sm text-red-500 hover:underline"
          >
            Logout
          </button>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-blue-700">
          Enrolled Courses
        </h3>

        {enrolledCourses.length === 0 ? (
          <p className="text-gray-600 text-center">
            You haven't enrolled in any courses yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="border rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg">{course.title}</h4>
                  <p className="text-gray-600 text-sm mt-2">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
