import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/createpost">Create post</Link>
          {!isAuth ? (
            <Link to="/login">Login</Link>
          ) : (
            <button className="logoff-with-google-btn" onClick={signUserOut}>
              Log Out
            </button>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
