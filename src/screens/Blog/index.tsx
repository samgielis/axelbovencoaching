import { Route, Routes } from "react-router-dom";
import { BlogPost } from "./screens/BlogPost";
import { Overview } from "./screens/Overview";

export const Blog = () => {
  return (
    <Routes>
      <Route index element={<Overview />} />
      <Route path=":postslug" element={<BlogPost />} />
    </Routes>
  );
};
