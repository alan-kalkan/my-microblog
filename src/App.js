import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./App.css";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createpost">Create post</Link>
        {!isAuth ? (
          <Link to="/login">Login Xx</Link>
        ) : (
          <button onClick={signUserOut}>Log Out xx</button>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
