import React from "react";
import { Link } from "react-router";

const PostCard = ({ post }) => {
  return (
    <div style={{ border: "1px solid grey", margin: "10px", padding: "10px" }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <Link to={`/posts/${post.id}`}>View Comments</Link>
    </div>
  );
};

export default PostCard;
