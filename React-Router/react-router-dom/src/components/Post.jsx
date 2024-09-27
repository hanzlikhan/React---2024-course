import React from "react";
import { useParams, Link, Routes, Route } from "react-router-dom";
import Comments from "./Comments"; // Importing Comments component

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

function Post() {
  let { postId } = useParams(); // Get the postId from the URL
  const post = postsData.find((p) => p.id === parseInt(postId)); // Find the post based on postId

  if (!post) {
    return <h3>Post not found</h3>; // Handle case where post is not found
  }

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <Link to={`/posts/${postId}/comments`}>View Comments</Link>

      <Routes>
        <Route path={`/posts/:postId/comments`} element={<Comments />} />
      </Routes>
    </div>
  );
}

export default Post;
