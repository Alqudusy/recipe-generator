import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import { auth } from "./components/firebase-config"; // Firebase setup
import Home from './components/Home';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // To manage loading state

  // Check user authentication state on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser); // Set user if signed in, else null
      setLoading(false); // Once the auth state is checked, stop loading animation
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  if (loading) {
    // Show loading animation while the user auth state is being checked
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/auth" />}
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
