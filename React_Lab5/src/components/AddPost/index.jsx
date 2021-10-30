import { useState ,useEffect } from "react";
import { Input } from "../Input";
import { useCreatePost } from '../../hooks/useCreatePost';

export const AddPost = (props) => {
  const [title, setTitle] = useState("Please enter post title");
  const [body, setBody] = useState("Please enter post body");
  const [isPosted,setisposted]=useState(true)
  const createPost=useCreatePost()
  useEffect(() => {
    // eslint-disable-next-line 
   
    // eslint-disable-next-line 
  });
  const handleSubmit = () => {
    console.log("Calling to backend service");
    createPost({title,body}).then((data)=>{
    console.log(data)
    setisposted(true)
  }).catch((er)=>{
    console.log(er);
    setisposted(false)
  });
  };

  return (
    <div className="card p-3 m-2" style={{ height: "95vh" }}>
      <h1>Add Post</h1>

      <Input value={title} setValue={setTitle} label="Title" />
      <Input value={body} setValue={setBody} label="Body" />

      <button onClick={handleSubmit} className="btn btn-primary">
        Add Post
      </button>
      {!isPosted && (
          <div className="alert alert-danger">Invalid login credentials</div>
        )}
    </div>
  );
};
