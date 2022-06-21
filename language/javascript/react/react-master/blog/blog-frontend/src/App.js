import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PostListPage from "./pages/PostListPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/@:username" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/@:username/:postId" element={<PostPage />} />
    </Routes>
  );
}

export default App;
