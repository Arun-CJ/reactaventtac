import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=9", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => {
          return (
            <div key={post.id} className="mt-3 col-4">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <div>
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate(`/post-info/${post.id}`)}
                >
                  View Post
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
