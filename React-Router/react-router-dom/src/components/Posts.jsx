import React from "react";
import { Link, Routes, Route, useRouteMatch } from "react-router-dom";
import Post from "./Post"; // Importing Post component

const postsData = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post.",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post.",
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the content of the third post.",
  },
];

function Posts() {
  let { path } = useRouteMatch(); // Get the current path

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {postsData.map((post) => (
          <li key={post.id}>
            <Link to={`${path}/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <Routes>
        <Route path={`${path}/:postId`} element={<Post />} />
      </Routes>
    </div>
  );
}

export default Posts;
