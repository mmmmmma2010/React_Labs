import { useState } from "react";
import { Input } from "../Input";

export const AddTask = (props) => {
  const [title, setTitle] = useState("Please enter task title");
  const [body, setBody] = useState("Please enter task body");

  const handleSubmit = () => {
    console.log("Calling to backend service");
    props.addTask({ title, body });
  };

  return (
    <div className="card p-3 m-2" style={{ height: "95vh" }}>
      <h1>Add Task</h1>

      <Input value={title} setValue={setTitle} label="Title" />
      <Input value={body} setValue={setBody} label="Body" />

      <button onClick={handleSubmit} className="btn btn-primary">
        Add Task
      </button>
    </div>
  );
};
