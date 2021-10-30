import { useEffect, useState } from "react";
import { ViewPosts } from "../components/ViewPosts";
import { AddPost } from "../components/AddPost";
import { useGetPosts } from '../hooks/useGetPosts';



export const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const getPosts = useGetPosts();
  
  const handleDelete = () => {
    setPosts([]);
  };
  // eslint-disable-next-line 
  useEffect(() => {
   
    getPosts().then(setPosts);
   
  });



  // const addPost = (newPost) => {
  //   setPosts([...posts, newPost]);
  // };
  if (!posts.length) return <h1>Loading...</h1>;
  return (
    <>
      <h1>Posts-Page</h1>
      <div className="row">
        <div className="col-6">
          <AddPost />
        </div>
        <div className="col-6">
          <ViewPosts posts={posts} onDelete={handleDelete} />
        </div>
      </div>
    </>
  );
};
