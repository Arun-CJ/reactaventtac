import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostInfo = () => {
  const [postInfo, setPostInfo] = useState({});
  const routeParams = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${routeParams.postId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setPostInfo(data))
      .catch((err) => console.log("error in request", err));
  }, []);

  const addPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  const updatePost = () => {
    // console.log(postInfo);
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        id: routeParams.postId,
        title: "upadted title",
        body: "updated body",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setPostInfo(json));
  };

  return (
    <div key={postInfo.id} className="mt-3 col-4">
      <h2>{postInfo.title}</h2>
      <p>{postInfo.body}</p>
      <div>
        <button className="btn btn-primary" onClick={() => updatePost()}>
          Update Post
        </button>
      </div>
    </div>
  );
};

export default PostInfo;
