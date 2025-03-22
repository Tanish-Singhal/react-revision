import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const PostComments = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const { postId } = useParams();

  // usenavigation and usenavigate both are different things
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      const [postResponse, commentsResponse] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
        axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        ),
      ]);

      setPost(postResponse.data);
      setComments(commentsResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [postId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {post && (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          )}

          <h2 style={{ marginTop: "50px" }}>Comments</h2>
          {comments.map((comment) => (
            <ul>
              <li key={comment.id}>
                <strong>{comment.name}</strong>: {comment.body}
              </li>
            </ul>
          ))}
        </div>
      )}

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default PostComments;
