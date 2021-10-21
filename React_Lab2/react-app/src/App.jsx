import { useState, useEffect } from "react";
import axios from "axios";
import { ViewTasks } from "./components/ViewTasks";
import { AddTask } from "./components/AddTask";

export const App = () => {
  const [tasks, setTasks] = useState([]);

   const handleDelete = (i) => {
    tasks.splice(i,1)
     setTasks([...tasks]);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <AddTask addTask={addTask} />
        </div>
        <div className="col-6">
          <ViewTasks
            tasks={tasks}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};
