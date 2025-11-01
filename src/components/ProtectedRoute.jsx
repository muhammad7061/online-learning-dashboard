import { Navigate, useLocation } from "react-router-dom";

// Note: This simple check relies on a 'user' item existing in localStorage
const isAuthenticated = () => {
  return !!localStorage.getItem("user");
};

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    // 1. Save the intended destination URL to session storage
    //    The Login component will use this to redirect the user back.
    sessionStorage.setItem("redirectPath", location.pathname);
    
    // 2. Redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // 3. If authenticated, render the children component (e.g., <Profile />)
  return children;
};

export default ProtectedRoute;
