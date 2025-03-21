import React from "react";
import useFetch from "./hooks/custom-hooks/useFetch";

const CustomFetch = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "GET",
    }
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h3>
        <u>Post List</u>
      </h3>
      {data && (
        <ul>
          {data.slice(0, 3).map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomFetch;
