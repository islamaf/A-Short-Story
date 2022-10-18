import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { Navbar, NoAuthNavbar } from "./components/Common/Navbar/Navbar";
import Login from "./components/Pages/Login/Login";
import Main from "./components/Pages/Main/Main";
import Register from "./components/Pages/Register/Register";
import PostForm from "./components/Pages/Story/Post";
import Post from "./components/Pages/Story/ViewStory";
import Profile from "./components/Pages/User/Profile";

function App() {
  const { auth } = useAuth();

  return (
    <Router>
      {auth ? <Navbar /> : <NoAuthNavbar />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users/:id" element={<Profile />} />
        <Route path="/posts/create" element={<PostForm />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/logout" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
