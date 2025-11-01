import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Profile = () => {
  const [user, setUser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [newUserName, setNewUserName] = useState(""); // State for input value
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const savedCourses = JSON.parse(localStorage.getItem("enrolled")) || [];
    setUser(savedUser);
    
    // Initialize newUserName when component mounts/user data loads
    if (savedUser) {
        setNewUserName(savedUser.name);
    }

    setEnrolledCourses(savedCourses);
  }, []);

  // Helper function to get initials (First letter of first name and last name)
  const getUserInitials = (name) => {
    if (!name) return "";
    const nameParts = name.trim().split(/\s+/);
    let initials = nameParts[0].charAt(0).toUpperCase();
    if (nameParts.length > 1) {
      initials += nameParts[nameParts.length - 1].charAt(0).toUpperCase();
    }
    return initials;
  };
  
  const handleSave = () => {
    if (newUserName.trim() === "") {
        alert("Name cannot be empty.");
        return;
    }

    // 1. Create the updated user object
    const updatedUser = {
        ...user,
        name: newUserName.trim()
    };
    
    // 2. Update React state
    setUser(updatedUser);
    
    // 3. Persist to localStorage
    localStorage.setItem("user", JSON.stringify(updatedUser));

    // 4. Exit editing mode
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("enrolled");
    setUser(null);
    navigate("/", { replace: true }); 
  };

  if (!user) return null; 

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-[80%] mx-auto bg-white shadow-md rounded-2xl p-8">
        <div className="flex flex-col items-center mb-10">
          <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mb-3">
            {getUserInitials(user.name)}
          </div>
          
          {/* Conditional Display for Name (View vs. Edit Mode) */}
          <div className="flex flex-col items-center w-full max-w-sm">
            {isEditing ? (
                // Edit Mode: Input field and Save/Cancel buttons
                <div className="w-full">
                    <input 
                        type="text"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                        className="text-2xl font-semibold text-center w-full border-b-2 border-blue-500 focus:outline-none"
                    />
                    <div className="flex gap-4 mt-3 justify-center">
                        <button
                            onClick={handleSave}
                            className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => {
                                setIsEditing(false);
                                setNewUserName(user.name); // Revert unsaved changes
                            }}
                            className="text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                // View Mode: Display name and Edit button (Styling Applied Here)
                <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-semibold">{user.name}</h2>
                    
                    {/* NEW STYLED BUTTON */}
                    <button
                        onClick={() => setIsEditing(true)}
                        className="text-blue-500 bg-blue-100 p-2 rounded-xl hover:text-blue-700 transition"
                        aria-label="Edit Profile Name"
                    >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil">
                                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                            </svg>
                        
                    </button>
                </div>
            )}
          </div>

          <button
            onClick={handleLogout}
            className="mt-6 text-sm text-red-500 hover:underline"
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
